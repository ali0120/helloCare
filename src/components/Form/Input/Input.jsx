import React, { useEffect } from 'react';

// React Hooks Form
import { useFormContext } from 'react-hook-form';

// Translation
import { useTranslation } from 'react-i18next';

// Style
import './Input.css';

const Input = ({ label, type, name, value, id, placeholder, onChange, validate, index, language, minLength, maxLength, media, max, min, icon, disabled }) => {
    const { t } = useTranslation();
    const { register, setValue, formState } = useFormContext() || {};

    // Component Validations
    const Validation = {
        required: {
            value: validate,
            message: `${name} is required`,
        },
        max: {
            value: max,
            message: `Max number is ${max}`,
        },
        min: {
            value: min,
            message: `Min number is ${min}`,
        },
        maxLength: {
            value: maxLength,
            message: `Max Character is ${maxLength}`,
        },
        minLength: {
            value: minLength,
            message: `Min Character is ${minLength}`
        },
        validate: {
            number: (value) => type === 'number' ? ((/^\d+$/.test(value)) || 'Please Enter Numbers Only') : true,
            email: (value) => type === 'email' ? ((/\S+@\S+\.\S+/.test(value)) || 'Please Enter Valid Email') : true,
            english: (value) => language === 'En' ? ((/^[a-zA-Z-_.,0-9+_#\s+*?^%$@()!&-=,.?؟,`.#*?^%$()@!&= ]+(\s{0, 1}[a-zA-Z-, ])*$/.test(value)) || 'English Character Only') : true,
            arabic: (value) => language === 'Ar' ? ((/^[\u0621-\u064A\u0660-\u0669 0-9,\s+.+_#*?^%$@()!&-=,.?؟,،'"`. ]+$/.test(value)) || 'Arabic Character Only') : true,
            url: (value) => type === 'Url' ? ((/^(ftp|http|https):\/\/[^ "]+$/.test(value)) || 'Url Only') : true,
        }
    }

    // onKeyPress Handler
    const onKeyPressHandler = (Event) => {
        // Numbers
        if (type === 'number' && validate) {
            const Regex = new RegExp("[0-9]")
            const keyCode = Event.keyCode || Event.which;
            const keyValue = String.fromCharCode(keyCode);
            if (!Regex.test(keyValue)) {
                Event.preventDefault();
            }
        }
    }

    // onChange Handler
    const onChangeHandler = (Event) => {
        const element = { ...register && { ...register(`${name}`, Validation) } }
        if (Object.keys(element).length !== 0) element.onChange(Event);
        if (onChange) onChange(Event);
    }

    // Set Value
    useEffect(() => {
        if (setValue && (value || value === '')) {
            setValue(name, value);
        }
    }, [name, setValue, value, index]);

    return (
        <React.Fragment>
            <div className={`Input ${media || 'col-12'}`}>
                {(label || icon) && <label htmlFor={id}>{t(`${label}`)}</label>}
                <input type={type || 'text'}
                    name={!register && name}
                    // {...Validation?.required && { ...register(`${name}`, { required: true }) }}
                    {...register && { ...register(`${name}`, Validation) }}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    id={id} placeholder={t(`${placeholder || ''}`)}
                    disabled={disabled}
                />
                {((!!formState?.errors && register && !!formState?.errors[name]) && <span>{t(`${formState?.errors[name].message}`)}</span>)}
            </div>
        </React.Fragment>
    );
}

export default Input;