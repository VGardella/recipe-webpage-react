import { useState } from 'react';
import PropTypes from 'prop-types';

LastRecipes.propTypes = {
    values: PropTypes.array.isRequired,
};

export function LastRecipes({ values }) {
    const [ index, setIndex ] = useState(0);

    let prevRecipe = index > 0;
    let nextRecipe = index < values.length - 1;

    function handlePrev() {
        if (prevRecipe) {
            setIndex(index - 1);
        }
        console.log(index);
    }

    function handleNext() {
        if (nextRecipe) {
            setIndex(index + 1)
        }
        console.log(index);
    }

    let recipeImage = values[index];

    return(
        <div className='last-card'>
            <div className='last-container'>
                <div className='img-container last-img'>
                    <button className='slider-button' id='last-button' onClick={handlePrev}>Last</button>
                    <img src={recipeImage.img} style={{ width: 300 }}></img>
                    <button className='slider-button' id='next-button' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}