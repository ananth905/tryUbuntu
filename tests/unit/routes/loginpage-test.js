import { module, test } from 'qunit';
import { setupTest } from 'mx-simulator/tests/helpers';

module('Unit | Route | loginpage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:loginpage');
    assert.ok(route);
  });
});
