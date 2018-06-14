import React, { Component } from 'react';
import Employee from './Employee';

export default class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesStats: null
        }
    }

    componentDidMount() {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => {
                return response.json();
            })
            .then(stats => {
                const employeesStats = this.getEmployeesStats(stats);
                this.setState({employeesStats});
            })
            .catch( console.log );
    }

    render() {
        const { employeesStats } = this.state;
        const preLoader = 'Loading';

        return (
            <div className="col">
                <div className="row mb-3 mt-5 font_normal_size_17">
                        Employee stats
                </div>
                <div className="row">
                    <div className="col">
                        {employeesStats ? employeesStats.map(stats => <Employee stats={stats} key={stats[0]}/>) : preLoader}
                    </div>
                </div>
            </div>
        );
    }

    getEmployeesStats(stats) {
        let employeesStats = {};

        stats.forEach(stats => {
            if (!stats.employee) {
                return;
            }

            const diffDays = this.date_diff_indays(stats.checkInDate, stats.checkOutDate)
            const id = stats.employee.id

            if (!employeesStats[id]) {
                employeesStats[id] = {
                    bookedDays: 0,
                    fullName: `${stats.employee.firstName} ${stats.employee.lastName.charAt(0)}.`,
                    profileImageUrl: stats.employee.profileImageUrl
                }
            }

            employeesStats[id].bookedDays = employeesStats[id].bookedDays + diffDays;
        })

        return Object.entries(employeesStats);
    }


    date_diff_indays (date1, date2) {
        let dt1 = new Date(date1.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        let dt2 = new Date(date2.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
}
