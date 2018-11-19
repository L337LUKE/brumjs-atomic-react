import React from 'react';
import theme from '../theme';
import styled from 'react-emotion';
import { Heading, Slide, Notes } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
    bg: require('../../assets/ricknmorty.gif')
};

preloader(images);

const StyledHeading = styled(Heading)`
    text-shadow: 0px 0px 10px ${theme.screen.colors.primary};
`;

const SlideTen = () => (
    <Slide
        bgImage={images.bg.replace('/', '')}
        bgColor="primary"
        transition={['fade']}
    >
        <Notes>
            <ul>
                <li>Explain about react examples</li>
            </ul>
        </Notes>
        <StyledHeading size={3} textColor="secondary" lineHeight={1}>
            Now the React Part!
        </StyledHeading>
    </Slide>
);

export default SlideTen;
