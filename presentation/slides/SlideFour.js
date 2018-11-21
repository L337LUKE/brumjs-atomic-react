import React from 'react';
import styled from 'react-emotion';
import theme from '../theme';
import { Notes, Heading } from 'spectacle';
import NoteLi from '../components/NoteLi';
import ShadowedHeading from '../components/ShadowHeading';

const SlideFour = () => (
    <>
        <Notes>
            <h4>Slide Notes</h4>
            <ul>
                <NoteLi>
                    Constant communication, tight feedback loops so true
                    collaboration becomes the glue that holds the process
                    together
                </NoteLi>
                <NoteLi>
                    Does require a good level of buy-in from UX/UI, Dev,
                    stakeholders
                </NoteLi>
            </ul>
        </Notes>
        <ShadowedHeading textColor="secondary">It's teamwork</ShadowedHeading>
    </>
);

export default SlideFour;
