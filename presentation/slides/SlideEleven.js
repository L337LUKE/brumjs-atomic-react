import React from 'react';
import styled from 'react-emotion';
import {
    CodePane,
    Slide,
    Layout,
    Fit,
    Text,
    Fill,
    List,
    ListItem,
    Appear
} from 'spectacle';

const StyledListItem = styled(ListItem)`
    font-size: 30px;
    font-weight: 500;
    text-align: left;

    & + & {
        margin-top: 100px;
    }
`;

const SlideEleven = () => (
    <Slide bgColor="primary" transition={['fade']}>
        <Layout>
            <Fill>
                <div style={{ marginTop: '75px' }}>
                    <List>
                        <Appear>
                            <StyledListItem>SRP 👆</StyledListItem>
                        </Appear>
                        <StyledListItem>Digestible piece ✅</StyledListItem>
                        <StyledListItem>Easy to test ✅</StyledListItem>
                        <StyledListItem>Sensible defaults ✅</StyledListItem>
                    </List>
                </div>
            </Fill>
            <Fill>
                <CodePane
                    theme="external"
                    textSize={22}
                    overflow="scroll"
                    height="75vh"
                    source={require('raw-loader!../../assets/atom.example')}
                    lang="jsx"
                />
            </Fill>
        </Layout>
    </Slide>
);

export default SlideEleven;
