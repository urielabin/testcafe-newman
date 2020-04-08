import HomePage from '../../pages/home-page';
import LoginPage from '../../pages/login-page';
import SidePanelComponent from '../../pages/components/side-panel-component';
import data from '../../utils/test-data.json';

require('dotenv').config();
// eslint-disable-next-line no-undef
fixture`Todoist: Login`.page(`${data.baseUrl}`).beforeEach(async t => {
  await t.maximizeWindow();
});
// eslint-disable-next-line no-undef
test('Login success', async t => {
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typeEmail(`${process.env.EMAIL}`);
  await LoginPage.typePassword(`${process.env.PASSWORD}`);
  await LoginPage.clickSubmit();
  await LoginPage.switchToMainFrame();
  await t.expect(await SidePanelComponent.inboxItem.exists).ok();
});
