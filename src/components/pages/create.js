import React from 'react'
// import Atlas from './atlas';
// import Watch from './watch';
import {Link} from 'react-router-dom'
import SearchImg from '../images/Vector_search_icon.svg'
import MapImg from '../images/Map.png'

const Create = () => {
    return (
        <div className='Create'>
            <div className='welcomeContainer'>
                <div className='welcomeLeft'>
                    <h1>Create</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <div className='searchInputContainer'>
                        <input className='searchInput' placeholder='Search Area'></input>
                        {/* <Link to='/atlas'> */}
                            <button className='searchBtn'><img src={SearchImg} width='20' height='20'/></button>
                        {/* </Link> */}
                    </div>
                </div>

                <div className='welcomeRight'>
                <img src={MapImg} alt='' title='' width='150px' height='200px'/>
                {/* img */}
                </div>
            </div>
            {/* <Watch /> */}
        </div>
    )
}

export default Create