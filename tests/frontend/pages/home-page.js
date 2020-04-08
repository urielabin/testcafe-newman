import { Selector, t } from 'testcafe';

class HomePage {
  constructor() {
    this.loginText = Selector('header._3XuQA ul.W9ktc a').withText('Login');
  }

  async clickLogin() {
    await t.click(this.loginText);
  }
}

export default new HomePage();
