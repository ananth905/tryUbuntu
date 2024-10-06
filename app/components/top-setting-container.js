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
      src: 'https://img.icons8.com/fluency-systems-filled/50/moon.png',
      name: 'Night Light',
    },
    {
      src: 'https://img.icons8.com/ios-filled/100/do-not-disturb-2.png',
      name: 'Dark Style',
    },
    {
      src: 'https://img.icons8.com/ios-filled/100/airport.png',
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

  @action
  styleInputSlider(){
    rangeSlider(document.querySelector('#range-slider'), {
      value: [0, 50],
      thumbsDisabled: [true, false],
      rangeSlideDisabled: true
    })
    rangeSlider(document.querySelector('#brightness'), {
      value: [0, 50],
      thumbsDisabled: [true, false],
      rangeSlideDisabled: true
    })
  }
}
