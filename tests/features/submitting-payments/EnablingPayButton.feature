@sep26
Feature: Enabling The Pay button

    As a customer, I should be able to click pay button after I agreed to the terms and conditions

    # Acceptance Criteria:
    # 1. The pay button is disabled and terms & conditions checkbox is unchecked by default
    # 2. The pay button will be activated once the user agrees to the terms and conditions


    Background:
        Given user is on the payment page

    Scenario: Verify pay button default state
        Then the pay button should be disabled
        And the terms and conditions checkbox should be unchecked

    Scenario: Enable pay button after agreeing to terms and conditions
        When user checks the terms and conditions checkbox
        Then the pay button should become enabled
