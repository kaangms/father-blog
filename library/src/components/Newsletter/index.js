import React, { useState } from 'react'
import './style.scss'
const NewsLetter = ({ className }) => {
    const [email, setEmail] = useState('')
    const submitHandler = event =>{
        event.preventDefault()
        console.log('email =',email)
    }
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletterWrap">
                            <h3>Bültene Abone Ol</h3>
                            <form onSubmit={submitHandler} className="newsletterForm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="Lütfen Mail Adresinizi Giriniz..." />
                                <button type="submit">Abone Ol</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter