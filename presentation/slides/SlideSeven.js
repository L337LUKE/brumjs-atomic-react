import React from 'react';
import { Heading, Slide, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    organisms: require('../../assets/organisms.png')
};

preloader(images);

const SlideSeven = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Notes>
            <h4>Notes</h4>
            <ul>
                <li>Combination of molecules</li>
                <li>Fairly small organism but they can be larger visually</li>
                <li>
                    Often organisms wrap other organisms, where the bulk of
                    logic sits
                </li>
            </ul>
        </Notes>
        <Heading size={3} textColor="secondary" lineHeight={1}>
            Organisms
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.organisms.replace('/', '')}
            margin="40px auto 40px auto"
            style={{ maxWidth: '600px' }}
        />
    </Slide>
);

export default SlideSeven;
