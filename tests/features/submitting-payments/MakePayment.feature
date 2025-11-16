@sep23

Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    # Accaptence Criteria
    # 1. When the user enters valid card information, checks the terms and conditions checkbox, and clicks on the Pay button, then they should be redirected to the confirmation page.
    # 2. In the stepper, steps 1, 2, 3 should be green.
    # 3. The correct program name should be displayed.
    # 4. The correct user email should be displayed.
    # 5. The correct company contact information should be displayed.

    Background:
        Given user is on the payment page
        And user has entered valid card information
        And user has checked the terms and conditions checkbox

    Scenario: Complete payment and redirect to confirmation page
        When user clicks on the Pay button
        Then user should be redirected to the confirmation page
        And the stepper should display steps 1, 2, and 3 in green
        And the confirmation page should display the correct program name
        And the confirmation page should display the correct user email
        And the confirmation page should display the correct company contact information
