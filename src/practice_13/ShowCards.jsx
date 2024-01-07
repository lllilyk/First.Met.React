import React from "react";
import CardStyle from "./CardStyle";
import HowToShow from "./HowToShow";

function ShowCards() {
    return (
        <div>
            <HowToShow>
                <CardStyle feeling="soso" backgroundColor="blue">
                    <h3>닥터후 정주행</h3>
                    <h3>하고 싶다</h3>
                </CardStyle>
                <CardStyle feeling="sad" backgroundColor="brown">
                    <h3>맷닥 보고싶다</h3>
                    <h3>새 시즌 보고싶다</h3>
                </CardStyle>
            </HowToShow>
        </div>
    );
}

export default ShowCards;