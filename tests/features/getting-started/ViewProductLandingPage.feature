@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    # Acceptance Criteria
    # 1. The system displays the text "Cydeo Secure Checkout".
    # 2. The system should display the program name.
    # "3. Users should see a footer on the left side of the page that includes by order:
    # logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy"


    Background:
        Given user is on the product landing page

    Scenario: Verify product landing page displays required elements
        Then the page should display the text "Cydeo Secure Checkout"
        And the page should display the program name
        And the footer on the left side of the page should include the logo
        And the footer on the left side of the page should include Terms and Conditions
        And the footer on the left side of the page should include Privacy Policy
        And the footer on the left side of the page should include Disclaimer
        And the footer on the left side of the page should include Cookie Policy
        And these items should appear in the specified order
