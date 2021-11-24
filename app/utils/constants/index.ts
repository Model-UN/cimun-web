import Globs from '_app/utils/constants/globs';

/**
 * Constants registry to use within this project.
 *
 * To properly use this module, either import AppConstants or the submodule
 * you would like to use.
 *
 * To add a constant, you must register it by adding it to one of the
 * sub-registries contained in AppConstants.
 *
 * Name registries in PascalCase. Constants and sets of constants should be
 * stored in a variable named in UPPERCASE
 *
 * Registry Map:
 * ```
 *    AppConstants
 *    ├─ globs
 *    │  ├─ SITE
 *    │  ├─ API
 * ```
 */
const AppConstants = {
  Globs,
} as const;

export default AppConstants;
