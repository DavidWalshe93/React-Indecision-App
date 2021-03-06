// Created by David Walshe on 23/02/2020

import React from 'react';
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css"
import "./styles/styles.scss"

ReactDOM.render(<IndecisionApp options={["Thing one", "Thing two", "Thing three"]}/>, document.getElementById("app"));