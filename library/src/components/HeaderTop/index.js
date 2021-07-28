import React from 'react'
import './style.scss'
const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-5">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Kılıçdede Mah. Alkan Sok. No:3/12 İlkadım/Samsun</li>
                            </ul>
                        </div>
                        <div className="col-md-auto col-sm-12 col-12 col-lg-6">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i> 0 (362) 233 3693</li>
                                <li><i className="fa fa-clock-o"></i> 10:00-16:30</li>
                            </ul>
                        </div>
                        {/* <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle btnStyle2 text-right">
                                <a href="#">Free Consultation</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop