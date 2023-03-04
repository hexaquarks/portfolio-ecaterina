import React from 'react'
import Placeholder from '../../assets/image-placeholder.jpg'

import { Parallax } from 'react-parallax';

const Cover = () => {
    return (
        <Parallax className='image' bgImage={Placeholder} strength={800}>
            <div />
        </Parallax>
    )
}

export default Cover