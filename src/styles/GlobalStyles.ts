import { ExecutionProps, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --color-primary: #23262A; // text
  --color-black: #22252A; // button
  --color-black-2: #001833; // headings

  --color-black-08: rgba(0, 0, 0, 0.80); // recipe
  --color-black-50: rgba(0, 0, 0, 0.50); // recipe
  --color-shadow: rgba(0, 0, 0, 0.1);

  --color-secondary: #7E7E7E; // text secondary
  --color-gray: #a9a9a9ba; // pagination arrow
  --color-gray-2: #E0E0E0; // categories;
  --color-gray-3: #3E4462; 

  --color-white: #FFFFFF; // background
  --color-white-2: #FAFAFA; // text

  --color-action: #8BAA36; 
  --color-action-light: #EBF3D4;
}

html {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: var(--color-primary);
  font-weight:400
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  padding: 0;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

` as React.NamedExoticComponent<ExecutionProps & object>;

export default GlobalStyles;
