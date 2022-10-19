@genFeature @adminConsole @smoke
Feature:[Phantom]. User deleting
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/user-deleting.feature

  @TC319848
  Scenario: [TC319848] Check successful user deletion
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page

    When I click on "User delete button" for "default user" on "User Management" page
    Then I should be on "Confirmation Delete" modal page
    Then I should see "Title" containing text "Delete testUser " on "Confirmation Delete" page
    And I should see "Confirm button" on "Confirmation Delete" page
    And I should see "Cancel button" on "Confirmation Delete" page
    And I should see "Close button" on "Confirmation Delete" page
    Then I click on "Cancel button" on "Confirmation Delete" page
    Then I should not be on "Confirmation Delete" modal page
    And I should be on "User Management" page
    And I should see user in the list of CAI users through API

    When I click on "User delete button" for "default user" on "User Management" page
    Then I should be on "Confirmation Delete" modal page
    Then I click on "Confirm button" on "Confirmation Delete" page
    And I should not see user in the list of CAI users through API
