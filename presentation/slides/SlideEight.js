import React from 'react';
import { Heading, Slide, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    template: require('../../assets/template.png')
};

preloader(images);

const SlideEight = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Notes>
            <h4>Notes</h4>
            <ul>
                <li>Templates often comprise the top level pieces</li>
            </ul>
        </Notes>
        <Heading size={3} textColor="secondary" lineHeight={1}>
            Templates
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.template.replace('/', '')}
            margin="40px auto 40px auto"
        />
    </Slide>
);

export default SlideEight;
