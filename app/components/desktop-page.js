import Component from '@ember/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

export default class DesktopPageComponent extends Component {
  @service
  desktopservice;

  @service 
  commonService;

  @tracked dekstopScreenShot;

  @tracked isTopSettingOpen = false;
  @tracked isTopCalendarOpen = false;
  @tracked clickedEvent = null;
  taskBarTime = 'Apr 17 17:05';

  contextMenuOptions = [
    { name: 'New Folder' },
    { name: 's' },
    { name: 'Paste' },
    { name: 's' },
    { name: 'Select All' },
    { name: 's' },
    { name: 'Arrange Icons' },
    { name: 'Arrange By' },
    { name: 's' },
    { name: 'Show Desktop in files' },
    { name: 's' },
    { name: 'Open in Terminal' },
    { name: 's' },
    { name: 'Change Background...' },
    { name: 's' },
    { name: 'Desktop Icons Settings' },
    { name: 'Display Settings' }
  ];

  init() {
    super.init(...arguments);
    // this.taskBarTime = moment().format("MMM D, HH:mm");
    this.selected = new Date();
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    document.querySelector(
      '.wallpaper'
    ).style.backgroundImage = `url(${this.desktopservice.wallpaper})`;
  }

  @action
  async openAppDrawer() {
    this.setCurrentApp('app-drawer', true, 1);
    document.querySelector('.startbtn').classList.add('start-opened');
    // Set the source of an image element to the data URL
  }

  @action
  async setCurrentApp(appName, toggle, appId) {
    if (this.desktopservice.currentApp?.appName == 'app-drawer' && toggle) {
      this.closeDrawer()
      set(this.desktopservice, 'currentApp', {});
      document
        .querySelector('.desktop-workspace')
        .classList.remove('scale-workspace');
      document.querySelector('.startbtn').classList.remove('.start-opened');
    } else {
      set(this.desktopservice, 'currentApp', { appName, appId });
    }
  }
  @action
  toggleProperty(event) {
    if (event.target.closest('.top-setting-container')) return;
    this.isTopSettingOpen = !this.isTopSettingOpen;
  }

  @action
  toggleCalendar(event) {
    if (event.target.closest('.top-calendar-box')) return;
    this.isTopCalendarOpen = !this.isTopCalendarOpen;
  }




  @action
  closeDrawer(){
    const box =  document.querySelector(".app-drawer")
    let x = -350;
    const interval = setInterval(() => {
      if (x <= -350) {
        clearInterval(interval);
      } else {
        x -= 10;
        box.style.transform = `translateX(${x}px)`;
      }
    }, 5);
  }

  @action
  showContextMenu(event){
    event.preventDefault()
     this.clickedEvent = event;
     this.commonService.showContextMenu = true;
  }
}
