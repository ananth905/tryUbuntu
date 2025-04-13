import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CommonServiceService extends Service {
    @tracked  showContextMenu
}
