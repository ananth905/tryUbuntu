import { module, test } from 'qunit';
import { setupTest } from 'mx-simulator/tests/helpers';

module('Unit | Service | common-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:common-service');
    assert.ok(service);
  });
});
