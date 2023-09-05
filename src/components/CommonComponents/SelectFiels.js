// SelectField.js
import React from 'react';
import { MenuItem, Select } from '@mui/material';

const SelectField = ({ name, placeholder, options, value, onChange }) => {
    return (
        <Select
            name={name}
            displayEmpty
            size="small"
            placeholder={placeholder}
            fullWidth
            sx={{ borderColor: '#dbdfea' }}
            value={value}
            onChange={onChange}
            multiple={Array.isArray(value)}
        >
            {options.map((option, index) => {
                return (
                    <MenuItem
                        key={index}
                        value={option}
                        style={{
                            backgroundColor: value.includes(option) ? '#c1c1c1' : 'inherit',
                            color: value.includes(option) ? 'white' : 'inherit',
                        }}
                    >
                        {option}
                    </MenuItem>

                )
            })}
        </Select>
    );
};


export default SelectField;
