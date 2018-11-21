import React from 'react';
import {
    Notes,
    Layout,
    Fit,
    Fill,
    Text,
    List,
    Appear,
    CodePane
} from 'spectacle';
import StyledListItem from '../components/StyledListItem';

const SlideFifteen = () => (
    <>
        <Layout style={{ minWidth: '150%', marginLeft: '-25%' }}>
            <Fit
                style={{
                    minWidth: '450px',
                    paddingRight: '20px'
                }}
            >
                <Text textAlign="left" textColor="secondary">
                    Organism
                </Text>
                <List style={{ marginTop: '75px' }}>
                    <Appear>
                        <StyledListItem>
                            Atoms, Molecules, Organisms ✅
                        </StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>
                            Organisms can contain Organisms 😱
                        </StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Composition ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>More Logic ⚙️</StyledListItem>
                    </Appear>
                </List>
            </Fit>
            <Fill>
                <CodePane
                    theme="external"
                    textSize={22}
                    overflow="scroll"
                    height="75vh"
                    source={require('raw-loader!../../assets/organism.example')}
                    lang="jsx"
                />
            </Fill>
        </Layout>
    </>
);

export default SlideFifteen;
