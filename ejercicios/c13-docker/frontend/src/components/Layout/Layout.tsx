import type {ReactNode} from 'react';
import { Container } from 'react-bootstrap';
import {NavBar} from './Navbar';
import {Footer} from './Footer';

interface LayoutProps { children: ReactNode }

function Layout({ children }: LayoutProps) {
 return (
 <div className="layout">
 <NavBar />
 <Container className="py-4">{children}</Container>
 <Footer />
 </div>
 );
}


export default Layout;