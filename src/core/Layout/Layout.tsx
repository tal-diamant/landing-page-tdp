import { ReactNode } from 'react';
import Footer from '../Footer/Footer';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
