import React from 'react'
import NavBar from '../Components/NavBar';
import Mariage3 from '../Assets/mariage3.jpg'
import Mariage4 from '../Assets/mariage4.jpg'
import Mariage5 from '../Assets/mariage5.webp'
import JumbotronMariage from "../Assets/table.jpg"
import '../Styles/MariagePage.css'
import Footer from '../Components/Footer';

const MariagePage = () => {



    return <>
    
        <NavBar/>
        <h1 id='titre-page'>FILM MARIAGE</h1>
        <div className='back-block'>
            <div className='representation'>
                <img src={Mariage3} alt="photomariage" height={600} width={400} />
            </div>
            <div className='representation'>
                <p className='text-cdc'>
                    Plongez dans l'univers magique et émouvant des films de mariage avec Mohamed Henni Production. Nous capturons l'essence de votre grand jour et
                    transformons chaque moment précieux en souvenirs inoubliables à travers nos services vidéo dédiés aux mariages. 
                    Découvrez en détail ce que nous proposons pour immortaliser ce moment unique.
                </p>
                <a href="/apropos"><button id='contact-mariage'>Contactez moi</button></a>
            </div>
        </div>
        <div id='jumbotron-mariage'>
            <p id='jumbotron-text'>Chaque moment de votre mariage immortalisé avec passion par Mohamed Henni Production</p>
        </div>
        <div className='back-block'>
            <div className='representation'>
                <h2> Narration Emotionnelle </h2>
                <p className='text-cdc'>
                    À travers une narration subtile et émouvante, nous racontons l'histoire de votre amour et de votre journée de mariage. 
                    Chaque détail, chaque regard échangé et chaque émotion sont capturés pour créer un récit authentique et touchant qui reflète l'intensité de ce moment unique.
                </p>
            </div>
            <div className='representation'>
                <img src={Mariage4} alt="photomariage" width={400} height={600}/>
            </div>
        </div>
        <div className='back-block'>
            <div className='representation'>
                <img src={Mariage5} alt="photomariage" width={400} height={600}  />
            </div>
            <div className='representation'>
                <h2>Images Cinématographiques</h2>
                <p className='text-cdc'>
                    Nos cinéastes professionnels utilisent des techniques cinématographiques de pointe pour donner à votre film de mariage un aspect visuel digne d'une production hollywoodienne.
                    Des plans soigneusement composés aux jeux de lumière subtils, chaque image est pensée pour créer une atmosphère enchanteresse et captivante.
                </p>
            </div>
        </div>
        <Footer/>
    </>

}



export default MariagePage ;