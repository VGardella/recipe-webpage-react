export function Footer() {
    return(
        <div className='footer'>
            <div id='signature'>
                <p>Made by Victoria Gardella</p>
            </div>
            <div id='media-links'>
                <a className='external' href='https://github.com/VGardella' alt='Link to GitHub Profile'>
                    <img className='media-icon' id='github' src='../src/assets/github.png'
                        onMouseOver={e => (e.currentTarget.src='../src/assets/github-hover.png')}
                        onMouseOut={e => (e.currentTarget.src='../src/assets/github.png')}
                    ></img>
                </a>
                <a className='external' href='https://www.linkedin.com/in/victoria-macarena-gardella-ruiz-a8bab2234/' alt='Link to LinkedIn Profile'>
                    <img className='media-icon' id='linkedin' src='../src/assets/linkedin.png' alt=''
                        onMouseOver={e => (e.currentTarget.src='../src/assets/linkedin-hover.png')}
                        onMouseOut={e => (e.currentTarget.src='../src/assets/linkedin.png')}
                    ></img>
                </a>
                <a className='external' href='' alt='Send Mail'>
                    <img className='media-icon' id='mail' src='../src/assets/mail.png' alt=''
                        onMouseOver={e => (e.currentTarget.src='../src/assets/mail-hover.png')}
                        onMouseOut={e => (e.currentTarget.src='../src/assets/mail.png')}
                    ></img>
                </a>
            </div>
        </div>
    )
}