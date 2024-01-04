import React, { useState } from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <h3>물이 끓는다</h3>;
    }
        return <h3>시간이 더 필요해요</h3>;
}

const types = {
    c: '섭씨',
    f: '화씨'
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도 입력(단위:{types[props.scale]}): </legend>
            <input
                value={props.temperature}
                onChange={handleChange}
            />
        </fieldset>
    );
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculattor(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');
    
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale="c" 
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculattor;