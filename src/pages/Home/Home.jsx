import React, { useEffect, useRef } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Banner from '../../component/Banner/Banner';
import WhyPixliaTech from '../../component/Why/Why';
import ExploreOurExpertise from '../../component/ExploreOurExpertise/ExploreOurExpertise';
import LastBanner from '../../component/lastBanner/LastBanner';
import Footer from '../../component/Footer/Footer';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the CSS for Locomotive Scroll

const Home = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            getDirection: true,
            lerp: 0.1, // You can adjust this for smoother or faster scrolling
        });

        // Cleanup on component unmount
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            <Navbar />
            <Banner />
            <WhyPixliaTech />
            <ExploreOurExpertise/>
            <LastBanner/>
            <Footer/>
        </div>
    );
};

export default Home;
