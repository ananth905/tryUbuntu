import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class ContextMenuComponent extends Component {

  @service('common-service') common;

  
  @tracked isVisible = false;
  @tracked domElement;

  @action
  customDidInsert(event) {
    this.domElement = $(event);
    this.setContextPosition();
  }

  @action
  setContextPosition() {
    this.domElement.css({
      top: this.args.clickedEvent.pageY - this.args.clickedEvent.offsetY + 'px',
      left:
        this.args.clickedEvent.pageX - this.args.clickedEvent.offsetX + 'px',
    });
  }

  @action
  contextAction(){
    this.common.showContextMenu = false
  }
}
