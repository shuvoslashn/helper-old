import React from 'react';
import FreeTrial from '../components/FreeTrial';
import Hero from '../components/Hero';
import HowWeWork from '../components/HowWeWork';
import Layout from '../components/Layout/Layout';
import ServiceSlider from '../components/ServiceSlider';

const Homepage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <ServiceSlider
                    name='Featured Services'
                    subname='Explore our great services now'
                    rating={4.7}
                    color='bg-light'
                    api='https://dummyjson.com/products'
                />
                <ServiceSlider
                    name='Popular Services'
                    subname='Explore our great services now'
                    rating={3}
                    color=''
                    api='https://dummyjson.com/products'
                />
                <HowWeWork />
                <FreeTrial />
            </Layout>
        </>
    );
};

export default Homepage;
