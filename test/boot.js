import helperFixture from './lib/fixture';
import observer from '../src/shared/document-observer';

afterEach(function () {
  // Ensure perf tests have enough time to cleanup after themselves.
  this.timeout(120000);
  observer.unregister();
  helperFixture('');
});
