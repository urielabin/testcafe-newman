import { Selector, t } from 'testcafe';

class HeaderComponent {
  constructor() {
    this.todoistLogo = Selector('div#logo');
    this.searchInput = Selector('input.quick_find');
    this.addTaskBtn = Selector('span#quick_add_task_holder');
    this.productivityBtn = Selector('span#top_completed_holder');
    this.notificationsBtn = Selector('span#notifications_counter');
    this.settingsBtn = Selector('span#gear_holder');
  }

  async clickTodoistLogo() {
    await t.click(this.todoistLogo);
  }

  async fillSearchInput(searchData) {
    await t.typeText(this.searchInput, searchData);
  }

  async clickAddTask() {
    await t.click(this.addTaskBtn);
  }

  async clickProductivity() {
    await t.click(this.productivityBtn);
  }

  async clickNotifications() {
    await t.click(this.notificationsBtn);
  }

  async clickSettings() {
    await t.click(this.settingsBtn);
  }

  async hoverTodoistLogo() {
    await t.hover(this.todoistLogo);
  }
}
export default new HeaderComponent();
