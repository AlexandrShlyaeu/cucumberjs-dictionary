@genFeature @adminConsole @smoke
Feature:[Phantom]. Add a role
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/role-creation.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

  @TC141
  Scenario: [TC141] Saving role and permissions in Add role modal
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I delete CAI "TestRole_to_Create" role through API
    When I click on "Global Settings icon button" in "sidebar" modal on "Retailer Portal Landing" page
    And I click on "User Management Roles & Permissions button" on Global Settings navigation
    And I click on "Add Role button" on "Roles Permissions Management" page
    Then I should be on "Add Role" modal page
    When I click on "Edit Name button" on "Add Role" page
    And I enter "TestRole_to_Create" in "Role Name field" on "Add Role" page
    And I fill permissions on "Add Role" page from the following data
      | Permissions  |
      | Manage Users |
      | Close Orders |
    And I click on "Save Changes button" on "Add Role" page
    And I should see "TestRole_to_Create" role with following permissions on "Roles Permissions Management" page
      | Permissions  |
      | Close Orders |
      | Manage Users |
      | View Orders  |
      | View Users   |
    And I delete CAI "TestRole_to_Create" role through API

  @TC424
  Scenario: [TC424] Create a role related to tenant
    When I delete TENANT "Test_Retailer_RoleName" role through API
    When I click on "Retailer Settings button" on "Retailer Portal Landing" page
    And I click on "User Management Roles & Permissions button" on Retailer Settings navigation
    And I click on "Add Role button" on "Roles Permissions Management" page
    Then I should be on "Add Role" modal page
    When I click on "Edit Name button" on "Add Role" page
    And I enter "Test_Retailer_RoleName" in "Role Name field" on "Add Role" page
    And I fill permissions on "Add Role" page from the following data
      | Permissions   |
      | Zendesk Agent |
      | View Orders   |
      | Close Orders  |
    And I click on "Save Changes button" on "Add Role" page
    And I should see "Test_Retailer_RoleName" role with following permissions on "Roles Permissions Management" page
      | Permissions   |
      | Close Orders  |
      | View Orders   |
      | Zendesk Agent |
    And I delete TENANT "Test_Retailer_RoleName" role through API
