import React from 'react';
import { Heading, Slide, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    molecules: require('../../assets/molecules.png')
};

preloader(images);

const SlideSix = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Notes>
            <h4>Notes</h4>
            <ul>
                <li>Groups of a couple or more atoms</li>
                <li>Lightweight</li>
                <li>often strictly presentation logic</li>
                <li>getting to complicated?, you might need an organism</li>
            </ul>
        </Notes>
        <Heading size={3} textColor="secondary" lineHeight={1}>
            Molecules
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.molecules.replace('/', '')}
            margin="40px auto 40px auto"
            style={{ maxWidth: '600px' }}
        />
    </Slide>
);

export default SlideSix;
