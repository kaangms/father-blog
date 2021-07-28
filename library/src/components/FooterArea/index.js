import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Adresler', menus: [
            { name: 'Anasayfa', route: '' },
            { name: 'Hakkımızda', route: 'hakkımızda' },
            { name: 'Davalar', route: 'davalar' },
            { name: 'Hukuk Formu', route: 'blog' },
            { name: 'İletişim', route: 'iletisim' },
        ]
    },
    {
        title: 'Faliyet Alanlarımız', menus: [
            { name: 'Aile Hukuku', route: 'davalar' },
            { name: 'Ceza Hukuku', route: 'davalar' },
            { name: 'İş Hukuku', route: 'davalar' },
            { name: 'Gayrimenkul Hukuku', route: 'davalar' },
            { name: 'Kaan Hukuku', route: 'davalar' },
        ]
    },
    {
        title: 'Bize Ulaşın', menus: [
            { name: 'Merkez Adresi' ,route: '/#'},
            { name: 'Kılıçdede Mah. Alkan Sok. No:3/12',route: '/#' },
            { name: 'İlkadım/Samsun',route: '/#' },
            { name: 'Tel:0(362) 233 3693',route: '/#' },
            { name: 'Email:cozumhukukvedanismanlik@gmail.com',route: '/#' },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>Bir okuyucunun, düzenine bakarken bir sayfanın okunabilir içeriği tarafından dikkatinin dağıtılacağı</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}><Link to={`/${item.route}`}>{item.name}</Link> </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>Gizlilik Politikası | © 2020 Çözüm Hukuk Merkezi. Tüm Hakları Saklıdır</span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                <span><a href="https://www.cognitoforms.com/KgSoft1/SizlerleİletişimeGeçelim">Power By KaanG</a></span>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea