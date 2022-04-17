import React from 'react';
import Banner from '../Banner/Banner';
import FreeTrail from '../FreeTrail/FreeTrail';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
           <FreeTrail></FreeTrail>
        </div>
    );
};

export default Home;