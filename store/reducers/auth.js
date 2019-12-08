import { LOGIN, SIGNUP, ADMIN } from "../action/auth";

const initialState={
    email: null ,
    userId:null,
    password:null,
    name:null
}

export default( state = initialState , action)=>{
    switch (action.type){

        case LOGIN:
            return{
                email :action.email,
                userId:action.userId,
                name:action.name
            }

            case SIGNUP:return{
                email :action.email,
                userId:action.userId,
                name:action.name
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