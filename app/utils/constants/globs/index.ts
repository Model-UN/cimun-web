import SITE from '_app/utils/constants/globs/SITE';
import API from '_app/utils/constants/globs/API';

/**
 * Global constants submodule
 *
 * Can be accessed by importing `globs`, or from AppConstants.globs.
 */
const Globs = {
  SITE,
  API,
} as const;

export default Globs;
