import {configureStore, createSlice} from '@reduxjs/toolkit';

const user = createSlice({ //state생성
  name:'user',
  // initialState:'홍길동',
  initialState:{name:'홍길동', memberYear:1},

  reducers:{
    // changeName(){
    //   return '이순신'
    // }
    // changeName(state){
    //   return state + ' : Green'
    // }
    changeName(state){ //객체나 배열은 return으로 돌릴필요없다 단일값은 return으로 돌려줘야함
      state.name=state.name + ' :Green'
    },
    changeYear(state,action){
      state.memberYear += action.payload //값 변경할때 action 인데 payload는 세트
    }
  
  }

})//createSlice
export const {changeName, changeYear} = user.actions; //actions는 변경함수

export default configureStore({
  reducer:{
    user:user.reducer
  }
})