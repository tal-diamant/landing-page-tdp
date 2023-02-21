import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
