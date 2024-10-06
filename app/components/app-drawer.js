import Component from '@glimmer/component';
import { action ,set } from '@ember/object';
import { service } from '@ember/service';
export default class AppDrawerComponent extends Component {

  @service
  desktopservice;

  allList = {
    6: {
      link: '/icons/mediaplayer-app.png',
      name: 'video',
    },
    7: {
      link: '/icons/calculator.png',
      name: 'Calculator',
    },
    8: {
      link: '/icons/writer.png',
      name: 'Document',
    },
    9: {
      link: '/icons/camera.png',
      name: 'Cheese',
    },
    10: {
      link: '/icons/jockey.png',
      name: 'Additional Drivers',
    },
    11: {
      link: '/icons/ace-of-hearts.png',
      name: 'Ace',
    },
    12: {
      link: '/icons/calendar.png',
      name: 'Calender',
    },
    13: {
      link: '/icons/translate.png',
      name: 'Language',
    },
    14: {
      link: '/icons/writer.png',
      name: 'LibereOffice Writer',
    },
    15: {
      link: '/icons/powerpoint.png',
      name: 'LibereOffice Impress',
    },
    16: {
      link: '/icons/xls.png',
      name: 'LibereOffice Calc',
    },
    17: {
      link: '/icons/utorrent.png',
      name: 'Utorrent',
    },
    18: {
      link: '/icons/gnomeweb.png',
      name: 'Web',
      componentPath:"installed-apps/ephiny/web"
    },
  };
   
  @action
  openAppList(element){
    // element.classList.add('open-app-list')
    setTimeout(() => {
      element.classList.add('open-app-list');
      document.querySelector('.desktop-workspace').classList.add('scale-workspace')
    }, 0)

  }
  @action
  openApp(key){
    document.querySelector('.desktop-workspace').classList.remove('scale-workspace')
    if(!this.desktopservice.taskBarIcons[key]){
      set(this.desktopservice.taskBarIcons,key , this.allList[key])
      set(this.desktopservice,"currentOpenedAppId" , key);
    }
    set(this.desktopservice,"taskBarIcons",this.desktopservice.taskBarIcons)
    set(this.desktopservice.currentApp,'appName', this.allList[key].componentPath);
  }
  
  @action
  insertDesktopImg(element){

  }
}
