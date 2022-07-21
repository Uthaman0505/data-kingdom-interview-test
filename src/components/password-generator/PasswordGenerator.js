import './PasswordGenerator.css'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import generator from 'generate-password-ts';


const PasswordGenerator = () => {


    const [passLenght, setPassLenght] = useState('')
    const [symbol, setSymbol] = useState(false)
    const [number, setNumber] = useState(false)
    const [lowercase, setLowercase] = useState(false)
    const [upppercase, setUppercase] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [password, setPassword] = useState('')

    const submitValue = () => {


        if (passLenght < 5) {
            setErrorMessage('Please insert password lenght 5 or more than 5')
        } else if (symbol === false && number === false && lowercase === false && upppercase === false) {
            setErrorMessage('Please select any choise of password')
            setPassword('')
        } else {
            setErrorMessage('')
            const pass = generator.generate({
                length: Number(passLenght),
                symbols: symbol,
                numbers: number,
                lowercase: lowercase,
                uppercase: upppercase
            })
            setPassword(pass)
        }
    }

    const clearAll = () => {
        setPassLenght('')
        setPassword('')
        setSymbol(false)
        setNumber(false)
        setLowercase(false)
        setUppercase(false)
    }


    return (
        <div className='password-container'>
            <header className='password-header'><h1>Password Generator</h1><Link to={{ pathname: `/` }}>
                <button type='button' className='btn btn-secondary'>Go back</button>
            </Link>
                {
                    password !== '' ? <button className='btn btn-warning mt-4' type='button' onClick={() => clearAll()}>Clear</button> : ''
                }
            </header>

            <div className="container mt-5">
                <div className="row">
                    <div className="text-input-container">
                        <form action="">
                            <div className="form-group d-flex flex-direction-column mb-4">
                                <label htmlFor="hashInput">Insert the length of password to be generated</label>
                                <input value={passLenght} onChange={(e) => setPassLenght(e.target.value)} type="number" className="form-control" id="hashInput" placeholder="Enter password lenght 5 or more here..." />
                            </div>

                            <div className="checkbox-container">
                                <label className="form-check-label">
                                    Select your choices
                                </label>
                                <div className="form-check mt-2">
                                    <label className="form-check-label" htmlFor="symbol">
                                        Symbols
                                    </label>
                                    <input onChange={(e) => setSymbol(e.target.checked)} className="form-check-input" type="checkbox" value="" id="symbol" checked={symbol} />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Numbers
                                    </label>
                                    <input onChange={(e) => setNumber(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={number} />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Lowercase Aplphabets
                                    </label>
                                    <input onChange={(e) => setLowercase(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={lowercase} />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Uppercase Aplphabets
                                    </label>
                                    <input onChange={(e) => setUppercase(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={upppercase} />
                                </div>
                            </div>
                            {
                                password !== '' ? <div className="row output-row mt-4">
                                    <div className="result-title">
                                        <h4>Password Output</h4>
                                    </div>
                                    <div className="result-container">
                                        {password}
                                    </div>
                                </div> : ''
                            }
                            <small className="error-text" style={{ display: errorMessage !== '' ? 'block' : 'none' }}>{errorMessage !== '' ? errorMessage : ''}</small>
                            <button onClick={submitValue} type="button" className="btn btn-info btn-lg col-12 submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator