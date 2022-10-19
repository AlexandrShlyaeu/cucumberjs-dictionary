@genFeature @adminConsole @smoke
Feature:[Phantom]. Edit role:
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/role-editing.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I create CAI "TestRole_to_Edit" role with following data through API
      | Permissions   |
      | Manage Users  |
      | Zendesk Agent |
      | View Orders   |
      | Close Orders  |
    When I click on "Global Settings icon button" in "sidebar" modal on "Retailer Portal Landing" page
    And I click on "User Management Roles & Permissions button" on Global Settings navigation

  @TC171
  Scenario: [TC171] Edit a role
    When I click on "Edit Role" button for "TestRole_to_Edit" on "Roles Permissions Management" page
    When I click on "Edit Name button" on "Edit Role" page
    And I enter "TestRole_to_Edit_Edited" in "Role Name field" on "Edit Role" page
    And I fill permissions on "Edit Role" page from the following data
      | Permissions                 |
      | Export Billing Transactions |
      | Zendesk Admin               |
      | View Users                  |
    And I click on "Save Changes button" on "Edit Role" page
    And I should see "TestRole_to_Edit_Edited" role with following permissions on "Roles Permissions Management" page
      | Permissions                 |
      | Export Billing Transactions |
      | View Billing Transactions   |
      | View Users                  |
      | Zendesk Admin               |
    And I delete CAI "TestRole_to_Edit_Edited" role through API
