import FooterStyles from '../styles/Footer.module.css';



function GetBack(){
    return (
    <svg className={FooterStyles['get-back']} width="88" height="68" viewBox="0 0 88 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path onClick={function(){
            window.scrollTo({
                top:0,
                behavior: 'smooth'
            })
        }}
        d="M44 0L87.3013 67.5H0.69873L44 0Z" fill="#1D1E21"/>
    </svg>
    )
}

function Copyright(){
    return (
        <p className={FooterStyles.copyright}>© 2025 Miguel. All rights reserved.</p>
    )
}

export default function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <GetBack/>
            <Copyright/>
        </div>
    )
}