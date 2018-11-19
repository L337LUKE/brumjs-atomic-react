import React from 'react';
import { Heading, Slide, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    atoms: require('../../assets/atoms.png')
};

preloader(images);

const SlideFive = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Notes>
            <h4>Slide notes</h4>
            <ul>
                <li>Simple shareable pieces of UI</li>
                <li>Pieces that can't be broken down further</li>
                <li>Good overview of apps main styles</li>
                <li>Useful when used as part of living styleguide</li>
            </ul>
        </Notes>
        <Heading size={3} textColor="secondary" lineHeight={1}>
            Atoms
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.atoms.replace('/', '')}
            margin="40px auto 40px auto"
            style={{ maxWidth: '580px' }}
        />
    </Slide>
);

export default SlideFive;
