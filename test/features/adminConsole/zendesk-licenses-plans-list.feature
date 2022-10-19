@genFeature @adminConsole
Feature:[Phantom]. Zendesk licenses plans list
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/zendesk-licenses-plans-list.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed

  @TC955
  Scenario: [TC955] Check detailed page for the current plan
    When I create current zendesk license plan through API
    And I open "Zendesk Licenses Plans" page
    Then I should see "Edit Plan button" is enabled for default plan on "Zendesk Licenses Plans" page
    And I should see "Delete Plan button" is disabled for default plan on "Zendesk Licenses Plans" page
    When I click on "Effective Dates" for "default plan" on "Zendesk Licenses Plans" page
    Then I should be on "Plan Detailed" modal page
    And I should see "Title" with text "View Current Plan" on "Plan Detailed" page
    And I should see "Description" with text "This is the current license plan." on "Plan Detailed" page
    And I should see "Edit Plan button" on "Plan Detailed" page
    And I should see "Close button" on "Plan Detailed" page
    And I should see "License Usage table" on "Plan Detailed" page

  @TC956
  Scenario: [TC956] Check detailed page for the future plan
    When I create future zendesk license plan through API
    And I open "Zendesk Licenses Plans" page
    Then I should see "Edit Plan button" is enabled for default plan on "Zendesk Licenses Plans" page
    And I should see "Delete Plan button" is enabled for default plan on "Zendesk Licenses Plans" page
    When I click on "Effective Dates" for "default plan" on "Zendesk Licenses Plans" page
    Then I should be on "Plan Detailed" modal page
    And I should see "Title" with text "View Future Plan" on "Plan Detailed" page
    And I should see "Description" with text "This is a future license plan." on "Plan Detailed" page
    And I should see "Edit Plan button" on "Plan Detailed" page
    And I should see "Close button" on "Plan Detailed" page
    And I should see "License Usage table" on "Plan Detailed" page

  @TC957
  Scenario: [TC957] Check detailed page for the past plan
    When I create past zendesk license plan through API
    And I open "Zendesk Licenses Plans" page
    Then I should see "Edit Plan button" is disabled for default plan on "Zendesk Licenses Plans" page
    And I should see "Delete Plan button" is enabled for default plan on "Zendesk Licenses Plans" page
    When I click on "Effective Dates" for "default plan" on "Zendesk Licenses Plans" page
    Then I should be on "Plan Detailed" modal page
    And I should see "Title" with text "View Expired Plan" on "Plan Detailed" page
    And I should see "Description" with text "This plan is expired and is now view only." on "Plan Detailed" page
    And I should not see "Edit Plan button" on "Plan Detailed" page
    And I should see "Close button" on "Plan Detailed" page
    And I should see "License Usage table" on "Plan Detailed" page
