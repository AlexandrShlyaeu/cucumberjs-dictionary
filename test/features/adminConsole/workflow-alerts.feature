@genFeature @adminConsole @smoke
Feature: [Phantom]. Workflow alerts overview
#   TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/workflow-alerts.feature
  Background:
    Given I open "Retailer Portal Login" page
    When I switch off the "retailer_mfa" feature
    When I create "CAI" user with following roles through API
      | User Roles        |
      | Service Role (QA) |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    And I open "Workflow Alerts" page
    And I click on "Show disabled alerts checkbox" on "Workflow Alerts" page
    And I delete old test alerts

  @TC404087
  Scenario: [TC404087] Check workflow alerts UI elements on the page
    Then I can see all workflow elements on the Workflow Alerts page
      | Elements                       |
      | Header                         |
      | Add Alert button               |
      | Header description             |
      | Show disabled alerts checkbox  |
      | Custom Alerts section          |
      | System Alerts section          |
      | Switch buttons                 |
      | Duplicate buttons              |
      | Edit buttons                   |
      | Delete buttons                 |
    When I click on "Add Alert button" on "Workflow Alerts" page
    Then I can see all workflow elements on the Workflow Alerts page
      | Elements                    |
      | Header Add Alert            |
      | Add Alert button            |
      | Add Alert description       |
      | Cancel button               |
      | Alert name input            |
      | Add Condition button        |
      | Clear button                |
      | Timeframe dropdown          |
      | Notification type dropdown  |
      | Select recipient dropdown   |
      | Notification message input  |
    And I "create" alert with values from the table on the Workflow Alerts page
      | Input fields                      | Values                |
      | Alert name input                  | Test Alert            |
      | Alert conditions dropdown         | Contract Status       |
      | Alert conditions options dropdown | Contract Signed       |
      | Timeframe dropdown                | Immediately           |
      | Select recipient dropdown         | Assigned Agent        |
      | Notification message input        | Hey, contract signed  |
    Then I can see snackbar with "success" message on the Workflow Alerts page

    And I click on "Disable" button of the "Test Alert" on "Workflow Alerts" page
    Then I should not see "Test Alert" on the Workflow Alerts page
    And I click on "Disable" button of the "Test Alert" on "Workflow Alerts" page
    Then I should see "Test Alert" on the Workflow Alerts page

    And I click on "Duplicate" button of the "Test Alert" on "Workflow Alerts" page
    And I delete all conditions from the Workflow Alerts modal
    And I "update" alert with values from the table on the Workflow Alerts page
      | Input fields                      | Values                |
      | Alert name input                  | Test Alert duplicated |
      | Alert conditions dropdown         | Contract Status       |
      | Alert conditions options dropdown | Contract Canceled     |
      | Timeframe dropdown                | More than or equal    |
      | Quantity input                    | 1                     |
      | Time unit dropdown                | Hours                 |
      | Notification message input        | Hey, attention!       |
    Then I can see snackbar with "success" message on the Workflow Alerts page

    And I delete the "Test Alert" workflow alert on the Workflow Alerts page
    Then I should not see "Test Alert" on the Workflow Alerts page
    And I delete the "Test Alert duplicated" workflow alert on the Workflow Alerts page
    Then I should not see "Test Alert duplicated" on the Workflow Alerts page
