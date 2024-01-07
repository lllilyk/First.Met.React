import React, { useState, useEffect } from "react";

function HowToShow(props) {
    const [ showCards, setShowCards ] = useState(0);

    useEffect(() => {
        const cardCnt = React.Children.count(props.children);

        const timer = setInterval(() => {
            setShowCards(prevShowCards => {
                if(prevShowCards < cardCnt) {
                    return prevShowCards + 1;
                } else {
                    clearInterval(timer);
                    return prevShowCards;
                }
            });
        }, 5000);

        //return setInterval(timer);
        return () => clearInterval(timer);
    }, [props.children]);

    return(
        <div>
            {React.Children.map(props.children, (child, index) => {
                if(index < showCards) {
                    return child;
                }
                    return null;
            })}
        </div>
    );
}

export default HowToShow;