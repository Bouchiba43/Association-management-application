import { MainLayout } from '../src/components/layout/Main-layout'
import '../styles/globals.css'
import '../styles/general.sass';

function MyApp({ Component, pageProps,router }) {
  const isAdminPage = router.pathname.startsWith('/admin');
  if(isAdminPage){
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }else{
    return (
      <>
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </>
    )
  }
}

export default MyApp
