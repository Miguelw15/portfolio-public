import ContactStyles from '../styles/Contact.module.css';
import WDiscord from '../assets/WDiscord.svg';
import WInstagram from '../assets/WInstagram.svg';
import WLinkedIn from '../assets/WLinkedIn.svg';
import WGitHub from '../assets/WGitHub.svg';
import { useState } from 'react';
import CheckMark1 from "../assets/CheckMark1.png";
import CheckMark2 from "../assets/CheckMark2.png";
import ErrorSendingMessage from "../assets/Error.png";
import { useScrollAnimation } from '../scripts/useScrollAnimation';

function Tittle() {
    return (
        <h1 className='tittle'>Contact</h1>
    )
}

function MessageSending() {

    return (
        <div className={ContactStyles.message_sending_wrapper}>
            <div className={ContactStyles.message_sending}></div>
        </div>
    )
}


function SendMessage(){

    const [messageWasSent, setMessageWasSent] = useState(false);
    const [wasSuccesfull, setWasSuccesful] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        
        const email = e.target.email.value;
        const message = e.target.message.value;
        
        if (!email && !message) return;

        setMessageWasSent(true);
        const response = await fetch(import.meta.env.VITE_SERVER_URL  || "http://localhost:3000", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, message })
        });
        
        const jsonResponse = await response.json();

        setWasSuccesful(jsonResponse.success);

    }

    
    return (
        
        <form onSubmit={handleSubmit} className={ContactStyles['message']}>
            { !messageWasSent ? 
            <>
            <div className={ContactStyles['message-email']}>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' id='email' required/>
  
            </div>
            
            <div className={ContactStyles['message-text']}>
                <label htmlFor="message">Message</label>
                <textarea name='message' id='message' required/>
            </div>
            
            <button type='submit' className={ContactStyles['send-message']}>
                SEND
            </button>
            </>
            : 
        <> {wasSuccesfull === null ? 
            <MessageSending/>
            : wasSuccesfull === true ?
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "5px",
                width: "100%",
                height: "100%",
            }}>
               <img  src={CheckMark1}></img>
               <p>Mensagem enviada com sucesso!</p>
            </div>
             : <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "5px",
                width: "100%",
                height: "100%",
            }}>
               <img  src={ErrorSendingMessage}></img>
               <p>Erro ao enviar a mensagem!</p>
            </div>

        }
            
        </>
    }
        </form>
        
    )
}


function Information(){
    return (
        <div className={ContactStyles.information}>
            <div className={ContactStyles['call-action']}>
                <h3>
                    Gostou do conteúdo?
                </h3>
                <p>
                    Então, siga-me e entre no meu servidor para ficar por dentro de todas as novidades ou simplesmente bater um papo comigo!
                    Se preferir, você também pode enviar um email. Estou sempre disponível para conversar ou ajudar!
                    Te vejo lá!
                </p>
            </div>
            <div className={ContactStyles['social-medias']}>
                <a target='_blank' href={import.meta.env.VITE_LINKEDIN_URL} className={ContactStyles['social-media']}>
                    <img src={WLinkedIn} alt="LinkedIn"/>
                    <h4>LinkedIn</h4>
                </a>
                {/*<div className={ContactStyles['social-media']}>
                    <img src={WDiscord} alt="Discord Server"/>
                    <h3>Discord Server</h3>
                </div>*/}
                <a target='_blank' href={import.meta.env.VITE_INSTAGRAM_URL} className={ContactStyles['social-media']}>
                    <img src={WInstagram} alt="Instagram"/>
                    <h4>Instagram</h4>
                </a>
                <a target='_blank' href={import.meta.env.VITE_GITHUB_URL} className={ContactStyles['social-media']}>
                    <img src={WGitHub} alt="GitHub"/>
                    <h4>GitHub</h4>
                </a>
            </div>
        </div>
    )
}

export default function Contact(){
    useScrollAnimation();
    return(
        <div className={`${ContactStyles.contact} hidden`}>
            <Tittle/>
            <div className={ContactStyles.content}>
                <SendMessage/>
                <Information/>
            </div>
        </div>
    )
}