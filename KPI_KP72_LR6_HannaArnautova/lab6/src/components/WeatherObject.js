import React, {Component} from "react";
import {Table, Card} from "react-bootstrap";

class WeatherObject extends Component {
    state = {
        date : "",
        weatherState: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        pressure: "",
        humidity: "",
        statePic : "https://www.metaweather.com/static/img/weather/"
    };

    constructor(props) {
        super();
        const weatherObject = props.weatherObject;
        this.state.date = weatherObject.applicable_date;
        this.state.weatherState = weatherObject.weather_state_name;
        this.state.temperature = Math.floor(weatherObject.the_temp);
        this.state.maxTemperature = Math.floor(weatherObject.max_temp);
        this.state.minTemperature = Math.floor(weatherObject.min_temp);
        this.state.pressure = Math.floor(weatherObject.air_pressure);
        this.state.humidity = Math.floor(weatherObject.humidity);
        this.state.statePic = this.state.statePic + weatherObject.weather_state_abbr + ".svg";
    };

    render() {
        return (
            <Card bg="light">
                <Card.Img variant="top" src={this.state.statePic}/>
                <Card.Body>
                    <Card.Title>{this.state.date}</Card.Title>
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>Temperature:</td>
                                <td>{this.state.temperature} °C</td>
                            </tr>
                            <tr>
                                <td>Max:</td>
                                <td>{this.state.maxTemperature} °C</td>
                            </tr>
                            <tr>
                                <td>Min:</td>
                                <td>{this.state.minTemperature} °C</td>
                            </tr>
                            <tr>
                                <td>Pressure:</td>
                                <td>{this.state.pressure} atm</td>
                            </tr>
                            <tr>
                                <td>Humidity:</td>
                                <td>{this.state.humidity} %</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default WeatherObject;