import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import TeamMember from '../../../components/TeamMember'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys' }
]

const TeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea teamAreaStyleTwo"
                noGutters={true}
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default TeamPage