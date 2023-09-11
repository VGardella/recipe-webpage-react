import PropTypes from 'prop-types';

// Añadida validación del tipo de prop para evitar mensaje de error. Indica el tipo de prop que se va a usar.

RecipeCard.propTypes = {
    values: PropTypes.object.isRequired,
};

export function RecipeCard({ values }) {
    return(
        <div className='recipe-card'>
            <div className='img-container'>
                <img src={values.img} alt='Recipe picture'></img>
            </div>
            <div className='recipe-container'>
                <div className='info-container'>
                    <h1 className='recipe-title'>{values.title}</h1>
                    <p className='recipe-category'>Categories: {values.category}</p>
                    <p className='recipe-description'>{values.description}</p>
                </div>
                <div className='recipe-buttons'>
                    <button id='open-recipe'>Show recipe</button>
                    <button id='favorites'>Add to Favorites</button>
                </div>
            </div>
        </div>
    )
}