import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export const MainLayout = ({ children }) => {
    return (
        <div className='main-layout'>
            <Header className='main-layout-header' />
            <main className='main-layout-main'>{children}</main>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <Footer className='main-layout-footer' />
        </div>
    );
}
