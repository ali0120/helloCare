import React from 'react';

// React Hook Form
import { useForm, FormProvider } from 'react-hook-form';

// Style
import './Form.css';

const Form = ({ children, FormId, action, callBack }) => {
    const methods = useForm();
    // On Submit
    const onSubmit = async (data) => {
        window.open(`https://heallocare.com/${localStorage.LANGUAGE}/search_actors_result?actor_type=doctor&area_id=${data.area_id}&city_id=${data.city_id}&specialty_id=${data.specialty_id}&visit_type=${data.visit_type}`)
    };

    return (
        <React.Fragment>
            <section className={'Form'}>
                <FormProvider {...methods}>
                    <form id={FormId} className='row' onSubmit={methods.handleSubmit(onSubmit)}>
                        {children}
                    </form>
                </FormProvider>
            </section>
        </React.Fragment>
    )
}

export default Form;