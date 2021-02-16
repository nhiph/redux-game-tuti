const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './images/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './images/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './images/bao.png', datCuoc: false}
    ],
    ketQua: 'I am a IronMan, I love you 3000!!!',
    soBanThang: 0,
    tongLanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './images/keo.png'}
}

const GameTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO':{
            let mangDacCuocUpdate = [...state.mangDatCuoc];
            mangDacCuocUpdate = mangDacCuocUpdate.map((item, index) => {
                return {...item, datCuoc: false};
            })
            let index = mangDacCuocUpdate.findIndex(qc => qc.ma === action.maDatCuoc);
            if(index !== -1){
                mangDacCuocUpdate[index].datCuoc = true;
            }
            //setstate mang cuoc => render giao dien
            state.mangDatCuoc = mangDacCuocUpdate;
            return {...state};
        }
        case 'RANDOM':{
            let soNgauNhien = Math.floor(Math.random()*3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state};
        }
        case 'END_GAME':{
            
            let player=state.mangDatCuoc.findIndex(item => item.datCuoc===true);
            let computer=state.computer;
            switch (player.ma) {
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa nhau rồi !!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Thua sml rồi nha !!!';
                    }else{
                        state.ketQua = 'I am a IronMan, I love you 3000!!!';
                        state.soBanThang += 1;
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua = 'I am a IronMan, I love you 3000!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Hòa nhau rồi !!!';
                    }else{
                        state.ketQua = 'Thua sml rồi nha !!!';
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Thua sml rồi nha !!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'I am a IronMan, I love you 3000!!!';
                        state.soBanThang += 1;
                    }else{
                        state.ketQua = 'Hòa nhau rồi !!!';
                    }
                    break;
                default:
                    state.ketQua = 'I am a IronMan, I love you 3000!!!';
                    state.soBanThang += 1;
                    break;
            }
            state.tongLanChoi += 1;
            return {...state};
        }
        default:
            return {...state};
    }
}

export default GameTuTiReducer;