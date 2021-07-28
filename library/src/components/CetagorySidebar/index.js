import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const cetagoryMenu = [
    { name: 'Aile Hukuku', route: "blog-kategori" },
    { name: 'Ceza Hukuku', route: "blog-kategori" },
    { name: 'İş Hukuku', route: "blog-kategori" },
    { name: 'Kişisel Yaralanma', route: "blog-kategori" },
    { name: 'Eğitim Huku', route: "blog-kategori" },
    { name: 'Madde Suçları', route: "blog-kategori" },
    { name: 'Ağır Ceza', route: "blog-kategori" },
]

const CetagorySidebar = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {cetagoryMenu.map((cetagory,i) => (
                    <li key={i}><Link to={cetagory.route}>{cetagory.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default CetagorySidebar