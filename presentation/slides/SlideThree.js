import React from 'react';
import { Heading, Slide, Notes } from 'spectacle';

const SlideThree = () => (
    <Slide bgColor="primary">
        <Notes>
            <h4>Slide notes</h4>
            <ol>
                Atomic
                <li>
                    1. Mental model you can use to help structure your
                    components and final UI
                </li>
                <li>
                    2. No frameworks or tools necessary to build this way, but
                    there are tools and libraries to help
                </li>
                <li>3. </li>
            </ol>
        </Notes>
        <Heading size={2} textColor="secondary" lineHeight={1}>
            So What is Atomic Design?
        </Heading>
    </Slide>
);

export default SlideThree;
