import HeroStyles from '../styles/Hero.module.css';
import profile_photo from '../assets/Photo.svg';
import discIcon from '../assets/Discord.svg';
import gitIcon from '../assets/GitHub.svg';
import instaIcon from '../assets/Instagram.svg';
import linkIcon from '../assets/LinkedIn.svg';
import CV from '../assets/CV.pdf';

function Photo(){
    return (
        <div className={HeroStyles.profile_photo}>
            <img 
            src={profile_photo}
            alt="Miguel"
            />
        </div>
    )
}

function Name(){
    return (
        <div className={HeroStyles.welcome}>
            <h1>I'm<span > Miguel </span>Gonçalves</h1>
            <h2 className={HeroStyles.profession}>DEV FULL STACK JUNIOR</h2>
        </div>
    )
}

function Info(){
    return (
        <main>
            <p>
                Olá, sou desenvolvedor com experiência
                em criação de páginas web usando HTML,
                CSS, JavaScript e React, e no desenvolvimento de 
                aplicativos e bancos de dados com SQL e PostgreSQL,
                além de utilizar Python e PHP para soluções de back-end.
                Tenho também experiência intermediária em UI Design,
                focando sempre na criação de interfaces intuitivas
                e funcionais. <br/>
                Sou cristão e acredito em Jesus Cristo,
                em Sua vinda, presença e retorno.
            </p> 
        </main>
    )
}


function SocialMedias(){
    return (
        <div className={HeroStyles['social-medias']}>
            <a target='_blank' rel="noopener noreferrer" href="">
                <img src={discIcon} alt="Discord Server"/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/Miguelw15">            
                <img src={gitIcon} alt="GitHub"/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/slk_migel/?hl=pt-br">
                <img src={instaIcon} alt="Instagram"/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/miguel-gonçalves-1b7494257/">
                <img src={linkIcon} alt='LinkedIn'/>
            </a>
        </div>
    )
}

function DownloadCV(){
    return (
        <a className={HeroStyles['download-CV']} href={CV}>Download CV</a>
    )
}

export default function Hero(){
    return (
        <div className={HeroStyles.hero}>
            <div className={HeroStyles['content']}>
                <Name></Name>
                <Info></Info>
                <div className={HeroStyles['content-footer']}>
                    <SocialMedias></SocialMedias>
                    <DownloadCV></DownloadCV>
                </div>
            </div>
            <Photo></Photo>
        </div>
        
    )
}