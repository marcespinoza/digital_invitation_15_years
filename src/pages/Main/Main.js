import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Musica, Education, Experience, Projects, Fiesta, DressCode } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Mis 15 - {headerData.name}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Musica />
            <Fiesta/>
            <Experience />
            <DressCode />
            <Projects/>
            <Footer />
        </div>
    )
}

export default Main
