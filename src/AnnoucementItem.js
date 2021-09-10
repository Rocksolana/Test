import React from 'react'
import "./annoucement"


const AnnoucementItem = ({
            title,
            description,
            date,
        }) => {
        
        return (
            <div className="list-item">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="date">Date: {date}</div>
             </div>
        )
    }
 
export default AnnoucementItem