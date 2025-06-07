import './App.css'
import "tailwindcss";
import { useEffect } from 'react';
import Projects from './Projects';
import Footer from './Footer';

function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = './src/TextShuffle.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
        }, []); 
    return (
    <>
    <section id="home" class="">
    <div class="bg-lavender-50 py-5 h-screen flex content-center justify-center halftone-bg">
        <div class="max-width content-center justify-center">
            <div class="corner-only-nowrap">
            <h1 data-value="PORTFOLIO" class="numsection text-image">Port<br class="sm:hidden"/>folio</h1>
            <div class="flex flex-row content-center justify-center"> 
            </div>
            <div class="flex flex-row content-center justify-center">
            <div class="hazard-background-thin-x"></div> <h5 class="my-1 text-center">Graphic Designer & Front-End Developer</h5> <div class="hazard-background-thin-x"></div> 
            </div>
            <div class="flex justify-between my-3"><div class="barblock1"></div> <div class="barblock1 reverse"></div> </div>
            </div>
        </div>
    </div>
    <Projects />
    <Footer />
    </section>
    </>
    )
}

export default Home