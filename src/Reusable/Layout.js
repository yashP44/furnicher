import React, { useEffect, useState } from 'react';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {

    return (
        <>
            <div className="relative">
                <Header />
                <section className="pt-[152px] md:pt-[100px]">
                    {children}
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Layout


