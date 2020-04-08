import { Selector, t } from 'testcafe';

class SidePanelComponent {
  constructor() {
    this.inboxItem = Selector('li#filter_inbox');
    this.todayItem = Selector('li#filter_today');
    this.nextDaysItem = Selector('li#filter_7days');
  }

  async clickInbox() {
    await t.click(this.inboxItem);
  }

  async clickToday() {
    await t.click(this.todayItem);
  }

  async clickNextDays() {
    await t.click(this.nextDaysItem);
  }
}

export default new SidePanelComponent();
