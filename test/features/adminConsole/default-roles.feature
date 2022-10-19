@genFeature @adminConsole
Feature:[Phantom]. Default roles

  @TC2533
  Scenario: [TC2533] Create default role
    Given I open "Retailer Portal Login" page
    When I create CAI "TEST_PP_ManageDefaulRoles_To_Create" super role with following data through API
      | Permissions          |
      | Manage Default Roles |
    When I create "CAI" user with following roles through API
      | User Roles                          |
      | TEST_PP_ManageDefaulRoles_To_Create |
      | Service Role (QA)                   |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I navigate to "Default Roles" page on Retailer Portal
    And I add default role with following permissions on "Default Roles" page
      | Permissions |
      | View Orders |
    Then I should see "default" role with following permissions on "Default Roles" page
      | Permissions |
      | View Orders |
    When I switch to "default" retailer on Retailer Portal Landing page
    And I click on "Retailer Settings button" on "Retailer Portal Landing" page
    And I click on "User Management Roles & Permissions button" on Retailer Settings navigation
    Then I should see "default" role with following permissions on "Roles Permissions Management" page
      | Permissions |
      | View Orders |

  @TC2534
  Scenario: [TC2534] Update default role
    Given I open "Retailer Portal Login" page
    When I create CAI "TEST_PP_ManageDefaulRoles_To_Update" super role with following data through API
      | Permissions          |
      | Manage Default Roles |
    When I create "CAI" user with following roles through API
      | User Roles                          |
      | TEST_PP_ManageDefaulRoles_To_Update |
      | Service Role (QA)                   |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I add default role with following permissions through API
      | Permissions |
      | View Orders |
    When I navigate to "Default Roles" page on Retailer Portal
    And I update default role with following permissions on "Default Roles" page
      | Permissions  |
      | Manage Users |
      | Edit Roles   |
    Then I should see "default" role with following permissions on "Default Roles" page
      | Permissions  |
      | View Users   |
      | View Roles   |
      | Manage Users |
      | Edit Roles   |

  @TC2535
  Scenario: [TC2535] Delete default role
    Given I open "Retailer Portal Login" page
    When I create CAI "TEST_PP_ManageDefaulRoles_To_Delete" super role with following data through API
      | Permissions          |
      | Manage Default Roles |
    When I create "CAI" user with following roles through API
      | User Roles                          |
      | TEST_PP_ManageDefaulRoles_To_Delete |
      | Service Role (QA)                   |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I switch to "coxautoinc.com" retailer on Retailer Portal Landing page
    And I wait that Loading is completed
    When I add default role with following permissions through API
      | Permissions |
      | View Orders |
    And I navigate to "Default Roles" page on Retailer Portal
    And I delete default role on "Default Roles" page
    Then I should not see default role through API

  @TC2622
  Scenario: [TC2622] Clone default role Given I open "Retailer Portal Login" page
    Given I open "Retailer Portal Login" page
    When I create CAI "TEST_PP_ManageDefaultRoles_To_Clone" super role with following data through API
      | Permissions          |
      | Manage Default Roles |
    When I create "CAI" user with following roles through API
      | User Roles                         |
      | TEST_PP_ManageDefaultRoles_To_Clone |
      | Service Role (QA)                  |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page
    When I add default role with following permissions through API
      | Permissions |
      | View Orders |
      | View Users  |
      | View Roles  |
    When I click on "Retailer Settings button" on "Retailer Portal Landing" page
    And I click on "User Management Roles & Permissions button" on Retailer Settings navigation
    And I click on "Clone Role" button for "default role" on "Roles Permissions Management" page
    And I click on "Duplicate Role button" on "Duplicate Role" page
    Then I should see "duplicated" role with following permissions on "Roles Permissions Management" page
      | Permissions |
      | View Orders |
      | View Users  |
      | View Roles  |
