import Component from '@glimmer/component';
import { action, set } from '@ember/object';
export default class TopSettingContainerComponent extends Component {
    init() {
        super.init(...arguments);
    }

    @action 
    setVolume(event){
      event.target.style.background = `linear-gradient(to right, red ${event.target.value}%, #ccc)`;
    }
}
