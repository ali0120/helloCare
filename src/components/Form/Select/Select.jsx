import React, { useContext, useEffect, useState } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// React Hooks Form
import { useFormContext } from 'react-hook-form';

// Style
import './Select.css';
import AxiosInstance from '../../../Requests/AxiosInstance';
import { MasterStore } from '../../../services/Stores/StoreProvider';

const Select = ({ label, icon, data, Api, id, name, empty, validate, media, value, Values, placeholder, optionName, optionId, onChange, index, formName, className, disabled }) => {
    const { t } = useTranslation();
    const { register, setValue, formState } = useFormContext() || {};
    const [List, setList] = useState(data)
    const [setOutFormValue] = useState(value);
    const { CityId, setCityId } = useContext(MasterStore)
    // Component Validations
    const Validation = {
        required: {
            value: validate,
            message: `${name} is required`,
        },
    };

    // onChange Handler
    const onChangeHandler = (Event) => {
        const element = { ...register && { ...register(`${name}`, Validation) } }
        if (Object.keys(element).length !== 0) element.onChange(Event);
        if (onChange) onChange(Event);
        if (name === "city_id") {
            setCityId(Event.target.value)
        }
        // Set Out Form Value
        if (!register) {
            setOutFormValue(Event.target.value);
        }
    };

    useEffect(() => {
        const params = {};
        if (Api && name !== "area_id") {
            AxiosInstance.get(`${Api}`).then(Response => {
                setList(Response.data.data)
            }).catch(Error => {
                console.log(Error);
            }
            )
        }
        if (Api && name === "area_id") {
            params.city_id = CityId;
            AxiosInstance.get(`${Api}`, { params: params }).then(Response => {
                setList(Response.data.data)
            }).catch(Error => {
                console.log(Error);
            }
            )
        }

    }, [Api, CityId, name])
    useEffect(() => {
        if (name === "city_id" && List && List.length === 1) {
            List.forEach((item) => {
                setCityId(item.id)
            })
        }
    }, [List, name, setCityId])

    console.log({ List });

    // Set Value
    useEffect(() => {
        if (setValue && (value || (value) === '')) {
            setValue(name, value);
        }
        else if (setValue && (Values || (Values) === '')) {
            setValue(name, Values);
        }
    }, [name, setValue, value, Values, index]);

    return (
        <React.Fragment>
            <div className={`${media || 'col-12'}`}>
                <div className={`Select`}>
                    {(label || icon) && <label>{icon && <i className={icon} />} {t(`${label}`)}</label>}
                    <div className="d-flex gap-2">
                        {!!List?.length ?
                            <select id={id} className="form-select w-100" name={!register && name}
                                {...register && { ...register(`${name}`, Validation) }}
                                onChange={onChangeHandler}
                                disabled={disabled}
                            >
                                {List.map((Option, Index) => (
                                    <option key={Index} value={optionId && Option[optionId]} >
                                        {optionName && Option[optionName]}
                                    </option>
                                ))}
                            </select> :
                            <select id={id} className="form-select w-100" disabled={disabled}>
                                <option value="">{empty || t(`${'NoItem'}`)}</option>
                            </select>
                        }
                    </div>
                    {(register && (!!Object.keys(formState?.errors).length && (
                        (formName && formState?.errors[formName]) ? (formState?.errors[formName][name]) : (formState?.errors[name])
                    )) && <span>{formName ? t(formState?.errors[formName][name].message) : t(formState?.errors[name].message)}</span>)}
                </div>
            </div>
        </React.Fragment >
    )
}

export default Select;
