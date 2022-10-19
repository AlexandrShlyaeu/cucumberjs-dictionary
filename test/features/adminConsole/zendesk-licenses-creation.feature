@genFeature @adminConsole
Feature:[Phantom]. Zendesk licenses creation
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/zendesk-licenses-creation.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed

  @TC851
  Scenario: [TC851] Check adding seats
    When I open "Zendesk Licenses Plans" page
    And I click on "Add Plan button" on "Zendesk Licenses Plans" page
    Then I should be on "Add Plan" modal page
    When I enter "100" in "Total Seats Per Year field" on "Add Plan" page
    Then I should see "Remaining Licenses field" with text "100 Remaining Licenses" on "Add Plan" page

    When I enter "40" in "CAI Seats Per Year field" on "Add Plan" page
    Then I should see "Remaining Licenses field" with text "60 Remaining Licenses" on "Add Plan" page

    When I enter "60" in "Retailer Seats Per Year field" on "Add Plan" page
    Then I should see "Remaining Licenses field" with text "0 Remaining Licenses" on "Add Plan" page

    When I enter "11/11/1111" in "Start date field" on "Add Plan" page
    And I enter "11/11/1111" in "End date field" on "Add Plan" page
    Then I should see that "Add Plan button" is enabled on "Add Plan" page

    When I enter "41" in "CAI Seats Per Year field" on "Add Plan" page
    Then I should see that "Add Plan button" is disabled on "Add Plan" page
    And I should see "Remaining Licenses error" with text "You have no available licenses. Please redistribute existing licenses." on "Add Plan" page

    When I enter "40" in "CAI Seats Per Year field" on "Add Plan" page
    Then I should see that "Add Plan button" is enabled on "Add Plan" page

    When I enter "61" in "Retailer Seats Per Year field" on "Add Plan" page
    Then I should see that "Add Plan button" is disabled on "Add Plan" page
    And I should see "Remaining Licenses error" with text "You have no available licenses. Please redistribute existing licenses." on "Add Plan" page

    When I enter "60" in "Retailer Seats Per Year field" on "Add Plan" page
    Then I should see that "Add Plan button" is enabled on "Add Plan" page

    When I enter "99" in "Total Seats Per Year field" on "Add Plan" page
    Then I should see that "Add Plan button" is disabled on "Add Plan" page
    And I should see "Remaining Licenses error" with text "You have no available licenses. Please redistribute existing licenses." on "Add Plan" page

  @TC852
  Scenario: [TC852] Creating a plan (success)
    When I open "Zendesk Licenses Plans" page
    And I click on "Add Plan button" on "Zendesk Licenses Plans" page
    Then I should be on "Add Plan" modal page
    When I fill plan data with "unique dates" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    And I click on "Add Plan button" on "Add Plan" page
    Then I should see "Notification" with text "License plan has been created." on "Retailer Snackbar Message" modal page

  @TC853
  Scenario: [TC853] Creating a plan (failure)
    When I open "Zendesk Licenses Plans" page
    And I click on "Add Plan button" on "Zendesk Licenses Plans" page
    Then I should be on "Add Plan" modal page
    When I mock "create_zendesk_license_plan" response to return "500" on "Zendesk Licenses" page
    And I fill plan data with "unique dates" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    And I click on "Add Plan button" on "Add Plan" page
    Then I should see "Notification" with text "Something went wrong, please try again." on "Retailer Snackbar Message" modal page

  @TC854
  Scenario: [TC854] Creating a plan with the affected dates
    When I create future zendesk license plan through API
    And I open "Zendesk Licenses Plans" page
    And I click on "Add Plan button" on "Zendesk Licenses Plans" page
    Then I should be on "Add Plan" modal page
    And I fill plan data with "start day is taken" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    When I click on "Add Plan button" on "Add Plan" page
    Then I should see "Start date error" with text "Date is taken" on "Add Plan" page
    When I fill plan data with "end day is taken" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    And I click on "Add Plan button" on "Add Plan" page
    Then I should see "End date error" with text "Date is taken" on "Add Plan" page
    When I fill plan data with "internal range" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    And I click on "Add Plan button" on "Add Plan" page
    Then I should see "Start date error" with text "Date is taken" on "Add Plan" page
    And I should see "End date error" with text "Date is taken" on "Add Plan" page
    When I fill plan data with "overlap range" from the following table
      | total    | 300 |
      | CAI      | 100 |
      | retailer | 200 |
    And I click on "Add Plan button" on "Add Plan" page
    Then I should see "Start date error" with text "Range is taken" on "Add Plan" page
    And I should see "End date error" with text "Range is taken" on "Add Plan" page
