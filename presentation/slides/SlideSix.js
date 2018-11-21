import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Caption from '../components/Caption';
import NoteLi from '../components/NoteLi';

const images = {
    atomic: require('../../assets/atomic-design-abstract-concrete.png')
};

preloader(images);

const SlideSix = () => (
    <>
        <Notes>
            <h4>Slide notes</h4>
            Atoms
            <ul>
                <NoteLi>
                    Basic building blocks, can't be broken down any further
                    (they can but this should be enough)
                </NoteLi>
            </ul>
            Molecules
            <ul>
                <NoteLi>
                    Composed directly of two or more Atoms and only Atoms + UI
                </NoteLi>
            </ul>
            Organisms
            <ul>
                <NoteLi>
                    Composed of Atoms, Molecules & Other Organisms, Complex
                    pieces
                </NoteLi>
            </ul>
        </Notes>
        <Heading size={2} textColor="secondary" lineHeight={1}>
            It's a mental model
        </Heading>
        <Image
            width="100%"
            height="100%"
            src={images.atomic.replace('/', '')}
            margin="40px auto 40px auto"
            style={{ maxWidth: '580px' }}
        />
        <Caption>Figure 1: Atomic Design Methodology - Brad Frost</Caption>
    </>
);
export default SlideSix;
