import React from 'react'
import logo from '../logo.svg';

const AppHeader = () => {
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">123的Blog</h1>            
            </header>
        </div>
    )
}

export default AppHeader