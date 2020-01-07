import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  constructor() {
    super();
    // стан по дефолту
    this.state = {
      question: "",
      answer: ""
    };

    // Bindимо медод handleClick (встановлюємо 'this' для позначення цього компоненту
    // щоб this посилалось на подію handleClick)
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="React Calculator" />
        <div class="mainCalc">
          <OutputScreen
            answer={this.state.answer}
            question={this.state.question}
          />
          <div className="button-row">
            <Button label={"Clear"} handleClick={this.handleClick} />
            <Button label={"Delete"} handleClick={this.handleClick} />
            <Button label={"."} handleClick={this.handleClick} />
            <Button label={"/"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"7"} handleClick={this.handleClick} />
            <Button label={"8"} handleClick={this.handleClick} />
            <Button label={"9"} handleClick={this.handleClick} />
            <Button label={"*"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"4"} handleClick={this.handleClick} />
            <Button label={"5"} handleClick={this.handleClick} />
            <Button label={"6"} handleClick={this.handleClick} />
            <Button label={"-"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"1"} handleClick={this.handleClick} />
            <Button label={"2"} handleClick={this.handleClick} />
            <Button label={"3"} handleClick={this.handleClick} />
            <Button label={"+"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"0"} handleClick={this.handleClick} />
            <Button label={"="} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }

  // обробник для кнопок
  handleClick(event) {
    // отримуємо значення кнопки
    const value = event.target.value;

    switch (value) {
      case "=": {
        
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = eval(this.state.question); //eval - для перетворення результату в String
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) this.setState({ answer: "Math Error" });
          // оновлюємо результат в нашому стані
          else this.setState({ answer: ans, question: "" });
          break;
        }
      }
      case "Clear": {
        // очищуємо всі поля в стані
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        // оновлюємо рядок вводу, добавивши в стан те що нажали
        this.setState({ question: (this.state.question += value) });
        break;
      }
    }
  }
}

export default Calculator;
