// Created by David Walshe on 23/02/2020

import React from "react";
import AddOptions from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import Header from "./Header";

class IndecisionApp extends React.Component {


    // Life-cycle Method
    constructor(props) {
        super(props);
        // Reattach bindings
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        // Set init state.
        this.state = {
            options: props.options
        }
    }

    // Reload app data on mount
    componentDidMount() {

        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }

    }

    // Persist app data on a user update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        console.log("saving data");
    }

    componentWillUnmount() {
        console.log("componentWIllUnmount");
    }


    // Removes all options
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    // Removes a single option
    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }));
    }

    // Adds an option
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        this.setState((prevState) => ({
                options: prevState.options.concat(option)
            })
        )
    }

    // Selects a item in the array.
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        alert(option);
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a machine";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOptionSingular}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

// Assign default props to Indecision Component
IndecisionApp.defaultProps = {
    options: ["Thing one", "Thing two", "Thing three"]
};

export default IndecisionApp;