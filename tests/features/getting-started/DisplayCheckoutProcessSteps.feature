@sep08
Feature:Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    # Acceptance Criteria
    # 1. The system should display the steps of the checkout process as
    #    "1-Start Application", "2-Payment Plan", and "3-Review".
    # 2. The system should highlight "Start Application" in blue.
    # 3. The system should display "Payment Plan" and "Review" in grey.

    Background:
        Given user is on the enrollment page

    Scenario: Verify checkout process stepper displays all steps and highlights the current step
        Then the stepper should display "1-Start Application"
        And the stepper should display "2-Payment Plan"
        And the stepper should display "3-Review"
        And the stepper should highlight "Start Application" in blue
        And the stepper should display "Payment Plan" in grey
        And the stepper should display "Review" in grey
