@sep28
Feature: Error message for the invalid card number

    As a customer, I want to be informed when the card number I enter is invalid.

    # Acceptance Criteria
    # 1. The Immediate error message should be thrown if the card number is invalid. "Your card number is invalid."


    Background:
        Given user is on the payment page

    Scenario: Display error message for invalid card number
        When user enters an invalid card number
        Then an error message "Your card number is invalid." should be displayed immediately
