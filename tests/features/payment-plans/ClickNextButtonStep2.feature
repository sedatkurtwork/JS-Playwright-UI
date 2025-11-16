    @sep16
    #Feature: Click Next button on payment plans page


    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #Acceptance Criteria:
    # 1. Clicking on any plan should activate the next button
    # 2. When the customer clicks on the next button, the Step 3 page should be displayed.
    # 3. In the stepper, steps one and two should be green, and step 3 should be blue.
    # 4. The payment component should be displayed.
    # 5. A price summary should be displayed.
    # 6. The back button should be displayed.

    Background:
        Given user is on the payment plans page (step 2)

    Scenario: Activate next button by selecting a plan
        When user selects a payment plan
        Then the next button should become active

    Scenario: Navigate to step 3 after selecting a plan and clicking next
        Given user has selected a payment plan
        When user clicks the next button
        Then the step 3 page should be displayed
        And the stepper should display steps one and two in green
        And the stepper should display step three in blue
        And the payment component should be displayed
        And a price summary should be displayed
        And the back button should be displayed
