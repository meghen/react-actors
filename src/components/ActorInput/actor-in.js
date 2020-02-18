import React, { Component } from '../../../node_modules/react';

class ActorIn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    handleSubmit(event) {
        alert('Thank you '+ this.input.current.value);
        event.preventDefault();
      }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label>
            Name:
          <input type="text" name="firstname" placeholder="First Name" ref={this.input}/>
          <input type="text" name="lastname" placeholder="Last Name"/>
        </label>
        <label>
            Impression:
        <input type="text" name="impression" placeholder="Best Impression"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ActorIn;