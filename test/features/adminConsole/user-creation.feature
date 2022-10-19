@genFeature @adminConsole @smoke
Feature:[Phantom].  User creation
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/user-creation.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

  @TC46
  Scenario: [TC46] Add user page overview
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I open "User Management" page
    And I should be on "User Management" page
    When I click on "Add User button" on "User Management" page
    Then I should be on "Add User" page
    And I should see "Title" on "Add User" page
    And I should see "First Name field" on "Add User" page
    And I should see "Last Name field" on "Add User" page
    And I should see "Email field" on "Add User" page
    And I should see "Phone field" on "Add User" page
    And I should see "Add Role button"  on "Add User" page
    And I should see "Cancel button" on "Add User" page
    And I should see "Send Invite button" on "Add User" page
    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    And I should see "Title" on "Add Photo" page
    And I should see "Description" with text "Upload an image to be used as a profile picture." on "Add Photo" page
    And I should see "Preview" on "Add Photo" page
    And I should see "Close button" on "Add Photo" page
    And I should see "Cancel button" on "Add Photo" page
    And I should see "Save photo button" on "Add Photo" page
    And I should see "Choose button" on "Add Photo" page
    When I click on "Close button" on "Add Photo" page
    Then I should see "Mode Switcher button" on "Add User" page
    When I click on "Mode Switcher button" on "Add User" page
    And I click on "Multiple retailers mode button" on "Add User" page
    Then I should see "Permissions description" with text "Permission Set contains User Roles and corresponding Retailers information." on "Add User" page
    And I should see "Add Permission Set button" on "Add User" page

#  @TC49
#  Scenario: [TC49] Entering an already registered email
#    When I create default user with "testemaildrincubation+alreadyRegistered@gmail.com" email through API
#    When I open "User Management" page
#    And I should be on "User Management" page
#    And I click on "Add User button" on "User Management" page
#    Then I should be on "Add User" page
#    When I enter "testFirstName" in "First Name field" on "Add User" page
#    And I enter "1testLastName" in "Last Name field" on "Add User" page
#    And I enter "testemaildrincubation+alreadyRegistered@gmail.com" in "Email field" on "Add User" page
#    And I enter "1111111111" in "Phone field" on "Add User" page
#    When I click on "Add Role button" on "Add User" page
#    When I select "Service Role (Dev)" role from "Roles container" on "Add User" page
#    And I click on "Send Invite button" on "Add User" page
#    Then I should see "Email error message" on "Add User" page
#    Then I should see "Email error message" with text "Email is taken" on "Add User" page
#    And I should be on "Add User" page

  @TC319841
  Scenario: [TC319841] Sending email (happy path)
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I open "User Management" page
    And I should be on "User Management" page
    When I click on "Add User button" on "User Management" page
    And I fill user data from the following table
      | firstName | testFirstName |
      | lastName  | testLastName  |
      | phone     | 1111111111    |

    And I click on "Add Role button" on "Add User" page
    And I select "Service Role (QA)" role from "Roles container" on "Add User" page
    And I click on "Roles Trash button" on "Add User" page
    Then I should see "Roles error label" on "Add User" page
    And I click on "Add Role button" on "Add User" page
    And I select "Service Role (QA)" role from "Roles container" on "Add User" page

    And I should not see user in the list of CAI users through API
    When I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    And I should see that "Save photo button" is disabled on "Add Photo" page

    When I choose "GIF" avatar on "Add Photo" page
    Then I should see that "Save photo button" is disabled on "Add Photo" page
    And I should see "File format error title" on "Add Photo" page
    And I should see "File format error description" with text "Please use the recommended file format" on "Add Photo" page

    When I choose "BMP" avatar on "Add Photo" page
    Then I should see that "Save photo button" is disabled on "Add Photo" page
    And I should see "File format error title" on "Add Photo" page
    And I should see "File format error description" with text "Please use the recommended file format" on "Add Photo" page

    When I choose "JPG" avatar on "Add Photo" page
    Then I should see that "Save photo button" is enabled on "Add Photo" page
    And I click on "Save photo button" on "Add Photo" page
    And I should see "Avatar preview" on "Add User" page
    And I should see "Avatar remove button" on "Add User" page
    And I should see "Change photo button" on "Add User" page
    And I click on "Send Invite button" on "Add User" page
    And I should see user in the list of CAI users through API
    And I should see user received email with initial password through API

  @TC434
  Scenario: [TC434] Create a user related to tenant
    When I open "Retailer User Management" page
    And I should be on "Retailer User Management" page
    When I click on "Add User button" on "User Management" page
    And I click on "Add Role button" on "Edit User" page
    And I select "Retailer Admin" role from "Roles container" on "Add User" page
    And I fill user data from the following table
      | firstName | testFirstName |
      | lastName  | testLastName  |
      | phone     | 1111111111    |
    And I should not see user in the list of TENANT users through API
    And I click on "Send Invite button" on "Add User" page
    And I should see data is loaded on "User Management" page
    Then I should see user in the list of TENANT users through API
    And I should see user received email with initial password through API

  @TC734
  Scenario: [TC734] Showing avatar error when creating a user
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I open "User Management" page
    Then I should be on "User Management" page
    When I click on "Add User button" on "User Management" page
    And I fill user data from the following table
      | firstName | testFirstName |
      | lastName  | testLastName  |
      | phone     | 1111111111    |
    And I click on "Add Role button" on "Add User" page
    And I select "Service Role (QA)" role from "Roles container" on "Add User" page
    And I click on "Add photo button" on "Add User" page
    Then I should be on "Add Photo" modal page
    And I should see that "Save photo button" is disabled on "Add Photo" page
    When I choose "JPG" avatar on "Add Photo" page
    Then I should see that "Save photo button" is enabled on "Add Photo" page
    When I click on "Save photo button" on "Add Photo" page
    And I mock "create" user response to return "empty" image field on "User Management" page
    And I click on "Send Invite button" on "Add User" page
    Then I should see "Notification" with text "Your image hasn't been uploaded. Please try again." on "User Management" page
    And I should be on "Add User" page

  @TC1769
  Scenario: [TC1769] Create a user with Zendesk permissions
    When I delete CAI "TestRole_ZD_LA_permission" role through API
    When I create CAI "TestRole_ZD_LA_permission" role with following data through API
      | Permissions         |
      | Zendesk Light Agent |
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I open "User Management" page
    Then I should be on "User Management" page
    When I click on "Add User button" on "User Management" page
    And I click on "Add Role button" on "Edit User" page
    And I select "TestRole_ZD_LA_permission" role from "Roles container" on "Add User" page
    And I fill user data from the following table
      | firstName | testFirstName |
      | lastName  | testLastName  |
      | phone     | 1111111111    |
    And I click on "Send Invite button" on "Add User" page

    And I wait that Loading is completed
    And I open "User Management" page
    And I should be on "User Management" page
    And I should see data is loaded on "User Management" page
    When I click on "Full User name" for "admin" on "User Management" page
    Then I should be on "User Details" page
    When I click on "Activity History button" on "User Details" page
    Then I should see user creation activity history on "User Details" page
