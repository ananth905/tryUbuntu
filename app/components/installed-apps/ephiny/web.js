import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Web extends Component {
    
   previewTabs = [
    { id: 1, name: "Amazon", link: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 2, name: "YouTube", link: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
    { id: 3, name: "Facebook", link: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { id: 4, name: "Google", link: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 5, name: "Netflix", link: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 6, name: "Twitter", link: "https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" },
    { id: 7, name: "LinkedIn", link: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
    { id: 8, name: "Instagram", link: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
    { id: 9, name: "Wikipedia", link: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png" }
  ];
  

    constructor(){
      super(...arguments);
    }

}
