import React, {Component} from 'react'
class Game extends React.Component {
    constructor() {
        super();
        this.state = {"buttons": [], "options": {}, "result": ""};
        this.setOptions = this.setOptions.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.createButtons = this.createButtons.bind(this);
        this.afterClearButtons = this.afterClearButtons.bind(this);
    }

    colors() {
        return {
            "red": "#FF0000",
            "green": "#00FF00",
            "blue": "#0000FF",
            "yellow": "#FFFF00"
        }
    }

    afterClearButtons() {
        let options = Object.assign({}, this.colors());
        let names = Object.keys(options);
        let randomIndex = () => Math.floor(Math.random() * names.length);
        let removed = names.splice(randomIndex(), 1)[0];
        let wcolor = options[removed];
        let selected = names[randomIndex()];
        options[selected] = wcolor;
        delete options[removed];
        // Thanks @agmcleod from StackOverflow! https://stackoverflow.com/a/37658191/2960335
        let newState = [];
        this.setState({"options": options}, Object.keys(options).forEach((o) => {
          newState = this.createButtons(o, newState, options);
        }));
        this.setState({buttons: newState});
    }

    setOptions() {

        this.setState({buttons: [], result: ""}, this.afterClearButtons);
    }

    selectHandler(name, color) {
        if (this.colors()[name] == color) {
            this.setState({"result": "You lost."});
        } else {
            this.setState({"result": "You won!"});
        }
    }

    createButtons(c, state, opts) {
        // onClick parametre olarak c vardı, parametre c olduğu için onu ezer. Ben event olarak değiştirdim.
        // The parameter for onClick was c, so I changed it to event to clear the conflict. -Rahman Usta
        let btn = ( <p style={{color: opts[c]}} onClick={(event) => {
            this.selectHandler(c, opts[c])
        }}>{c}</p> );
        state.push(btn);
        return state;
    }

    render() {
        return (
            <div className="Game">
                <button onClick={this.setOptions}>(Re)Start game</button>
                {this.state.buttons}
                <p>{this.state.result}</p>
            </div>
        )
    }
}
export default Game;
