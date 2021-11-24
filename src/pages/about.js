import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout location={{pathname: 'about'}}>
            <main className='bg-gray-600'>
                <title>A little bit about myself</title>
                <h1>I'm C.K. Jones</h1>
                <p>this is all the information about me</p>
            </main>
        </Layout>
        
    )

}

export default AboutPage;