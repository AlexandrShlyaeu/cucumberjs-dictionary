@genFeature @adminConsole
Feature:[Phantom]. MFA login flow
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/mfa.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I switch on the "retailer_mfa" feature
    When I fill credentials for "default" user on Retailer Portal page
    Then I should be on "Retailer MFA Type" page

#  @TC916
#  Scenario: [TC916] Choose Phone number method in first Login with MFA
#    When I click on "SMS Text Message button" on "Retailer MFA Type" page
#    Then I should be on "Retailer MFA Confirm Selection" modal page
#    When I click on "Confirm button" on "Retailer MFA Confirm Selection" page
#    Then I should be on "Retailer Portal Login" page
#    When I fill credentials for "default" user on Retailer Portal page
#    Then I should be on "Retailer Enter code" modal page
#    When I fill sms code for default user on Retailer Portal page
#    And I should see "Welcome dashboard label" on "Retailer Portal Landing" page

  @TC914
  Scenario: [TC914] Login with MFA authentication app method
    When I select "Link Authenticator button" on "Retailer MFA Type" page
    Then I should be on "Retailer Scan Code" modal page
    And I should see "Scan Code description" on "Retailer Scan Code" page
    When I click on "Next button" on "Retailer Scan Code" page
    Then I should be on "Retailer Enter code" modal page
    When I fill totp code for default user on Retailer Portal page
    And I should see "Welcome dashboard label" on "Retailer Portal Landing" page
