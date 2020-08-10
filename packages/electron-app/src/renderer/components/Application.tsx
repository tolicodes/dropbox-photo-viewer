import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styled from 'styled-components';
import imageThumbnails from './imageThumbnails.json';
import LazyLoad from 'react-lazyload';

const Image = ({ images, index }) => <img src={images[index]} />;

const Application = () => {
    const images: string[] = imageThumbnails.map(
        (thumb: string) => `data:image/jpeg;base64,${thumb}`
    );

    // console.log(images);

    return (
        <div>
            {images.map((image, index) => (
                <LazyLoad key={index}>
                    <Image images={images} index={index} />
                </LazyLoad>
            ))}
        </div>
    );
};

export default hot(Application);
