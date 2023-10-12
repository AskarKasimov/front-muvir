import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Redirect = (props: { path: string }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(props.path);
    }, []);

    return (<></>);
}

const AdminPage = () => {
    const isAdmin = true;
    return (
        <>
            {
                isAdmin
                    ? <Outlet />
                    : <Redirect path="/" />
            }
        </>
    );
}

export default AdminPage;