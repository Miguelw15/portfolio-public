import ContactStyles from '../styles/Contact.module.css';
import WDiscord from '../assets/WDiscord.svg';
import WInstagram from '../assets/WInstagram.svg';
import WLinkedIn from '../assets/WLinkedIn.svg';
import WGitHub from '../assets/WGitHub.svg';

function Tittle() {
    return (
        <h1 className='tittle'>Contact</h1>
    )
}

function SendMessage(){
    return (
        <div className={ContactStyles['message']}>
            <div className={ContactStyles['message-email']}>
                <label for='email'>Email</label>
                <input type="email" name='email'/>
            </div>
            
            <div className={ContactStyles['message-text']}>
                <label for="message">Message</label>
                <textarea/>
            </div>
            
            <button type='submit' className={ContactStyles['send-message']}>
                SEND
            </button>
        </div>
    )
}


function Information(){
    return (
        <div className={ContactStyles.information}>
            <div className={ContactStyles['call-action']}>
                <h3>
                    Did you like the content?
                </h3>
                <p>
                    Then follow me and join my server to keep up with all the updates or just have a chat with me!
                    If you prefer, you can also send an email to the address right next to this. I’m always available to talk or help!
                    See you there! 
                </p>
            </div>
            <div className={ContactStyles['social-medias']}>
                <div className={ContactStyles['social-media']}>
                    <img src={WLinkedIn} alt="LinkedIn"/>
                    <h3>LinkedIn</h3>
                </div>
                <div className={ContactStyles['social-media']}>
                    <img src={WDiscord} alt="Discord Server"/>
                    <h3>Discord Server</h3>
                </div>
                <div className={ContactStyles['social-media']}>
                    <img src={WInstagram} alt="Instagram"/>
                    <h3>Instagram</h3>
                </div>
                <div className={ContactStyles['social-media']}>
                    <img src={WGitHub} alt="GitHub"/>
                    <h3>GitHub</h3>
                </div>
            </div>
        </div>
    )
}

export default function Contact(){
    return(
        <div className={ContactStyles.contact}>
            <Tittle/>
            <div className={ContactStyles.content}>
                <SendMessage/>
                <Information/>
            </div>
        </div>
    )
}