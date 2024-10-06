import Component from '@ember/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DesktopPageComponent extends Component {
  @service
  desktopservice;

  @tracked dekstopScreenShot

  @tracked isTopSettingOpen = false;

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
  async openAppDrawer()
  {
      this.setCurrentApp('app-drawer' ,true ,1)
      // Set the source of an image element to the data URL
  }

  @action
  async setCurrentApp(appName, toggle , appId) {
    if (this.desktopservice.currentApp?.appName == 'app-drawer' && toggle){
      set(this.desktopservice, 'currentApp', {});
      document.querySelector('.desktop-workspace').classList.remove('scale-workspace')
    }
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
