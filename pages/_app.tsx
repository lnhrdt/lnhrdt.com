import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import type {AppProps} from 'next/app'
import {teal} from '@mui/material/colors'
import Head from 'next/head'

const theme = createTheme({
    palette: {background: {default: teal[200]}},
})

const App = ({Component, pageProps}: AppProps) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Head>
            <title>Leonhardt Koepsell</title>
            <meta name="description" content="Homepage for Leonhardt Koepsell"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App
