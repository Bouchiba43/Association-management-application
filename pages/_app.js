import { MainLayout } from '../src/components/layout/Main-layout'
import '../styles/globals.css'
import '../styles/general.sass';
import '../styles/background.css'

function MyApp({ Component, pageProps,router }) {
    return (
      <>
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </>
    )
  }


export default MyApp
