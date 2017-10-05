// import React from "react";
// import ReactDOM from "react-dom";
'use stritc';
class TemporalComponent extends React.Component {
  render() {
    return <div>Hello {new Date().toLocaleTimeString()}</div>; //retorna un Hello y  la fecha
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    const { title } = this.props;
    const start = e => {
      this.startTimer();
    };
    const stop = e => {
      this.stopTimer();
    };
    return (
      <div>
        <h2> {title} </h2>

        <button onClick={start}> start </button>
        <button onClick={stop}> stop </button>

        <p> {this.state.date.toLocaleTimeString()}</p>

        <span>
          {" "}
          <TemporalComponent />{" "}
        </span>
      </div>
    );
  }
  // componentDidMount
  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  //componentWillUnmount
  stopTimer() {
    clearInterval(this.timer);
  }
}

// ReactDOM.render(< Timer title = "Timer"/>,
// document.getElementById("root"));
class Model {
  constructor(index, num) {
    this.players = [
      {
        name: "Jim Hoskins",
        score: 31,
        id: 1
      },
      {
        name: "Andree Hoskins",
        score: 35,
        id: 2
      },
      {
        name: "Alena Hoskins",
        score: 42,
        id: 3
      }
    ];
    this.callback = null;
    this.inputValue = undefined;
    this.index = 0;
  }
  subscribe(render) {
    this.callback = render;
  }
  notify() {
    this.callback();
  }
  sumScore() {
    return this.players.map(a => a.score).reduce((a, b) => a + b);
    console.log(a);
    this.notify();
  }
  getPlayer(a, b) {
    const maper = this.players.map((a = a.score));
  }
  updateTodo(index, todo) {
    this.todos[index] = todo; // el array en la posicion index = todo
  }
  decrement(num) {
    this.players[num].score--;

    this.notify();
  }
  increment(num) {
    this.players[num].score++;
    this.notify();
  }
  addPlayer(newPlayer) {
    this.players.push({
      name: newPlayer,
      score: 0,
      id: this.players.id++
    });
    this.notify();
    console.log(this.addPlayer);
  }
}
const Header = ({ model }) => {
  return (
    <div>
      <header className=" header">
        <div className="stats">
          <div>PLAYERS: {model.players.length}</div>
          <div>TOTALPOINTS: {model.sumScore()}</div>
        </div>
        <div className="stopwatch ">
          <h2>STOPWATCH</h2>
          <div className="stopwatch-time">0</div>
          <button>START</button>
          <button>RESET</button>
        </div>
      </header>
    </div>
  );
};

function moostra() {
  return model.players.map((a, b) => {
    return (
      <div key={b}>
        <div className="player">
          <p className="player-name">{a.name}</p>
          <div className="player-score counter">
            <button
              onClick={() => model.decrement(b)}
              x
              className="counter-action decrement btn"
            >
              -
            </button>
            <span id="counter" className="counter-score">
              {a.score}
            </span>
            <button
              onClick={() => model.increment(b)}
              className="counter-action increment btn"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  });
}
const PlayerList = ({ model }) => {
  return <div>{moostra()}</div>;
};

const PlayerForm = ({ model }) => {
  return (
    <div className="add-player-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          model.addPlayer(model.inputValue);
        }}
      >
        <input
          onChange={e => (model.inputValue = e.target.value)}
          type="text"
          placeholder="ENTER A NAME"
        />
        <input type="submit" value="add player" />
      </form>
    </div>
  );
};

const Application = ({ title, model }) => {
  // la vista son las etiquetas con jsx
  return (
    <div className="scoreboard">
      <Header model={model} />
      <PlayerList model={model} />
      <PlayerForm model={model} />
      <Timer title="Timer" />
    </div>
  );
};

let model = new Model(); // un modelo es una clase con funciones
let render = () => {
  ReactDOM.render(
    <Application title="Scoreboard" model={model} />,
    document.getElementById("container")
  );
};
model.subscribe(render);
render();
