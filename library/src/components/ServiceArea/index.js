import React from "react";
import SectionTitle from '../Title'
import './style.scss'

const ServiceArea = ({ className, title, subTitle,services }) => {
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
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="serviceWrap">
                                <div className="serviceIcon">
                                    <i className={`fi ${service.icon}`}></i>
                                </div>
                                <div className="serviceContent">
                                    <h3>{service.title}</h3>
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default ServiceArea