import fs from 'node:fs';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
);

const { name: PLUGIN_NAME, version: PLUGIN_VERSION } = pkg;

export { PLUGIN_NAME, PLUGIN_VERSION };
