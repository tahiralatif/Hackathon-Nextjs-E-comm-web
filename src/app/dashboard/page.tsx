'use client'
import { useAuth } from "@clerk/nextjs";

export default function Dashboard (){
    const {userId} = useAuth();
    if(!userId)
        return <p>
            Please sign in to access your dashboard.
        </p>
        return(
            <>
             <p>
                Hello, {userId}! You are logged in.
            </p>
            <br />
            <h2>
                Welcome to Dashboard
            </h2>
            </>
           
        )
}