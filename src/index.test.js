import { assert } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    assert.strictEqual(true, true);
  });
});

describe('index.html', () => {
  it('should wax lyrical', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");

    jsdom.env(index, function (err, window) {
      const para = window.document.getElementsByTagName('p')[0];

      assert.include(para.innerHTML, "rolling centuries");
      done();

      window.close();
    });
  });
});
