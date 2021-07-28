import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import post1 from '../../images/case-studies-details/1.jpg'
import post2 from '../../images/case-studies-details/2.jpg'
import post3 from '../../images/case-studies-details/3.jpg'

const allPosts = [
    {
        image: post1,
        title: 'Büyük gerçeğin kaşifinin gerçek öğretileri',
        route: 'post1'
    },
    {
        image: post2,
        title: 'TBüyük gerçeğin kaşifinin gerçek öğretileri',
        route: 'post2'
    },
    {
        image: post3,
        title: 'Büyük gerçeğin kaşifinin gerçek öğretileri',
        route: 'post3'
    },
]

const RecentPosts = ({ className }) => {
    return (
        <div className={className}>
            <h3>Son Durum</h3>
            <ul>
                {allPosts.map((post, i) => (
                    <li key={i} className="postItem">
                        <div className="postImg">
                            <img src={post.image} alt="" />
                        </div>
                        <div className="postContent">
                            <Link to={post.route}>{post.title}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecentPosts