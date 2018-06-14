import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsStatus: null
        }
    }

    componentDidMount() {
        fetch('https://interview-booking-api.herokuapp.com/api/booking-snapshot')
            .then(response => {
                return response.json();
            })
            .then(roomsStatus => {
                this.setState({roomsStatus});
            })
            .catch( console.log );
    }

    render() {
        const { roomsStatus } = this.state;
        const preLoader = 'Loading';

        return (
            <div className="col">
                <div className="row mb-5">
                    <div className="col-4">
                        <div className="row font_normal_size_24">
                            {roomsStatus ? roomsStatus.availableRooms : preLoader}
                        </div>
                        <div className="row font_gray">
                            Rooms available
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row font_normal_size_24">
                            {roomsStatus ? roomsStatus.reservedRooms : preLoader}
                        </div>
                        <div className="row font_gray">
                            Reserved Rooms
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row font_normal_size_24">
                            {roomsStatus ? roomsStatus.checkedIn : preLoader}
                        </div>
                        <div className="row font_gray">
                            Checked in
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
