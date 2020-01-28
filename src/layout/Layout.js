import React from 'react'
import NavMenu from './NavMenu';
import Footer from './Footer';
import './../assets/css/styles.css';

 const Layout = ({children, ...rest}) => {
    return (
        <div className="main">
            <div className="header">
                <NavMenu />
            </div>
    
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;