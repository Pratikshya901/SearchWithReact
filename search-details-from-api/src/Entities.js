import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Entities extends Component {
  state = {
    filteredOptions: [],
    showEntityOptions: false,
    userInput: "",
  };

  onTextChange = (e) => {
    let entityList = ["Client", "PhonePe", "Altran", "Wipro", "Grep", "Invest"];
    //const { options } = this.props;

    const userInput = e.target.value;
    console.log("onTextChange", userInput);
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
    console.log("userInput", userInput);

    toast("Yahoo !! " + userInput + " has been selected.", {
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
            //onKeyDown={this.onKeyDown}
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
