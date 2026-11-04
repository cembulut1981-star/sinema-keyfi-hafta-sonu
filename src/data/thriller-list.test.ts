import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARTICLES } from './articles';
import { LISTS } from './lists';

test('the new thriller list has one published list and one homepage article', () => {
  const slug = 'best-thriller-movies-since-1990-ranked';
  assert.equal(LISTS.filter(item => item.slug === slug).length, 1);
  assert.equal(ARTICLES.filter(item => item.listSlug === slug).length, 1);
});