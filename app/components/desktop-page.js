import Component from '@ember/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import moment from 'moment';

export default class DesktopPageComponent extends Component {
  @service
  desktopservice;

  @tracked isTopSettingOpen = true;

  iconList = [
    {
      link: '/icons/firefox.png',
      appName: 'Firefrox',
    },
    {
      link: '/icons/thunder.png',
    },
    {
      link: '/icons/Rhythmbox-icon-new.png',
    },
    {
      link: '/icons/lboffice.png',
    },
    {
      link: '/icons/app-store.png',
    },
  ];

  taskBarTime = 'Apr 17 17:05';

  init() {
    super.init(...arguments);
    // this.taskBarTime = moment().format("MMM D, HH:mm");
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    document.querySelector(
      '.wallpaper'
    ).style.backgroundImage = `url(${this.desktopservice.wallpaper})`;
  }

  @action
  setCurrentApp(appname, toggle) {
    if (this.desktopservice.appName && toggle)
      set(this.desktopservice, 'appName', '');
    else set(this.desktopservice, 'appName', appname);
  }
  @action
  toggleProperty(event) {
    if(event.target.classList.contains(".top-setting-container"))
      return
    this.isTopSettingOpen = !this.isTopSettingOpen;
    console.log('isTopSettingOpen', this.isTopSettingOpen);
  }
}
