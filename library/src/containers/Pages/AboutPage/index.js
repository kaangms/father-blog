import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
// import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const aboutText = [
    { text: 'burak Pekgöz şöyle  ykışıklı böyle yakışıklı  aaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaa aaaaaaaaa aaaaaaaaa aaaaaa,' },
    { text: 'burak Pekgöz şöyleykışıklı böyle yakışıklı  aaaaa aaaaaaaa aaaaa aaaaaa aaaaa aaaaa aaa aaaaaa aaaaaa aaaa aaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa,' },
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Medeni Hukuk',
        content: 'Medeni hukuk, kişilerin birbiriyle ya da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkilerinin kamu hukuku gibi başka bir hukuk dalının ... '
    },
    {
        icon: 'flaticon-wounded',
        title: 'İş Hukuku',
        content: 'TMedeni hukuk, kişilerin birbiriyle ya da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkilerinin kamu hukuku gibi başka bir hukuk dalının ... '
    },
    {
        icon: 'flaticon-employee',
        title: 'Şirketler Hukuku',
        content: 'a da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkile '
    },
    {
        icon: 'flaticon-thief',
        title: 'Ceza Hukuku',
        content: 'a da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkile '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Eğitim Hukuku',
        content: 'a da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkile '
    },
    {
        icon: 'flaticon-house',
        title: 'Gayrimenkul Hukuku',
        content: 'a da belirli ölçülerde kişilerle devletin doğrudan veya dolaylı özel ilişkile '
    },
]

const breadcumbMenu = [
    {name:'Anasayfa',route:'/'},
    {name:'Hakkımızda'}
]

const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Hakkımızda"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            {/* <Service className="serviceArea mt-0" /> */}
            <About
                className="aboutArea aboutAreaStyleTwo"
                title="Neden Beraber Çalışmalıyız"
                subTitle="Deneyimlerimiz.."
                images={about}
                orderLast="order-last"
                videoId="q6pkmmaP3Ic"
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="Size Nasıl Yardımcı Olabiliriz"
                subTitle="Faliyet Alanlarımız"
                services={services}
            />
            {/* <Testmonial
                className="testmonialArea pt100"
            />
            <CounterArea
                fullWidth={true}
                className="counterArea counterAreaStyleTwo"
            /> */}
            <TeamMember
                title="Nitelikli Avukatlarımız"
                subTitle="Uzmanlarımızla Tanışın"
                className="teamArea"
                slider={true}
            />
            <BlogArea
                className="blogArea"
                title="Hukuk Formu"
                subTitle="Son Haberler"
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage