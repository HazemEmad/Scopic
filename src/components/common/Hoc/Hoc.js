import * as React from 'react';

const HOC = Comp => props => <Comp {...props} />;

export default HOC;
