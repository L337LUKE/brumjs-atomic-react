import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLi from '../components/NoteLi';

const images = {
    atoms: require('../../assets/atoms.png')
};

preloader(images);

const SlideSeven = () => (
    <>
        <Notes>
            <h4>Slide notes</h4>
            <ol>
                <NoteLi>Simple shareable pieces of UI</NoteLi>
                <NoteLi>Pieces that can't be broken down further</NoteLi>
                <NoteLi>Good overview of apps main styles</NoteLi>
                <NoteLi>
                    Useful when used as part of living styleguide, Storybook etc
                </NoteLi>
            </ol>
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
    </>
);

export default SlideSeven;
