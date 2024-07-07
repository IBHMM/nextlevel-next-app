"use client"

import Link from "next/link"

export default function Error({error}) {

    return (
        <div className="error">
            <h1>An error occured</h1>
            <p>
                {error.message}
            </p>
            <Link href={"/"} className="link">
                Go to home page
            </Link>
        </div>
    )
}