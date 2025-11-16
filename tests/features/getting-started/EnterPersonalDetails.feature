@sep10
Feature: Enter my personal details

    #Acceptance Criteria
    # 1. Default field types and values should be as follows:
    # a. First Name: Text field is present.
    # b. Last Name: Text field is present.
    # c. Email Address: Text field is present and validates for email format.
    # d. Phone: The field allows numbers only.

    Background:
        Given user is on the enrollment page

    Scenario: Verify personal detail fields and validation
        Then the "First Name" field should be displayed as a text field
        And the "Last Name" field should be displayed as a text field
        And the "Email Address" field should be displayed as a text field
        And the "Email Address" field should validate that the entered value is in the correct email format
        And the "Phone" field should allow only numbers to be entered