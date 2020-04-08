import HomePage from '../../pages/home-page';
import LoginPage from '../../pages/login-page';
import TodayPage from '../../pages/today-page';
import InboxPage from '../../pages/inbox-page';
import AddTaskComponent from '../../pages/components/add-task-component';
import SidePanelComponent from '../../pages/components/side-panel-component';
import HeaderComponent from '../../pages/components/header-component';
import data from '../../utils/test-data.json';

require('dotenv').config();
// eslint-disable-next-line no-undef
fixture`Todoist: Create tasks`.page(`${data.baseUrl}`).beforeEach(async t => {
  await t.maximizeWindow();
  await HomePage.clickLogin();
  await LoginPage.switchToLoginFrame();
  await LoginPage.typeEmail(`${process.env.EMAIL}`);
  await LoginPage.typePassword(`${process.env.PASSWORD}`);
  await LoginPage.clickSubmit();
});
// eslint-disable-next-line no-undef
test('Create new task from header', async t => {
  await LoginPage.switchToMainFrame();
  await SidePanelComponent.clickInbox();
  await HeaderComponent.clickAddTask();
  await AddTaskComponent.fillTaskName(`${data.tasks.header_task_name}`);
  await AddTaskComponent.clickAddTaskBtn();
  await InboxPage.clickTaskCheckBox();
  await t.expect(await InboxPage.inboxEmptyState.exists).ok();
});
// eslint-disable-next-line no-undef
test('Create multiple tasks from header', async t => {
  await LoginPage.switchToMainFrame();
  await AddTaskComponent.createMultipleTasks(
    `${data.tasks.multiple_tasks_number}`,
    `${data.tasks.header_task_name}`,
  );
  await t
    .expect(await TodayPage.todayItemCounter.innerText)
    .eql(`${data.tasks.multiple_tasks_number}`);
  await TodayPage.cleanToday();
});
