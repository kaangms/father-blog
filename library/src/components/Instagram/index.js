import React from 'react'
import './style.scss'

import img1 from '../../images/instragram/1.jpg'
import img2 from '../../images/instragram/2.jpg'
import img3 from '../../images/instragram/3.jpg'
import img4 from '../../images/instragram/4.jpg'
import img5 from '../../images/instragram/5.jpg'
import img6 from '../../images/instragram/6.jpg'

const instagrams = [
    img1, img2, img3, img4, img5, img6,
]

const Instagram = () => {
    return (
        <div className="instagramWrap">
            <h3>Instagram</h3>
            <ul>
                {instagrams.map(instagram => (
                    <li key={instagram}><img src={instagram} alt=""/></li>
                ))}
            </ul>
        </div>
    )
}
export default Instagram