import './HashGenerator.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';


const HashGenerator = () => {

    const [hashInput, setHashInput] = useState('')
    const [algoSelect, setAlgoSelect] = useState('')
    const [fileInput, setFileInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [result, setResult] = useState('')

    const submitValue = async () => {
        if (algoSelect === '' || algoSelect === 'Select your algorithms') {
            setErrorMessage('Please select the alorithms you want to use!')
        }
        else {
            switch (algoSelect) {
                case 'sha1':
                    if (hashInput !== '') {
                        setResult(await sha1(hashInput))
                        setErrorMessage('')
                    }
                    else {
                        setErrorMessage('Please enter any input / Select any file')
                    }

                    if (fileInput !== '') {
                        setResult(await sha1(fileInput))
                        setErrorMessage('')
                    } else {
                        setErrorMessage('Please enter any input / Select any file')
                    }
                    break;

                case 'sha256':
                    if (hashInput !== '') {
                        setErrorMessage('')
                        setResult(await sha256(hashInput))
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }

                    if (fileInput !== '') {
                        setResult(await sha256(fileInput))
                        setErrorMessage('')
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }
                    break;

                case 'sha384':
                    if (hashInput !== '') {
                        setErrorMessage('')
                        setResult(await sha384(hashInput))
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }

                    if (fileInput !== '') {
                        setResult(await sha384(fileInput))
                        setErrorMessage('')
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }
                    break;

                case 'sha512':
                    if (hashInput !== '') {
                        setErrorMessage('')
                        setResult(await sha512(hashInput))
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }

                    if (fileInput !== '') {
                        setResult(await sha512(fileInput))
                        setErrorMessage('')
                    } else {
                        if (result !== '') {
                            setErrorMessage('')
                        }
                        setErrorMessage('Please enter any input / Select any file')
                    }
                    break;

                default:
                    break;
            }

        }
    }


    const clearAll = () => {
        setErrorMessage('')
        setResult('')
        setHashInput('')
        setAlgoSelect('')
        setFileInput('')
    }


    return (
        <div className='hash-container'>
            <header className="hash-header">
                <h1>Hash Generator</h1>
                <Link to={{ pathname: `/` }}>
                    <button type='button' className='btn btn-secondary'>Go back</button>
                </Link>
                {
                    result !== '' ? <button className='btn btn-warning mt-4' type='button' onClick={() => clearAll()}>Clear</button> : ''
                }

            </header>

            <div className="container mt-5">
                <div className="row">
                    <div className="text-input-container">
                        <form>
                            <div className="form-group d-flex flex-direction-column">
                                <label htmlFor="hashInput">Insert input where you want to hashed</label>
                                <input disabled={fileInput !== ''} value={hashInput} onChange={(e) => setHashInput(e.target.value)} type="text" className="form-control" id="hashInput" placeholder="Enter hash text here..." />
                            </div>


                            <div className="form-group d-flex flex-direction-column mt-10 file-group">
                                <label htmlFor="exampleFormControlFile1">Example file input</label>
                                <input disabled={hashInput.length > 0} onChange={(e) => setFileInput(e.target.value)} type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>

                            <div className="form-group select-group d-flex flex-direction-column">
                                <label htmlFor="exampleFormControlSelect1">Algorithm selection</label>
                                <select value={algoSelect} onChange={(e) => setAlgoSelect(e.target.value)} className="form-select" aria-label="Default select example">
                                    <option defaultValue>Select your algorithms</option>
                                    <option value="sha1">SHA1</option>
                                    <option value="sha256">SHA256</option>
                                    <option value="sha384">SHA384</option>
                                    <option value="sha512">SHA512</option>
                                </select>
                            </div>

                            <small className="error-text" style={{ display: errorMessage !== '' ? 'block' : 'none' }}>{errorMessage !== '' ? errorMessage : ''}</small>


                            {
                                result !== '' ? <div className="row output-row mt-4">
                                    <div className="result-title">
                                        <h4>Hashed Output</h4>
                                    </div>
                                    <div className="result-container">
                                        {result}
                                    </div>
                                </div> : ''
                            }

                            <button onClick={submitValue} type="button" className="btn btn-info btn-lg col-12 submit-button">Submit</button>
                        </form>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default HashGenerator