import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';


export default class DesktopserviceService extends Service {

  @service 
  commonService;


  @tracked currentApp = {};
  @tracked  wallpaper = "";

  @tracked taskBarIcons ={}
   desktopIcons = {
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

  mobileIcons = {
    1: {
      link: '/phoneicons/cheese.png',
      appName: 'Firefox',
      component: 'installed-apps/firefox/web',
    },
    2: {
      link: '/phoneicons/msg.png',
    },
    3: {
      link: '/phoneicons/contact.png',
      component: 'files/files-container',
    },
    4: {
      link: '/phoneicons/settings.png',
    },
    5: {
      link: '/phoneicons/store.png',
      component: 'software-store/software-store',
    },
    6: {
      link: '/phoneicons/shotwell.png',
      component: 'software-store/software-store',
    },
    7:{
      link: '/phoneicons/browser.png',
      component: 'software-store/software-store',
    }
  }

  @tracked currentOpenedAppId = '';




  init() {
    super.init();
    this.wallpaper = this.commonService.isMobile ? "/touchhome.png":"/NobleNumbat.jpg"
    this.taskBarIcons = this.commonService.isMobile ?  this.mobileIcons : this.desktopIcons 
  }
}
