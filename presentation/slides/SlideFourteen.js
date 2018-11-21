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

const SlideFourteen = () => (
    <>
        <Layout style={{ minWidth: '150%', marginLeft: '-25%' }}>
            <Fit
                style={{
                    minWidth: '450px',
                    paddingRight: '20px'
                }}
            >
                <Text textAlign="left" textColor="secondary">
                    Molecule
                </Text>
                <List style={{ marginTop: '75px' }}>
                    <Appear>
                        <StyledListItem>Only Atoms ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Still Digestible ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Composition ✅</StyledListItem>
                    </Appear>
                    <Appear>
                        <StyledListItem>Still Easy to test ✅</StyledListItem>
                    </Appear>
                </List>
            </Fit>
            <Fill>
                <CodePane
                    theme="external"
                    textSize={22}
                    overflow="scroll"
                    height="75vh"
                    source={require('raw-loader!../../assets/molecule.example')}
                    lang="jsx"
                />
            </Fill>
        </Layout>
    </>
);

export default SlideFourteen;
