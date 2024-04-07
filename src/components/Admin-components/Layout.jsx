import Header from './Header';
import Footer from './Footer';

export default function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
