import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {
  @tracked clickedFolder = '';

  get currentFolderList() {
    return this.args.currentFolderList;
  }

  @action
  setCurrentFolder(folder) {
    this.clickedFolder = folder;
  }

  constructor() {
    super(...arguments);
  }
}
