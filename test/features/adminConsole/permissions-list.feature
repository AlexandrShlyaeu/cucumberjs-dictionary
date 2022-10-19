@genFeature @adminConsole @smoke
Feature:[Phantom]. Get permissions by tenant
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/permissions-list.feature
  Background:
    Given I open "Retailer Portal Login" page

  @TC426
  Scenario: [TC426] COX admin sees CAI permissions
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I click on "User Management Roles & Permissions button" on Global Settings navigation
    And I click on "Add Role button" on "Roles Permissions Management" page
    Then I should see presence of CAI permissions on "Roles Permissions Management" page

  @TC428
  Scenario: [TC428] COX admin sees Retailer permissions
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    And I click on "User Management Roles & Permissions button" on Global Settings navigation
    And I click on "Add Role button" on "Roles Permissions Management" page
    Then I should see presence of PENSKE permissions on "Roles Permissions Management" page

  @TC429
  Scenario: [TC429] Retailer admin can't see CAI permissions
    When I create "default tenant" user with following roles through API
      | User Roles     |
      | Retailer Admin |
    When I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see "Access error title" with text "You don't have access to this page..." on "User Management" page
    And I should see "Access error description" with text "If you need access, please contact your IT manager." on "User Management" page
    And I should see "Go Home button" on "User Management" page
