import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
// import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Portfolio from '../../../components/Portfolio'
// import Testmonial from "../../../components/Testmonial";
import ContactArea from '../../../components/ContactArea'
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

const aboutText = [
    { text: 'Tapu kütüğünde tek tapu altında bulunan büyük boyutlardaki parsellerin bölünmesi işlemidir. Bu işlem ile büyük bir alanı kapsayan parseller bölünerek küçük parseller haline getirilmekte, dolayısıyla satışı veya paylaşımı kolaylaşmaktadır. Bu işlemin yapılabilmesi için öncelikle Tapu kadastro müdürlüğüne başvurulur, ' },
    { text: 'Tapu kütüğünde tek tapu altında bulunan büyük boyutlardaki parsellerin bölünmesi işlemidir. Bu işlem ile büyük bir alanı kapsayan par ' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Adaletiniz İçin Mücadele Ediyoruz',
        subTitle: 'Arkadaş Gibi.',
        text: 'En Yetenekli Hukuk Bürosu',
        button: 'Bizimle İletişime Geçin'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Adaletiniz İçin Mücadele Ediyoruz',
        subTitle: 'Arkadaş Gibi.',
        text: 'En Yetenekli Hukuk Bürosu',
        button: 'Bizimle İletişime Geçin'
    },
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


const portfolioItem = [
    { images: portfolio1, title: 'Ceza Hukuku', subtitle: '' },
    { images: portfolio2, title: 'Tazminat Hukuku', subtitle: '' },
    { images: portfolio3, title: 'Gayrimenkul Hukuku', subtitle: '' },
    { images: portfolio4, title: 'Miras Hukuku', subtitle: '' },
    { images: portfolio5, title: 'İş Hukuku', subtitle: '' }
    
    
]

const HomePageOne = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            {/* <Service className="serviceArea" /> */}
            <About
                className="aboutArea"
                title="Hakkımızda"
                images={about}
                signature={signature}
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea"
                title="Size Nasıl Yardımcı Olabiliriz"
                subTitle="Faliyet Alanlarımız"
                services={services}
            />
            <Portfolio
                className="portfolioArea"
                title="Vaka Çalışmalarımız"
                subTitle="En İyi Tecrübelerimiz"
                portfolioItem={portfolioItem}
            />
            {/* <Testmonial
                className="testmonialArea"
            /> */}
            <ContactArea
                className="contactArea"
            />
            <TeamMember
                title="Nitelikli Avukatlar "
                subTitle="Uzmanlarımızla Tanışın"
                className="teamArea"
                slider={true}
            />
            {/* <CounterArea
                className="counterArea"
            /> */}
            <BlogArea
                className="blogArea"
                title="Son Haberler"
                subTitle="Hukuk Formu"
            />
            {/* <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne