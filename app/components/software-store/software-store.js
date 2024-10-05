import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {

    @tracked currentScreen;
     settingsOption = [
        {
            id: 0,
            name: "Explore",
            icon: "https://img.icons8.com/external-others-iconmarket/64/external-compas-navigation-others-iconmarket-2.png",
            component:"explore"
        },
        {
            id: 1,
            name: "Featured",
            icon: "https://img.icons8.com/ios/100/star--v1.png",
            
        },
        {
            id: 2,
            name: "Productivity",
            icon: "https://img.icons8.com/ios/100/clock--v1.png",
            
        },
        {
            id: 3,
            name: "Development",
            icon: "https://img.icons8.com/ios/100/maintenance--v1.png"
        },
        {
            id: 4,
            name: "Games",
            icon: "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-game-console-games-dreamstale-lineal-dreamstale.png"
        }
    ];


    

    constructor(){
      super(...arguments);
      this.currentScreen= this.settingsOption[0]
    }

    @action
    setCurrentScreen(index){
        this.currentScreen = this.settingsOption[index]
    }
}
