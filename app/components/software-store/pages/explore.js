import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsContainer extends Component {
    myValue = 0

    @tracked
    featuredSnaps=[
        
        {
             link: '/snaps/vivaldi.png',
             name: 'Vivaldi',
           },
           {
             link: '/snaps/vlc.png',
             name: 'Vlc',
           },
        {
             link: '/snaps/vscode.png',
             name: 'Vs Code',
           }
   ]
   
   @tracked 
   snapList =[
    {
      appName: "Firefox",
      developedBy: "Mozilla",
      icon: "https://img.icons8.com/color/48/000000/firefox.png",
      description: "Privacy focused web browser",
      review: 90
    },
    {
      appName: "LibreOffice",
      developedBy: "The Document Foundation",
      icon: "https://img.icons8.com/color/48/000000/libreoffice.png",
      description: "Open-source office suite",
      review: 85
    },
    {
      appName: "GIMP",
      developedBy: "GIMP Team",
      icon: "https://img.icons8.com/color/48/000000/gimp.png",
      description: "Image editing software",
      review: 88
    },
    {
      appName: "VLC Media Player",
      developedBy: "VideoLAN",
      icon: "https://img.icons8.com/color/48/000000/vlc-media-player.png",
      description: "Versatile media player",
      review: 92
    },
    {
      appName: "Inkscape",
      developedBy: "Inkscape Project",
      icon: "https://img.icons8.com/color/48/000000/inkscape.png",
      description: "Vector graphics editor",
      review: 84
    },
    {
      appName: "Thunderbird",
      developedBy: "Mozilla",
      icon: "https://img.icons8.com/color/48/000000/thunderbird.png",
      description: "Email client",
      review: 80
    },
    {
      appName: "Blender",
      developedBy: "Blender Foundation",
      icon: "https://img.icons8.com/color/48/000000/blender-3d.png",
      description: "3D modeling and animation software",
      review: 95
    },
    {
      appName: "Audacity",
      developedBy: "Audacity Team",
      icon: "https://img.icons8.com/color/48/000000/audacity.png",
      description: "Audio editing software",
      review: 89
    },
    {
      appName: "Shotcut",
      developedBy: "Meltytech, LLC",
      icon: "https://img.icons8.com/color/48/000000/shotcut.png",
      description: "Open-source video editor",
      review: 87
    }
  ]
  
  
    @action
    foo() {}
}
