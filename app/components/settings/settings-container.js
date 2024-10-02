import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {

    @tracked currentScreen;
     settingsOption = [
        {
            id: 0,
            name: "Wi-Fi",
            icon: "https://img.icons8.com/forma-light/24/wifi.png"
        },
        {
            id: 1,
            name: "Network",
            icon: "https://img.icons8.com/forma-thin/96/stack.png",
            component:"network"
        },
        {
            id: 2,
            name: "Bluetooth",
            icon: "https://img.icons8.com/ios/50/bluetooth-2.png",
            bottomLine: true,
            component:"bluetooth"
        },
        {
            id: 3,
            name: "Display",
            icon: "https://img.icons8.com/windows/32/widescreen-tv.png"
        },
        {
            id: 4,
            name: "Sound",
            icon: "https://img.icons8.com/ios-filled/100/room-sound.png"
        },
        {
            id: 5,
            name: "Power",
            icon: "https://img.icons8.com/ios/100/power-off-button--v2.png"
        },
        {
            id: 6,
            name: "MultiTasking",
            icon: "https://img.icons8.com/fluency-systems-regular/50/virtual-machine.png"
        },
        {
            id: 7,
            name: "Appearance",
            icon: "https://img.icons8.com/ios/100/cosmetic-brush.png"
        },
        {
            id: 8,
            name: "Ubuntu Desktop",
            icon: "https://img.icons8.com/ios/100/linux-client.png",
            bottomLine: true
        },
        {
            id: 9,
            name: "Apps",
            icon: "https://img.icons8.com/ios-glyphs/30/circled-menu--v2.png"
        },
        {
            id: 10,
            name: "Notofication",
            icon: "https://img.icons8.com/fluency-systems-regular/50/appointment-reminders--v1.png"
        },
        {
            id: 11,
            name: "Search",
            icon: "https://img.icons8.com/ios/100/search--v1.png"
        },
        {
            id: 12,
            name: "Online Accounts",
            icon: "https://img.icons8.com/windows/32/cloud.png"
        },
        {
            id: 13,
            name: "Sharing",
            icon: "https://img.icons8.com/fluency-systems-regular/50/share--v1.png",
            bottomLine: true
        },
        {
            id: 14,
            name: "Mouse & TouchPad",
            icon: "https://img.icons8.com/fluency-systems-regular/50/mouse.png"
        },
        {
            id: 15,
            name: "Keyboard",
            icon: "https://img.icons8.com/material-outlined/24/keyboard.png"
        },
        {
            id: 16,
            name: "Color",
            icon: "https://img.icons8.com/dotty/80/color-palette.png"
        },
        {
            id: 17,
            name: "Printer",
            icon: "https://img.icons8.com/material-outlined/24/print.png",
            bottomLine: true
        },
        {
            id: 18,
            name: "Accessibility",
            icon: "https://img.icons8.com/ios-filled/100/standing-man.png"
        },
        {
            id: 19,
            name: "Privacy & Security",
            icon: "https://img.icons8.com/ios/100/stop-gesture.png"
        },
        {
            id: 20,
            name: "System",
            icon: "https://img.icons8.com/ios-glyphs/90/settings--v1.png"
        }
    ];
    
    

    constructor(){
      super(...arguments);
      this.currentScreen= this.settingsOption[1]
    }

    @action
    setCurrentScreen(index){
        this.currentScreen = this.settingsOption[index]
    }
}
