import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, StyledInput } from './style'


export default function Input({ name, label, containerStyle, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return(
        <Container className="containerInput" style={containerStyle}>
        {label && (<label>{label}</label>)}
            { error && <span className="error">{error}</span> }
            <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
        </Container>
    );
}
