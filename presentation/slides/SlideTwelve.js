import React from 'react';
import theme from '../theme';
import styled from 'react-emotion';
import { Heading, Notes } from 'spectacle';
import NoteLi from '../components/NoteLi';

const StyledHeading = styled(Heading)`
    text-shadow: 0px 0px 10px ${theme.screen.colors.primary};
`;

const SlideTwelve = () => (
    <StyledHeading size={1} textColor="secondary" lineHeight={1}>
        Now React!
    </StyledHeading>
);

export default SlideTwelve;
