import React from 'react';
import styled from 'react-emotion';
import { Heading, List, ListItem, Notes } from 'spectacle';
import NoteLI from '../components/NoteLi';

const StyledLI = styled(ListItem)`
    margin-top: 20px;
`;

const SlideTwo = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ol>
                <NoteLI>Guiding Principles</NoteLI>
                <NoteLI>How Apply to apply</NoteLI>
                <NoteLI>Problems / challenges and solutions</NoteLI>
            </ol>
        </Notes>
        <Heading size={2} textColor="secondary" lineHeight={1}>
            This talk is about...
        </Heading>
        <List margin="100px 0 0 0">
            <StyledLI>What is atomic design</StyledLI>
            <StyledLI>Atomic with React</StyledLI>
            <StyledLI>Problems, solutions</StyledLI>
        </List>
    </>
);

export default SlideTwo;
