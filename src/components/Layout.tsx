import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className={className}>
      <div>{children}</div>
      <NavBar />
    </div>
  );
};

export default Layout;
