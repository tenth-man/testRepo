import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/MainContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <MontLifer />
      </div>
    );
  }
}

function showCircle() {
  let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
  let rand = Math.floor(Math.random() * colors.length);
  let renderData = [];
  //return <Circle bgColor={colors[rand]}/>
  for(var i = 0; i < colors.length; i++) {
    let key = i + colors[i];
    renderData.push(<Circle key={key} bgColor={colors[i]}/>);
  }
  return renderData;
}
// <CounterParent />
// {showCircle()}
// <LightiningCounterDisplay/>
// <Card color='#FFA737'/>
class MontLifer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div></div>
    );
  }
}

class Counter extends React.Component {
  render() {
    let textStyle = {
      fontSize: 72,
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold'
    };
    return(
      <div style={textStyle}>{this.props.display}</div>
    );
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.increase = this.increase.bind(this);
  };

  increase(e) {
      console.log(this);
      let currentCount = this.state.count;

      if (e.shiftKey) {
        currentCount += 10;
      } else {
        currentCount += 1
      }

      this.setState({count: currentCount});
  }

  render() {
    let backgroundStyle = {
      padding: 50,
      background: '#FFC53A',
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: 'center'
    };
    let buttonStyle = {
      fontSize: '1em',
      width: 30,
      height: 30,
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold',
      lineHeight: '3px'
    };
    return(
      <div style={backgroundStyle}>
        <Counter display={this.state.count}/>
        <button onClick={this.increase} style={buttonStyle}>+</button>
      </div>
    );
  }
}

class Circle extends React.Component {
  render() {
    let circleStyle = {
      padding: 10,
      margin: 20,
      display: 'inline-block',
      background: this.props.bgColor,
      borderRadius: '50%',
      width: 100,
      height: 100
    };
    return(
      <div style={circleStyle}></div>
    );
  }
}

class LightiningCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { strikes: 0 };
    this.timerTick = this.timerTick.bind(this);
  };


  timerTick() {
    this.setState({strikes: this.state.strikes + 100});
  };

  componentDidMount() {
      setInterval(this.timerTick, 1000);
  }

  render() {
    return (
      <h1>{this.state.strikes}</h1>
    );
  }
}

class LightiningCounterDisplay extends React.Component {
  render() {
    let divStyle = {
      width: 250,
      textAlign: 'center',
      background: 'black',
      padding: 40,
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: 10
    };
    return (
      <div style={divStyle}>
        <LightiningCounter/>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    let cardStyle = {
      width: 150,
      height: 200,
      padding: 0,
      background: "#fff",
      boxShadow: "0px 0px 5px #666"
    };
    return (
      <div style={cardStyle}>
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    );
  }
}

class Square extends React.Component {
  render () {
    let styleSquare = {
      height: 150,
      background: this.props.color
    }
    return (
      <div style={styleSquare}></div>
    );
  }
}

class Label extends React.Component {
  render () {
    let labelStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      padding: 13,
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
}

export default App;
