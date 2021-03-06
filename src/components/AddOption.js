// Created by David Walshe on 23/02/2020

import React from "react";

class AddOptions extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        // Clear input when item is valid.
        if (!error) {
            e.target.elements.option.value = "";
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className={"add-option-error"}>{this.state.error}</p>}
                <form
                    onSubmit={this.handleAddOption}
                    className={"add-option"}
                >
                    <input className={"add-option__input"} type="type" name="option"/>
                    <button className={"button"}>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOptions