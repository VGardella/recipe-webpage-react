export function Header() {
    return(
        <div className='header'>
            <div className='header-section' id='header-top'>
                <img className='user-info' id='logo' src='assets/logo.png' alt='My notebook logo!'></img>
                <div id='user-links'>
                    <a href=''>
                        <img className='user-info' id='notifications' src='assets/notification.png' alt='Notification icons created by Aldo Cervantes - Flaticon'
                        onMouseOver={e => (e.currentTarget.src = 'assets/notification-hover.png')}
                        onMouseOut={e => (e.currentTarget.src = 'assets/notification.png')}/>
                    </a>
                    <div className="user">
                        <a href=''>
                            <img className='user-info' id='user-icon' src='assets/profile-icon.png' alt='' />
                        </a>
                        <div id="user-greeting">
                            <p className='user-info' id='user-hi'>Buenos días,</p>
                            <h3 className='user-info' id='user-name'>Victoria Gardella!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-section' id='header-bottom'>
                <div id='search'>
                    <button type='submit' id='search-button'>
                        <img id='search-img' src='assets/magnifying_glass.png' alt='Haceme click para buscar una receta!' />
                    </button>
                    <input type='search' id='searchbar' />
                </div>
                <div id='page-links'>
                    <a href='' alt='' id=''>
                        <img className='link-img' src='assets/principal.png'></img>
                        Principal
                    </a>
                    <a href='' alt='' id=''>
                        <img className='link-img' src='assets/all-recipes-cookie.png'></img>
                        Todas las recetas</a>
                    <a href='' alt='' id=''>
                        <img className='link-img' src='assets/add-recipe.png'></img>
                        Añadir receta</a>
                </div>
            </div>
        </div>
    )
}