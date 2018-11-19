import React from 'react';
import { Text } from 'spectacle';

const Caption = ({ children }) => (
    <Text
        textSize={25}
        style={{ textDecoration: 'underline' }}
        textColor="faded"
    >
        {children && children}
    </Text>
);

export default Caption;
