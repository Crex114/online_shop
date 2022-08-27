import React, { useContext, useEffect, useState, createContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navBar/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

export const ContextFilteredDevices = createContext()

const App = observer(() => {
    const { user } = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState('')

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <BrowserRouter>
            <ContextFilteredDevices.Provider value={{ value, setValue }}>
                <NavBar />
                <AppRouter />
            </ContextFilteredDevices.Provider>
        </BrowserRouter>
    );
});

export default App;
