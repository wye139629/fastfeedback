import { ProvideAuth } from 'lib/auth'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
        <ProvideAuth>
          <Component {...pageProps} />
        </ProvideAuth>
    </ChakraProvider>
  )
}

export default MyApp
