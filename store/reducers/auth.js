import { LOGIN, SIGNUP, ADMIN } from "../action/auth";

const initialState={
    email: null ,
    userId:null,
    password:null
}

export default( state = initialState , action)=>{
    switch (action.type){

        case LOGIN:
            return{
                email :action.email,
                userId:action.userId
            }

            case SIGNUP:return{
                email :action.email,
                userId:action.userId
            }
            case ADMIN:
                return{
                    email :action.email,
                    password:action.password
                }
            default:
                return state
    }
}