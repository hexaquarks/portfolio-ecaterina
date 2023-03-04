import React from 'react'
import Placeholder from '../../assets/image-placeholder.jpg'

import { Parallax } from 'react-parallax';

const Cover = () => {
    return (
        <Parallax className = 'image' bgImage={Placeholder} strength={800}>
            <div className = 'parallax-grid'>
                <div className='parallax-grid-description'>
                    <h1 className='title'>Ecaterina Bujac</h1>
                    <h3 className='subtitle'>Travailleuse Sociale</h3>
                </div>
                <div className='parallax-grid-image'>
                    <img src={Placeholder} />
                </div>
            </div>
        </Parallax>
    )
}

export default Cover