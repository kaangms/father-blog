import React from 'react'
import SectionTitle from '../Title'
import { Link } from 'react-router-dom'
import './style.scss'

// images
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import avatar from '../../images/blog-page/6.jpg'

const blogs = [
    {
        images: blog1, title: 'anasayfaMasumsan Adalet Senin İçin Olabilir', meta: {
            avatar: avatar, name: 'Av.asas Burak',time: 'Ağu 12,2020'
        }
    },
    {
        images: blog2, title: 'Masumsan Adalet Senin İçin Olabilir', meta: {
            avatar: avatar, name: 'Av. asasBurak', time: 'Ağu 12,2020'
        }
    },
    {
        images: blog3, title: 'Masumsan Adalet Senin İçin Olabilir', meta: {
            avatar: avatar, name: 'Av.111 Burak', time: 'Ağu 12,2020'
        }
    },
]


const BlogArea = ({ className, title, subTitle }) => {
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
                    {blogs.map((blog, i) => (
                        <div key={i} className="col-lg-4 col-sm-6 col-12" >
                            <div className="blogWrap">
                                <div className="blogImage">
                                    <img src={blog.images} alt="" />
                                </div>
                                <div className="blogContent">
                                    <h3><Link to="/blog">{blog.title}</Link></h3>
                                    <ul className="blogMeta">
                                        <li><img src={blog.meta.avatar} alt="" /></li>
                                        <li>{blog.meta.name}</li>
                                        <li>{blog.meta.time}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogArea