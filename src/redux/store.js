import { configureStore } from "@reduxjs/toolkit";
import UserAuth  from "./userSlice";
import AdminAuth from "./adminSlice";
import PartnerAuth from './partnerSlice';

const Store = configureStore(
    {reducer:{user:UserAuth.reducer,Admin:AdminAuth.reducer,partner:PartnerAuth.reducer}}
)

export default Store