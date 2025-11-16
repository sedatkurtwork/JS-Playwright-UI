@sep29
Feature: Error message for the invalid CVC number

    As a customer, I want to be informed when the CVC number I enter is incorrect or too short.

    # Accaptance Criteria
    # 1. The Immediate error message should be thrown if the CVC number is too short.
    #"Your card's security code is incomplete."

    Background:
        Given user is on the payment page

    Scenario: Display error message for too short CVC number
        When user enters a CVC number that is too short
        Then an error message "Your card's security code is incomplete." should be displayed
