@genFeature @adminConsole
Feature:[Phantom]. Zendesk user management

  @TC851
  Scenario: [TC584] Verify send the link to the user avatar to zendesk
    When I open "Zendesk Dashboard" page for Zendesk CAI Instance
    And I create CAI Support Team Member user with "default" email through API
    Then I should see "empty" Zendesk user avatar through API
    When I update default user to set "default" avatar through API
    And I switch off the "retailer_mfa" feature
    And I fill credentials for "default" user on Retailer Portal page
    Then I should be on "Zendesk Dashboard" page for Zendesk CAI Instance
    And I should see "created" Zendesk user avatar through API
