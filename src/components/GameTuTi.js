import React, { Component } from 'react';
import Computer from './Computer';
import './GameTuTi.css';
import Player from './Player';
import ResultInfo from './ResultInfo';
import {connect} from 'react-redux';

class GameTuTi extends Component {
    render() {
        
        return (
            <div className="game">
           
                <div className="row text-center mt-2">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <ResultInfo />
                        <button 
                            className="btn btn-warning mt-4 px-4 py-2 display-4"
                            onClick={()=>this.props.playGame()}>
                            PLAY GAME
                        </button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            //Khai bao ham lap di lap lai
            let count = 0;
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RANDOM',
                })
                count ++;
                if(count >5){
                    //Ham nay khi so lan dem > 10, stop ham setInterval
                    clearInterval(randomComputerItem);

                    // tiep tuc xu ly du lien resultinfo
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 1000)
            
        }
    }
}

export default connect(null, mapDispatchToProps)(GameTuTi);
