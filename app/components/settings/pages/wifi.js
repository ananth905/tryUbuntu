import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {
  myValue = 0;

  allSize = ['Small', 'Normal', 'Large', 'Tiny'];
  selectedSize = 'Normal';

  homeFolderPosition = ['Top left', 'Top Right', 'Bottom Left', 'Bottom Right'];
  selectedPosition = 'Top Left';

  allPosition = ['Left', 'Bottom', 'Right'];
  selectedDockPosition = 'Left';
  @action
  foo() {}
}
