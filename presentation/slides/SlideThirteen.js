import React from 'react';
import { CodePane, Layout, Fill, Fit, List, Text, Appear } from 'spectacle';
import StyledListItem from '../components/StyledListItem';

const SlideThirteen = () => (
    <>
        <Layout style={{ minWidth: '150%', marginLeft: '-25%' }}>
            <Fit
                style={{
                    minWidth: '450px',
                    paddingRight: '20px'
                }}
            >
                <Text textAlign="left" textColor="secondary">
                    Atom
                </Text>
                <List style={{ marginTop: '75px' }}>
                    <Appear>
                        <StyledListItem>SRP 👆</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Digestible piece ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Easy to test ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Sensible defaults ✅</StyledListItem>
                    </Appear>
                </List>
            </Fit>
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
    </>
);

export default SlideThirteen;
