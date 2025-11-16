@sep19
Feature: Click on the next button on step 1

        As a customer, I should be able to click on the next button on step 1 when I give valid information.

        # Acceptance Criteria
        #  1. The next button should take customers to step two when given valid information.
        #    a. Test by providing all fields
        #    b. Test by providing only the required fields
        # username: automation-user, password: 123abc
        # Green Hex Code:  rgb(172, 245, 138)
        # Blue Hex Code:  rgb(1, 201, 255)

        Background:
                Given user is already on enrollment page

        Scenario: Verify that clicking next button after providing all the personal information info will navigates the user to payment plan page
                When user enters the first name
                And user enters the last name
                And user enters the email address
                And user enters phone number
                And user selects from How did you hear about us?
                And user clicks Next button on start application step
                Then the start application stepper circle color should be green
                And the payment plan stepper circle color should be blue

        Scenario: Navigate to payment plan with only required fields provided
                When user enters the first name
                And user enters the last name
                And user enters the email address
                And user enters the phone number
                And user leaves the How did you hear about us? field empty
                And user clicks Next button on start application step
                Then the user should be navigated to the payment plan page
                And the start application stepper circle color should be rgb(172, 245, 138)
                And the payment plan stepper circle color should be rgb(1, 201, 255)