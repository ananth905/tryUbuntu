// app/helpers/eq.js
import { helper } from '@ember/component/helper';

export default helper(function eq([a, b]) {
  return a === b;
});
