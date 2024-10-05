import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action, set } from '@ember/object';
export default class WindowControlComponent extends Component {

    @service
    desktopservice;

    @action
    closeCurrentApp(removeFromTaskBar){
        if(removeFromTaskBar){
          Reflect.deleteProperty(this.desktopservice.taskBarIcons,this.desktopservice.currentOpenedAppId)
          set(this.desktopservice,"taskBarIcons",this.desktopservice.taskBarIcons)
        }
        set(this.desktopservice, 'currentApp', {});
        set(this.desktopservice, 'currentOpenedAppId', "");

    }
}
