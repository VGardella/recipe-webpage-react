import PropTypes from 'prop-types';
import { RecipeCard } from './recipeCard.jsx'

Recipes.propTypes = {
    values: PropTypes.array.isRequired,
};

export function Recipes({ values }) {
    return(
        <div className='principal-container'>
            <h1 className='principal-title'>All recipes:</h1>
            <div className='recipes-container'>
                {values.map(recipe =>
                    <RecipeCard key={recipe.id} values={recipe} />
                )}
            </div>
        </div>
    )
}