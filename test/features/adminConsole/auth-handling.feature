@genFeature @adminConsole
Feature:[Phantom]. Auth handling
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/auth-handling.feature
  Background:
    Given I open "Retailer Portal Login" page
    And I switch off the "retailer_mfa" feature

  @TC176
  Scenario: [TC176] Check user doesn't have Zendesk related permissions
    When I create CAI Delivery Agent user with "default" email through API
    When I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I should not see "Support superbutton" on "Retailer Portal Landing" page
    And I should not see "Support button" on "Retailer Sidebar" page

  @TC319914
  Scenario: [TC319914] Check user has "View Retailer users" permission
    And I create "default tenant" user with following roles through API
      | User Roles     |
      | Retailer Admin |
    When I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I should see "Retailer Settings button" on "Retailer Portal Landing" page
    And I should not see "Global Settings button" on "Retailer Portal Landing" page
    And I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    And I should see data is loaded on "User Management" page
    And I should see "Users table body" on "Retailer User Management" page
    And I should see "Users table" on "Retailer User Management" page
    And I should see "Full User name" for "default user" on "User Management" page
    And I should see "User roles" for "default user" on "User Management" page
    And I should see "User delete button" for "default user" on "User Management" page
    And I should see "User edit button" for "default user" on "User Management" page
    And I should see "Add User button" on "Retailer User Management" page
    And I should see "User Management Roles & Permissions button" on "Global Settings" page

  @TC178
  Scenario: [TC178] Check user has "View Orders" permission
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I should see "Orders button" on "Retailer Portal Landing" page
    And I should see "Orders button" on "Retailer Sidebar" page
    When I click on "Orders button" on "Retailer Portal Landing" page
    Then I should be on "Retailer Portal Orders" page

  @TC179
  Scenario: [TC179] Check user has "View CAI users" permission
    When I create CAI Support Team Member user with "default" email through API
    When I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page
    And I should see "Users table body" on "User Management" page
    And I should see "Users table" on "User Management" page
    And I should see "Full User name" for "default user" on "User Management" page
    And I should see "User roles" for "default user" on "User Management" page
    And I should not see "User delete button" for "default user" on "User Management" page
    And I should not see "User edit button" for "default user" on "User Management" page
    And I should not see "Add User button" on "User Management" page
    And I should not see "User Management Roles & Permissions button" on "Global Settings" page

  @TC319894
  Scenario: [TC319894] Check user has "Manage Retailer users" permission
    When I delete TENANT "TEST_ManageRetailerRole" role through API
    And I create default tenant "TEST_ManageRetailerRole" role with following data through API
      | Permissions  |
      | View Users   |
      | Manage Users |
      | View Roles   |
      | Edit Roles   |
    And I create "default tenant" user with following roles through API
      | User Roles              |
      | TEST_ManageRetailerRole |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    And I should see data is loaded on "User Management" page
    And I should see "Users table body" on "Retailer User Management" page
    And I should see "Users table" on "Retailer User Management" page
    And I should see "Full User name" for "default user" on "User Management" page
    And I should see "User roles" for "default user" on "User Management" page
    And I should see "User delete button" for "default user" on "User Management" page
    And I should see "User edit button" for "default user" on "User Management" page
    And I should see "Add User button" on "Retailer User Management" page
    And I should see "User Management Roles & Permissions button" on "Retailer Settings" page

  @TC181
  Scenario: [TC181] Check user has "Manage CAI users" permission
    When I create CAI Implementation Team user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page
    And I should see "Users table body" on "User Management" page
    And I should see "Users table" on "User Management" page
    And I should see "Full User name" for "default user" on "User Management" page
    And I should see "User roles" for "default user" on "User Management" page
    And I should see "User delete button" for "default user" on "User Management" page
    And I should see "User edit button" for "default user" on "User Management" page
    And I should see "Add User button" on "User Management" page
    And I should not see "User Management Roles & Permissions button" on "Global Settings" page

  @TC558
  Scenario: [TC558] Check user has "View Roles" permission
    When I delete CAI "TEST_ViewCAIRoles" role through API
    When I create CAI "TEST_ViewCAIRoles" role with following data through API
      | Permissions |
      | View Roles  |
    And I create CAI TEST_ViewCAIRoles user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I click on "Global Settings button" on "Retailer Portal Landing" page
    And I should see "User Management Roles & Permissions button" on "Global Settings" page
    When I should not see "Add Role button" on "Roles Permissions Management" page
    And I should not see "User Management Users button" on "Global Settings" page

  @TC559
  Scenario: [TC559] Check user has "Manage Roles" permission
    When I create CAI "TEST_EditCAIRoles" role with following data through API
      | Permissions |
      | Edit Roles  |
      | View Roles  |
    And I create CAI TEST_EditCAIRoles user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I click on "Global Settings button" on "Retailer Portal Landing" page
    When I should see "Add Role button" on "Roles Permissions Management" page
    And I should not see "User Management Users button" on "Global Settings" page

  @TC800
  Scenario: [T800] Check user has "View Zendesk licenses usage" permission
    When I create CAI "TEST_ZD_View_Licenses" role with following data through API
      | Permissions                 |
      | View Zendesk Licenses Usage |
    And I create CAI TEST_ZD_View_Licenses user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I click on "Global Settings button" on "Retailer Portal Landing" page
    And I should see "Zendesk Licenses Usage button" on "Global Settings" page
    And I click on "Zendesk Licenses Usage button" on Global Settings navigation
    Then I should see "License Usage table" on "Zendesk Licenses Usage" page
    And I should not see "Edit Plan button" on "Zendesk Licenses Usage" page
    And I click on "Zendesk Licenses Plans button" on Global Settings navigation
    Then I should not see "Add Plan button" on "Zendesk Licenses Plans" page

  @TC801
  Scenario: [T801] Check user has "Manage Zendesk licenses usage" permission
    When I create CAI "TEST_ZD_Manage_Licenses" role with following data through API
      | Permissions                   |
      | View Zendesk Licenses Usage   |
      | Manage Zendesk Licenses Usage |
    And I create CAI TEST_ZD_Manage_Licenses user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I click on "Global Settings button" on "Retailer Portal Landing" page
    And I should see "Zendesk Licenses Usage button" on "Global Settings" page
    And I click on "Zendesk Licenses Usage button" on Global Settings navigation
    Then I should see "License Usage table" on "Zendesk Licenses Usage" page
    And I should see "Edit Plan button" on "Zendesk Licenses Usage" page
    And I click on "Zendesk Licenses Plans button" on Global Settings navigation
    Then I should see "Add Plan button" on "Zendesk Licenses Plans" page
