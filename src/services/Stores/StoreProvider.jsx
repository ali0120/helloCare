import { createContext, useState } from 'react';

// Context
export const MasterStore = createContext({});

// Provider
const StoreProvider = ({ children }) => {
    const [CityId, setCityId] = useState('')

    return (
        <MasterStore.Provider value={{
            CityId, setCityId
        }}>
            {children}
        </MasterStore.Provider>
    )
}

export default StoreProvider;