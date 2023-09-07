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
            <div className='info-container'>
                <h1 className='recipe-title'>{values.title}</h1>
                <p className='recipe-category'>{values.category}</p>
                <p className='recipe-description'>{values.description}</p>
                <a className='recipe-link'>Show recipe</a>
            </div>
        </div>
    )
}