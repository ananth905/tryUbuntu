import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DesktopserviceService extends Service {
  @tracked currentApp = {};
  wallpaper = '/NobleNumbat.jpg';

  @tracked taskBarIcons = {
    1: {
      link: '/icons/firefox.png',
      appName: 'Firefox',
      component: 'installed-apps/firefox/web',
    },
    2: {
      link: '/icons/thunder.png',
    },
    3: {
      link: '/icons/folder.png',
      component: 'files/files-container',
    },
    4: {
      link: '/icons/writer.png',
    },
    5: {
      link: '/icons/app-store.png',
      component: 'software-store/software-store',
    },
  };

  @tracked currentOpenedAppId = '';
}
