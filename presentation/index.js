import React from 'react';
import {
    Deck,
    CodePane,
    Slide,
    Notes,
    Appear,
    Text,
    Heading,
    S
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
    SlideEleven,
    SlideTwelve,
    SlideThirteen,
    SlideFourteen,
    SlideFifteen
} from './slides';
import preloader from 'spectacle/lib/utils/preloader';
import NoteLI from './components/NoteLi';
import ShadowHeading from './components/ShadowHeading';
import ShadowText from './components/ShadowText';
require('normalize.css');

const images = {
    atoms: require('../assets/atoms.png'),
    molecules: require('../assets/molecules.png'),
    organisms: require('../assets/organisms.png'),
    template: require('../assets/template.png'),
    page: require('../assets/page.png'),
    teamwork: require('../assets/teamwork.gif'),
    rickBg: require('../assets/ricknmorty.gif'),
    ricknmortythanks: require('../assets/ricknmortythanks.gif')
};

preloader(images);

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
                <Slide bgColor="primary">
                    <SlideOne />
                </Slide>
                <Slide bgColor="primary">
                    <SlideTwo />
                </Slide>
                <Slide bgColor="primary">
                    <SlideThree />
                </Slide>
                <Slide bgImage={images.teamwork}>
                    <SlideFour />
                </Slide>
                {/* <Slide bgColor="primary">
                    <SlideFive />
                </Slide> */}
                <Slide bgColor="primary">
                    <SlideSix />
                </Slide>
                <Slide bgColor="primary">
                    <SlideSeven />
                </Slide>
                <Slide bgColor="primary" transition={['fade']}>
                    <SlideEight />
                </Slide>
                <Slide bgColor="primary" transition={['fade']}>
                    <SlideNine />
                </Slide>
                <Slide bgColor="primary" transition={['fade']}>
                    <SlideTen />
                </Slide>
                <Slide bgColor="primary">
                    <SlideEleven />
                </Slide>
                <Slide
                    bgImage={images.rickBg.replace('/', '')}
                    bgColor="primary"
                    transition={['fade']}
                >
                    <SlideTwelve />
                </Slide>
                <Slide bgColor="primary" transition={['fade']}>
                    <SlideThirteen />
                </Slide>
                <Slide bgColor="primary">
                    <SlideFourteen />
                </Slide>
                <Slide bgColor="primary">
                    <SlideFifteen />
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Slide Notes</h4>
                        <ul>
                            <NoteLI>
                                <strong>Templates</strong>, organise layout
                                pieces
                            </NoteLI>
                            <NoteLI>
                                <strong>Pages</strong>, Where our content is
                                funelled in
                            </NoteLI>
                        </ul>
                    </Notes>
                    <Heading>Templates &</Heading>
                    <Heading>Pages</Heading>
                </Slide>
                <Slide>
                    <Heading size={2}>
                        Problems & <br /> Challenges
                    </Heading>
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Slide Notes</h4>
                        <ol>
                            <NoteLI>
                                Highlighted by use of Atomic not symptom of
                            </NoteLI>
                            <NoteLI>Style overriding</NoteLI>
                            <NoteLI>Style overrides, Inline Styles</NoteLI>
                            <NoteLI>
                                Confusion between props and inline styles
                            </NoteLI>
                            <NoteLI>Very Verbose</NoteLI>
                        </ol>
                    </Notes>
                    <Heading
                        style={{ marginBottom: '30px' }}
                        textColor="secondary"
                        size={6}
                    >
                        CSS Modules / Overriding Styles
                    </Heading>
                    <CodePane
                        theme="external"
                        textSize={22}
                        overflow="scroll"
                        height="75vh"
                        source={require('raw-loader!../assets/style-problem.example')}
                        lang="jsx"
                    />
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Slide Notes</h4>
                        <ol>
                            <NoteLI>
                                Modern styling for the component age
                            </NoteLI>
                            <NoteLI>CSS-in-JS, contraversial</NoteLI>
                            <NoteLI>
                                Promotes idea of code sharing and re-use
                            </NoteLI>
                            <NoteLI>No build step bollocks like sass</NoteLI>
                        </ol>
                    </Notes>
                    <Heading
                        style={{ marginBottom: '50px' }}
                        textColor="secondary"
                        size={3}
                    >
                        Styled Components 💅
                    </Heading>
                    <Text textColor="faded">
                        <S type="italic">Or</S>
                    </Text>
                    <Heading
                        style={{ marginTop: '50px' }}
                        textColor="secondary"
                        size={3}
                    >
                        Emotion 👩‍🎤
                    </Heading>
                </Slide>
                <Slide>
                    <Heading
                        textColor="secondary"
                        size={5}
                        style={{ marginBottom: '40px' }}
                    >
                        Styled Component Example
                    </Heading>
                    <CodePane
                        theme="external"
                        textSize={22}
                        overflow="scroll"
                        height="65vh"
                        source={require('raw-loader!../assets/style-solution.example')}
                        lang="jsx"
                    />
                </Slide>
                <Slide>
                    <Heading>Sharing Stuff</Heading>
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Slide Notes</h4>
                        <ol>
                            <NoteLI>People, communication</NoteLI>
                            <NoteLI>
                                Process, mental model, involving key members,
                                education
                            </NoteLI>
                            <NoteLI>Tooling, mono-repo approach</NoteLI>
                            <NoteLI>But Ultimately...</NoteLI>
                        </ol>
                    </Notes>
                    <Heading>People</Heading>
                    <Text textColor="primary">-</Text>
                    <Appear>
                        <Heading>Process</Heading>
                    </Appear>
                    <Text textColor="primary">-</Text>
                    <Appear>
                        <Heading>Tooling</Heading>
                    </Appear>
                </Slide>
                <Slide>
                    <Notes>
                        <h4>Slide Notes</h4>
                        <ol>
                            <NoteLI>We don't know everything</NoteLI>
                            <NoteLI>We're still learning</NoteLI>
                        </ol>
                    </Notes>
                    <Heading textColor="secondary" size={2}>
                        We're still figuring it out
                    </Heading>
                </Slide>
                <Slide
                    bgImage={images.ricknmortythanks.replace('/', '')}
                    bgColor="primary"
                >
                    <ShadowHeading>Thanks</ShadowHeading>
                    <ShadowText textColor="secondary">Questions?</ShadowText>
                </Slide>
                <Slide>
                    <Heading>End</Heading>
                </Slide>
            </Deck>
        );
    }
}
