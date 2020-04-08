import { Selector, t } from 'testcafe';
import HeaderComponent from './header-component';
import TodayPage from '../today-page';

class AddTaskComponent {
  constructor() {
    this.closeBtn = Selector('svg.icon_close');
    this.taskNameInput = Selector(
      'div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',
    );
    this.addTaskBtn = Selector('div#reactist-modal-box-0 button.item_editor_submit');
    this.addTaskModal = Selector('div#reactist-modal-box-0');
  }

  async clickCloseBtn() {
    await t.click(this.closeBtn);
  }

  async fillTaskName(taskname) {
    await t.typeText(this.taskNameInput, taskname, { paste: true });
  }

  async clickAddTaskBtn() {
    await t.click(this.addTaskBtn);
  }

  async createMultipleTasks(tasksToCreate, name) {
    let i;
    let taskname;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < tasksToCreate; i++) {
      taskname = name + i;
      // eslint-disable-next-line no-await-in-loop
      await HeaderComponent.clickAddTask();
      // eslint-disable-next-line no-await-in-loop
      await this.fillTaskName(taskname);
      // eslint-disable-next-line no-await-in-loop
      await this.clickAddTaskBtn();
      // eslint-disable-next-line no-await-in-loop
      await t.expect(await TodayPage.taskSpan.nth(i).innerText).eql(taskname);
    }
  }
}
export default new AddTaskComponent();
