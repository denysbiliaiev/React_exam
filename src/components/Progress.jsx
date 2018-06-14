import React, { Component } from "react";

export default class Progress extends Component {
    render() {
        const {bookedDays} = this.props;
        const percentage = `${bookedDays * 24 * 100 / 1000}%`;

        return (
            <div className="progress" style={{height:'2px'}}>
                <div className='progress-bar bg-success'
                     role='progressbar'
                     aria-valuemin='0'
                     aria-valuemax='100'
                     style={{width: percentage}}>
                </div>
            </div>
        );
    }
}
