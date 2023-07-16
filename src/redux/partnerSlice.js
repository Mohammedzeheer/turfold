import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE={
    username:"",
    token:""
}

export const PartnerSlice=createSlice({
    name:'partner',
    initialState:INITIAL_STATE,
    reducers:{
        updatePartner:(state,action)=>{
            state.username = action.payload.username
            state.token=action.payload.token
            
        }
    }
})

export const {updatePartner} =PartnerSlice.actions
export default PartnerSlice