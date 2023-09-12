import PropTypes from 'prop-types';

FavoriteRecipes.propTypes = {
    values: PropTypes.object.isRequired,
};

export function FavoriteRecipes({ values }) {
    return(
        <div className='favorite-card'>
            <div className='favorite-container'>
                <div className='img-container favorite-img'>
                    <img src={values.img} alt='Recipe picture'></img>
                </div>
            </div>
            <div className='favorite-info'>
                <div className="favorite-text">
                    <h1 className='favorite-title'>{values.title}</h1>
                    <p className='favorite-short-desc'>{values.shortDesc}</p>
                </div>
                <button className='recipe-buttons favorite-buttons'>Ir a la Receta</button>
            </div>
        </div>
    )   
}