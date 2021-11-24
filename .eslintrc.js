module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Clarifications are provided for each suppression

    /**
     * Forcing the use of default export affects readability and
     * comprehensibility, especially in locally created package/module code -
     * exporting at the discretion of the author is generally much
     * more readable and appropriate in many cases
     */
    'import/prefer-default-export': 'off',
    /**
     * Forcing <a> to have an href attribute directly conflicts with
     * NextJS's next/link Link element best practices. In this project, Use
     * next/link's Link with valid attributes with a bare <a> child element.
     */
    'jsx-a11y/anchor-is-valid': 'off',
    /**
     * The default, for some reason, is to have a space between the closing
     * bracket and the slash. This creates code that looks like `<br/ >`.
     * IMHO, this is repulsive, so I am confidently declaring the use of
     * whitespace before the self-closing slash instead - `<br />`
     */
    'react/jsx-tag-spacing': [1, {
      closingSlash: 'never', // <Element>< /Element> or <Element/ >
      afterOpening: 'never', // < Element></ Element> or < Element/>
      beforeClosing: 'never', // <Element ></Element >
      beforeSelfClosing: 'always', // <Element />
    }],
    /**
     * Function components are superior, that is all.
     */
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /**
     * It's really up to the project maintainers to say what is and is not
     * 'restricted' in a language, tbh. Just do good code reviews is what I say.
     */
    'no-restricted-syntax': 'off',
  },
};
