import React, { useEffect, useState } from 'react'
import Form from './../Form/Form/Form';
import Select from './../Form/Select/Select';
import { useTranslation } from "react-i18next";

//Images
import categories from './../../assets/stethoscope.svg'
import { BsBagPlus } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
// Css
import './PopUp.css'
import Button from './../Form/Button/Button';

const PopUp = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(true)
        }, 30000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return null;
    }

    const HandlingModal = () => {
        setShow(false)
    }

    return (
        <div className={`popup ${show === false && 'hide'}`}>
            <div className="modal fade show" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={HandlingModal} />
                        </div>
                        <div className="modal-body">
                            <h2>{t(`searchText`)}</h2>
                            <h2>{t(`subsearch`)}</h2>
                            <div className="form_wrapper">
                                <Form>
                                    <div className='select_containers'>
                                        <Select name={"specialty_id"} label="categories" Api="landing_page/specialties" optionName="name" optionId="id" />
                                        <img src={categories} alt="" />
                                    </div>
                                    <div className='select_containers'>
                                        <Select name={"visit_type"} label="visittype" data={[{ id: 'home_visit', name: t(`home_visit`) },
                                        { id: 'videocall', name: t(`video_call`) }]} optionName="name" optionId="id" />
                                        <BsBagPlus />
                                    </div>
                                    <div className='select_containers'>
                                        <Select name={"city_id"} label="city" Api="landing_page/cities" optionName="name" optionId="id" />
                                        <GoLocation />
                                    </div>
                                    <div className='select_containers'>
                                        <Select name={"area_id"} label="region" Api="landing_page/areas" optionName="name" optionId="id" />
                                        <GoLocation />
                                    </div>
                                    <div className="button_wrapper">
                                        <Button type={'submit'} value={t(`Search`)} />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />


        </div>
    )
}

export default PopUp