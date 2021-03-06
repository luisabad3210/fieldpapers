import React from 'react'
import HelpImg from '../images/People_of_Brooklyn_Sitting_on_Floor.png'

const Help = () => {
    return (
        <div className='Help'>

            <div className='welcomeContainer'>
                <div className='welcomeLeft'>
                    <h1>Help</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className='welcomeRight'>
                <img src={HelpImg} alt='' title='' width='150px' height='200px'/>
                {/* img */}
                </div>
            </div>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1>
                        How to make an Atlas
                    </h1>

                    <ol>
                        <li>Click on “Make an atlas to print”’ or “Make yourself an atlas” from the Field Papers home page.</li>
                        <li>Type in the geographical area that you would like to access. You can be as general (a country) or specific (an address) as you would like. Once Field Papers pulls up your atlas, you can pan and zoom to the specific area you’d like to see.</li>
                        <li>Adjust the area for your atlas using the selection area (highlighted).</li>
                            <ol>
                                <li>Use the four-directional arrow icon to move the entire selected area.</li>
                                <li>Click on the plus and minus buttons to add and subtract pages. Field Papers automatically creates your atlas on two pages. TIP: Try to select the least number of pages as you need for your atlas to avoid possible delays in atlas generation.</li>
                                <li>Click and hold your mouse down on any part of the map to move the entire atlas.</li>
                                <li>Click on the arrow button at the lower right of the selection box to adjust the size of the selection area.</li>
                            </ol>
                        <li>Decide how you would like your printed atlas to look. Display options include OpenStreetMap (default), Black and White, Satellite + Labels, and Satellite Only. Click Next.</li>
                        <li>Give your atlas a name so that you’ll be able to find it later when you log in to Field Papers.</li>
                        <li>Add a description (optional) for your atlas. This will show up on each page of your atlas.</li>
                        <li>Decide whether you would like the atlas to be public or private by checking the “Make this atlas private” box. Private means no one else can find your atlas. Click Next. Tip: If you choose to make your atlas private, you can still share it with others with a unique URL. However, make sure to log into Field Papers when you create the map, so that you will have access to it later through your account.</li>
                        <li>Choose a layout for your atlas. Options include (1) Maps only; (2) Maps + Notes on their own pages; or (3) Maps + Notes on the same page. *Optional: Overlay a Universal Transverse Mercator (UTM) grid to your map by checking the box under “Choose a Layout.”</li>
                        <li>Click Finished. When your map has been generated by Field Papers, you will see it appear on your screen.</li>
                        <li>Choose to download the PDF (“Download PDF”) and/or copy it to another user (“Copy this atlas”). Download the PDF to save, print, or share using the unique URL. All PDFs include a QR code that makes it possible for Field Papers to update your map with your edits when you upload it back to the site.</li>
                        <li>Print out your map and mark it up using pen or pencil. You can add or update anything on the map you’d like – things that you can see with your own eye, or maybe other kinds of information that is important to you.</li>
                        <li>View maps that others have generated in the same area by looking under “Activity”. This can save you some time if you’d like copy other people’s atlases.</li>
                        <li>For advanced users, you can export your map into three different file formats: GeoJSON, Plain Text (CSV), or Shapefile.</li>
                    </ol>
                </div>
            </section>

            <section className='aboutSectionContainer2'>
                <div className='aboutSection'>
                    <h1>
                        How to Upload a Snapshot
                    </h1>

                    <ol>
                        <li>After you have marked up the Field Papers atlas that you printed out, take a picture of each page using a camera and save it to your computer or hard drive. The image must be high resolution (at least 200 dots per inch (dpi)) and saved in one of these formats: JPG, PNG, TIF, or GIF. Most camera phones take pictures at this resolution or much better.</li>
                        <li>Click on “Upload pages you’ve marked” from the main Field Papers page.</li>
                        <li>Browse for your file on your computer or hard drive (make sure it’s in one of the file formats recognized by Field Papers) and hit “Upload.”</li>
                        <li>You will see a bar tracking the progress of your upload. Be patient, it won’t take that long!</li>
                        <li>Optional: Add notes to your snapshot using Field Paper’s basic annotation tools. Click on the x icon to add markers (specific points on your map) or the polygon icon to draw boundaries or borders. You can add notes to each. Note that these edits will not be saved permanently to your snapshot. For more advanced editing options, advanced users can edit their snapshot in iD or Potlatch 2 using OpenStreetMap. Click “Finished”.</li>
                        <li>You should now be able to see your hand-drawn edits on your updated snapshot.</li>
                        <li>Download your map (“Download PDF”) to save, print, or share using the unique URL.</li>
                        <li>View atlases that others have generated nearby by looking under “Activity”.</li>
                        <li>For advanced users, export your map into three different programs: GeoJSON, Plain Text (CSV), or Shapefile.</li>
                        <li>Field Papers maps can also be easily opened using two of OpenStreetMap’s editing tools: (1) iD editor; or (2) Potlatch.</li>
                    </ol>

                    <div>Tips:</div>

                    <ul>
                        <li>Make sure to save your photo in the largest size possible, especially if you are using the camera on your phone. This will save your image in the highest resolution possible.</li>
                        <li>One page equals one snapshot so if your map is multiple pages, you will need to take a picture of each page.</li>
                        <li>When taking your “snapshot”, make sure that your map fills your screen (without cutting anything off) and that the photo is not taken at an angle. Also make sure the QR code is displayed in full. If Field Papers is not able to upload your snapshot (it will tell you), try taking another picture using these guidelines.</li>
                    </ul>
                </div>
            </section>

            <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1>
                        How to use with OsmAnd
                    </h1>
                    <p>During field mapping in Bangladesh, extensive use was made of field papers and a system was developed by which mappers could upload the Field Papers grid to OSMAND to help them navigate their tasks for the day. Was VERY useful!</p>
                    <ul>
                        <li>Export Field Papers as normal to PDF, but also download the geojson (scroll down for the link)</li>
                        <li>Open the geojson in JOSM* (or equivalent). *requires opendata and josm-geojson plugins</li>
                        <li>Use lines to write the grid numbers in each cell</li>
                        <li>Export as GPX</li>
                        <li>Upload to phone or tablet in /osmand/tracks</li>
                        <li>Select Configure Map and enable GPX track</li>
                        <li>Click on GPX track and select your imported grid file</li>
                    </ul>
                </div>
            </section>

            <section className='aboutSectionContainer2'>
                <div className='aboutSection'>
                    <h1>
                        TO DO
                    </h1>

                    <ol>
                        <li>add vector data to snapshots</li>
                        <li>use as layer for editing in Potlatch</li>
                        <li>use as layer for editing in iD</li>
                        <li>show as a transparent overlay over the OSM slippy map</li>
                        <li>export as geotiff</li>
                        <li>share with friends</li>
                    </ol>
                </div>
            </section>

            {/* <section className='aboutSectionContainer1'>
                <div className='aboutSection'>
                    <h1>
                        Quick One-Pagers
                    </h1>

                    <div>Overview of Field Papers</div>
                    <div>How to Make an Atlas</div>
                    <div>How to Upload a Snapshot</div>
                </div>
            </section> */}
        </div>
    )
}

export default Help