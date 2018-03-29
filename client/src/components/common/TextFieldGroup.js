import React from 'react';
import PropTypes from 'prop-types'

const TextFieldGroup = ({field, value, label, type, onChange}) =>{
    return (
        <div className="form-group">
            <label className="control-label">{label}</label>
            <input 
                type={type} 
                name={field}
                className="form-control"
                value={value}
                onChange={onChange}
                required="true"
            />
        </div>
    )
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.string.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text',
    required: "true"
   
}

export default TextFieldGroup;