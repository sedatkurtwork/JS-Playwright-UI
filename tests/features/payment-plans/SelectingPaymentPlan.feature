@sep14

Feature: Selecting a payment plan

    As a customer, I want to be able to Choose a payment plan from the available options
    so that I can choose the one that best suits my needs.

    #Acceptance Criteria:
    # 1. When usr is navigated to payment plan page for the first, by default no payment is selcted and the next button is disabled
    # 2. When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    # 3. Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    # 4. Users should be able to change their plan selections at any time before finalizing their choice.


    Background:
        Given user is on the payment plan page

    Scenario: Default state when navigating to payment plan page
        Then no payment plan should be selected by default
        And the next button should be disabled

    Scenario: Select a payment plan and activate next button
        When user selects a payment plan option
        Then the selected payment plan should be highlighted
        And the next button should become active

    Scenario: Change payment plan selection before proceeding
        Given user has selected a payment plan option
        When user selects a different payment plan option
        Then the newly selected payment plan should be highlighted
        And user should be able to proceed with the new selection
