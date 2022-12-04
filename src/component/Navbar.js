import React, { useContext } from 'react'
import balanceContext from '../context/balanceContext'

const Navbar = () => {

    const { balance } = useContext(balanceContext);

    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light px-2">
            <a class="navbar-brand" href="/">React Redux</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="/home" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
                <button className="btn btn-primary">
                    Balance : {balance}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
