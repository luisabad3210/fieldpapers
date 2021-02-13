import React from 'react'
import AboutUs from '../images/Fresh_Folk_Gathering.png'
import PhoneImg from '../images/Allura_User_Interface_4.png'

const About = () => {
    return (
        <div className='About'>
            <div className='welcomeContainer'>
                <div className='welcomeLeft'>
                <h1>About Us</h1>
                <p>
                    Field Papers is a tool to help you create a multi-page atlas of anywhere in the world. Once you print it, you can take it outside, into the field, to record notes and observations about the area you're looking at, or use it as your own personal tour guide in a new city. Keep your eye on the Watch page for new atlases around the world.
                </p>
                <button className='logInBtn'>Get Started</button>
                </div>
    
                <div className='welcomeRight'>
                <img src={AboutUs} alt='' title='' width='350px' height='200px'/>
                </div>
            </div>

            <section className='sectionOneContainer'>
                <div className='sectionOne'>
                    <div className='center'>
                        <img src={PhoneImg} alt='' title='' height='200px' width='340'/>
                    </div>
    
                    <div className='center'>
                        <p>
                            Later, you can photograph each page in the atlas, and upload back into Field Papers. These photographs are called "snapshots" on the site. When you upload a snapshot, it's connected automatically to the atlas from whence it came. You can transcribe any notes you made in the field into Field Papers (as points or areas) and share the result with your friends, or download your notes for later analysis.
                        </p>
                        <p>
                            You don't need a GPS to make a map or learn complicated desktop GIS software to use Field Papers.
                        </p>
                    </div>
                </div>
            </section>

            <section className='aboutSectionContainer2'>
                    <div className='aboutSection'>
                        {/* <h1>
                            Inspiration
                        </h1> */}

                        <p>
                            This project is a continuation of Walking Papers, which was built for the OpenStreetMap (OSM) editing community. Field Papers allows you to print multiple-page atlases using several map styles (including satellite imagery and black and white cartography to save ink) and has built in note annotation tools with GIS format downloads. Even though you can use Field Papers without creating an account, you also have the options of collecting any atlases you make under your own username.
                        </p>

                        <p>
                            Curious about OSM? It's a "wikipedia-style map of the world" that anyone can edit. Field Papers and Walking Papers both provide tools to “roundtrip” map data through paper, making it easier to collect on-the-ground information and edits to OSM data. If you'd like to learn how to make edits in OSM, please visit Learn OSM.
                        </p>

                        <p>
                            Fork us on GitHub - Field Papers in an open source project hosted on GitHub.
                        </p>
                    </div>
                </section>


                <section className='aboutSectionContainer1'>
                    <div className='aboutSection'>
                        <h1>
                            History
                        </h1>
                        <p>
                            The first version of Field Papers was launched in May 2012, in partnership with Caerus Associates. In June of 2013, we relaunched the site in collaboration with the U.S. Agency for International Development (USAID) with major improvements to site performance, new metrics on atlas creation, as well as a general usability upgrade.
                        </p>
                    </div>
                </section>


                <section className='aboutSectionContainer2'>
                    <div className='aboutSection'>
                        <h1>
                            Inspiration
                        </h1>

                        <p>
                            The project is most particularly inspired by Aaron Cope then of Flickr and Ben / Russell / Tom at Really Interesting Group, whose Papercamp / Papernet and Things Our Friends Have Written On The Internet 2008 help all this post-digital, medieval technology make sense.
                        </p>
                    </div>
                </section>

        </div>
    )
}

export default About