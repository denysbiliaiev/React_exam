import React, { Component } from 'react';
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Employees from "./Employees";

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <Header />
                        </div>
                        <div className="row">
                            <Employees />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
