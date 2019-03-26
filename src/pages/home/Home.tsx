import React from 'react';
import LoginPanel from '../../components/LoginPanel.tsx'

export default class Home extends React.Component{
    render(){
        return (
            <div id="home" className="page">
                <LoginPanel/>
                <div className="main">
                    <div className="content-menu"></div>
                    <div className="content"></div>
                </div>
                <div className="side-bar"></div>
            </div>
        )
    }
}