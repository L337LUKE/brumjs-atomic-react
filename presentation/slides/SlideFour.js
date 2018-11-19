import React from 'react';
import { Heading, Slide, Notes, Layout, Fill, Text, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import Caption from '../components/Caption';

const images = {
    atomic: require('../../assets/atomic-design-abstract-concrete.png')
};

preloader(images);

const SlideFour = () => (
    <Slide bgColor="primary">
        <Notes>
            <h4>Slide notes</h4>
            Atoms
            <ul>
                <li>
                    Basic building blocks, can't be broken down any further
                    (they can but this should be enough)
                </li>
                <li>Represent styles of your app at a glance</li>
                <li>Single Responsibility Principle SRP</li>
                <li>Easiest to unit test as they're digestible</li>
            </ul>
            Molecules
            <ul>
                <li>Composed of two or more Atoms</li>
                <li>Simple, Lightweight, Apply Personality to components</li>
                <li>Easily Testable</li>
            </ul>
            Organisms
            <ul>
                <li>Complex UI Pieces</li>
                <li>Composed of Atoms, Molecules & Other Organisms</li>
                <li />
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
    </Slide>
);

export default SlideFour;
