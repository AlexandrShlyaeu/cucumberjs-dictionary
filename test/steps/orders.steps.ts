// Given(
//   /^I create an order with "DRAFT" status ?(and with "([^"]+)" creation time)? through API$/,
//   async function (textValue: string) {
//     let order;
//     if (textValue) {
//       if (textValue === 'recent') {
//         order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ isRecentTime: true })).data;
//       }
//     } else {
//       order = (await OrderManagementApiSteps.createOrderWithDraftStatus({})).data;
//     }
//     orders.addOrder(order);
//   }
// );

// Given(/^I create an order with "DRAFT" status and with "DRAFT" delivery through API$/, async function () {
//   const order = (
//     await OrderManagementApiSteps.createOrderWithDraftStatus({ testOrder: TEST_ORDER_WITH_DRAFT_DELIVERY })
//   ).data;
//   orders.addOrder(order);
// });

// Given(
//   /^I create an (delivery|pickup) order with "DRAFT" status( and with Trade-In)? for recently created user through API$/,
//   { timeout: timeouts.TIMEOUT_180_SECONDS },
//   async function (deliveryOption: string, withTradeIn: string) {
//     const world: World = this;
//     const vin = TEST_ORDER.vehicle.vin;
//     const deliveryTradeInOption: object =
//       deliveryOption === 'delivery' && withTradeIn ? TEST_ORDER_DELIVERY_WITH_TRADE_IN : TEST_ORDER_DELIVERY;
//     const pickupTradeInOption: object =
//       deliveryOption === 'pickup' && withTradeIn ? TEST_ORDER_PICKUP_WITH_TRADE_IN : TEST_ORDER_PICKUP;
//     const deliveryOrPickupOption: object = deliveryOption === 'pickup' ? TEST_ORDER_PICKUP : TEST_ORDER_DELIVERY;
//     const tradeInOption: object =
//       deliveryOption === 'pickup' && withTradeIn ? pickupTradeInOption : deliveryTradeInOption;
//     const orderType: object = withTradeIn ? tradeInOption : deliveryOrPickupOption;
//     const testOrder = Object.assign({}, orderType, getCustomerFields(world));
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ testOrder, vin })).data;
//     orders.addOrder(order);
//   }
// );

// Then(/^I create cash order through API$/, async function () {
//   const world: World = this;
//   const vin = faker.vehicle.vin();
//   world.loadedVehicles = await inventoryTestService.createTestVehicles([{ vin }]);
//   const initialOrder: DraftOrderRequest = {
//     vin,
//     loanPreferences: {},
//     dealType: 'Cash',
//     delivery: {
//       fulfillmentType: 'DELIVERY',
//       address: world.driUserCredentials.streetAddress,
//     },
//   };

//   await driOrderService.createOrder(initialOrder, world.driUserCredentials.sessionToken);
// });

// Then(/^I begin checkout in order summary through API$/, async function () {
//   const world: World = this;
//   const orderNumber = orders.getOrderNumber();
//   const currentOrder = (await OrderManagementApiSteps.getOrderDetails(orderNumber)).data;

//   const updatedOrderProperties = {
//     vin: currentOrder.vehicle.vin,
//     loanPreferences: {
//       downPayment: 2500,
//       term: 48,
//       estimatedCredit: 'excellent',
//     },
//     aftermarketProducts: [],
//     delivery: currentOrder.delivery,
//   };

//   await driOrderService.updateOrder(orderNumber, updatedOrderProperties, world.driUserCredentials.sessionToken);
// });

// Then(/^I update user profile data in process of order creation through API$/, async function () {
//   const world: World = this;
//   const orderNumber = orders.getOrderNumber();
//   const currentOrder = (await OrderManagementApiSteps.getOrderDetails(orderNumber)).data;
//   const userData = {
//     firstName: world.driUserCredentials.firstName,
//     lastName: world.driUserCredentials.lastName,
//     email: world.driUserCredentials.email,
//     streetAddress: world.driUserCredentials.streetAddress,
//     city: world.driUserCredentials.city,
//     zipCode: world.driUserCredentials.zipCode,
//     state: world.driUserCredentials.state,
//     county: world.driUserCredentials.county,
//     dob: world.driUserCredentials.dob,
//     addressLine2: '',
//     phoneNumber: world.driUserCredentials.phoneNumber,
//     skipAutoOrderUpdate: true,
//     income: currentOrder.customer.income,
//   };

//   const response = await UsersApi.updateUserData(this.driUserCredentials.sessionToken, userData);
//   expect(response.status).toEqual(HttpStatusCode.NO_CONTENT);
// });

// Then(/^I submit existing order through API$/, async function () {
//   const orderNumber = orders.getOrderNumber();

//   const response = await driOrder.submitOrder(orderNumber, this.driUserCredentials.sessionToken);
//   expect(response.status).toEqual(HttpStatusCode.OK);
// });

// Given(
//   /^I create an order with "DRAFT" status( and with Trade-In)? for recently created user through API$/,
//   async function (withTradeIn: string) {
//     const world: World = this;
//     const testOrder = Object.assign({}, withTradeIn ? TEST_ORDER_TRADE_IN : TEST_ORDER, getCustomerFields(world));
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ testOrder })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status (without|with failed) vehicle image through API$/,
//   async function (image: string) {
//     let testOrder;
//     if (image === 'without') {
//       testOrder = TEST_ORDER_VEHICLE_WITHOUT_IMAGE;
//     } else if (image === 'with failed') {
//       testOrder = TEST_ORDER;
//       testOrder.vehicle = VEHICLE_WITH_FAILED_IMAGE;
//     } else {
//       testOrder = TEST_ORDER;
//     }
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ testOrder })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status ?(and current creation time)? through API with VIN "([^"]+)"$/,
//   async function (current: string, vin: string) {
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ vin, isRecentTime: !!current })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status and payment info through API with VIN "([^"]+)"$/,
//   async function (vin: string) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.firstName = world.driUserCredentials.firstName;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus({ testOrder, vin })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status and with( empty)? AfterMarket Products through API( with VIN "([^"]+)")?$/,
//   async function (empty: string, vin: string) {
//     const testOrder = _.cloneDeep(TEST_ORDER_AFTERMARKET_PRODUCTS);
//     if (empty) testOrder.aftermarketProducts = [];
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus(vin ? { testOrder, vin } : { testOrder }))
//       .data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status and with( empty)? Trade-In through API( with VIN "([^"]+)")?$/,
//   async function (empty: string, vin: string) {
//     const testOrder = _.cloneDeep(TEST_ORDER_TRADE_IN);
//     if (empty) testOrder.vehicle.tradeIns = [];
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus(vin ? { testOrder, vin } : { testOrder }))
//       .data;
//     orders.addOrder(order);
//   }
// );

// Given(/^I create an order with "PII_DATA" through API$/, async function () {
//   const order = (await OrderManagementApiSteps.createOrderWithPiiData({})).data;
//   orders.addOrder(order);
// });

// Given(
//   /^I create an order with "SOLD_BY_DRI" status and payment info through API?( with payment status "([^"]+)")?$/,
//   async function (paymentStatus: string) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.firstName = world.driUserCredentials.firstName;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = paymentStatus
//       ? (await OrderManagementApiSteps.createOrderWithSoldByDriStatusWithPayment({ testOrder }, paymentStatus)).data
//       : (await OrderManagementApiSteps.createOrderWithSoldByDriStatus({ testOrder })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "SOLD_BY_DRI" status and with "([^"]+)" payment status and with "([^"]+)" payment method$/,
//   async function (paymentStatus: string, paymentMethod: string) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.firstName = world.driUserCredentials.firstName;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = (
//       await OrderManagementApiSteps.createOrderWithSoldByDriStatusWithPayment(
//         { testOrder },
//         paymentStatus,
//         paymentMethod
//       )
//     ).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "SUBMITTED_TO_UNIFI" status ?(and current creation time)? through API?( with VIN "([^"]+)")?$/,
//   async function (current: string, vin: string) {
//     vin = orders.getOrder()?.vehicle?.vin ?? vin;
//     const order = (
//       await OrderManagementApiSteps.createOrderWithSubmittedToUniFiStatus({ vin, isRecentTime: !!current })
//     ).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order ?(with "DRAFT" status )?through API with created DRI user data and with the following cars$/,
//   async function (isDraft: string, table: TableDefinition) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER_TRADE_IN);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.firstName = world.driUserCredentials.firstName;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const selectedVehicle = table.rows();
//     for (let i = 0; i < selectedVehicle.length; i++) {
//       testOrder.vehicle = VEHICLES_FOR_CSS[selectedVehicle[i][0]];
//       const order = isDraft
//         ? (await OrderManagementApiSteps.createOrderWithPiiData({ testOrder })).data
//         : (await OrderManagementApiSteps.createOrderWithSubmittedToUniFiStatus({ testOrder })).data;
//       orders.addOrder(order);
//       orders.addAdditionalData({ vehicle: selectedVehicle[i][0] });
//     }
//   }
// );

// When(/^I update Order Status to "SUBMITTED_TO_UNIFY" of created order through API$/, async function () {
//   const initiatePayload = _.cloneDeep(INITIATE);
//   const ORDER_NUMBER = orders.getOrderNumber();
//   initiatePayload.vin = (await OrderManagementApiSteps.getOrderDetails(ORDER_NUMBER)).data.vehicle.vin;
//   await requestUntil(
//     () => driUserManagement.initiate(ORDER_NUMBER, initiatePayload, DRI_USER_SESSION_TOKEN),
//     response => response.status === 200,
//     8,
//     3000
//   );
//   await delay(timeouts.TIMEOUT_15_SECONDS);
// });

// Given(
//   /^I create an order with id verification results through API?( with VIN "([^"]+)")?$/,
//   async function (vin: string, table: TableDefinition) {
//     const options = tableDefinitionToObject(table);
//     const order = (await OrderManagementApiSteps.createOrderWithIdVerificationResults({ options, vin })).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "CONTRACT_PENDING" status ?(and with "([^"]+)" Contract Status)? through API?( with VIN "([^"]+)")?$/,
//   async function (textValue: string, vin: string, table: TableDefinition) {
//     const options = tableDefinitionToObject(table);
//     const contractStatus = textValue ? textValue : 'Ready to Sign';
//     const contractStatusCode = Object.keys(contractStatusTextMap).find(
//       key => contractStatusTextMap[key] === contractStatus
//     );
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = (
//       await OrderManagementApiSteps.createOrderWithContractPendingStatus({
//         options,
//         testOrder,
//         vin,
//         contractStatusVerifiedCode: contractStatusCode,
//       })
//     ).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "SOLD_BY_DRI" status ?(and with "([^"]+)" Contract Status)? through API?( with VIN "([^"]+)")?$/,
//   async function (textValue: string, vin: string, table: TableDefinition) {
//     const options = tableDefinitionToObject(table);
//     const contractStatus = textValue ? textValue : 'Customer Signed';
//     const contractStatusCode = Object.keys(contractStatusTextMap).find(
//       key => contractStatusTextMap[key] === contractStatus
//     );
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = (
//       await OrderManagementApiSteps.createOrderWithSoldByDriStatus({ testOrder, options, vin, contractStatusCode })
//     ).data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with custom data with "SOLD_BY_DRI" status?( and with "([^"]+)" Contract Status)? through API?( with VIN "([^"]+)")?$/,
//   async function (textValue: string, vin: string, table: TableDefinition) {
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     const contractStatus = textValue ? textValue : 'Customer Signed';
//     const contractStatusCode = Object.keys(contractStatusTextMap).find(
//       key => contractStatusTextMap[key] === contractStatus
//     );
//     const world: World = this;
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const orderDataUpdate: OrderDataUpdate = table.rowsHash();
//     Object.keys(orderDataUpdate).forEach(elemPath => {
//       if (numberFields.includes(elemPath)) {
//         orderDataUpdate[elemPath] = +orderDataUpdate[elemPath];
//       }
//       setValueByKey(testOrder, elemPath as Paths<typeof testOrder>, orderDataUpdate[elemPath]);
//     });
//     const order = (await OrderManagementApiSteps.createOrderWithSoldByDriStatus({ testOrder, vin, contractStatusCode }))
//       .data;
//     orders.addOrder(order);
//   }
// );

// Given(
//   /^I create an order with "SOLD_BY_DRI" status and with "([^"]+)" Contract Status via API$/,
//   async function (contractStatus: string) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER_DELIVERY);
//     const contractStatusCode = Object.keys(contractStatusTextMap).find(
//       key => contractStatusTextMap[key] === contractStatus
//     );
//     testOrder.customer.id = world.driUserCredentials.UserID;
//     testOrder.customer.email = world.driUserCredentials.email;
//     const order = (
//       await OrderManagementApiSteps.createOrderWithSoldByDriStatus({
//         testOrder: testOrder,
//         contractStatusCode,
//       })
//     ).data;
//     orders.addOrder(order);
//   }
// );

// When(/^I update Contract Status on "([^"]+)" of created order through API$/, async function (contractStatus: string) {
//   const contractStatusCode = Object.keys(contractStatusTextMap).find(
//     key => contractStatusTextMap[key] === contractStatus
//   );
//   const order = (
//     await OrderManagementApiSteps.updateContractStatusOrder(orders.getOrderNumber(), contractStatusCode, {})
//   ).data;
//   orders.addOrder(order);
// });

// When(/^I cancel order through API$/, async function () {
//   const world: World = this;
//   const checkoutOrderNumber = orders.getOrderNumber();
//   await orderManagementApi.updateOrder(checkoutOrderNumber, CANCELED);
//   await driOrderService.verifyOrderEventuallyChangesStatus(
//     checkoutOrderNumber,
//     'CANCELED',
//     world.driUserCredentials.sessionToken
//   );
// });

// When(/^I cancel ?(?:"(\d+)")? created order through API$/, async function (index: string) {
//   const order = (
//     await OrderManagementApiSteps.cancelOrder(index ? orders.getOrderNumber(+index - 1) : orders.getOrderNumber())
//   ).data;
//   orders.addOrder(order);
// });

// When(/^I delete created order through API$/, async function () {
//   await orderManagementApi.deleteOrder(orders.getOrderNumber());
// });

// When(/^I cancel and delete created order through API$/, async function () {
//   const orderNumber = orders.getOrderNumber();
//   await OrderManagementApiSteps.cancelAndDeleteOrder(orderNumber);
// });

// When(/^I delete created order for ([^"]+) through API$/, async function (vehicle) {
//   const order = orders.getOrders().filter(item => item.additionalData.vehicle == vehicle);
//   await OrderManagementApiSteps.cancelAndDeleteOrder(order[0].order.orderNumber);
// });

// Then(/^I should see order is deleted$/, async function () {
//   const orderDetails = await OrderManagementApiSteps.getOrderDetails(orders.getOrderNumber());
//   OrderManagementApiSteps.verifyResponse(orderDetails, 404);
// });

// function expectedSnsOrderMessage(messages: Email[], orderNumber, options: Record<string, unknown>) {
//   return messages.find(message => {
//     const isExpectedOrderNumber = message.orderInfo.orderNumber === orderNumber;
//     const isExpectedOrderStatus = message.orderInfo.orderStatus === options.orderStatus;
//     const isExpectedPrevStatus = message.orderInfo.prevStatus === options.prevStatus;
//     return isExpectedOrderNumber && isExpectedOrderStatus && isExpectedPrevStatus;
//   });
// }

// Then(
//   /^I should see email with following aws sns notification for created order through API$/,
//   async function (table: TableDefinition) {
//     const orderNumber = orders.getOrderNumber();
//     const options = tableDefinitionToObject(table);
//     const { orderStatus, prevStatus } = options;
//     const gmail = new GmailAPI('order_sns');
//     const query = [orderNumber, orderStatus, prevStatus].join(' ');
//     const snsOrderMessages = await gmail.getLastEmailsFor('me', 100, false, query);
//     const expectedMessage = expectedSnsOrderMessage(snsOrderMessages, orderNumber, options);
//     expect(expectedMessage).toBeDefined();
//     if (options.orderStatus === 'CANCELED') {
//       expect(compareDateWithCurrentDate(expectedMessage.orderInfo.cancellationDate, 600)).toEqual(true);
//       expect(expectedMessage.orderInfo.cancellationReason).toEqual(options.cancellationReason);
//       expect(expectedMessage.orderInfo.cancellationComment).toEqual(options.cancellationComment);
//     }
//   }
// );

// Given(
//   /^I create an order with "DRAFT" status for (penske|drimotors|roicars) retailer through API$/,
//   async function (tenant: string) {
//     const orderData: OrderData = {};
//     orderData.tenantId = SECRET_VALUES.aqa_secrets.tenant[tenant].id;
//     const order = (await OrderManagementApiSteps.createOrderWithDraftStatus(orderData)).data;
//     orders.addOrder(order);
//     orders.addAdditionalData(orderData);
//   }
// );

// Given(
//   /^I create an order with "([^"]+)" status (with AM products )?(and with trade-in )?through API with created user( for Cash deals)? ?(with (delivery|pickup))?$/,
//   async function (orderStatus: string, afterMarket: string, tradeIn: string, cash: string, deliveryOption?: string) {
//     const world: World = this;
//     const deliveryOrder = deliveryOption && deliveryOption.includes('pickup') ? TEST_ORDER_PICKUP : TEST_ORDER;
//     const testOrder = _.cloneDeep(deliveryOrder);
//     if (afterMarket) Object.assign(testOrder, _.cloneDeep(TEST_ORDER_AFTERMARKET_PRODUCTS));
//     if (tradeIn) Object.assign(testOrder, _.cloneDeep(TEST_ORDER_TRADE_IN));
//     if (cash) Object.assign(testOrder, _.cloneDeep(TEST_ORDER_FOR_CASH));
//     Object.keys(testOrder.customer).forEach(key => {
//       testOrder.customer[key] = world.driUserCredentials[key] ? world.driUserCredentials[key] : testOrder.customer[key];
//       if (key === 'id') {
//         testOrder.customer[key] = world.driUserCredentials['UserID'];
//       }
//     });

//     if (cash) {
//       await createOrder({ testOrder, isCash: true }, orderStatus);
//     } else {
//       await createOrder({ testOrder }, orderStatus);
//     }
//   }
// );

// Given(
//   /^I create a "(.+)" order with "(.+)" status through API( with vin "(.+)")? with following values$/,
//   async function (orderName: string, orderStatus: string, vin: string, table: TableDefinition) {
//     const testOrder = _.cloneDeep(ordersData[orderName]);
//     const values = table.rowsHash();
//     for (const [key, value] of _.entries(values)) {
//       _.set(testOrder, key, /^'.*'$/.test(value) ? value.slice(1, -1) : !isNaN(+value) ? +value : value === 'true');
//     }
//     await createOrder({ testOrder, vin }, orderStatus);
//   }
// );

// Given(
//   /^I create an order with "([^"]+)" deal status through API with created user$/,
//   async function (dealStatus: string) {
//     const world: World = this;
//     const testOrder = _.cloneDeep(TEST_ORDER);
//     Object.keys(testOrder.customer).forEach(key => {
//       testOrder.customer[key] = world.driUserCredentials[key] ? world.driUserCredentials[key] : testOrder.customer[key];
//       if (key === 'id') {
//         testOrder.customer[key] = world.driUserCredentials['UserID'];
//       }
//     });
//     await createOrderWithDealStatus({ testOrder }, dealStatus, world.driUserCredentials.sessionToken);
//   }
// );

// When(
//   /^I wait for deal status to be "(.+)" for "(\d+)" seconds for order created through API$/,
//   async function (status, seconds) {
//     await requestUntil(
//       () => OrderManagementApiSteps.getOrderDetails(orders.getOrderNumber()),
//       response => response.status === 200 && response.data.deal.status === status,
//       +seconds,
//       1000,
//       `deal status has not changed to ${status}`
//     );
//   }
// );

// When(
//   /^I update( order status to "(.+)" and)? deal status to "(.+)" for order created through API$/,
//   async function (orderStatus, dealStatus) {
//     const order = orders.getOrder();
//     const data = {
//       orderStatus: orderStatus ?? order.orderStatus,
//       deal: {
//         dealRefId: order.deal.dealRefId,
//         creditAppId: order.deal.creditAppId,
//         status: dealStatus,
//         autoLenderRouting: false,
//         autoLenderSelection: false,
//       },
//     };
//     const response = await orderManagementApi.updateOrder(orders.getOrderNumber(), data);
//     expect(response.status).toBe(200);
//   }
// );

// When(/^I submit credit app for order created through API$/, async function () {
//   const world: World = this;
//   const order = orders.getOrder();
//   const data = _.cloneDeep(creditappC3Body);
//   data.creditApp.tenantId = order.tenantId;
//   data.creditApp.userId = order.customer.id;
//   data.creditApp.orderNumber = order.orderNumber;
//   const response = await CreditappApi.postSubmitCreditApp(data);
//   expect(response.status).toBe(200);
//   order.deal.creditAppId = response.data.creditApp.creditAppId;
//   order.deal.dealRefId = response.data.creditApp.dealRefId;
//   orders.addOrder(order);
//   world.newCreditApp = response.data;
// });

// When(
//   /^I create lender decision for order created through API with following values$/,
//   async function (table: TableDefinition) {
//     const order = orders.getOrder();
//     const data = _.cloneDeep(creditappDecisionC3Body);
//     data.eventKeyData.creditAppId = order.deal.creditAppId;
//     const values = table.rowsHash();
//     for (const [key, value] of _.entries(values)) {
//       _.set(data, key, /^'.*'$/.test(value) ? value.slice(1, -1) : !isNaN(+value) ? +value : value === 'true');
//     }

//     const response = await CreditappApi.postDecisions({ creditAppId: order.deal.creditAppId, decisionsBody: data });
//     expect(response.status).toBe(200);
//   }
// );

// When(
//   /^I select "(.+)" lender( with "(.+)" dealer margin)? for submitted credit app$/,
//   async function (lenderId, margin) {
//     const world: World = this;
//     const dealerMargin = { dealerMargin: margin || 0 };
//     const response = await CreditappApi.provideSelectedLender(
//       world.newCreditApp.creditApp.creditAppId,
//       lenderId,
//       dealerMargin
//     );
//     expect(response.status).toBe(200);
//   }
// );

// async function createOrderWithDealStatus(orderData: OrderData, dealStatus: string, sessionToken?: string) {
//   let order: any;
//   switch (dealStatus) {
//     case 'APEN':
//       order = await CreditAppApiSteps.createOrderWithApenDealStatus(orderData);
//       break;
//     case 'UACC':
//       order = await CreditAppApiSteps.createOrderWithUaccDealStatus(orderData);
//       break;
//     case 'UDEC':
//       order = await CreditAppApiSteps.createOrderWithUdecDealStatus(orderData);
//       break;
//     case 'LNSEL':
//       order = await CreditAppApiSteps.createOrderWithLnselDealStatus(orderData, sessionToken);
//       break;
//     default:
//       throw new Error(`Deal status '${dealStatus}' is not handled`);
//   }

//   orders.addOrder(order);
//   return order;
// }

// async function createOrder(orderData: OrderData, orderStatus: string) {
//   let order: any;
//   switch (orderStatus) {
//     case 'SUBMITTED_TO_UNIFI':
//       order = (await OrderManagementApiSteps.createOrderWithSubmittedToUniFiStatus(orderData)).data;
//       break;
//     case 'IDV_RESULTS':
//       order = (await OrderManagementApiSteps.createOrderWithIdVerificationResults(orderData)).data;
//       break;
//     case 'PII_DATA':
//       order = (await OrderManagementApiSteps.createOrderWithPiiData(orderData)).data;
//       break;
//     case 'DRAFT':
//       order = (await OrderManagementApiSteps.createOrderWithDraftStatus(orderData)).data;
//       break;
//     case 'SOLD_BY_DRI':
//       order = (await OrderManagementApiSteps.createOrderWithSoldByDriStatus(orderData)).data;
//       break;
//     case 'OFFRAMP': {
//       order = (await OrderManagementApiSteps.createOrderWithSubmittedToUniFiStatus(orderData)).data;
//       await orderManagementApi.updateOrder(order.orderNumber, UPDATE_TO_OFFRAMP);
//       break;
//     }
//     default:
//       throw new Error(`Order status '${orderStatus}' is not handled`);
//   }

//   orders.addOrder(order);
//   return order;
// }

// Before(function () {
//   const world = this;
//   const globalAny: any = global;
//   world.initialTenant = TENANT;
//   globalAny.vehicle = [];
// });

// After(async function () {
//   const globalAny: any = global;

//   if (globalAny.vehicle.length !== 0) {
//     try {
//       await inventoryTestService.deleteTestVehicles(globalAny.vehicle);
//     } catch (error) {
//       logError(`After scenario. Can't delete vehicles : ${globalAny.vehicle}. Reason: ${error}`, false);
//     }
//   }
// });
