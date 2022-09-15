import React from 'react';

// Axios Instance
import AxiosInstance from './AxiosInstance';

const RequestsProvider = ({ children }) => {
    AxiosInstance.interceptors.request.use((config) => {
        return config;
    },
        (Error) => {
            return Promise.reject(Error);
        }
    );
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
};

export default RequestsProvider;