import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper font_righteous">
                    ORANGE CARAMEL
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;