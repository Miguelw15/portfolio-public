import HeroStyles from '../styles/Hero.module.css';
import profile_photo from '../assets/Photo.svg';
import discIcon from '../assets/Discord.svg';
import gitIcon from '../assets/GitHub.svg';
import instaIcon from '../assets/Instagram.svg';
import linkIcon from '../assets/LinkedIn.svg';
import CV from '../assets/CV.pdf';
import { useScrollAnimation } from '../scripts/useScrollAnimation';

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
            <h2 className={HeroStyles.profession}>DESENVOLVEDOR FULL STACK</h2>
        </div>
    )
}

function Info(){
    return (
        <main>
            <p>
                Desenvolvedor web focado em React, Next.js e Node.js.
                Crio aplicações modernas, performáticas e escaláveis.
            </p> 
        </main>
    )
}


function SocialMedias(){
    return (
        <div className={HeroStyles['social-medias']}>
            {/*<a target='_blank' rel="noopener noreferrer" href="">
                <img src={discIcon} alt="Discord Server"/>
            </a>*/}
        
            <a target='_blank' rel="noopener noreferrer" href={import.meta.env.VITE_GITHUB_URL}>            
                <img src={gitIcon} alt="GitHub"/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href={import.meta.env.VITE_INSTAGRAM_URL}>
                <img src={instaIcon} alt="Instagram"/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href={import.meta.env.VITE_LINKEDIN_URL}>
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
   useScrollAnimation();
    
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