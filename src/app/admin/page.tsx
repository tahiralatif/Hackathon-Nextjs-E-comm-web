"use client";

import { useUser } from "@clerk/nextjs";


export default function Adminpage(){
    const { user } = useUser();
    const role = user?.publicMetadata?.role;

    if (role  !== "admin"){
        return <p>
            You are not authorized to access this page. Please contact the admin to request access.
        </p>
    }

    return(
        <h1>
            Admin Dashboard
        </h1>
    )
}