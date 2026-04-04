import meta from './meta';
import noBroadSemanticVersioning from './rules/no-broad-semantic-versioning';
import noHttpUrl from './rules/no-http-url';
import noJsInTsProject from './rules/no-js-in-ts-project';
import noSecretInfo from './rules/no-secret-info';
import noTimerMagicNumbers from './rules/no-timer-magic-numbers';

export default {
  meta,
  rules: {
    'no-broad-semantic-versioning': noBroadSemanticVersioning,
    'no-http-url': noHttpUrl,
    'no-js-in-ts-project': noJsInTsProject,
    'no-secret-info': noSecretInfo,
    'no-timer-magic-numbers': noTimerMagicNumbers,
  },
};
