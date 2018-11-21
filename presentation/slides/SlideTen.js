import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLi from '../components/NoteLi';

const images = {
    template: require('../../assets/template.png')
};

preloader(images);

const SlideTen = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ul>
                <NoteLi>Templates, Organise organisms, mainly layout</NoteLi>
                <NoteLi>
                    Good for illustrating to business stakeholders because they
                    see process/progress
                </NoteLi>
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
    </>
);

export default SlideTen;
