@sep17
Feature: View payment plan options in Step 2


    As a customer, I should be able to see payment plan options in Step 2.

    # Acceptance Criteria:
    # 1. Upfront payment:
    # 1.1 There should be only one upfront price
    # 1.2 Text should be Upfront  (first row) and $ <upfont_price> pay once (second row)"
    # "2. Installment plans:
    # 2.1 There must be total <num> Payment Plans
    # 2.2 There can be <number_of_installments> installments
    # 2.3  If there are installments, then the text should be <number_of_installments> Installments (first row) and $ <monthly_price> per month (second row)
    # 2.4 Installment plans should be unique"


    Background:
        Given user is on the payment plan page (Step 2)

    Scenario: Verify upfront payment plan option display
        Then only one upfront payment option should be displayed
        And the text for the upfront payment should be "Upfront" in the first row
        And the text for the upfront payment should be "$ <upfront_price> pay once" in the second row

    Scenario: Verify installment plan options display and uniqueness
        Then there should be a total of <num> installment payment plans
        And each installment plan should display "<number_of_installments> Installments" in the first row
        And each installment plan should display "$ <monthly_price> per month" in the second row
        And all installment plan options should be unique
