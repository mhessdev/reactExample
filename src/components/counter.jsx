import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product, operator) => {
    if (operator === "+") {
      this.setState({ value: this.state.value + 1 });
      return;
    } else if (operator === "-" && this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
      return;
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleIncrement({ id: 1 }, "-")}
          className="btn btn-secondary btn-sm"
          disabled={this.state.value === 0}
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 }, "+")}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
