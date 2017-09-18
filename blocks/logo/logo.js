import React from 'react';
import redux from 'redux';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Logo',
    tag: 'h1',
    content() {
        return 'Logo h1!';
    }
});
