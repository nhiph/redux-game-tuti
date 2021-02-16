import React, { Component } from 'react';
import {connect} from 'react-redux';

class Computer extends Component {
    render() {
        let {computer} = this.props;
        // let keyframe = `@keyframes randomItem${Date.now()} {
        //     0% {top: -50px;}
        //     25% {top: 100px;}
        //     50% {top: -50px;}
        //     75% {top: 100px;}
        //     100% {top: 0px;}
        //   }`


        return (
            <div className="text-center Computer">
             {/* <style> */}
                {/* {keyframe} */}
            {/* </style> */}
                <div className="theThink" style={{position: 'relative'}}>
                    <img style={{
                        position: 'absolute', 
                        left: '30%',
                        // animation: `randomItem${Date.now()} 0.5s`, 
                        transform: 'rotate(120deg)'}} 
                        className="mt-3" 
                        width={50} 
                        height={50} 
                        src={computer.hinhAnh}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./images/playerComputer.png" alt="" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.GameTuTiReducer.computer
    }
}

export default connect(mapStateToProps, null)(Computer);
