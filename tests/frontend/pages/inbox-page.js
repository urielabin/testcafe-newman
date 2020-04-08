import { Selector, t } from 'testcafe';

class InboxPage {
  constructor() {
    this.addTaskAction = Selector('a.action_add_item');
    this.addTaskInput = Selector('div.public-DraftStyleDefault-block');
    this.addTaskBtn = Selector('button.item_editor_submit');
    this.taskCheckBox = Selector('div.ist_checkbox');
    this.inboxEmptyState = Selector('g#InboxZero');
    this.taskSpan = Selector('span.task_item_content_text');
  }

  async clickAddTaskAction() {
    await t.hover(this.addTaskAction).click(this.addTaskAction);
  }

  async fillTaskName(taskname) {
    await t.typeText(this.addTaskInput, taskname);
  }

  async clickAddTaskBtn() {
    await t.click(this.addTaskBtn);
  }

  async clickTaskCheckBox() {
    await t.click(this.taskCheckBox);
  }

  async cleanInbox() {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < this.taskCheckBox.count; i++) {
      // eslint-disable-next-line no-await-in-loop
      await t.click(this.taskCheckBox.nth(i));
    }
  }
}
export default new InboxPage();
