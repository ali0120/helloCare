import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Style
import './Button.css';

const Button = ({ type, value, disabled, variant, media, onClick, FormId }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className={`Button ${media || 'col-12'}`}>
                <button className={`btn ${variant || ''}`} type={type} disabled={disabled} form={FormId} onClick={onClick}>{t(`${value}`)}</button>
            </div>
        </React.Fragment>
    )
}

export default Button
