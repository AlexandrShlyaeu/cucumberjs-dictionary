@genFeature @adminConsole
Feature:[Phantom]. Zendesk licenses editing
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/zendesk-licenses-editing.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    And I create future zendesk license plan through API
    And I open "Zendesk Licenses Plans" page
    And I click on "Edit Plan button" for "default plan" on "Zendesk Licenses Plans" page
    Then I should be on "Edit Plan" modal page

  @TC875
  Scenario: [TC875] Checking the locked input fields
    When I should see that "Total Seats Per Year field" is disabled on "Edit Plan" page
    And I should see that "CAI Seats Per Year field" is disabled on "Edit Plan" page
    And I should see that "Retailer Seats Per Year field" is disabled on "Edit Plan" page

    When I click on "Total Seats Per Year lock button" on "Edit Plan" page
    Then I should be on "Unlock Confirmation" modal page
    When I click on "Cancel button" on "Unlock Confirmation" page
    Then I should be on "Edit Plan" modal page
    And I should see that "Total Seats Per Year field" is disabled on "Edit Plan" page

    When I click on "Total Seats Per Year lock button" on "Edit Plan" page
    When I click on "Unlock button" on "Unlock Confirmation" page
    Then I should be on "Edit Plan" modal page
    And I should see that "Total Seats Per Year field" is enabled on "Edit Plan" page

  @TC881
  Scenario: [TC881] Checking Edits to plan fields logic
    When I should see "Remaining Licenses field" with text "0 Remaining Licenses" on "Edit Plan" page
    And I should see "Total Seats Per Year field" with text "2" on "Edit Plan" page
    And I should see "CAI Seats Per Year field" with text "1" on "Edit Plan" page
    And I should see "Retailer Seats Per Year field" with text "1" on Edit Plan page

    And I enter "10" in "Total Edits to plan field" on "Edit Plan" page
    Then I should see "Remaining Licenses field" with text "10 Remaining Licenses" on "Edit Plan" page
    And I should see "Total Seats Per Year field" with text "12" on "Edit Plan" page

    When I enter "5" in "CAI Edits to plan field" on "Edit Plan" page
    Then I should see "Remaining Licenses field" with text "5 Remaining Licenses" on "Edit Plan" page
    And I should see "CAI Seats Per Year field" with text "6" on "Edit Plan" page

    When I enter "5" in "Retailer Edits to plan field" on "Edit Plan" page
    Then I should see "Remaining Licenses field" with text "0 Remaining Licenses" on "Edit Plan" page
    And I should see "CAI Seats Per Year field" with text "6" on "Edit Plan" page

    When I click on "Cancel button" on "Add Plan" page
    And I click on "Discard Changes button" on "Cancel Changes" page
    And I click on "Edit Plan button" for "default plan" on "Zendesk Licenses Plans" page
    And I enter "1" in "Retailer Edits to plan field" on "Edit Plan" page
    Then I should see "Remaining Licenses field" with text "-1 Remaining Licenses" on "Edit Plan" page
    And I should see "Remaining Licenses error" with text "You have no available licenses. Please redistribute existing licenses." on "Add Plan" page

  @TC883
  Scenario: [TC883] Check saving changes logic
    When I should see that "Save Changes button" is disabled on "Edit Plan" page
    And I enter "1" in "Total Edits to plan field" on "Edit Plan" page
    Then I should see that "Save Changes button" is enabled on "Edit Plan" page
    When I click on "Save Changes button" on "Edit Plan" page
    Then I should see "Notification" with text "License plan has been updated." on "Retailer Snackbar Message" modal page
    When I click on "Notification" on "Retailer Snackbar Message" page

    And I click on "Edit Plan button" for "default plan" on "Zendesk Licenses Plans" page
    And I enter "1" in "Total Edits to plan field" on "Edit Plan" page
    When I mock "update_zendesk_license_plan" response to return "500" on "Zendesk Licenses" page
    And I click on "Save Changes button" on "Edit Plan" page
    Then I should see "Notification" with text "Something went wrong updating your plan, please try again." on "Retailer Snackbar Message" modal page
