import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className="text-center flex flex-col text-white justify-center items-center h-full">
            <i className="fas fa-exclamation-triangle text-rose-400 text-9xl mb-4"></i>
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-xl mb-5">Diese Seite existiert nicht...</p>
            <Link
                to="/"
                className="text-white font-semibold text-lg bg-rose-600 hover:bg-rose-900 rounded-full px-3 py-2 mt-4"
            >Startseite
            </Link>
        </section>
    )
}

export default NotFoundPage