import Component from '@glimmer/component';
import { action, set } from '@ember/object';
export default class TopSettingContainerComponent extends Component {
  init() {
    super.init(...arguments);
  }

  itemBeforeDivder = [
    {
      src: '/icons/ether.png',
      name: 'Wi-Fi',
      description:"ACT Fibernet",
      open:true
    },
    {
      src: '/icons/battery.png',
      name: 'Bluetooth',
      open:true
    },
    {
      src: '/icons/speedomeeter.png',
      name: 'PowerMode',
      description: 'Balanced',
    },
    {
      src: '/icons/setting.png',
      name: 'Night Light',
    },
    {
      src: '/icons/lock.png',
      name: 'Dark Style',
    },
    {
      src: '/icons/power.png',
      name: 'Airplane Mode',
    },
  ];

  @action
  setVolume(event) {
    event.target.style.background = `linear-gradient(to right, red ${event.target.value}%, #ccc)`;
  }

  @action
  toggleSubcatList(event) {
    // $(".subcatlist").addClass('h-0 overflow-hidden')
    event.target
      .closest('.settingoption')
      .querySelector('.subcatItem')
      .classList.remove('h-0', 'overflow-hidden');
  }
}
