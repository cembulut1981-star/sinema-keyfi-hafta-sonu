import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EDITORIAL_SEARCH_QUERY, isEditorialSource } from './editorial-sources';

test('Guardian is searched and its news articles are accepted', () => {
  assert.ok(EDITORIAL_SEARCH_QUERY.includes('site:theguardian.com'));
  assert.equal(isEditorialSource('https://www.theguardian.com/film/2026/oct/27/news'), true);
});

test('Kotaku is searched and its gaming articles are accepted', () => {
  assert.ok(EDITORIAL_SEARCH_QUERY.includes('site:kotaku.com'));
  assert.equal(isEditorialSource('https://kotaku.com/gaming-news'), true);
});

test('unapproved publishers cannot impersonate an accepted source', () => {
  assert.equal(isEditorialSource('https://theguardian.com.example.org/news'), false);
  assert.equal(isEditorialSource('https://kotaku.com.example.org/news'), false);
});