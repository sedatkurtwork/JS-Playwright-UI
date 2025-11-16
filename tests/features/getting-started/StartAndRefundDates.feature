@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    # Acceptance Criteria
    # 1. Program Start date and refund dates must be displayed in step one in Test Automation with Selenium Program.
    # 2. The displayed program start date and refund dates must be correct

    Background:
        Given user is on the enrollment page for the Test Automation with Selenium Program

    Scenario: Verify program start date and refund date display and accuracy
        Then the program start date should be displayed on step one
        And the refund dates should be displayed on step one
        And the displayed program start date should be correct
        And the displayed refund dates should be correct
