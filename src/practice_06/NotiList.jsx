import React from "react";
import Noti from "./Noti";

const reservedNotifications = [
    {
        id: 1,
        message: "Kissing in the moonlight",
    },
    {
        id: 2,
        message: "Movies on the late night",
    },
    {
        id: 3,
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

    // notifications.props에 전달할 key와 id 추가
    // key는 react element를 구분하기 위한 고유의 값으로 map 함수를 사용하는 경우 필수!
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Noti 
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

export default NotiList;