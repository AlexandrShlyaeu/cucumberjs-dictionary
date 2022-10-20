`Given(
  /^I create an order with "DRAFT" status ?(and with "([^"]+)" creation time)? through API$/,
  async function (textValue: string) {}
);

Given(/^I create an order with "DRAFT" status and with "DRAFT" delivery through API$/, async function () {});

Given(
  /^I create an (delivery|pickup) order with "DRAFT" status( and with Trade-In)? for recently created user through API$/,
  async function (deliveryOption: string, withTradeIn: string) {}
);

Then(/^I create cash order through API$/, async function () {});

Then(/^I begin checkout in order summary through API$/, async function () {});

Then(/^I update user profile data in process of order creation through API$/, async function () {});

Then(/^I submit existing order through API$/, async function () {});

Given(
  /^I create an order with "DRAFT" status( and with Trade-In)? for recently created user through API$/,
  async function (withTradeIn: string) {}
);

Given(
  /^I create an order with "DRAFT" status and with( empty)? AfterMarket Products through API( with VIN "([^"]+)")?$/,
  async function (empty: string, vin: string) {}
);

Given(
  /^I create an order with "SUBMITTED_TO_UNIFI" status ?(and current creation time)? through API?( with VIN "([^"]+)")?$/,
  async function (current: string, vin: string) {}
);

Given(
  /^I create an order ?(with "DRAFT" status )?through API with created DRI user data and with the following cars$/,
  async function (isDraft: string, table) {}
);

When(/^I update Order Status to "SUBMITTED_TO_UNIFY" of created order through API$/, async function () {});

Given(
  /^I create an order with id verification results through API?( with VIN "([^"]+)")?$/,
  async function (vin: string, table) {}
);

Given(
  /^I create an order with "CONTRACT_PENDING" status ?(and with "([^"]+)" Contract Status)? through API?( with VIN "([^"]+)")?$/,
  async function (textValue: string, vin: string, table) {}
);

Given(
  /^I create an order with "SOLD_BY_DRI" status and with "([^"]+)" Contract Status via API$/,
  async function (contractStatus: string) {}
);

When(
  /^I update Contract Status on "([^"]+)" of created order through API$/,
  async function (contractStatus: string) {}
);

When(/^I cancel order through API$/, async function () {});

When(/^I cancel ?(?:"(\d+)")? created order through API$/, async function (index: string) {});

When(/^I delete created order through API$/, async function () {});

When(/^I cancel and delete created order through API$/, async function () {});

When(/^I delete created order for ([^"]+) through API$/, async function (vehicle) {});

Then(/^I should see order is deleted$/, async function () {});

Then(
  /^I should see email with following aws sns notification for created order through API$/,
  async function (table) {}
);

Given(
  /^I create an order with "DRAFT" status for (penske|drimotors|roicars) retailer through API$/,
  async function (tenant: string) {}
);

Given(
  /^I create an order with "([^"]+)" status (with AM products )?(and with trade-in )?through API with created user( for Cash deals)? ?(with (delivery|pickup))?$/,
  async function (orderStatus: string, afterMarket: string, tradeIn: string, cash: string, deliveryOption?: string) {}
);

Given(
  /^I create a "(.+)" order with "(.+)" status through API( with vin "(.+)")? with following values$/,
  async function (orderName: string, orderStatus: string, vin: string, table) {}
);

Given(
  /^I create an order with "([^"]+)" deal status through API with created user$/,
  async function (dealStatus: string) {}
);

When(
  /^I wait for deal status to be "(.+)" for "(\d+)" seconds for order created through API$/,
  async function (status, seconds) {}
);

When(
  /^I update( order status to "(.+)" and)? deal status to "(.+)" for order created through API$/,
  async function (orderStatus, dealStatus) {}
);

When(/^I submit credit app for order created through API$/, async function () {});

When(/^I create lender decision for order created through API with following values$/, async function (table) {});

When(
  /^I select "(.+)" lender( with "(.+)" dealer margin)? for submitted credit app$/,
  async function (lenderId, margin) {}
);
`;
