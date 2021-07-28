import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BannerSidebar = ({ className, image }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={className}>
            <h3><span>25</span> Years of Experience In This Field</h3>
            <div className="btnStyle">
                <Link to="/contact">Contact Us Now</Link>
            </div>
        </div>
    )
}
export default BannerSidebar