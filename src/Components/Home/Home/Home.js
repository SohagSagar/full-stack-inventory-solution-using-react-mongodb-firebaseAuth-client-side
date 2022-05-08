import React from 'react';
import ReactSlider from '../../ReactSlider/ReactSlider'
import BeAPartner from '../BeAPartner/BeAPartner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <ReactSlider/>
            <InventoryItems/>
            <BeAPartner/>

        </div>
    );
};

export default Home;