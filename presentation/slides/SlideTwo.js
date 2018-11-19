import React from 'react';
import styled from 'react-emotion';
import { Heading, Slide, List, ListItem, Notes } from 'spectacle';

const StyledLI = styled(ListItem)`
    margin-top: 20px;
`;

const SlideTwo = () => (
    <Slide bgColor="primary">
        <Notes>
            <h4>Slide Notes</h4>
            <ol>
                <li>
                    1. Going to cover what atomic design is, and some guiding
                    principles
                </li>
                <li>
                    2. How you can apply it to your workflow in React
                    specifically
                </li>
                <li>
                    3. What problems i've faced at PB and how I feel we can
                    overcome them
                </li>
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
    </Slide>
);

export default SlideTwo;
