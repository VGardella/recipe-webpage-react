export function Header() {
    return(
        <div className='header'>
            <div id='header-top'>
                <img id='logo' src='' alt='My notebook logo!'></img>
                <div id='user-links'>
                    <a href=''>
                        <img id='notifications' src='' alt='' />
                    </a>
                    <a href=''>
                        <img id='user-icon' src='' alt='' />
                    </a>
                    <h3 id='user-name'>Victoria Gardella</h3>
                </div>
            </div>
            <div id='header-bottom'>
                <div id='search'>
                    <button type='submit'>
                        <img src='' alt='' />
                    </button>
                    <input type='search' id='searchbar' />
                </div>
                <div id='page-links'>
                    <a href='' alt='' id=''>Principal</a>
                    <a href='' alt='' id=''>Todas las recetas</a>
                    <a href='' alt='' id=''>Añadir receta</a>
                </div>
            </div>
        </div>
    )
}