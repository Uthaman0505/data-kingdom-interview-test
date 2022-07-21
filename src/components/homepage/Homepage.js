import './Homepage.css'
import React from 'react'
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Please select the generator type below</h1>
            </header>
            <div className="container">
                <div className="row button-row">
                    <div className="col-6" style={{ width: '50%' }}>
                        <div className="left-button">
                            <Link to={{ pathname: `/hash-generator` }}>
                                <button type='button' className='btn btn-primary'>Hash Generator</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6" style={{ width: '50%' }}>
                        <div className="right-button">
                            <Link to={{ pathname: `/password-generator` }}>
                                <button className='btn btn-success'>Password Generator</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage