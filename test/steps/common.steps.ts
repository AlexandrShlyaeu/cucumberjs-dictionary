// Given(/^I open Auth URL ?(?:with additional parameter "(.*)")?$/, async (additionalParameter: string) => {
//   let url = global.env.dri;
//   if (TENANT === 'drimotors') {
//     url += `/?optimizelyForceFeatures=strapi_cms_integration=false&skipMocks`;
//   }
//   //Disable progress tracker functionality
//   if (ENVIRONMENT === 'nonprod') {
//     url += `/?optimizelyForceFeatures=buy_progress_tracker_enabled=false`;
//   }
//   if (additionalParameter) {
//     url += additionalParameter;
//   }
//   await browser.url(url);
//   await browser.setupInterceptor();
// });

// When(/^I clear session$/, async () => {
//   await browser.execute(() => {
//     sessionStorage.clear();
//     localStorage.clear();
//   });
//   await browser.refresh();
// });

// Given(/^I change tenant to "([^"]+)"$/, function (tenant: string) {
//   const world: World = this;
//   tenant = tenant === 'initial' ? world.initialTenant : tenant;
//   setTenantValue(tenant);
//   initiateEnvs();
//   world.retailerAlias = retailersUrls[tenant];
// });

// Given(/^I open "([^"]+)" page$/, async function (pageName: string) {
//   const world: World = this;
//   const page = pages[pageName];
//   if (world.retailerAlias && _.has(page, 'setRetailerUrl')) page.setRetailerUrl(world.retailerAlias);
//   await page.open();
//   windowHandles.push(await browser.getWindowHandle());
// });

// Given(/^I open "([^"]+)" page in a new tab$/, async (page: string) => {
//   await pages[page].openNewTab();
//   windowHandles.push(await browser.getWindowHandle());
// });

// Given(/^I open "([^"]+)" page with "([^"]+)" feature flag$/, async function (pageName: string, featureFlag: string) {
//   const page = pages[pageName];
//   page.tmpUrl = page.fullUrl;
//   page.fullUrl += featureFlag;
//   await page.open();
//   windowHandles.push(await browser.getWindowHandle());
//   page.fullUrl = page.tmpUrl;
// });

// When(/^I switch to the (first|second) tab$/, async (tab: string) => {
//   tab === 'first' ? await browser.switchToWindow(windowHandles[0]) : await browser.switchToWindow(windowHandles[1]);
// });

// Given(/^I reload the session$/, async () => {
//   await browser.reloadSession();
// });

// Given(/^I reload the page$/, async () => {
//   await browser.refresh();
// });

// When(/^I open "([^"]+)" page with invalid direct link$/, async (page: string) => {
//   await browser.url(`${pages[page].fullUrl}wrongLink`);
// });

// When(/^I open "([^"]+)" page with not existed item ID$/, async (page: string) => {
//   await browser.url(`${pages[page].fullUrl}/00000000-0000-0000-0000-000000000000`);
// });

// When(/^I go back to the previous page$/, async () => {
//   await browser.back();
// });

// When(
//   /^I click on "([^"]+)" ?(?:with index "(.+)")? on "(.+)" ?(?:page|modal page|component)$/,
//   async (elem: string, elementIndex: number, page: string) => {
//     await pages[page].waitForElementAndClick(pages[page][elem], { index: elementIndex });
//   }
// );

// When(
//   /^I enter "([^"]+)" in "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)( with JS)?$/,
//   async (text, elem, page, withJS) => {
//     await pages[page].waitForElementAndClick(pages[page][elem]);
//     withJS ? await pages[page].setValue(elem, text, true) : await pages[page].setValue(elem, text);
//   }
// );

// When(
//   /^I enter random string of "([^"]+)" characters in length in "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (length, elem, page) => {
//     await pages[page].waitForElementAndClick(pages[page][elem]);
//     await pages[page].setValue(elem, string(length));
//   }
// );

// When(/^I clear( with keyboard)? "([^"]+)" on "([^"]+)"(?: modal|) page$/, async (method, elem, page) => {
//   await pages[page].waitForElementAndClick(pages[page][elem]);
//   await pages[page].clearElementValue(pages[page][elem], method);
// });

// When(/^I clear( with keyboard)? "([^"]+)" in "([^"]+)" modal on "([^"]+)" page$/, async (method, elem, modal, page) => {
//   await pages[page][modal].waitForElementAndClick(pages[page][modal][elem]);
//   await pages[page][modal].clearElementValue(pages[page][modal][elem], method);
// });

// When(
//   /^I enter "([^"]+)" in "([^"]+)" in "([^"]+)" modal on "([^"]+)" page$/,
//   async (text: string, elem: string, modal: string, page: string) => {
//     if (text.includes('<plaidSufficientBalancePassword>'))
//       text = JSON.stringify(PLAID_PASSWORDS.PLAID_SUFFICIENT_BALANCE_PASSWORD);
//     if (text.includes('<plaidInsufficientBalancePassword>'))
//       text = JSON.stringify(PLAID_PASSWORDS.PLAID_INSUFFICIENT_BALANCE_PASSWORD);
//     await pages[page][modal].waitForElementAndClick(pages[page][modal][elem]);
//     await pages[page][modal].setValue(elem, text);
//   }
// );

// When(
//   /^I select "(.+)" option from "(.+)" of "(.+ dropdown)" on "(.+)" ?(?:page|modal page|component)$/,
//   async (option: string, container: string, dropDown: string, page: string) => {
//     await pages[page].selectOptionByValue(pages[page][dropDown], pages[page][container], option);
//   }
// );

// When(
//   /^I select "(.+)" element from "(.+)" on "(.+)" page$/,
//   async (option: string, container: string, page: string) => {
//     await pages[page].selectElementByValueFromContainer(pages[page][container], option);
//   }
// );

// When(
//   /^I select "([^"]+)" with text "([^"]+)" in "([^"]+)" modal on "([^"]+)" page$/,
//   async (checkbox: string, text: string, modal: string, page: string) => {
//     await pages[page][modal].waitForElementAndClick(pages[page][modal][checkbox](text));
//   }
// );

// When(/^I switch to "(.+)" frame on "(.+)" page$/, async (frame: string, page: string) => {
//   await pages[page].switchToFrame(frame);
// });

// When(/^I switch to parent frame$/, async () => {
//   await browser.switchToParentFrame();
// });

// When(/^I wait for full page load ?(for "([^"]+)" seconds?)?$/, async timeout => {
//   await waitForFullPageLoad(timeout);
// });

// When(/^I wait for "([^"]+)" seconds$/, async timeout => {
//   await delay(timeout * 1000);
// });

// When(/^I refresh current page$/, async () => {
//   await browser.refresh();
// });

// When(/^I switch to window with match url "(.+)"$/, async (url: string) => {
//   await browser.switchWindow(url);
// });

// When(/^I click on "(.+)" in "(.+)" modal on "(.+)" page$/, async (elem: string, modal: string, page: string) => {
//   await pages[page][modal].waitForElementAndClick(pages[page][modal][elem]);
// });

// When(
//   /^I wait for "(.+)" to (have|contain) text "(.+)" on "(.+)"(?: modal|) page$/,
//   async (elem: string, method: string, text: string, page: string) => {
//     if (method === 'have') {
//       await pages[page].waitForHaveText(pages[page][elem], text);
//     } else {
//       await pages[page].waitForContainText(pages[page][elem], text);
//     }
//   }
// );

// Then(/^I should( not)? be on "([^"]+)"(| modal) page$/, async (not: string, page: string, modal: string) => {
//   modal
//     ? await pages[page].waitForDisplayed(pages[page].uniqueElement, !!not)
//     : await pages[page].waitForUrlToContain(pages[page].url, {reversed: !!not});
// });

// Then(/^I should be on "([^"]+)" page and page is fully loaded$/, async (page: string) => {
//   await pages[page].waitForUrlToContain(pages[page].url);
//   await pages[page].waitForFullLoad();
// });

// Then('I wait for loading completed', async () => {
//   const pageLoader = await findElement(`[id=loader-label]`);
//   await pageLoader.waitForExist({ timeout: timeouts.TIMEOUT_2_MINUTE, reverse: true });
// });

// Then(/^I should( not)? be on "([^"]+)" modal on "([^"]+)" page$/, async (not: string, modal: string, page: string) => {
//   await pages[page][modal].waitForDisplayed(pages[page][modal].uniqueElement, !!not);
// });

// Then(/^I should( not)? see "([^"]+)" modal on "([^"]+)" page$/, async (not: string, modal: string, page: string) => {
//   await pages[page].waitForDisplayed(pages[page][modal]['Main selector'], !!not);
// });

// Then(/^I click on "([^"]+)" modal on "([^"]+)" page$/, async (modal: string, page: string) => {
//   await pages[page].waitForElementAndClick(pages[page][modal]['Main selector']);
// });

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (not: string, elem: string, elementIndex: number, page: string) => {
//     await pages[page].waitForDisplayed(await pages[page][elem], !!not, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? on "([^"]+)" modal on "([^"]+)" page$/,
//   async (not: string, elem: string, elementIndex: number, modal: string, page: string) => {
//     await pages[page].waitForDisplayed(pages[page][modal][elem], !!not, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? with empty (text|value)( on "([^"]+)" modal)? on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (not: string, elem: string, elementIndex: number, option: string, modal: string, page: string) => {
//     await pages[page].waitForDisplayed(modal ? pages[page][modal][elem] : pages[page][elem], { index: elementIndex });

//     option === 'value'
//       ? await pages[page].checkElementValue(
//           modal ? pages[page][modal][elem] : pages[page][elem],
//           '',
//           'with',
//           { index: elementIndex },
//           !!not
//         )
//       : await pages[page].checkElementText(
//           modal ? pages[page][modal][elem] : pages[page][elem],
//           '',
//           'with',
//           { index: elementIndex },
//           !!not
//         );
//   }
// );

// Then(
//   /^I should see "([^"]+)" on "([^"]+)" page (with|containing) text: (.+)$/,
//   async (elem: string, page: string, option: string, text: string) => {
//     text = text.replace(/<tenantName>/g, TenantUIName[TENANT]);
//     await pages[page].waitForDisplayed(pages[page][elem]);
//     await pages[page].checkElementText(pages[page][elem], text, option);
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) link "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
//   async function (not: string, elem: string, elementIndex: number, method: string, text: string, page: string) {
//     await pages[page].waitForDisplayed(pages[page][elem], { index: elementIndex });
//     await pages[page].checkElementHref(pages[page][elem], text, method, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) placeholder text "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
//   async function (not: string, elem: string, elementIndex: number, method: string, text: string, page: string) {
//     await pages[page].waitForDisplayed(pages[page][elem], { index: elementIndex });
//     await pages[page].checkElementPlaceholderText(pages[page][elem], text, method, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) (text|value) "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
//   async function (
//     not: string,
//     elem: string,
//     elementIndex: number,
//     method: string,
//     option: string,
//     text: string,
//     page: string
//   ) {
//     const world: World = this;
//     await pages[page].waitForDisplayed(pages[page][elem], { index: elementIndex });

//     if (text.includes('<env>')) text = text.replace('<env>', ENVIRONMENT);
//     if (text.includes('<phone>')) text = text.replace('<phone>', format(world.driUserCredentials.mobile));
//     if (text.includes('<orderNumber')) {
//       const orderIndex = +text.match(/<orderNumber_(\d+)>/)?.[1] - 1;
//       text = text.replace(/<orderNumber(_\d+)?>/, orders.getOrderNumber(isNaN(orderIndex) ? undefined : orderIndex));
//     }
//     if (text.includes('<tenantName>')) text = text.replace('<tenantName>', TenantUIName[TENANT]);
//     if (text.includes('<tenantPhone>')) text = text.replace('<tenantPhone>', TENANT_PHONES[TENANT]);
//     if (text.includes('<vin>')) text = text.replace('<vin>', orders.getOrder().vehicle.vin);
//     if (text.includes('<make>')) text = text.replace('<make>', orders.getOrder().vehicle.make);
//     if (text.includes(`<user email>`)) text = text.replace(`<user email>`, world.driUserCredentials.email);
//     if (text.includes('<user first name>'))
//       text = text.replace('<user first name>', world.driUserCredentials.firstName);
//     if (text.includes(`<user full name>`))
//       text = text.replace(
//         `<user full name>`,
//         `${world.driUserCredentials.firstName} ${world.driUserCredentials.lastName}`
//       );
//     if (text.includes(`<rp user full name>`))
//       text = text.replace(`<rp user full name>`, `${world.newRPUser.firstName} ${world.newRPUser.lastName}`);
//     if (text.includes(`<created workflow alert name>`))
//       text = text.replace(`<created workflow alert name>`, world.newSla.name);
//     if (text.includes(`<created workflow alert message>`))
//       text = text.replace(`<created workflow alert message>`, world.newSla.notificationMessage);
//     option === 'value'
//       ? await pages[page].checkElementValue(pages[page][elem], text, method, { index: elementIndex }, !!not)
//       : await pages[page].checkElementText(pages[page][elem], text, method, { index: elementIndex }, !!not);
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) (text|value) "([^"]+)" on "([^"]+)" modal on "([^"]+)" page$/,
//   async function (
//     not: string,
//     elem: string,
//     elementIndex: number,
//     method: string,
//     option: string,
//     text: string,
//     modal: string,
//     page: string
//   ) {
//     const world: World = this;
//     await pages[page].waitForDisplayed(pages[page][modal][elem], { index: elementIndex });

//     if (text.includes('<env>')) text = text.replace('<env>', ENVIRONMENT);
//     if (text.includes('<phone>')) text = text.replace('<phone>', format(world.driUserCredentials.mobile));
//     if (text.includes('<orderNumber>')) text = text.replace('<orderNumber>', orders.getOrderNumber());
//     if (text.includes('<vin>')) text = text.replace('<vin>', orders.getOrder().vehicle.vin);
//     if (text.includes('<tenantName>')) text = text.replace('<tenantName>', TenantUIName[TENANT]);
//     if (text.includes(`<current user's name>`))
//       text = text.replace(`<current user's name>`, `${world.newRPUser.firstName} ${world.newRPUser.lastName}`);

//     option === 'value'
//       ? await pages[page].checkElementValue(pages[page][modal][elem], text, method, { index: elementIndex }, !!not)
//       : await pages[page].checkElementText(pages[page][modal][elem], text, method, { index: elementIndex }, !!not);
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) link "([^"]+)" on "([^"]+)" modal on "([^"]+)" page$/,
//   async function (
//     not: string,
//     elem: string,
//     elementIndex: number,
//     method: string,
//     text: string,
//     modal: string,
//     page: string
//   ) {
//     await pages[page].waitForDisplayed(pages[page][modal][elem], { index: elementIndex });
//     await pages[page].checkElementHref(pages[page][modal][elem], text, method, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) source "([^"]+)" on "([^"]+)" modal on "([^"]+)" page$/,
//   async function (
//     not: string,
//     elem: string,
//     elementIndex: number,
//     method: string,
//     text: string,
//     modal: string,
//     page: string
//   ) {
//     await pages[page].waitForDisplayed(pages[page][modal][elem], { index: elementIndex });
//     await pages[page].checkElementSrc(pages[page][modal][elem], text, method, { index: elementIndex });
//   }
// );

// Then(
//   /^I should see "([^"]+)" ?(with index "([^"]+)")? is (checked|unchecked) on "(.+)" ?(?:page|modal page|component)$/,
//   async (checkbox: string, checkboxIndex: number, selectedStatus: string, page: string) => {
//     await pages[page].checkSelected(pages[page][checkbox], selectedStatus === 'checked', { index: checkboxIndex });
//   }
// );

// Then(/^I should see "(.+)" is "(.+)" on "(.+)" page$/, async (elem, condition, page) => {
//   switch (condition) {
//     case 'selected':
//       await pages[page].checkElementIsSelected(elem, condition);
//       break;
//     case 'collapsed':
//       await pages[page].waitElementIsCollapsed(elem);
//       break;
//     case 'expanded':
//       await pages[page].waitElementIsExpanded(elem);
//       break;
//     default:
//       // TODO not implemented
//       break;
//   }
// });

// Then(
//   /^I should( not)? see "(.+)" in "(.+)" modal on "(.+)" page$/,
//   async (not: string, elem: string, modal: string, page: string) => {
//     const modalPage = modal.toLocaleLowerCase();
//     await pages[page][modalPage].waitForDisplayed(pages[page][modalPage][elem], !!not);
//   }
// );

// Then(
//   /^I should( not)? see that "([^"]+)" exists ?(with index "([^"]+)")? on "([^"]+)" modal on "([^"]+)" page$/,
//   async (not: string, elem: string, elementIndex: number, modal: string, page: string) => {
//     await pages[page].waitForExist(pages[page][modal][elem], !!not, { index: elementIndex });
//   }
// );

// Then(
//   /^I should( not)? see that "([^"]+)" exists ?(with index "([^"]+)")? on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (not: string, elem: string, elementIndex: number, page: string) => {
//     await pages[page].waitForExist(pages[page][elem], !!not, { index: elementIndex });
//   }
// );

// Then(
//   /^I should see that "([^"]+)" ?(with index "([^"]+)")? is (enabled|disabled) on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (element: string, elementIndex: number, condition: string, page: string) => {
//     await pages[page].checkEnabled(pages[page][element], condition === 'enabled', { index: elementIndex });
//   }
// );

// Then(
//   /^I should see that "([^"]+)" ?(with index "([^"]+)")? is (clickable|unclickable) on "([^"]+)" ?(?:page|modal page|component)$/,
//   async (element: string, elementIndex: number, condition: string, page: string) => {
//     await pages[page].checkClickable(pages[page][element], condition === 'clickable', { index: elementIndex });
//   }
// );

// Then(
//   /^I should see that "([^"]+)" ?(with index "([^"]+)")? is (enabled|disabled) on "([^"]+)" modal on "([^"]+)" page$/,
//   async (element: string, elementIndex: number, condition: string, modal: string, page: string) => {
//     await pages[page].checkEnabled(pages[page][modal][element], condition === 'enabled', { index: elementIndex });
//   }
// );

// Then(
//   /^I should see that "([^"]+)" ?(with index "([^"]+)")? is (populated|unfilled) on "(.+)" page$/,
//   async (element: string, elementIndex: number, condition: string, page: string) => {
//     await pages[page].checkPopulated(pages[page][element], condition === 'populated', { index: elementIndex });
//   }
// );

// Then(
//   /^I should see that "([^"]+)" ?(modal)? ?(with index "([^"]+)")? is ?(not)? visible on "([^"]+)" page$/,
//   async (element: string, isModal: string, elementIndex: number, isVisible: string, page: string) => {
//     if (isModal) {
//       await pages[page].checkInViewPort(pages[page][element]['Main selector'], !isVisible, { index: elementIndex });
//     } else {
//       await pages[page].checkInViewPort(pages[page][element], !isVisible, { index: elementIndex });
//     }
//   }
// );

// Then(
//   /^I should see that "([^"]+)" is ?(not)? visible on "([^"]+)" modal on "([^"]+)" page$/,
//   async (element: string, isVisible: string, modal: string, page: string) => {
//     await pages[page].waitForElementAndScroll(pages[page][modal]['Main selector']);
//     await pages[page].checkInViewPort(pages[page][modal][element], !isVisible);
//   }
// );

// Then(
//   /^I hover on "([^"]+)"( on "([^"]+)" modal)? ?(with index "([^"]+)")? on "(.+)" ?(?:page|modal page|component)$/,
//   async (element: string, modal: string, elementIndex: number, page: string) => {
//     await pages[page].hoverOn(modal ? pages[page][modal][element] : pages[page][element], { index: elementIndex });
//   }
// );

// When(
//   /^I scroll to "([^"]+)" ?(with index "([^"]+)")? on "(.+)" page$/,
//   async (element: string, elementIndex: number, page: string) => {
//     await pages[page].waitForElementAndScroll(pages[page][element], { index: elementIndex });
//   }
// );

// Then(/^I should see that "([^"]+)" is empty on "(.+)" page$/, async (element: string, page: string) => {
//   await pages[page].waitForDisplayed(pages[page][element]);
//   await pages[page].checkFieldIsEmpty(pages[page][element]);
// });

// Then(
//   /^I should see "([^"]+)" (with|containing|as) text from the created order "([^"]+)" field ?(on "([^"]+)" modal )?on "([^"]+)" page$/,
//   async function (elem: string, method: string, orderField: string, modal: string, page: string) {
//     const textToVerify = getValueByKey(orders.getOrder(), orderField);

//     if (modal) {
//       await pages[page].waitForDisplayed(pages[page][modal][elem]);
//       await pages[page].checkElementText(pages[page][modal][elem], textToVerify, method);
//     } else {
//       await pages[page].waitForDisplayed(pages[page][elem]);
//       await pages[page].checkElementText(pages[page][elem], textToVerify.toString(), method);
//     }
//   }
// );

// When(/^I accept alert in (chrome|safari)$/, async (currentBrowser: 'chrome' | 'safari') => {
//   if (BROWSER === currentBrowser) {
//     await browser.acceptAlert();
//   }
// });

// Then(
//   /^I switch to the (next|previous) window(?: in (chrome|safari))?$/,
//   async (action: 'next' | 'previous', currentBrowser) => {
//     if (!currentBrowser || currentBrowser === BROWSER) {
//       await switchTab(action);
//     }
//   }
// );

// Given(/^Dummie test$/, async () => {
//   await browser.url(global.env.dri);
//   console.log(`There are no API tests for this suite`);
// });

// Then(/^I simulate (offline|online) internet connection$/, async (connectionType: 'offline' | 'online') => {
//   if (SAUCELABS && SAUCELABS_OS) {
//     await browser.throttleNetwork(connectionType);
//   } else {
//     await browser.throttle(connectionType);
//   }
// });

// When(/^I press the "([^"]+)" button$/, async button => {
//   await browser.keys(button);
// });

// Then(/^The page description should( not)? contain ?("([^"]+)" )?text$/, async (condition, text) => {
//   if (condition) {
//     expect(await (await $(`[name="description"]`)).isExisting()).toBeFalsy();
//   } else {
//     const actualText = await (await $(`[name="description"]`)).getAttribute('content');
//     expect(actualText).toContain(text);
//   }
// });

// When(
//   /^I enter generated password in "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
//   async function (elem, page) {
//     const world = this;
//     await pages[page].waitForElementAndClick(pages[page][elem]);
//     await pages[page].setValue(elem, world.generatedPassword);
//   }
// );

// Then(
//   /^I should see "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" (?:page|modal page) (have|contain) following text values$/,
//   async function (elem: string, modal: string, page: string, method: string, table: TableDefinition) {
//     const elements: WebdriverIO.ElementArray = modal
//       ? await pages[page][modal].findElementArray(pages[page][modal][elem])
//       : await pages[page].findElementArray(pages[page][elem]);
//     const actual = await map(elements, async i => i.getText());
//     const expected = table.rows().map(i => i[0]);
//     if(method === 'have') {
//       expect(actual).toMatchObject(expected);
//     } else {
//       expected.forEach(e => expect(actual).toContainEqual(e));
//     }
//   }
// );

// Then(
//   /^I should see the name of created through API "([^"]+)" user in "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
//   async function (key: string, elem: string, modal: string, page: string) {
//     const elements: WebdriverIO.ElementArray = modal
//       ? await pages[page][modal].findElementArray(pages[page][modal][elem])
//       : await pages[page].findElementArray(pages[page][elem]);
//     const world: World = this;
//     const user = world.newRPUsers[key];
//     const actual = await map(elements, i => i.getText());
//     expect(actual).toMatchObject([`${user.firstName} ${user.lastName}`]);
//   }
// );

// When(
//   /^I click on item with text "([^"]+)" from "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" (?:page|modal page)$/,
//   async function (text: string, elem: string, modal: string, page: string) {
//     const elements: WebdriverIO.ElementArray = modal
//       ? await pages[page][modal].findElementArray(pages[page][modal][elem])
//       : await pages[page].findElementArray(pages[page][elem]);
//     const element = await find(elements, async i => (await i.getText()) === text);
//     await element.click();
//   }
// );

// When(
//   /^I click on item with the name of created through API "([^"]+)" user from "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
//   async function (key: string, elem: string, modal: string, page: string) {
//     const elements: WebdriverIO.ElementArray = modal
//       ? await pages[page][modal].findElementArray(pages[page][modal][elem])
//       : await pages[page].findElementArray(pages[page][elem]);
//     const world: World = this;
//     const user = world.newRPUsers[key];
//     const element = await find(elements, async i => (await i.getText()) === `${user.firstName} ${user.lastName}`);
//     await element.click();
//   }
// );

// When(
//   /^I enter (today's|tomorrow's) date in "([^"]+)" ?(in "([^"]+)" modal)? on "([^"]+)" page$/,
//   async function (text: string, elem: string, modal: string, page: string) {
//     text = convertTextDates(text);
//     if (modal) {
//       await pages[page][modal].waitForElementAndClick(pages[page][modal][elem]);
//       await await pages[page][modal].setValue(elem, text);
//     } else {
//       await pages[page].waitForElementAndClick(pages[page][elem]);
//       await pages[page].setValue(elem, text);
//     }
//   }
// );

// Then(
//   /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) (yesterday's|today's|tomorrow's|the 10th of October next year|this week|this month) date ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
//   async function (
//     not: string,
//     elem: string,
//     elementIndex: number,
//     method: string,
//     text: string,
//     modal: string,
//     page: string
//   ) {
//     text = convertTextDates(text);
//     if (modal) {
//       await pages[page].waitForDisplayed(pages[page][modal][elem], { index: elementIndex });
//       await pages[page].checkElementText(pages[page][modal][elem], text, method, { index: elementIndex }, !!not);
//     } else {
//       await pages[page].waitForDisplayed(pages[page][elem], { index: elementIndex });
//       await pages[page].checkElementText(pages[page][elem], text, method, { index: elementIndex }, !!not);
//     }
//   }
// );

// When(/^I emulate another device$/, async () => {
//   await browser.emulateDevice(fakeDeviceProfile());
// });

// When(
//   /^I enter the (name|last name) of created through API "([^"]+)" user in "([^"]+)" on "([^"]+)" page$/,
//   async function (name, key, elem, page) {
//     const world: World = this;
//     const user = world.newRPUsers[key];
//     const userName = name === 'name' ? `${user.firstName} ${user.lastName}` : user.lastName;
//     await pages[page].waitForElementAndClick(pages[page][elem]);
//     await pages[page].setValue(elem, userName);
//   }
// );

// Then(
//   /^I should see "([^"]+)" has title "([^"]+)" on "([^"]+)" modal on "([^"]+)" page$/,
//   async function (elem: string, title: string, modal: string, page: string) {
//     chai.expect(await (await $(pages[page][modal][elem])).getAttribute('title')).to.equal(title);
//   }
// );

// Then(/^I should see "([^"]+)" content on "([^"]+)" page$/, async function (text: string, page: string) {
//   await pages[page].findEditedContent(text);
// });

// Then(/^I should( not)? see text "(.+)" displayed$/, async (condition, text: string) => {
//   if (!condition) await expect(await $(`//*[contains(text(),'${text}')]`)).toBeDisplayed();
//   if (condition) await expect(await $(`//*[contains(text(),'${text}')]`)).not.toBeDisplayed();
// });

// Then(
//   /^I should see ([0-9]) following rows? ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
//   async function (count: any, modal: string, page: string, table: TableDefinition) {
//     const world: World = this;
//     const rows = table.rows();
//     const indexes = [];
//     await forEach(rows, async (_, rowInd) => {
//       const records = await map($$((modal ? pages[page][modal] : pages[page])[rows[rowInd][0]]), async i =>
//         i.getText()
//       );
//       const rowIndexes = [];
//       records.forEach((_, recInd) => {
//         let value = rows[rowInd][2];
//         // TODO - refactor replacer
//         if (value.includes(`<today's date>`)) value = convertTextDates(value.replace(/<|>| date/gi, ''));
//         if (value.includes(`<current user's name>`))
//           value = value.replace(`<current user's name>`, `${world.newRPUser.firstName} ${world.newRPUser.lastName}`);
//         if (value.includes(`<created workflow alert name>`))
//           value = value.replace(`<created workflow alert name>`, world.newSla.name);
//         if (value.includes(`<created workflow alert message>`))
//           value = value.replace(`<created workflow alert message>`, world.newSla.notificationMessage);
//         switch (rows[rowInd][1]) {
//           case 'with':
//             if (records[recInd] === value) rowIndexes.push(recInd);
//             break;
//           case 'contains':
//             if (records[recInd].indexOf(value) > -1) rowIndexes.push(recInd);
//             break;
//           default:
//             throw new Error(`Not supported method: ${rows[rowInd][1]}`);
//         }
//       });
//       indexes.push(rowIndexes);
//     });

//     expect(indexes.reduce((x, y) => x.filter(_ => y.includes(_))).length).toBe(+count);
//   }
// );

// Then(/^I should see "([^"]+)" in url$/, async function (url: string) {
//   await expect(browser).toHaveUrlContaining(url);
// });

// Then(/^I should see ([0-9]) "(.+)"( on "(.+)" modal)? on "(.+)" page$/, async (expected, elem, modal, page) => {
//   const actual = (await pages[page].findElementArray(modal ? pages[page][modal][elem] : pages[page][elem])).length;
//   expect(actual).toBe(+expected);
// });

// Then(/^I should see "(.+)" element is not overlapped on "(.+)" ?(?:page|component)$/, async (elem:string,  page:string) => {
//   await pages[page].waitForElementAndScroll(pages[page][elem]);
//   expect(await pages[page].checkClickable(pages[page][elem], true)).toBe(true);
// });

// After(async function (scenario: HookScenarioResult) {
//   const name = scenario.pickle.name;
//   await cleanupTestOrder(this, name);
//   await cleanupTestPlan(this, name);
// });
