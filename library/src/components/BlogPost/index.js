import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import blog1 from '../../images/blog-page/1.jpg'
import blog2 from '../../images/blog-page/2.jpg'
import blog3 from '../../images/blog-page/3.jpg'
import blog4 from '../../images/blog-page/4.jpg'
import blog5 from '../../images/blog-page/5.jpg'
import avatar from '../../images/blog-page/6.jpg'
const blogPost = [
    {
        image: blog1,
        title: '1Kimse zevki kendisini reddedemez',
        text: 'Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar.',
        meta: [
            { avatar: avatar, name: 'Av. Burak', level: 'Ceza Hukuku', date: 'Ağu 12,2020' }
        ]
    },
    {
        image: blog2,
        title: '2Kimse zevki kendisini reddedemez',
        text: 'Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar.',
        meta: [
            { avatar: avatar, name: 'Av. Burak', level: 'Aile Hukuku', date: 'Ağu 12,2020'}
        ]
    },
    {
        image: blog3,
        title: '3Kimse zevki kendisini reddedemez',
        text: 'Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar.',
        meta: [
            { avatar: avatar, name: 'Av. Burak', level: 'Ceza Hukuku',date: 'Ağu 12,2020' }
        ]
    },
    {
        image: blog4,
        title: '4Kimse zevki kendisini reddedemez',
        text: 'Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar.',
        meta: [
            { avatar: avatar, name: 'Av. Burak', level: 'Ceza Hukuku', date: 'Ağu 12,2020'}
        ]
    },
    {
        image: blog5,
        title: '5Kimse zevki kendisini reddedemez',
        text: 'Size sistemin tam bir hesabını vereceğim ve insan mutluluğunun usta kurucusu olan gerçeğin büyük kaşifinin gerçek öğretilerini açıklayacağım. Kimse zevki kendisini reddedemez, sevmez veya önler, zira zevktir, ancak zevki nasıl takip edeceğini bilmeyenler, rasyonel olarak son derece acı verici sonuçlarla karşılaşırlar.',
        meta: [
            { avatar: avatar, name: 'Av. Burak', level: 'İş Hukuku', date: 'Ağu 12,2020'}
        ]
    },
]
const BlogPost = () => {
    return (
        <Fragment>
            {blogPost.map((blog, i) => (
                <div key={i} className="blogPostWrapper">
                    {/* <div className="blogPostImg">
                        <img src={blog.image} alt="" />
                    </div> */}
                    <div className="blogPostContent">
                        <ul className="blogPostMeta">
                            {blog.meta.map((meta, i) => (
                                <Fragment key={i}>
                                    <li><img src={meta.avatar} alt=""/></li>
                                    <li>{meta.name}</li>
                                    <li>{meta.level}</li>
                                    <li>{meta.date}</li>
                                </Fragment>
                            ))}
                        </ul>
                        <h3><Link to='blog-details'>{blog.title}</Link></h3>
                        <p>{blog.text}</p>
                        <Link className="readmore" to='blog-details'>Fazlasını Oku..</Link>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}
export default BlogPost