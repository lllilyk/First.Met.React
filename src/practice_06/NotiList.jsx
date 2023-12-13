import React from "react";
import Noti from "./Noti";

const reservedNotifications = [
    {
        message: "Kissing in the moonlight",
    },
    {
        message: "Movies on the late night",
    },
    {
        message: "Getting old(it's getting old)",
    },
];

var timer;

class NotiList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Noti message={notification.message} />
                })}
            </div>
        );
    }
}

export default NotiList;