import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginPageComponent extends Component {
  @service
  desktopservice;

  @service router;

  @tracked loginTime;
  @tracked loginDate;

  loginPassword = '';
  operstions = [
    {
      logo: '',
      name: 'Suspend',
    },
    {
      logo: '',
      name: 'Restart',
    },
    {
      logo: '',
      name: 'Shutdown',
    },
    {
      logo: '',
      name: 'Diffrent User',
    },
  ];
  constructor(owner, args) {
    super(owner, args);
    this.loginTime = new Date(
      Date.now() + 2 * 60 * 60 * 1000
    ).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
    });
    this.loginDate = new Date(
      Date.now() + 2 * 60 * 60 * 1000
    ).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  goToDesktopPage = () => {
    this.router.transitionTo('desktoppage');
  };
}
