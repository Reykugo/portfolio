import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({content}) =>{
    return(
        <p className="paragraph">{content}</p>
    )
}

TextArea.propTypes = {
    content: PropTypes.string.isRequired
}

export default TextArea;
