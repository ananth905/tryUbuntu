import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {
  @tracked currentScreen;
  @tracked currentFolderList;

  @tracked pwd;

  settingsOption = [
    {
      id: 0,
      name: 'Recents',
      icon: 'https://img.icons8.com/parakeet-line/96/time-machine.png',
    },
    {
      id: 1,
      name: 'Starred',
      icon: 'https://img.icons8.com/ios-glyphs/90/star--v1.png',
    },
    {
      id: 2,
      name: 'Home',
      icon: 'https://img.icons8.com/forma-thin/96/exterior.png',
    },
    {
      id: 3,
      name: 'Desktop',
      icon: 'https://img.icons8.com/ios-glyphs/30/imac.png',
    },
    {
      id: 4,
      name: 'Documents',
      icon: 'https://img.icons8.com/ios/100/document.png',
    },
    {
      id: 5,
      name: 'Downloads',
      icon: 'https://img.icons8.com/ios/100/downloads.png',
    },
    {
      id: 6,
      name: 'Music',
      icon: 'https://img.icons8.com/ios-filled/100/musical-notes.png',
    },
    {
      id: 7,
      name: 'Pictures',
      icon: 'https://img.icons8.com/sf-ultralight/100/image.png',
    },
    {
      id: 8,
      name: 'Videos',
      icon: 'https://img.icons8.com/ios/100/movie--v1.png',
    },
    {
      id: 9,
      name: 'Trash',
      icon: 'https://img.icons8.com/windows/32/delete-trash.png',
    },
  ];

  get() {
    return this[this.currentScreen.name];
  }
  Home = {
    id: 2,
    name: 'Home',
    icon: 'https://img.icons8.com/forma-thin/96/exterior.png',
    subFolder: {
      Desktop: {
        icon: '/filemanager/user-desktop.png',
        id: 101,
        name: 'Dektop',
      },
      Documents: {
        icon: '/filemanager/folder-documents.png',
        id: 102,
        name: 'Documents',
      },
      Download: {
        icon: '/filemanager/folder-download.png',
        id: 103,
        name: 'Download',
        subFolder: {
          FaceBook: {
            icon: '/filetypes/application-apk.png',
            id: 103.1,
            name: 'FaceBook',
          },
          Profile: {
            icon: '/filetypes/application-pdf.png',
            id: 103.2,
            name: 'sample Pdf',
          },
          Application: {
            icon: '/filetypes/application-json.png',
            id: 103.2,
            name: 'Application',
          },
        },
      },
      Music: {
        icon: '/filemanager/folder-music.png',
        id: 104,
        name: 'Music',
      },
      Pictures: {
        icon: '/filemanager/folder-pictures.png',
        id: 105,
        name: 'Picture',
      },
      Public: {
        icon: '/filemanager/folder-publicshare.png',
        id: 106,
        name: 'Public',
      },
      Videos: {
        icon: '/filemanager/folder-videos.png',
        id: 107,
        name: 'Videos',
      },
    },
  };

  constructor() {
    super(...arguments);
    this.currentScreen = this.settingsOption[2];
    this.currentFolderList = this[this.currentScreen.name];
    this.pwd = this.currentScreen.name;
  }

  @action
  setCurrentScreen(index) {
    this.currentScreen = this.settingsOption[index];
  }

  @action
  changeDirectory(Folder, key) {
    this.currentFolderList = Folder;
    this.pwd = `${this.pwd}  /  ${key}`;
  }
  @action
  goBack() {
    this.pwd = this.pwd.split('/').slice(0, -1).join('/');
    let parentDir = {};
    this.pwd.split('/').forEach((dir) => {
      dir = dir.trim();
      parentDir = parentDir.subFolder?.[dir] ?? this[dir];
    });
    this.currentFolderList = parentDir;
  }
}
