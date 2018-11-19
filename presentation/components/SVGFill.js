import React from 'react';
import { Fill } from 'spectacle';

const SVGFill = ({ children }) => (
    <Fill>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            {children && children}
        </div>
    </Fill>
);

export default SVGFill;
