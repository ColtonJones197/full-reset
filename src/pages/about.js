import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout location={{pathname: 'about'}}>
            <main>
                <div className="h-4/5 text-lg">
                    <title>About</title>
                    <h1 className="flex justify-center mb-4">About</h1>
                    <p className="flex justify-center mb-4">My name is Colton Jones and I'm a software development professional born, raised, and living in the state of Kansas.
                        This site exists mainly so that I can organize my thoughts and share them with others.
                    </p>
                    <h3 className="flex justify-center">Interests and activities</h3>
                    <p className="flex justify-center mb-2">My main current interest is growth and how both individuals and teams achieve that. I think it's important
                        to study successful people and break down what got them to where they are. This includes any discipline, but mostly I find myself studying 
                        members of the world of tech, academia, sports, and esports.</p>
                    <p className="flex justify-center mb-2">I have a love for art and design, particularly in the fields of web development, game design,
                        data visualization, graphic design, and pretty much anything that looks cool.</p>
                    <p className="flex justify-center mb-4">I also have some typical nerd hobbies. I play magic the gathering and compete in offline fighting game tournaments.
                        I like to play table tennis or pickleball when I have the right crew to play with. I have a group that I regularly play dungeons and dragons with.</p>
                    <h3 className="flex justify-center">Life View</h3>
                    <p className="flex justify-center mb-4"> I think it's important to acknowledge that people are products of their environments and that it's important
                        in most cases to not blame individuals for unwanted behavior but instead blame systems.
                        I think a big problem that a lot of people face is finding motivation to live their every day lives.
                        It can lead to burnout for many and can lead to crises at any stage of life for people and I have made it a goal to be someone that helps others
                        find that purpose.</p>
                    <h3 className="flex justify-center">Politics</h3>
                    <p className="flex justify-center mb-4">This is a fourth paragraph, it goes over politics a bit</p>
                </div>
            </main>
        </Layout>
        
    )

}

export default AboutPage;