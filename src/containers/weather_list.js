/**
 * Created by ivanlazarev on 13.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //console.log(temps)

        return(
            <tr key={cityData.city.id}> // maybe name
                <td >{cityData.city.name}</td>
                <td>
                    <Sparklines height={100} width={180} data={temps}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={100} width={180} data={pressures}>
                        <SparklinesLine color="yellow"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={100} width={180} data={humidities}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
                </td>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}

//
// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
// weather infers from state and statement
// equals to:

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);