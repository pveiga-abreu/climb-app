import React, { useEffect, useRef } from 'react';
import { Container, StyledSelect } from './style.js';
import { useField } from '@unform/core';

export default function Select({ name, label, onChange, onMenuClose, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'state.value',
            getValue: (ref) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return []
                    }
                    return ref.state.value.map((option) => option.value)
                } else {
                    if (!ref.state.value) {
                    return ''
                    }
                    return ref.state.value.value
                }
            }
        })
      }, [fieldName, registerField, rest.isMulti])
    

    return (
        <Container className="select">
            { label && (<label>{label}</label>) }

            <StyledSelect
                defaultValue={defaultValue}
                ref={selectRef}
                isSearchable
                classNamePrefix="react-select"
                onChange={onChange}
                onMenuClose={onMenuClose}
                {...rest}
                placeholder='Selecione uma opção'
            />

            { error && <span className="error">{error}</span> }
        </Container>
    )

}
