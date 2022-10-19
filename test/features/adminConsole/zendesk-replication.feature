@genFeature
Feature:[Phantom]. Zendesk replication
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/zendesk-replication.feature
  @TC323647
  Scenario: [TC323647] Check required fields to pass replication
    Given I open "Retailer Portal Login" page
    When I create tenant through API
    And I create retailer user through API
      | User Roles        | Tenants |
      | Service Role (QA) | created |
      |                   | default |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

    When I click on "Retailer Settings button" on "Retailer Portal Landing" page
    And I click on "Retailer Zendesk Config button" on Retailer Settings navigation
    Then I should be on "Retailer Site Settings" page
    And I should see "Missed required replication fields message" on "Retailer Site Settings" page
    And I should not see "Initiate Replication button" on "Retailer Site Settings" page

    When I fill following settings on Retailer Site Settings page
      | Zendesk Hostname | VALID_HOST_NAME |
      | Zendesk API Key  | VALID_API_KEY   |
    Then I should not see "Missed required replication fields message" on "Retailer Site Settings" page
    And I should see "Initiate Replication button" on "Retailer Site Settings" page

  @TC328877
  Scenario: [TC328877] Check success zendesk replication triggering
    Given I open "Retailer Portal Login" page
    When I create ready for replication tenant through API
    And I create retailer user through API
      | User Roles        | Tenants |
      | Service Role (QA) | created |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

    When I open "Retailer Site Settings" page
    Then I should be on "Retailer Site Settings" page

    When I click on "Initiate Replication button" on "Retailer Site Settings" page
    Then I should be on "Zendesk Replication" page
    When I pass "Preliminary Checklist" step on "Zendesk Replication" page
    When I pass "Replication" step on "Zendesk Replication" page
    When I pass "Sharing Articles" step on "Zendesk Replication" page
    When I pass "Final Checklist" step on "Zendesk Replication" page
    When I pass "Complete" step on "Zendesk Replication" page

    Then I should be on "Retailer Site Settings" page
    And I should see replication is completed on "Retailer Site Settings" page

  @TC329981
  Scenario: [TC329981] Check saving wizard state
    Given I open "Retailer Portal Login" page
    When I create ready for replication tenant through API
    And I create retailer user through API
      | User Roles        | Tenants |
      | Service Role (QA) | created |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

    When I open "Retailer Site Settings" page
    Then I should be on "Retailer Site Settings" page

    When I click on "Initiate Replication button" on "Retailer Site Settings" page
    Then I should be on "Zendesk Replication" page

    When I pass "Preliminary Checklist" step on "Zendesk Replication" page

    When I open "Retailer Site Settings" page
    Then I should be on "Retailer Site Settings" page
    And I should see "Resume Replication process button" on "Retailer Site Settings" page
    And I should not see "Initiate Replication button" on "Retailer Site Settings" page

    When I click on "Resume Replication process button" on "Retailer Site Settings" page
    Then I should be on "Zendesk Replication" page

    When I pass "Replication" step on "Zendesk Replication" page
    Then I should see success replication notification
