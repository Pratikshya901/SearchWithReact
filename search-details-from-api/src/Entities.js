import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import api from "./workFlows/API";
toast.configure();

class Entities extends Component {
  state = {
    filteredOptions: [],
    showEntityOptions: false,
    userInput: "",
    entityData: [],
  };

  componentDidMount() {
    // const val = api.getEntityData();
    this.getEntityData();
  }

  async getEntityData() {
    const response = await axios.get("http://localhost:3000/terminal");

    this.setState({ entityData: response.data });
  }

  onTextChange = (e) => {
    const { entityData } = this.state;

    let entityList = [];

    entityData.map((d, index) => {
      entityList.push(d.entityName);
    });
    const userInput = e.target.value;

    const filteredOptions = entityList.filter(
      (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      //activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput,
    });
  };

  onOptionClick = (e) => {
    this.setState({
      filteredOption: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onSubmit = (e) => {
    const { userInput } = this.state;

    userInput != ""
      ? toast("Yahoo !! " + userInput + " has been selected.", {
          position: toast.POSITION.TOP_CENTER,
        })
      : toast("Please select the Entity.", {
          position: toast.POSITION.TOP_CENTER,
        });
  };

  render() {
    let optionList;
    const { filteredOptions, showOptions, userInput } = this.state;

    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;

              return (
                <li
                  className={className}
                  key={optionName}
                  onClick={(e) => this.onOptionClick(e)}
                >
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>* Oops !! No matched Entities Found!</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Entities..."
            onChange={(e) => this.onTextChange(e)}
            value={userInput}
          />
          <input
            type="submit"
            value="Submit"
            className="search-btn"
            onClick={(e) => this.onSubmit(e)}
          />
          {optionList}
        </div>
      </React.Fragment>
    );
  }
}
export default Entities;
