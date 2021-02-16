import React, { Component } from 'react';
import {connect} from 'react-redux';

class Player extends Component {

    render() {
        console.log(this.props.mangDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform: 'rotate(120deg)'}} className="mt-3" width={50} height={50} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 150, height:150}} src="./images/player.png" alt=""/>
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        //Xet gia tri duoc dat cuoc se co vien border
                        let border = {};
                        if(item.datCuoc){
                            border = {border: '5px solid red'};
                        }

                        return (
                            <div className="col-4">
                                <button 
                                    style={border} 
                                    className="btnItem"
                                    onClick={() => this.props.datCuoc(item.ma)}>
                                    <img width={40} height={40} src={item.hinhAnh} alt=""/>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.GameTuTiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maDatCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maDatCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
