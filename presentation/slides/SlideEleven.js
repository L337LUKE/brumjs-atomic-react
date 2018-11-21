import React from 'react';
import { Heading, Notes, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLi from '../components/NoteLi';

const images = {
    page: require('../../assets/page.png')
};

preloader(images);

const SlideEleven = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ul>
                <NoteLi>Culmination of final content paired with UI</NoteLi>
                <NoteLi>Helps mental structuring when devving</NoteLi>
                <NoteLi>Something stakeholders can agree to</NoteLi>
                <NoteLi>
                    Stakeholders can visualise the final product for sign off
                </NoteLi>
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
    </>
);

export default SlideEleven;
