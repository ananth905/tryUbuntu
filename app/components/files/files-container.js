import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {

    @tracked currentScreen;
     settingsOption = [
        {
            id: 0,
            name: "Recents",
            icon: "https://img.icons8.com/parakeet-line/96/time-machine.png",
          
        },
        {
            id: 1,
            name: "Starred",
            icon: "https://img.icons8.com/ios-glyphs/90/star--v1.png",
        
        },
        {
            id: 2,
            name: "Home",
            icon: "https://img.icons8.com/forma-thin/96/exterior.png",
        },
        {
            id: 3,
            name: "Desktop",
            icon: "https://img.icons8.com/ios-glyphs/30/imac.png"
        },
        {
            id: 4,
            name: "Documents",
            icon: "https://img.icons8.com/ios/100/document.png"
        },
        {
            id: 5,
            name: "Downloads",
            icon: "https://img.icons8.com/ios/100/downloads.png"
        },
        {
            id: 6,
            name: "Music",
            icon: "https://img.icons8.com/ios-filled/100/musical-notes.png"
        },
        {
            id: 7,
            name: "Pictures",
            icon: "https://img.icons8.com/sf-ultralight/100/image.png"
        },
        {
            id: 8,
            name: "Videos",
            icon: "https://img.icons8.com/ios/100/movie--v1.png",
          
        },
        {
            id: 9,
            name: "Trash",
            icon: "https://img.icons8.com/windows/32/delete-trash.png"
        }
    ];
    
    get currentFolderList(){
        return this[this.currentScreen.name]
      }
    Home={
        Desktop: {
            link: "/filemanager/user-desktop.png",
            id: 101
        },
        Documents: {
            link: "/filemanager/folder-documents.png",
            id: 102
        },
        Download: {
            link: "/filemanager/folder-download.png",
            id: 103
        },
        Music: {
            link: "/filemanager/folder-music.png",
            id: 104
        },
        Pictures: {
            link: "/filemanager/folder-pictures.png",
            id: 105
        },
        Public: {
            link: "/filemanager/folder-publicshare.png",
            id: 106
        },
        Videos: {
            link: "/filemanager/folder-videos.png",
            id: 107
        }
    };
    

    constructor(){
      super(...arguments);
      this.currentScreen= this.settingsOption[0]
    }

    @action
    setCurrentScreen(index){
        this.currentScreen = this.settingsOption[index]
    }
}
