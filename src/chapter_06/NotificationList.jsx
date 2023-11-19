import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "너도 아프다면 내게 한마디 해줘",
    },
    {
        id: 2,
        message: "Mazeltov 힘내봐 Mazeltov 웃어봐",
    },
    {
        id: 3,
        message: "Mazeltov Monday Tuesday Wednesday"
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=>{
            if (notifications.length <reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }    

    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
