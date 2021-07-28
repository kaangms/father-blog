import React from 'react'
import SectionTitle from '../Title'
import './style.scss'

// images
import portfolio1 from '../../images/studies/1.jpg'
import portfolio2 from '../../images/studies/2.jpg'
import portfolio3 from '../../images/studies/3.jpg'
import portfolio4 from '../../images/studies/4.jpg'
import portfolio5 from '../../images/studies/5.jpg'


const portfolioItem = [
    { images: portfolio1, title: 'Ceza Hukuku', subtitle: '' },
    { images: portfolio2, title: 'Tazminat Hukuku', subtitle: '' },
    { images: portfolio3, title: 'Gayrimenkul Hukuku', subtitle: '' },
    { images: portfolio4, title: 'Miras Hukuku', subtitle: '' },
    { images: portfolio5, title: 'İş Hukuku', subtitle: '' }
    
    
]
const Portfolio = ({ title, subTitle, className, fullWidth, portfolioItem }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                </div>
            </div>

            {!fullWidth ? (
                <div className="portfolioWrapper">
                    {portfolioItem.map((portfolio, i) => (
                        <div key={i} className="portfolioItem">
                            <img src={portfolio.images} alt="" />
                            <div className="portfolioContent">
                                <p>{portfolio.subtitle}</p>
                                <h3>{portfolio.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                    <div className="container gridPortfolio">
                        <div className="row">
                            {portfolioItem.map((portfolio, i) => (
                                <div key={i} className="col-lg-4 col-sm-6 col-12">
                                    <div key={i} className="portfolioItem">
                                        <img src={portfolio.images} alt="" />
                                        <div className="portfolioContent">
                                            <p>{portfolio.subtitle}</p>
                                            <h3>{portfolio.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    )
}
export default Portfolio