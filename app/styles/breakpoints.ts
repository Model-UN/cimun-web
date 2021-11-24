import { css, CSSObject } from 'styled-components';

export const breakpoints = (
  // the CSS property to apply to the breakpoints
  cssProp = 'padding',
  // the units of the CSS property (can set equal to "" and apply units to values directly)
  cssPropUnits = 'px',
  // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen
  // breakpoint, 60 (value) = CSS prop breakpoint
  values: Array<Record<number, number | string>> = [],
  // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
  mediaQueryType = 'max-width',
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (`${+mediaQueries}
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, '');

  return css([breakpointProps] as unknown as CSSObject);
};
