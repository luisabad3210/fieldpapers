import React from 'react'

const Uploads = () => {
    return (
        <div className='Upload'>

            <div className='welcomeContainer'>
                <div className='welcomeLeft'>
                    <h1>Upload</h1>
                    <p>Choose an atlas page to upload. We'll work out where it goes (using the QR code).</p>
                    <div><button>Choose files</button> no files chosen</div>
                </div>

                <div className='welcomeRight'>
                {/* <img src={} alt='' title='' width='220px' height='220px'/> */}
                img
                </div>
            </div>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h2>
                        Rules
                    </h2>
                    <p>
                        Make sure the scan/photo/image is at least 200dpi.
                    </p>
                    <p>
                        Make sure you're uploading a JPG, PNG, TIF, or GIF. (PDFs won't work.)
                    </p>
                    <p>
                        Don't upload things that aren't Field Papers maps, please.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Uploads