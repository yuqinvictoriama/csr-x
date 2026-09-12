import assert from "node:assert/strict";
import test from "node:test";

// Start npm run dev, then run:
// CSRX_DEV_URL=http://localhost:3001 node --test tests/local-pages.test.mjs
const origin = process.env.CSRX_DEV_URL;

test("local homepage serves the current app instead of legacy index.html", { skip: !origin }, async () => {
  const response = await fetch(new URL("/", origin));
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /id="meet-the-team"/);
  assert.match(html, /Meet the team/);
  assert.match(html, /class="admin-orbit-node"/);
  const browserEntry = html.match(/<script[^>]+src="([^"]*entry-browser[^"]*)"/);
  assert.ok(browserEntry, "current app must include its client hydration entry");
  const script = await fetch(new URL(browserEntry[1], origin));
  assert.equal(script.status, 200);
  assert.match(script.headers.get("content-type"), /javascript/);
});

test("cohort routes also serve current data with or without a trailing slash", { skip: !origin }, async () => {
  for (const path of ["/2026-cohorts", "/2026-cohorts/"]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /ECON 01/);
    assert.doesNotMatch(html, /ECON 03/);
  }
});
