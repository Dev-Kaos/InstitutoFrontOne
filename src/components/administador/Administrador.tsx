import { Link, Outlet } from "react-router-dom";
import NavOne from "../NavOne";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export function Administrador() {

    return (
        <>
            <div className="bg-white dark:bg-gray-800">
                <NavOne />
                <Outlet />
            </div>
        </>
    );
}
export default Administrador;