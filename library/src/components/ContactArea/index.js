import React from 'react'
import Form from '../Form'
import './style.scss'
const ContactArea = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="contactInfo">
                            <span>Sizlerle Tanışmak Bizim İçin Onurdur</span>
                            <h2>Ücretsiz Danışmanlık</h2>
                            <h6>Bizi arayın 0(212)252 47 00 veya formu doldurun.</h6>
                            <p>Bir okuyucunun, düzenine bakarken bir sayfanın okunabilir içeriği tarafından dikkatinin dağıtılacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum'u kullanmanın amacı, az ya da çok İngilizce bilmesidir.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactArea