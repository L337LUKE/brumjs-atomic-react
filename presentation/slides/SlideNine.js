import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLi from '../components/NoteLi';

const images = {
    organisms: require('../../assets/organisms.png')
};

preloader(images);

const SlideNine = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ul>
                <NoteLi>Combination of molecules</NoteLi>
                <NoteLi>
                    This is fairly small organism but they can be larger
                    visually
                </NoteLi>
                <NoteLi>
                    Organisms can wrap other organisms, explain later
                </NoteLi>
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
    </>
);

export default SlideNine;
