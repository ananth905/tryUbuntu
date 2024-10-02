import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {
    myValue = 0

    names = ['Stefan', 'Miguel', 'Tomster', 'Pluto'];

    @action
    foo() {}
}
