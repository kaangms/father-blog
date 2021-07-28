import React from 'react'
// import avatarImg from '../../images/practice/4.jpg'

import './style.scss'

// const listItem = [
//     'The master-builder of human happiness.',
//     'Occasionally circumstances occur in which toil and pain',
//     'Avoids pleasure itself, because it is pleasure',
//     'who do not know how to pursue pleasure',
//     'To take a trivial example, which of us ever undertakes',
// ]
const SingleContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentImg">
                <img src={image} alt="" />
            </div>
            <div className="singleContentWrap">
                <h3>Aile Hukuku</h3>
                <h5>Zevk ve acıyı övmekle ilgili tüm bu yanlış fikrin nasıl doğduğunu size açıklamalıyım</h5>
                <p>Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar. Yine kendi kendine acı çekmeyi seven, sürdüren veya arzu eden kimse yoktur,</p>
                <p>çünkü acıdır, ancak zaman zaman toil ve ağrının ona büyük bir zevk sağlayabileceği durumlar oluşur. Önemsiz bir örnek vermek gerekirse, bundan bir avantaj elde etmek dışında hangimiz zahmetli fiziksel egzersiz yapıyoruz?</p>
                {/* {avatar && (
                    <div className="avatarWra">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={avatarImg} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h4>Family Law Organizations</h4>
                                <ul>
                                    {listItem.map(list => (
                                        <li key={list}>{list}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}
export default SingleContentArea