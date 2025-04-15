import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class CommonServiceService extends Service {
    @tracked  showContextMenu
    isMobile = window.innerWidth <= 468;

    
}
