import React, { Component } from 'react';
import {connect} from 'react-redux';

class ResultInfo extends Component {

    render() {
        let {ketQua, soBanThang, tongLanChoi} = this.props;
        return (
            <div>
                <div style={{fontSize: 35}} className=" mt-3 text-warning">
                    {ketQua}
                </div>
                <div style={{fontSize: 35}} className=" mt-3 text-success">
                    SỐ BÀN THẮNG
                    <span className="text-warning ml-3">
                        {soBanThang}
                    </span>
                </div>
                <div style={{fontSize: 35}} className=" mt-3 text-success">
                    TỔNG LẦN CHƠI
                    <span className="text-warning ml-3">
                        {tongLanChoi}
                    </span>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.GameTuTiReducer.ketQua,
        soBanThang: state.GameTuTiReducer.soBanThang,
        tongLanChoi: state.GameTuTiReducer.tongLanChoi
    }
}
export default connect(mapStateToProps, null)(ResultInfo);
