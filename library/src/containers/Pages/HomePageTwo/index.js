import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Portfolio from '../../../components/Portfolio'
import Testmonial from "../../../components/Testmonial";
import ContactArea from '../../../components/ContactArea'
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/1.jpg'

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
]

const heroSliders = [
    {
        images: 'slideWrapperThree',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'The Most Talented Law Frim',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperFour',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'The Most Talented Law Frim',
        button: 'Contact us now'
    },
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Family Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Personal Injury',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-employee',
        title: 'Business Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Criminal Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Education Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-house',
        title: 'Real Estate Law',
        content: 'There are many variations of passages of Lorem '
    },
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]

const HomePageTwo = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea heroSliderAreaStyleTwo" />
            <Service className="serviceArea serviceAreaStyleTwo" />
            <About
                className="aboutArea aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Expert"
                images={about}
                orderLast="order-last"
                videoId="XxVg_s8xAms"
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <Portfolio
                className="portfolioArea"
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolioItem}
            />
            <Testmonial
                className="testmonialArea"
            />
            <ContactArea
                className="contactArea"
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea"
                slider={true}
            />
            <CounterArea
                className="counterArea"
            />
            <BlogArea
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageTwo