import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DesktopserviceService extends Service {
 @tracked currentApp = {};
  wallpaper =
    '/NobleNumbat.jpg';

  @tracked taskBarIcons  = {
    1: {
      link: '/icons/firefox.png',
      appName: 'Firefox',
    },
    2: {
      link: '/icons/thunder.png',
    },
    3: {
      link: '/icons/Rhythmbox-icon-new.png',
    },
    4: {
      link: '/icons/lboffice.png',
    },
    5: {
      link: '/icons/app-store.png',
      component:'software-store/software-store'
    },
  };

 @tracked currentOpenedAppId = "";

}
