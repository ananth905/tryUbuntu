import Component from '@ember/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

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
    if (this.desktopservice.currentApp?.appName == 'app-drawer' && toggle)
      set(this.desktopservice, 'currentApp', {});
    else {
      const dataUrl = await htmlToImage.toPng(document.querySelector('.desktop-container'),{ 
        quality: 0.1
      })
       
          this.dekstopScreenShot = dataUrl;  
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
