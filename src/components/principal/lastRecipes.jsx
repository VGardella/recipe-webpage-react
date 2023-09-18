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
        else if (!prevRecipe) {
            setIndex(values.length - 1)
        }
    }

    function handleNext() {
        if (nextRecipe) {
            setIndex(index + 1)
        }
        else if (!nextRecipe) {
            setIndex(0);
        }
    }

    let recipeImage = values[index];

    return(
        <div className='img-container last-img'>
            <button className='slider-button' id='last-button' onClick={handlePrev}> {'\u003C'} </button>
            <img src={recipeImage.img}></img>
            <div className='last-info'>
                <p id='last-title'>Últimas recetas: {recipeImage.title}</p>
                <p id='last-short-desc'>{recipeImage.shortDesc}</p>
            </div>
            <button className='slider-button' id='next-button' onClick={handleNext}> {'\u003E'} </button>
        </div>
    )
}