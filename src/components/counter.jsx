import React, { Component } from "react";

class Counter extends Component {
 
  state = {
    value: this.props.value
  };

  /* renderTags(){
      if(this.state.tags.length === 0)
        return <p>There are no tags!</p>
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }
 */
  handleIncrement = () => {
      this.setState({value: this.state.value + 1});
  }

  render() {
    console.log("props childrem: "+this.props.children);
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
        {/* <ul>
            {this.state.tags.length === 0 && 'Please create a tag.'}
            {this.renderTags()}
        </ul> */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
