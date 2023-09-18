import PropTypes from 'prop-types';
import { FavoriteRecipes } from './favoriteRecipes.jsx'
import { LastRecipes } from './lastRecipes.jsx';

PrincipalPage.propTypes = {
    values: PropTypes.array.isRequired,
};

export function PrincipalPage({ values }) {
    return(
        <div className='principal-container'>
            <div className='section-banner' id='principal-banner' alt='Foto de Klaus Nielsen en Pexel'>
                <h1 className='section-title' id='principal-title'>Principal</h1>
            </div>

            <div className='page-presentation'>
                <p> Cree esta aplicación para permitirte almacenar y revisar con facilidad todas
                    las recetas que tengas, que puedas encontrar la que buscas y puedas luego guardarla
                    o imprimirla. Espero que te sirva!
                </p>
            </div>

            <div className="last">
                <div className='last-container'>
                    <LastRecipes values={values} />
                </div>
            </div>
            <div className="favorites">
                <h2 className='subsection-title'>Mis recetas favoritas:</h2>
                <hr></hr>
                <div className='favorites-container'>
                    {values.map(favorite =>
                        <FavoriteRecipes key={favorite.id} values={favorite} />
                    )}
                </div>
            </div>
        </div>
    )
}