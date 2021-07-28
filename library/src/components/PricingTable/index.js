import React from 'react'
import SectionTitle from '../Title'
import './style.scss'
const pricingpanel = [
    {
        icon: 'flaticon-scale',
        title: 'Started Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$120',
    },
    {
        icon: 'flaticon-scale',
        title: 'Basic Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$150',
    },
    {
        icon: 'flaticon-scale',
        title: 'Advanced Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$180',
    },
]
const PricingTable = ({ className, title, subTitle }) => {
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
                    {pricingpanel.map((pricing,i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-12">
                            <div className="pricingWrapper">
                                <i className={`fi ${pricing.icon}`}></i>
                                <h3>{pricing.title}</h3>
                                <h2>{pricing.price}</h2>
                                <p>{pricing.text}</p>
                                <div className="btnStyle">
                                    <button>Get Started</button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PricingTable