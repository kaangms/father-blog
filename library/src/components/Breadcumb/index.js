import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Breadcumb = ({ className, title, breadcumbMenu, background }) => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcumbWrap">
                            <h2>{title}</h2>
                            <ul>
                                {breadcumbMenu.map((menu,i) => (
                                    <li key={i}>{menu.route ? <Link to={menu.route}>{menu.name}</Link> : menu.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcumb