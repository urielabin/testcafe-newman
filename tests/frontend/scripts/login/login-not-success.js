import HomePage from '../../pages/home-page';
import LoginPage from '../../pages/login-page';
import data from '../../utils/test-data.json';

require('dotenv').config();
// eslint-disable-next-line no-undef
fixture`Todoist: Login`.page(`${data.baseUrl}`).beforeEach(async t => {
  await t.maximizeWindow();
});
// eslint-disable-next-line no-undef
test('Login not success - Empty Email', async t => {
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typePassword(`${process.env.PASSWORD}`);
  await LoginPage.clickSubmit();
  await t.expect(await LoginPage.blankEmailMsg.exists).ok();
});
// eslint-disable-next-line no-undef
test('Login not success - Invalid Email', async t => {
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typeEmail(`${process.env.INVALID_EMAIL}`);
  await LoginPage.typePassword(`${process.env.PASSWORD}`);
  await LoginPage.clickSubmit();
  await t.expect(await LoginPage.invalidEmailMsg.exists).ok();
});
// eslint-disable-next-line no-undef
test('Login not success - Empty Password', async t => {
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typeEmail(`${process.env.EMAIL}`);
  await LoginPage.clickSubmit();
  await t.expect(await LoginPage.blankPasswordMsg.exists).ok();
});
// eslint-disable-next-line no-undef
test('Login not success - Invalid Password', async t => {
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typeEmail(`${process.env.EMAIL}`);
  await LoginPage.typePassword(`${process.env.INVALID_PASSWORD}`);
  await LoginPage.clickSubmit();
  await t.expect(await LoginPage.invalidPasswordMsg.exists).ok();
});
