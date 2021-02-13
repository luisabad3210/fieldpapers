import React from 'react'
import ToolsImg from '../images/Croods_The_Feedback.png'

const Tools = () => {
    return (
        <div className='Tools'>


            <div className='welcomeContainer'>
                <div className='welcomeLeft'>
                <h1>Advanced Tools</h1>
                <p>
                    Field Papers offers several automation and map customization tools. These tools and workflows are provided for technical users and limited to no support is provided. If a feature is important to you, we're available for hire. Send a request to info@stamen.com describing your proposal.
                </p>
                <button className='logInBtn'>Get Started</button>
                </div>
    
                <div className='welcomeRight'>
                <img src={ToolsImg} alt='' title='' width='350px' height='200px'/>
                </div>
            </div>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1 className='numbered'>
                        1
                    </h1>

                    <p>
                        Atlas Template Tool - Field Papers includes a HTML form based template API that you can host anywhere and populate with preset values for each use case. The form posts those parameters to Field Papers and populates each phase of the make atlas process with those values, while allowing the user to modify the area of interest, etc.
                    </p>
                </div>
            </section>

            <section className='aboutSectionContainer2'>
                <div className='aboutSection'>
                    <h1 className='numbered'>
                        2
                    </h1>

                    <p>
                        Incident Maps - Field checking a list of feature locations? Upload a list of locations in GeoJSON format and we'll center an atlas page on each incident to give you a head start and liberate you from the atlas page grid.
                    </p>
                </div>
            </section>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1 className='numbered'>
                        3
                    </h1>

                    <p>
                        Custom Map Styles - TMS endpoints - Already published your basemap online as a tiled map service? Use our template tool detailed above to point to the TMS endpoint. Example: http://tile.stamen.com/watercolor/{'{Z}'}/{'{X}'}/{'{Y}'}.jpg.
                    </p>
                </div>
            </section>

            <section className='aboutSectionContainer2'>
                <div className='aboutSection'>
                    <h1 className='numbered'>
                        4
                    </h1>

                    <p>
                        Edit in OSM - Field Papers plays well with others. If you upload a snapshot of your map at Walking Papers, you can use the tools there to edit OpenStreetMap in Potlatch and JOSM using your snapshot as a reference layer. Common tasks include adding streets, parks, building outlines, addresses, business names, and more.
                    </p>
                </div>
            </section>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1 className='numbered'>
                        5
                    </h1>

                    <p>
                        Fork us on GitHub - Field Papers in an open source project hosted at GitHub.
                    </p>
                </div>
            </section>

            {/* <div className='toolsContainer'>
            </div> */}
        </div>
    )
}

export default Tools