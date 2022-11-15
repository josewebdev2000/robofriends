import React from 'react';

const Scroll = (props) => {
    // Return the children instead of rendering the element itself
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height:'490px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;