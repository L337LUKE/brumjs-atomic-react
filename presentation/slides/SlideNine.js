import React from 'react';
import { Heading, Slide, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    page: require('../../assets/page.png')
};

preloader(images);

const SlideNine = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Notes>
            <h4>Notes</h4>
            <ul>
                <li>Culmination of final content paired with UI</li>
                <li>Something stakeholders can agree to</li>
                <li>So they can visualise the final product for sign off</li>
            </ul>
        </Notes>
        <Heading size={3} textColor="secondary" lineHeight={1}>
            Pages
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.page.replace('/', '')}
            margin="40px auto 40px auto"
        />
    </Slide>
);

export default SlideNine;
