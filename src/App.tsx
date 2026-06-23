import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyles } from './styles/global'
import { Transactions } from './pages/Transaction/Transactions'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}  