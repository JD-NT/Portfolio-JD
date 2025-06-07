import './App.css'
import "tailwindcss";
import KunoWave from './assets/KunoWave.webp'

function Introduction() { return (
    <>
    <section id="intro" class="">
        <div class="bg-lavender-50 border-b-2 border-darkblue-200"> <img src={KunoWave}></img> </div>
        <div class="bg-lavender-50">
        <div class="flex flex-wrap justify-center py-10 sm:px-40">
            <div class="intro-text">
            <h1 class="mb-10">I'm passionate about solving problems creatively while bring flair and pleasing looks for the things I create.</h1>
            <p>I'm John Dale, currently a student in STI College Alabang, I'm looking to work as a web developer and a UI/UX Designer. <br /> <br />
            I am studying Bachelor of Science in Information Technology at STI College Alabang, I enjoy the look of minimalism while loooking similar to sci-fi designs. You can also look through about 
            <a href="#interests"> my hobbies and what I enjoy.</a>
            </p>
        </div>
        </div>
        </div>
        <div id="interests" class="bg-lavender-50 flex flex-wrap justify-center p-25">
        <div class="corner-only w-200">
            <div class="about-section grid-bg">
                <div class="w-70 sm:w-full">
                <h1>My current interests</h1>
                <br />
                <p>When I am not designing or studying, I usually draw pixel art or build model kits in my free time. ദ്ദി(˵ •̀ ᴗ - ˵ )</p>
                <br />
                <p>
                    <p><b>Interests:</b> Sci-fi, Robots, Military, Post-Apocalyptic</p>
                    <p><b>Hobbies:</b> Pixel art, Logo Designing, Model kit building, Camping, Programming</p>
                    <p><b>Fashion:</b> Techwear, Militarycore</p>
                    <p><b>Favorite Characters:</b> Nozomi Tojo, Teto Kasane, Rin Shima, Rice Shower</p>
                    <p><b>Anime:</b> Love Live!, Yuru Camp, Uma Musume: Pretty Derby</p>
                </p>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
    )
}

export default Introduction