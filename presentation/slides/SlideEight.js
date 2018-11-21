import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLi from '../components/NoteLi';

const images = {
    molecules: require('../../assets/molecules.png')
};

preloader(images);

const SlideEight = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ul>
                <NoteLi>Groups of a couple or more atoms</NoteLi>
                <NoteLi>Lightweight UI</NoteLi>
                <NoteLi>often strictly presentation logic</NoteLi>
                <NoteLi>
                    getting to complicated? <br /> you might need an organism
                </NoteLi>
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
    </>
);

export default SlideEight;
