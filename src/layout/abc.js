
import React, { Component } from 'react';
class Child extends Component {
    /*
      Our onClick event will return the function that gets set to our action prop
      that then gets passed into the Parent's childHandler function.
    */
    render() {
        return <a onClick={() => this.props.action('Set Parent state set from child: ' + Math.floor(Math.random() * 999))}>{this.props.onSelectLanguage}</a>;
    }
}
export default Child;
