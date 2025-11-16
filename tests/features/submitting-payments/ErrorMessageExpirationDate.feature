@sep27

Feature: Error messages for the invalid expiration number


    As a customer, I want to be informed when my card's expiration date has failed.

    # Accaptence Criteria:

    # 1. The Immediate error message should be thrown if the expiration year is in the past.
    #"Your card’s expiration year is in the past."


    Background:
        Given user is on the payment page

    Scenario: Display error message for expiration year in the past
        When user enters an expiration year that is in the past
        Then an error message "Your card’s expiration year is in the past." should be displayed
