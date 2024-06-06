import Component from '@glimmer/component';
import { action, set } from '@ember/object';
export default class TopSettingContainerComponent extends Component {
  init() {
    super.init(...arguments);
  }

  itemBeforeDivder = [
    {
      src: '/icons/ether.png',
      name: 'Wired Connected',
      subCat: ['Turn Off', 'Wired Setting'],
    },
    {
      src: '/icons/battery.png',
      name: 'Remaining(30 %)',
      subCat: ['Power Setting'],
    },
    {
      src: '/icons/speedomeeter.png',
      name: 'Balanced',
      subCat: ['Balanced', 'Power Saver'],
    },
    {
      src: '/icons/setting.png',
      name: 'Settings',
    },
    {
      src: '/icons/lock.png',
      name: 'Lock',
    },
    {
      src: '/icons/power.png',
      name: 'Poweroff / logout',
      subCat: ['Suspend', 'Restart', 'Power off'],
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
