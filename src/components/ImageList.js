import './ImageList.css'
import ImageCard from './ImageCard.js'
import React from 'react'

export default function ImageList(props) {
    console.log(props.images);
    const images = props.images.map((img) => <ImageCard key={img.id} image={img} />)
    return (
        <div className="image-list">
            {images}
        </div>
    )
}
