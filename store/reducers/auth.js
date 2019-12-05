import { LOGIN, SIGNUP } from "../action/auth";

const initialState={
    email: null ,
    userId:null
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
            default:
                return state
    }
}