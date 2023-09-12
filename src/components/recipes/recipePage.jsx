import PropTypes from 'prop-types';
import { RecipeCard } from './recipeCard.jsx'

Recipes.propTypes = {
    values: PropTypes.array.isRequired,
};

export function Recipes({ values }) {
    return(
        <div className='principal-container'>
            <div className='section-banner' id='all-recipes-banner'>
                <h1 className='section-title' id='all-recipes-title'>Todas las Recetas</h1>
            </div>
            <div className='recipes-container'>
                {values.map(recipe =>
                    <RecipeCard key={recipe.id} values={recipe} />
                )}
            </div>
        </div>
    )
}