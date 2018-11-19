import React from 'react';
import styled from 'react-emotion';
import {
    Deck,
    CodePane,
    Slide,
    Appear,
    Layout,
    Fill,
    Fit,
    List,
    ListItem,
    Notes,
    Image,
    Text,
    Heading
} from 'spectacle';
import theme from './theme';
import {
    SlideOne,
    SlideTwo,
    SlideThree,
    SlideFour,
    SlideFive,
    SlideSix,
    SlideSeven,
    SlideEight,
    SlideNine,
    SlideTen,
    SlideEleven
} from './slides';
import preloader from 'spectacle/lib/utils/preloader';
require('normalize.css');

const images = {
    atoms: require('../assets/atoms.png'),
    molecules: require('../assets/molecules.png'),
    organisms: require('../assets/organisms.png'),
    template: require('../assets/template.png'),
    page: require('../assets/page.png'),
    teamwork: require('../assets/teamwork.gif')
};

preloader(images);

const ShadowedHeading = styled(Heading)`
    text-shadow: 0px 0px 10px ${theme.screen.colors.primary};
`;

const StyledListItem = styled(ListItem)`
    font-size: 33px;
    font-weight: 500;
    text-align: left;
    margin-top: 100px;
`;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                progress="bar"
                transition={['slide']}
                transitionDuration={500}
                theme={theme}
                controls={false}
            >
                <SlideOne />
                <SlideTwo />
                <SlideThree />
                <Slide bgImage={images.teamwork}>
                    <Notes>
                        <h4>Teamwork Notes</h4>
                        <ul>
                            <li>
                                Constant communication, tight feedback loops,
                                and true collaboration therefore become the glue
                                that holds the process together
                            </li>
                            <li>
                                Get your entire team to commit to honest
                                conversation and genuine collaboration, and the
                                details of your process will fall into place.
                            </li>
                        </ul>
                    </Notes>
                    <ShadowedHeading textColor="secondary">
                        It's teamwork
                    </ShadowedHeading>
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Process Notes</h4>
                    </Notes>
                    <Heading textColor="secondary">It's process</Heading>
                </Slide>
                <SlideFour />
                <SlideFive />
                <SlideSix />
                <SlideSeven />
                <SlideEight />
                <SlideNine />
                <SlideTen />
                {/* <SlideEleven /> */}
                <Slide>
                    <Notes>
                        <h4>Atom Code Example Notes</h4>
                        <ul>
                            <li />
                        </ul>
                    </Notes>
                    <Layout>
                        <Fit style={{ minWidth: '400px' }}>
                            <div style={{ marginTop: '75px' }}>
                                <List>
                                    <Appear>
                                        <StyledListItem>SRP 👆</StyledListItem>
                                    </Appear>
                                    <Appear>
                                        <StyledListItem>
                                            Digestible piece ✅
                                        </StyledListItem>
                                    </Appear>
                                    <Appear>
                                        <StyledListItem>
                                            Easy to test ✅
                                        </StyledListItem>
                                    </Appear>
                                    <Appear>
                                        <StyledListItem>
                                            Sensible defaults ✅
                                        </StyledListItem>
                                    </Appear>
                                </List>
                            </div>
                        </Fit>
                        <Fill>
                            <CodePane
                                theme="external"
                                textSize={22}
                                overflow="scroll"
                                height="75vh"
                                source={require('raw-loader!../assets/atom.example')}
                                lang="jsx"
                            />
                        </Fill>
                    </Layout>
                </Slide>
            </Deck>
        );
    }
}
