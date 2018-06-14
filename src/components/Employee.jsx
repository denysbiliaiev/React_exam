import React, { Component } from 'react';
import Progress from './Progress';

export default class Employee extends Component {
    render() {
        const {fullName, bookedDays, profileImageUrl} = this.props.stats[1];

        return (
            <div className="row mb-3">
                <div className="col-sm-6 col-md-1">
                    <img src={profileImageUrl} alt={fullName} className="rounded-circle avatar" />
                </div>
                <div className="col-md-1" />
                <div className="col-6">
                    <div className="row">
                        <div className="col-md-2 font">
                            {fullName}
                        </div>
                        <div className="col-md-8" />
                        <div className="col-md-2">
                            <div className="flex-row font_gray" justify-content-right="true">
                                {`${bookedDays} hours`}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Progress bookedDays={bookedDays}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
