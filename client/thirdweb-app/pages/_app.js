import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { StateContextProvider } from '../context'
import Layout from '../components/layout'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain='goerli'
      desiredChainId={ChainId.Goerli}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
        authUrl: '/api/auth',
      }}
    >
      <StateContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContextProvider>
    </ThirdwebProvider>
  )
}

export default MyApp