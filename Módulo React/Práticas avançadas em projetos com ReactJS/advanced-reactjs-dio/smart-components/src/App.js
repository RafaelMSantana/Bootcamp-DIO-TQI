import React, { useState } from 'react'
import Button from './Component/Button'
import PhotoGallery from './Component/PhotoGallery'

function App () {

    const photos = [
        "https://placeimg.com/140/60/people",
        "https://placeimg.com/140/60/tech",
        "https://placeimg.com/140/60/animals",
        "https://placeimg.com/140/60/nature"
    ]
    
    return (
        <>
            <h1>Galeria de fotos</h1>
            <PhotoGallery
            photos={photos}/>
        </>
    )
}

export default App