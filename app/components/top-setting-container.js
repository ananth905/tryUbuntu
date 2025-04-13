import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class TopSettingContainerComponent extends Component {
  init() {
    super.init(...arguments);
  }

  @tracked itemBeforeDivder = [
    {
      src: '/icons/ether.png',
      name: 'Wi-Fi',
      description: 'ACT Fibernet',
      onState: true,
    },
    {
      src: '/icons/battery.png',
      name: 'Bluetooth',
      onState: true,
    },
    {
      src: '/icons/speedomeeter.png',
      name: 'PowerMode',
      description: 'Balanced',
      onState: false,
    },
    {
      src: 'https://img.icons8.com/fluency-systems-filled/50/moon.png',
      name: 'Night Light',
      onState: false,
    },
    {
      src: 'https://img.icons8.com/ios-filled/100/do-not-disturb-2.png',
      name: 'Dark Style',
      onState: false,
    },
    {
      src: 'https://img.icons8.com/ios-filled/100/airport.png',
      name: 'Airplane Mode',
      onState: false,
    },
  ];

  @action
  setVolume(event) {
    event.target.style.background = `linear-gradient(to right, red ${event.target.value}%, #ccc)`;
  }

  @action
  toggleSubcatList(item, event) {
    // $(".subcatlist").addClass('h-0 overflow-hidden');
    let index = this.itemBeforeDivder.findIndex((ele) => ele.name == item.name);
    set(
      this.itemBeforeDivder[index],
      'onState',
      !this.itemBeforeDivder[index].onState
    );
    // this.itemBeforeDivder = this.itemBeforeDivder[index] // need to change
    // event.target
    //   .closest('.settingoption')
    //   .querySelector('.subcatItem')
    //   .classList.remove('h-0', 'overflow-hidden');
  }

  @action
  toggleProperty(event) {
    if (event.target.closest('.settings-shortcut')) return;
    this.args.toggleProperty(event);
  }

  @action
  styleInputSlider() {
    rangeSlider(document.querySelector('#range-slider'), {
      value: [0, 50],
      thumbsDisabled: [true, false],
      rangeSlideDisabled: true,
    });
    rangeSlider(document.querySelector('#brightness'), {
      value: [0, 50],
      thumbsDisabled: [true, false],
      rangeSlideDisabled: true,
    });
  }
}
