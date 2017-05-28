import React, {Component} from 'react'
class Game extends React.Component {
    constructor() {
        super();
        this.state = {"buttons": [], "options": {}, "result": ""};
        this.setOptions = this.setOptions.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.createButtons = this.createButtons.bind(this);
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
        delete options[removed]
        options[selected] = wcolor;
        this.setState({"options": options});
        Object.keys(options).forEach(this.createButtons);
    }

    setOptions() {

        this.setState({"buttons": []}, this.afterClearButtons);
    }

    selectHandler(name, color) {
        if (this.colors()[name] == color) {
            this.setState({"result": "You lost."});
        } else {
            this.setState({"result": "You won!"});
        }
    }

    createButtons(c) {
        // onClick parametre olarak c vardı, parametre c olduğu için onu ezer. Ben event olarak değiştirdim.
        let btn = ( <p style={{color: this.state.options[c]}} onClick={(event) => {
            this.selectHandler(c, this.state.options[c])
        }}>{c}</p> );
        this.setState({"buttons": this.state.buttons.concat([btn])});
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
