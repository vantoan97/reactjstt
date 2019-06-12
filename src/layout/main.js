import React, {Component} from 'react';
import Header from'./Header';
// import Child from'./abc';
// import Signin from'../component/user/signin';
// import Signup from'../component/user/signup';
// import bg from './img/background.jpeg';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Default parent state"
        };
        this.childHandler = this.childHandler.bind(this)
    }
     a = "Damh";
    getData(){
        return this.a;
        // do not forget to bind getData in constructo
    }
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
    }
    render(){
  return (
    <div className="App">
    <Header />
    <Typography component="div" style={{  height: '10px' }} />
    {/* <Child  action={this.childHandler} onSelectLanguage={this.getData()}/> */}
    </div>
  );
}
}
export default Main;