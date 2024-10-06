import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel() {
    // Redirect to desktoppage
    this.replaceWith('desktoppage');
  }
}
