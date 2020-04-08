import { Selector, t } from 'testcafe';
import data from '../utils/test-data.json';

const errorMsgSelector = 'div.error_msg span';

class LoginPage {
  constructor() {
    this.loginFrame = Selector('iframe._3ga5X');
    this.emailInput = Selector('input#email');
    this.passwordInput = Selector('input#password');
    this.loginBtn = Selector('button.submit_btn');
    this.invalidEmailMsg = Selector(errorMsgSelector).withText(
      `${data.login_error_msgs.invalid_email}`,
    );
    this.blankEmailMsg = Selector(errorMsgSelector).withText(
      `${data.login_error_msgs.blank_email}`,
    );
    this.invalidPasswordMsg = Selector(errorMsgSelector).withText(
      `${data.login_error_msgs.invalid_password}`,
    );
    this.blankPasswordMsg = Selector(errorMsgSelector).withText(
      `${data.login_error_msgs.blank_password}`,
    );
  }

  async switchToMainFrame() {
    await t.switchToMainWindow(this);
  }

  async switchToLoginFrame() {
    await t.switchToIframe(this.loginFrame);
  }

  async typeEmail(email) {
    await t.typeText(this.emailInput, email);
  }

  async typePassword(password) {
    await t.typeText(this.passwordInput, password);
  }

  async clickSubmit() {
    await t.click(this.loginBtn);
  }
}

export default new LoginPage();
