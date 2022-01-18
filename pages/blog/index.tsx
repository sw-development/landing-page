import React from 'react'
import Navigation from '@/../../components/Navigation/index';
import Footer from '@/../../components/Footer';
import Subscribe from '@/../../components/Subscribe';
import Blog from '@/../../components/Blog';


const index = () => {
    return (
        <>
            <Navigation />
            <Blog />
            <Subscribe />
            <Footer />
        </>
    )
}

export default index
