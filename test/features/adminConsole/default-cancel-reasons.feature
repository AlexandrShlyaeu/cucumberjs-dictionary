@genFeature @adminConsole
Feature:[Phantom]. Default cancel reasons
  # TODO currently run: npm run test:ui -- --spec=src/ui/features/adminConsole/default-cancel-reasons.feature

  @TC2984
  Scenario: [TC2984] Check cancel reasons functionality for created tenant
    Given I open "Retailer Portal Login" page
    When I create tenant through API
#    Tenants column contains:
#    * created - tenant created on the previous steps
#    * default - one of 'penske' | 'roicars' | 'drimotors' and passed as TENANT env variable
#    * any tenant NAME
    And I create retailer user through API
      | User Roles        | Tenants |
      | Service Role (QA) | created |
      |                   | default |
    And I log in as default user on Retailer Portal
    Then I should be on Retailer Portal Landing page

    When I open "Cancel Reasons" page
    Then I should not see "Show inactive checkbox" on "Cancel Reasons" page
    Then I should see the following reasons list on "Cancel Reasons" page
      | Cancel Reason       | Status  |
      | Compliance Failed   | Enabled |
      | Consumer Canceled   | Enabled |
      | Delivery Rejected   | Enabled |
      | Lender Declined     | Enabled |
      | Other Reason        | Enabled |
      | Payment Failed      | Enabled |
      | Stips not provided  | Enabled |
      | Trade-in Rejected   | Enabled |
      | Vehicle Unavailable | Enabled |

    When I click on "Edit Reasons button" on "Cancel Reasons" page
    Then I should be on "Edit Cancel Reasons" modal page
    And I should not see "Delete Reason button" for "Other Reason" on Edit Cancel Reasons page
    When I add following cancel reasons on Edit Cancel Reasons modal page
      | Cancel Reason:   |
      | A_Created Reason |
      | N_Created Reason |
      | Z_Created Reason |

    And I delete following cancel reasons on Edit Cancel Reasons modal page
      | Cancel Reason:      |
      | Stips not provided  |
      | Vehicle Unavailable |

    And I disable following cancel reasons on Edit Cancel Reasons modal page
      | Cancel Reason:    |
      | Consumer Canceled |
      | Other Reason      |

    And I click on "Save Changes button" on "Edit Cancel Reasons" page
    Then I should see the following reasons list on "Cancel Reasons" page
      | Cancel Reason     | Status  |
      | A_Created Reason  | Enabled |
      | Compliance Failed | Enabled |
      | Delivery Rejected | Enabled |
      | Lender Declined   | Enabled |
      | N_Created Reason  | Enabled |
      | Payment Failed    | Enabled |
      | Trade-in Rejected | Enabled |
      | Z_Created Reason  | Enabled |

    And I should see "Show inactive checkbox" on "Cancel Reasons" page
    And I click on "Show inactive checkbox" on "Cancel Reasons" page
    Then I should see the following reasons list on "Cancel Reasons" page
      | Cancel Reason     | Status   |
      | A_Created Reason  | Enabled  |
      | Compliance Failed | Enabled  |
      | Consumer Canceled | Disabled |
      | Delivery Rejected | Enabled  |
      | Lender Declined   | Enabled  |
      | N_Created Reason  | Enabled  |
      | Other Reason      | Disabled |
      | Payment Failed    | Enabled  |
      | Trade-in Rejected | Enabled  |
      | Z_Created Reason  | Enabled  |
