import { ReactNode } from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
