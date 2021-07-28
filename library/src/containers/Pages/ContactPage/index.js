import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Anasayfa', route: '/' },
    { name: 'İletisim', },
]

const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="İletişim"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Bize Ulaşın</h3>
                                <p>Popüler inanışın aksine, Lorem Ipsum sadece rastgele bir metin değildir. Kökleri MÖ 45'lerden kalma klasik Latin edebiyatının bir parçasıdır ve 2000 yıldan daha eski hale gelir.
                                </p>
                                <h4>Adres</h4>
                                <span>Kılıçdede Mah. Alkan Sok. No:3/12 İlkadım/Samsun</span>
                                <h4>Tel</h4>
                                <span>0(362) 233 3693</span>
                                <span>054235581002</span>
                                <h4>Email</h4>
                                <span >cozumhukukvedanismanlik@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Quick Contact Form</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage