import React from 'react'
import './style.scss'

const services = [
    { icon: 'fi flaticon-lawyer', subtitle: 'Rezervasyon Yapın', title: 'Randevu' },
    { icon: 'fi flaticon-scale', subtitle: 'Get Free', title: 'Expert Advice' },
    { icon: 'fi flaticon-network', subtitle: 'You Can Easily', title: 'Join Our Team' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service