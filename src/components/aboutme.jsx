import React from 'react';
import './aboutme.css';

const aboutme = () => {
    return (
        <div className='aboutme bg-dark text-light p-5' id='AboutMe'>
            <div className='container'>
                <h3>About me</h3><br />
                <div className='row'>
                    <div className=''>
                        <p id='para'>
                            Greetings, fellow internet wanderers! I'm your friendly neighborhood coder on a quest to make the digital realm a better place, one pixel at a time. By day, I'm a web developer, crafting elegant and functional websites with the magic of Java, JavaScript, .NET, and more.
                            By evening, I'm trying to be a body builder 💪, and by night, I'm a digital superhero, scoundering and rescuing websites from the clutches of bugs and glitches (i.e., working on open sources or trying to work at least 😛). When I'm not saving the day in front of my screen, you'll find me sipping on a cup of code-infused coffee or exploring the latest programming realms. If you seek a developer who brings both skill and a dash of quirk to the table, your quest ends here!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutme;
