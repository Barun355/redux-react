import React  from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light px-2">
            <a className="navbar-brand" href="/">React Redux</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">Close</button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="/home" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>
                <button className="btn btn-primary">
                    Balance : 10000
                </button>
            </div>
        </nav>
    )
}

export default Navbar
