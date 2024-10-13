import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'mx-simulator/config/environment';
import { registerDateLibrary } from 'ember-power-calendar';
import DateUtils from 'ember-power-calendar-luxon';
import 'ember-power-calendar/styles';

registerDateLibrary(DateUtils);
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
