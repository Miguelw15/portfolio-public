import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import Hero from "@/components/Hero.jsx";
import Projects from '@/components/Projects.jsx';
import { useRef } from "react";

export default function App() {

    const projectsRef = useRef();

    return (
        <>
        <Hero projectsRef={projectsRef}></Hero>
        <Projects projectsRef={projectsRef}></Projects>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}

