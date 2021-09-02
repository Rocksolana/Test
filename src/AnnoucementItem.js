import React, { Component } from 'react'

class AnnoucementItem extends Component {
    render() {

        const {
            title,
            description,
            date,
        } = this.props;
        
        return (
            <div className="product-list-item">
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features"> {date}</div>
             </div>
        )
    }
 }
export default AnnoucementItem