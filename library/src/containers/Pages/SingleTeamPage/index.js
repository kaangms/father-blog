import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import team from '../../../images/Attorneys-single/1.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Anasayfa', route: '/' },
    { name: 'Avukatlar', route: '/avukatlar' },
  
]
const teamMembarInfo = [
    { level: 'Pozisyon: ', text: 'Kıdemli Avukat' },
    { level: 'Pratik Alanları: ', text: ' Ceza Hukuku, Tazminat Hukuku, Gayrimenkul Hukuku ve Medeni Hukuk ' },
    { level: 'Tecrübe Yılı: ', text: '5 Yıl' },
    { level: 'Adres: ', text: 'Kılıçdede Mah. Alkan Sok. No:3/12 İlkadım/Samsun' },
    { level: 'Tel: ', text: '054235581002' },
    { level: 'Mail: ', text: 'burakpekkgoz@gmail.com' },
    { level: 'Fax: ', text: ' ' },
]
const teamContents = [
    'Ankara Hukuk Fakültesi',
    'Amasyada 2 yıl fili görev',
    'Kazanlmış birçok dava',
    'asasKazanlmış birçok dava',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Avukatlarımız"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Burak Pekgöz</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Önemli Bilgi</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Kişisel Deneyimler</h3>
                                        <p>Lorem Ipsum'un birçok pasajı var, ancak çoğunluğu enjekte edilmiş mizah veya biraz inandırıcı görünmeyen rastgele kelimelerle bir şekilde değişiklik gördü. Lorem Ipsum'un bir pasajını kullanacaksanız, metnin ortasında utanç verici bir şey olmadığından emin olmanız gerekir.</p>
                                        <p>İnternetteki tüm Lorem Ipsum jeneratörleri, önceden tanımlanmış parçaları gerektiği gibi tekrar etme eğilimindedir ve bu da bunu İnternet'teki ilk gerçek jeneratör yapar. 200'den fazla Latince kelimenin sözlüğünü kullanır,</p>
                                        <h5>Eğitim</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                        <h5>Dil Gelişimi</h5>
                                        <span>İngilizce</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <ContactArea
                className="contactArea"
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage