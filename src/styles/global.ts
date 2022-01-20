import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4,h5,h6,strong {
  font-weight: 500;
}

body,
input,
select,
textarea,
button {
  font: 400 1.8rem 'Roboto', sans-serif;
}

textarea, input, select {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
