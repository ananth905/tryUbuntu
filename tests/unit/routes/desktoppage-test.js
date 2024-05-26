import { module, test } from 'qunit';
import { setupTest } from 'mx-simulator/tests/helpers';

module('Unit | Route | desktoppage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:desktoppage');
    assert.ok(route);
  });
});
