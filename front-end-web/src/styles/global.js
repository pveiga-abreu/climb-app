import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: none;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family:'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
   'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


a {
  text-decoration: none;
  color: #333;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #112257;
  transition: background 0.2s;

  :hover {
    background: #112257;
  }
}

html, body, #root {
  height: 100%;
}

body {
  background: #f5f5f5;
  font-family: 'Roboto';
  color: #333;
}

.load {
  cursor: wait;
}
`
