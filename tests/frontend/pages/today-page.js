import { Selector, t } from 'testcafe';

class TodayPage {
  constructor() {
    this.addTaskAction = Selector('li.agenda_add_task');
    this.addTaskInput = Selector('div.public-DraftStyleDefault-block');
    this.addTaskBtn = Selector('button.item_editor_submit');
    this.taskCheckBox = Selector('div.ist_checkbox');
    this.todayEmptyState = Selector('g#TodayZero');
    this.todayItemCounter = Selector('#filter_today small.item_counter');
    this.taskSpan = Selector('span.task_item_content_text');
  }

  async clickAddTaskAction() {
    await t.click(this.addTaskAction);
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

  async cleanToday() {
    const elements = Selector('div.ist_checkbox').count;
    await t.expect(elements).eql(10);
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < elements; i++) {
      // eslint-disable-next-line no-await-in-loop
      await t.click(this.taskCheckBox.nth(i));
    }
  }
}
export default new TodayPage();
