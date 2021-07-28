import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Anasayfa', route: '/' },
    { name: 'Vaka Çalışmaları' }
]

const portfolioItem = [
    { images: portfolio1, title: 'Ceza Hukuku', subtitle: '' },
    { images: portfolio2, title: 'Tazminat Hukuku', subtitle: '' },
    { images: portfolio3, title: 'Gayrimenkul Hukuku', subtitle: '' },
    { images: portfolio4, title: 'Miras Hukuku', subtitle: '' },
    { images: portfolio5, title: 'İş Hukuku', subtitle: '' },
    { images: portfolio1, title: 'Medeni Hukuk', subtitle: '' },
    { images: portfolio2, title: 'Personel Yaralanmaları', subtitle: '' },
    { images: portfolio3, title: 'Vergi Hukuku', subtitle: '' },
    { images: portfolio4, title: 'Rekabet Hukuku', subtitle: '' },
]

const PortfolioPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton
                    className="headerBottomArea headerBottomAreaStyelTwo"
                />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Faliyet Alanlarımız"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <Portfolio
                title="Vaka Çalışmaları"
                subTitle="En İyi Çalışmalarımız"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleTwo"
            />

            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default PortfolioPage