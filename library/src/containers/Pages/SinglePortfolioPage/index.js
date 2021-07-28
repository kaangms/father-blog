import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebar from '../../../components/CetagorySidebar'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import SingleContentArea from '../../../components/SingleContentArea'
import RecentPosts from '../../../components/RecentPosts'
import Portfolio from '../../../components/Portfolio'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import single from '../../../images/practice/3.jpg'
// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import './style.scss'


const breadcumbMenu = [
    { name: 'Anasayfa', route: '/' },
    { name: 'Blog', route: '/blog' },
    { name: 'Aile Hukuku' ,route: '/blog-kategori' }
]

const portfolioItem = [
    { images: portfolio1, title: 'Medeni Hukuk', subtitle: '' },
    { images: portfolio2, title: 'Kişisel Yaralanmalar', subtitle: '' },
    { images: portfolio3, title: 'İş Hukuku', subtitle: '' },
]


const SinglePortfolioPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Hukuk Formu"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="singleArea singlePortfolioArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <SingleContentArea
                                className="singleContentArea"
                                // image={single}
                            />
                        </div>
                        {/* <div className="col-lg-4 col-12">
                            <aside>
                                <SearchSidebar
                                    className="searchSidebarWrapper"
                                />
                                <CetagorySidebar
                                    title="Category"
                                    className="cetagoryWrap"
                                />
                                <RecentPosts
                                    className="recentPostWrapper"
                                />
                            </aside>
                        </div> */}
                    </div>
                </div>
            </div>
            <Portfolio
                title="Vaka Çalışmaları"
                subTitle="En İyi Çalışmalarımız"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default SinglePortfolioPage