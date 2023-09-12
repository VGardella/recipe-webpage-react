import PropTypes from 'prop-types';
import { FavoriteRecipes } from './favoriteRecipes.jsx'

PrincipalPage.propTypes = {
    values: PropTypes.array.isRequired,
};

export function PrincipalPage({ values }) {
    return(
        <div className='principal-container'>
            <div className='favorites-container'>
                {values.map(favorite => 
                    <FavoriteRecipes key={favorite.id} values={favorite} />
                )}
            </div>
        </div>
    )
}