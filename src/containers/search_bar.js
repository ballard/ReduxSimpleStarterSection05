/**
 * Created by ivanlazarev on 12.10.16.
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onForSubmit(event) {
        event.preventDefault();

        // fetch data here
    }

    render() {
        return (
            <form onSubmit={this.onForSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    };
}