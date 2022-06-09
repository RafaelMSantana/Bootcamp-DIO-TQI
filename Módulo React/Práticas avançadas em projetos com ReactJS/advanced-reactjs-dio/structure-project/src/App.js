import React, { useState } from 'react'
import { Button,  PhotosGallery} from './components/'
import { sanitizeString } from './commons/utils/string'

function App () {

    const photos = [
        "https://placeimg.com/140/60/people",
        "https://placeimg.com/140/60/tech",
        "https://placeimg.com/140/60/animals",
        "https://placeimg.com/140/60/nature"
    ]
    
    sanitizeString('teste')

    return (
        <>
            <h1>Galeria de fotos</h1>
            <PhotosGallery
            photos={photos}/>
            <Button>Botão</Button>
        </>
    )
}

export default App