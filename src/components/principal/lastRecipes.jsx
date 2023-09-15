import { useState } from 'react';
import PropTypes from 'prop-types';

LastRecipes.propTypes = {
    values: PropTypes.array.isRequired,
};

export function LastRecipes({ values }) {
    return(
        <div className='last-card'>
            <div className='last-container'>
                <div className='img-container last-img'>
                    <button className='slider-button' id='last-button' onClick={handlePrev}>Last</button>
                    <img src={}></img>
                    <button className='slider-button' id='next-button' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}