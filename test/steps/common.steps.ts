`Given(/^I open Auth URL ?(?:with additional parameter "(.*)")?$/, async (_additionalParameter: string) => {});

When(/^I clear session$/, async () => {});

Given(/^I change tenant to "([^"]+)"$/, function (_tenant: string) {});

Given(/^I open "([^"]+)" page$/, async function (_pageName: string) {});

Given(/^I open "([^"]+)" page in a new tab$/, async (_page: string) => {});

Given(
  /^I open "([^"]+)" page with "([^"]+)" feature flag$/,
  async function (_pageName: string, _featureFlag: string) {}
);

When(/^I switch to the (first|second) tab$/, async (_tab: string) => {});

Given(/^I reload the session$/, async () => {});

Given(/^I reload the page$/, async () => {});

When(/^I open "([^"]+)" page with invalid direct link$/, async (_page: string) => {});

When(/^I open "([^"]+)" page with not existed item ID$/, async (_page: string) => {});

When(/^I go back to the previous page$/, async () => {});

When(
  /^I click on "([^"]+)" ?(?:with index "(.+)")? on "(.+)" ?(?:page|modal page|component)$/,
  async (_elem: string, _elementIndex: number, _page: string) => {}
);

When(
  /^I enter "([^"]+)" in "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)( with JS)?$/,
  async (_text: any, _elem: any, _page: any, _withJS: any) => {}
);

When(
  /^I enter random string of "([^"]+)" characters in length in "([^"]+)" on "([^"]+)" ?(?:page|modal page|component)$/,
  async (_length: any, _elem: any, _page: any) => {}
);

When(
  /^I clear( with keyboard)? "([^"]+)" on "([^"]+)"(?: modal|) page$/,
  async (_method: any, _elem: any, _page: any) => {}
);

When(
  /^I click on item with text "([^"]+)" from "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" (?:page|modal page)$/,
  async function (_text: string, _elem: string, _modal: string, _page: string) {}
);

When(
  /^I click on item with the name of created through API "([^"]+)" user from "([^"]+)" ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
  async function (_key: string, _elem: string, _modal: string, _page: string) {}
);

When(
  /^I enter (today's|tomorrow's) date in "([^"]+)" ?(in "([^"]+)" modal)? on "([^"]+)" page$/,
  async function (_text: string, _elem: string, _modal: string, _page: string) {}
);

Then(
  /^I should( not)? see "([^"]+)" ?(with index "([^"]+)")? (with|containing) (yesterday's|today's|tomorrow's|the 10th of October next year|this week|this month) date ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
  async function (
    _not: string,
    _elem: string,
    _elementIndex: number,
    _method: string,
    _text: string,
    _modal: string,
    _page: string
  ) {}
);

When(/^I emulate another device$/, async () => {});

When(
  /^I enter the (name|last name) of created through API "([^"]+)" user in "([^"]+)" on "([^"]+)" page$/,
  async function (_name: any, _key: any, _elem: any, _page: any) {}
);

Then(
  /^I should see "([^"]+)" has title "([^"]+)" on "([^"]+)" modal on "([^"]+)" page$/,
  async function (_elem: string, _title: string, _modal: string, _page: string) {}
);

Then(/^I should see "([^"]+)" content on "([^"]+)" page$/, async function (_text: string, _page: string) {});

Then(/^I should( not)? see text "(.+)" displayed$/, async (_condition, _text: string) => {});

Then(
  /^I should see ([0-9]) following rows? ?(on "([^"]+)" modal)? on "([^"]+)" page$/,
  async function (_count: any, _modal: string, _page: string, _table) {}
);

Then(/^I should see "([^"]+)" in url$/, async function (_url: string) {});

Then(
  /^I should see ([0-9]) "(.+)"( on "(.+)" modal)? on "(.+)" page$/,
  async (_expected: any, _elem: any, _modal: any, _page: any) => {}
);

Then(
  /^I should see "(.+)" element is not overlapped on "(.+)" ?(?:page|component)$/,
  async (_elem: string, _page: string) => {}
)`;
