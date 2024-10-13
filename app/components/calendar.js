import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
export default class TopSettingContainerComponent extends Component {

  @tracked center;
  @tracked selected = new Date();

  @tracked selectedDateLocaleString;
  @tracked selectedDayName;

  dnd = 0


  constructor() {
    super(...arguments); 
    this.updateLocaleString();
  }

  updateLocaleString(){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = this.selected.toLocaleDateString('en-US', options);  
    this.selectedDateLocaleString = formattedDate;
    const dayName = this.selected.toLocaleDateString('en-US',  { weekday: 'long' });
    this.selectedDayName = dayName;
  }

  @(task(function* ({ date }) {
    yield timeout(6); // Pretend this is an ajax call to the server...
    // ...and that here we update the events somehow
    this.center = date;
  }).drop())
   updateMonth;


   @action
   onSelect(selected) {
     this.selected = selected.date;
     this.updateLocaleString();
   }
}
