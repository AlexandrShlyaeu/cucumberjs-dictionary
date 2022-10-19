@genFeature @adminConsole @smoke
Feature:[Phantom]. Delete role:
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/role-deleting.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I create CAI "TestRole_to_Delete" role with following data through API
      | Permissions   |
      | Manage Users  |
      | Zendesk Agent |
      | View Orders   |
      | Close Orders  |
    And I open "User Management" page
    And I should be on "User Management" page
    And I click on "User Management Roles & Permissions button" on Global Settings navigation

  @TC477
  Scenario: [TC477] Confirming role delete action
    When I click on "Delete Role" button for "TestRole_to_Delete" on "Roles Permissions Management" page
    Then I should be on "Confirmation Delete" modal page
    Then I click on "Confirm button" on "Confirmation Delete" page
    Then I should not be on "Confirmation Delete" modal page
    And I should be on "Roles Permissions Management" page
    And I should not see "TestRole_to_Delete" role in the list roles through API

  @TC476
  Scenario: [TC476] Canceling role delete action
    When I click on "Delete Role" button for "TestRole_to_Delete" on "Roles Permissions Management" page
    Then I should be on "Confirmation Delete" modal page
    Then I click on "Cancel button" on "Confirmation Delete" page
    Then I should not be on "Confirmation Delete" modal page
    And I should be on "Roles Permissions Management" page
    And I should see "TestRole_to_Delete" role in the list roles through API
    And I delete CAI "TestRole_to_Delete" role through API
