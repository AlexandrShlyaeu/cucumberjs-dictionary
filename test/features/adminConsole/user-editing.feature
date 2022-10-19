@genFeature @adminConsole @smoke
Feature:[Phantom]. User editing
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/user-editing.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    Then I should see user in the list of CAI users through API
    When I open "User Management" page
    Then I should be on "User Management" page
    And I should see data is loaded on "User Management" page

  @TC2115
  Scenario: [TC2115] Check User Profile page
    When I click on "User Profile icon" on "User Management" page
    And I click on "User Profile button" on "User Management" page
    Then I should be on "User Profile" page
    When I click on "Edit Personal information button" on "User Profile" page
    And I fill edited user data from the following table
      | firstName | EditedFirstName      |
      | lastName  | EditedLastName       |
    And I click on "Save button" on "User Profile" page
    Then I should see CAI user as edited through API
    Then I should see correct information for default user on "User Profile" page

  @TC122
  Scenario: [TC122] Edit User modal overview
    When I click on "User edit button" for "default user" on "User Management" page
    Then I should be on "Edit User" page
    And I should see "Title" with text "Edit User" on "Edit User" page
    And I should see "First Name field" on "Edit User" page
    And I should see "Last Name field" on "Edit User" page
    And I should see "Email field" on "Edit User" page
    And I should see "Phone field" on "Edit User" page
    And I should see "Edit Roles button" on "Edit User" page
    And I should see "Cancel button" on "Edit User" page
    And I should see "Send Changes button" on "Edit User" page

  @TC123
  Scenario: [TC123] Edit User Saving added changes
    When I click on "User edit button" for "default user" on "User Management" page
    Then I should be on "Edit User" page
    When I fill edited user data from the following table
      | firstName | EditedFirstName      |
      | lastName  | EditedLastName       |
      | email     | EditedMail@gmail.com |
    And I click on "Mode Switcher button" on "Edit User" page
    And I click on "Single retailer mode button" on "Edit User" page
    And I click on "Confirm switch button" on "Edit User" page
    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    And I should see that "Save photo button" is disabled on "Add Photo" page
    When I choose "JPG" avatar on "Add Photo" page
    Then I should see that "Save photo button" is enabled on "Add Photo" page
    When I click on "Cancel button" on "Add Photo" page
    Then I should be on "Edit User" page
    And I should see "Add photo button" on "Add User" page

    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    When I choose "JPG" avatar on "Add Photo" page
    When I click on "Close button" on "Add Photo" page
    Then I should be on "Edit User" page
    And I should see "Add photo button" on "Add User" page

    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    When I choose "JPG" avatar on "Add Photo" page
    And I click on "Save photo button" on "Add Photo" page
    And I should see "Avatar preview" on "Add User" page
    And I should see "Avatar remove button" on "Add User" page
    And I should see "Change photo button" on "Add User" page

    When I click on "Avatar remove button" on "Add User" page
    And I should see "Add photo button" on "Add User" page
    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    When I choose "JPG" avatar on "Add Photo" page
    And I click on "Save photo button" on "Add Photo" page

    And I click on "Change photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    When I choose "JPG" avatar on "Add Photo" page
    And I click on "Save photo button" on "Add Photo" page

    When I click on "Send Changes button" on "Edit User" page
    And I should see CAI user as edited through API

  @TC124
  Scenario: [TC124] Edit User Cancelling added changes
    When I click on "User edit button" for "default user" on "User Management" page
    Then I should be on "Edit User" page
    When I fill edited user data from the following table
      | firstName | EditedFirstName      |
      | lastName  | EditedLastName       |
      | email     | EditedMail@gmail.com |
    And I click on "Mode Switcher button" on "Edit User" page
    And I click on "Single retailer mode button" on "Edit User" page
    And I click on "Confirm switch button" on "Edit User" page
    And I should see "Cancel button" on "Edit User" page
    When I click on "Cancel button" on "Edit User" page
    And I should see "Discard Changes button" on "Cancel Changes" modal page
    And I click on "Discard Changes button" on "Cancel Changes" modal page
    And I should not see CAI user as edited through API
