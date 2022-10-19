@genFeature @adminConsole @smoke
Feature:[Phantom]. See user list
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/user-list.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I switch off the "retailer_mfa" feature

  @TC319850
  Scenario: [TC319850] Loading User list
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I should see user in the list of CAI users through API
    And I open "User Management" page
    And I should see "Users table body" on "User Management" page
    And I load all users on "User Management" page
    Then I should see presence of CAI users on User Management page

  @TC319923
  Scenario: [TC319923] Retailer admin see Retailer user list
    And I create "default tenant" user with following roles through API
      | User Roles     |
      | Retailer Admin |
    When I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    And I should see "Users table body" on "User Management" page
    And I load all users on "User Management" page
    Then I should see presence of default tenant users on User Management page

  @TC488
  Scenario: [TC488] See user details page
    And I delete CAI "TEST_RoleForUserDetails" role through API
    And I create CAI "TEST_RoleForUserDetails" role with following data through API
      | Permissions                 |
      | View Users                  |
      | Manage Users                |
      | View Orders                 |
      | Close Orders                |
      | Cancel Test Orders          |
      | Zendesk Light Agent         |
      | View Billing Transactions   |
      | Export Billing Transactions |
      | View User Change History    |
    And I create CAI TEST_RoleForUserDetails user with "default" email through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page
    When I click on "Full User name" for "default user" on "User Management" page
    Then I should be on "User Details" page
    And I should see "User Name title" on "User Details" page
    And I should see correct information for default user on "User Details" page
    And I should see "Roles title" on "User Details" page
    And I should see "Roles container" on "User Details" page
    And I should see "Permissions title" on "User Details" page
    And I should see "Permissions container" on "User Details" page
    And I should see presence of following roles on "User Details" page
      | User Roles              |
      | TEST_RoleForUserDetails |
    And I should see presence of following permissions on "User Details" page
      | group           | description                 |
      | User Management | View Users                  |
      | User Management | Manage Users                |
      | User Management | View User Change History    |
      | Orders          | View Orders                 |
      | Orders          | Close Orders                |
      | Orders          | Cancel Test Orders          |
      | Zendesk Access  | Zendesk Light Agent         |
      | Billing         | View Billing Transactions   |
      | Billing         | Export Billing Transactions |
    When I click on "Change History button" on "User Details" page
    Then I should see user creation changelog history on "User Details" page

  @TC496
  Scenario: [TC496] Quick search
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page
    When I click on "Reset All button" on "User Management" page
    When I enter "testUser" in "Quick Search input" on "User Management" page
    And I click on "Quick Search list user" with index "1" on "User Management" page
    Then I should be on "User Details" page

  @TC499
  Scenario: [TC499] Quick search - no results
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    When I enter "!!!!!!" in "Quick Search input" on "User Management" page
    Then I should see "No users found message" on "User Management" page

  @TC403145
  Scenario: [TC403145] Quick search - unclickable on nontenant users
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    And I wait that Loading is completed
    And I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    And I should see data is loaded on "User Management" page
    And I click on "Show users with access button" on "User Management" page
    When I search for created user in "Quick Search input" on "User Management" page
    And I should see that "Search result suggestion" is unclickable on "User Management" page
