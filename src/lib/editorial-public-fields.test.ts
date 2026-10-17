import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PUBLIC_EDITORIAL_COLUMNS } from './editorial-public-fields';

test('public article queries request only columns granted to anonymous readers', () => {
  const migration = readFileSync(new URL('../../drizzle/migrations/0001_secure_editorial_media_and_public_columns.sql', import.meta.url), 'utf8');
  const grant = migration.match(/GRANT SELECT\(([^)]+)\) ON public\.editorial_posts TO anon/);
  assert.ok(grant);
  assert.deepEqual(PUBLIC_EDITORIAL_COLUMNS.split(','), grant[1].split(','));
  for (const field of ['source_url', 'source_text', 'failure']) {
    assert.equal(PUBLIC_EDITORIAL_COLUMNS.split(',').includes(field), false);
  }
});