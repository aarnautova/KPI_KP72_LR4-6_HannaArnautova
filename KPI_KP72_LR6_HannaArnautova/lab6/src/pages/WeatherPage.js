import React, {Component} from "react";
import Axios from "axios";
import WeatherObject from "../components/WeatherObject";
import {Navbar, Spinner, Table} from "react-bootstrap";
import SunPic from "../pics/sun.png";

class WeatherPage extends Component {

    state = {
        loaded: false,
        city: "",
        sunrise: "",
        sunset: "",
        consolidated_weather: []
    };

    componentDidMount() {
        Axios.get("https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/924938/")
            .then(res => {
                const data = res.data;
                const sunriseDate = new Date(data.sun_rise);
                const sunrise = sunriseDate.getHours() + ":" + sunriseDate.getMinutes();
                const sunsetDate = new Date(data.sun_set);
                const sunset = sunsetDate.getHours() + ":" + sunsetDate.getMinutes();
                this.setState({
                    loaded: true,
                    consolidated_weather: data.consolidated_weather,
                    city: data.title,
                    sunrise,
                    sunset
                });
                console.log(this.state.consolidated_weather);
            });
    }

    render() {
        return (
            <div>
                {!this.state.loaded &&
                <div>
                    <h1>Loading</h1>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                </div>}
                {this.state.loaded &&
                <div>
                    <Navbar bg="info" variant="dark">
                        <Navbar.Brand>
                            <h1>{this.state.city}</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Brand>
                                <p>Sunrise: {this.state.sunrise}
                                    <br/> Sunset: {this.state.sunset}</p>
                            </Navbar.Brand>
                        </Navbar.Collapse>
                    </Navbar>
                    <Table>
                        <tr>
                            {this.state.consolidated_weather.map(item => (
                                <td key={item.date}>
                                    <WeatherObject weatherObject={item}/>
                                </td>
                            ))}
                        </tr>
                    </Table>
                </div>
                }
            </div>
        )
    }
}

export default WeatherPage;