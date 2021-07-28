import React from 'react'
import './style.scss'
const tags = [
    'Attorney', 'Lawyer', 'Accident', 'Consultation', 'Fraud', 'Car', 'Law', 'Immigration', 'Criminal', 'Business', 'Corporate',
]

const Tags = () => {
    return (
        <div className="tagsWrap">
            <h3>Tags</h3>
            <ul>
                {tags.map(tag => (
                    <li key={tag}><a href="/asdas">{tag}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default Tags