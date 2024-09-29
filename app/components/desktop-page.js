import Component from '@ember/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import moment from 'moment';

export default class DesktopPageComponent extends Component {
  @service
  desktopservice;

  @tracked isTopSettingOpen = false;

  @tracked taskBarIconList

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
    this.taskBarIconList = this.desktopservice.taskBarIcons
  }

  @action
  setCurrentApp(appName, toggle , appId) {
    if (this.desktopservice.currentApp?.appName && toggle)
      set(this.desktopservice, 'currentApp', {});
    else {
     set(this.desktopservice, 'currentApp', {appName , appId });
    }
  }
  @action
  toggleProperty(event) {
    if (event.target.closest('.top-setting-container')) return;
    this.isTopSettingOpen = !this.isTopSettingOpen;
    console.log('isTopSettingOpen', this.isTopSettingOpen);
  }
}
