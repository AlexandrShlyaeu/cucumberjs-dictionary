@genFeature @adminConsole
Feature:[Phantom]. Token invalidation
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/token-invalidation.feature
  @TC2720
  Scenario: [TC2720] User lost permissions to manage users
    Given I open "Retailer Portal Login" page
    When I add default role with following permissions through API
      | Permissions  |
      | View Users   |
      | View Roles   |
      | Manage Users |
    And I create "default tenant" user with default role through API
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I open "Retailer User Management" page
    Then I should be on "Retailer User Management" page

    When I should see "Add User button" on "Retailer User Management" page
    And I update default role with following permissions through API
      | Permissions |
      | View Users  |
    And I refresh current page
    Then I should not see "Add User button" on "Retailer User Management" page
    When I update default role with following permissions through API
      | Permissions |
      | View Roles  |
    And I refresh current page
    Then I should see "Access error title" with text "You don't have access to this page..." on "User Management" page
