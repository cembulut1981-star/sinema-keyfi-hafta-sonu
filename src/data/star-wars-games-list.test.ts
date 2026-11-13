import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LISTS } from './lists';

test('the Star Wars games list numbers its ten entries 1 to 10 for the ranking headings', () => {
  const list = LISTS.find((item) => item.slug === 'best-star-wars-games-ever-ranked');
  assert.ok(list, 'the Star Wars games list must exist');
  const headings = (list!.body.match(/^## .+$/gm) ?? []).map((line) => line.replace(/^## /, ''));
  const numbers = headings.map((heading) => Number(heading.match(/^(\d+)\./)?.[1] ?? NaN));
  assert.deepEqual(numbers.slice(0, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.ok(Number.isNaN(numbers[10]), 'the closing section must stay unnumbered');
});
