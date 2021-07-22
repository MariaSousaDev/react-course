import React, { Component } from "react";
import Word from './Word'
import Picture from './Picture'
import { randomWord } from "./words";
import "./Hangman.css";
import img0 from "./image/0.jpg";
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import img5 from "./image/5.jpg";
import img6 from "./image/6.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  guessedWord() {
    /** guessedWord: show current-state of word:
      if guessed letters are {a,p,e}, show "app_e" for "apple"
    */
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess(evt) {
    /** handleGuest: handle a guessed letter:
      - add to guessed letters
      - if not in answer, increase number-wrong guesses
    */
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  generateButtons() {
    /** generateButtons: return array of letter buttons to render */
    if (this.props.maxWrong > this.state.nWrong){
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <Word 
          key={ltr} 
          value={ltr} 
          handleGuess={this.handleGuess} 
          disabled={this.state.guessed.has(ltr)} />
      ));
    } else {
      return (
        <div>
          <span>You are dead :c</span>
          <button onClick={this.generateNewGame}>Want to try again?</button>
        </div>
        )
    }
  }

  generateNewGame = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    })
  }

  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        {this.state.nWrong + '/' + this.props.maxWrong}
        <Picture image={this.props.images[this.state.nWrong]} alt={this.state.nWrong+'/'+this.props.maxWrong} />
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <div className='Hangman-btns'>
          {this.generateButtons()}
        </div>
      </div>
    );
  }
}

export default Hangman;
