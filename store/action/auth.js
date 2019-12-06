export const SIGNUP="SIGNUP"
export const LOGIN="LOGIN"
export const ADMIN="ADMIN"
import firebase from "../../firebase";
import { firestore } from "firebase";


export const signup = (email , password)=>{
    return async dispatch => {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        try {
            const user = {
                uid: response.user.uid,
                email: email
            }

            await firebase.firestore().collection('users')
                .doc(response.user.uid)
                .set(user)
        }

        catch(err){
         
            let errMessage=err.message;
               // const errResData = await response.json();
                const errCode= await err.code
    
               
                if(errCode==='auth/account-exists-with-different-credential'){
                    errMessage=" The email address is already in use by another account."
                }
               
                throw new Error (errMessage)
    
            }

        dispatch ({type:SIGNUP ,
            uid: response.user.uid,
            email: email})
    }
}

export const login = (email , password)=>{
    return async dispatch => {
        
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
    try{
  await firebase.firestore().collection('users')
                .doc(response.user.uid)
                .get()

                console.log(response)

                dispatch ({type:LOGIN ,email:email,
                    userId:response.user.uid})
                }
        catch(err){
         
        let errMessage='something went wrong';
           // const errResData = await response.;
            const errCode= await err.code

           
            if(errCode==='auth/user-not-found'){
                errMessage=" There is no user record corresponding to this identifier. The user may have been deleted."
            }
            else if (errCode==='auth/wrong-password'){
                errMessage=' The password is invalid or the user does not have a password.'
            }
            throw new Error (errMessage)

        }

       
        
    }
}

export const loginAdmin = (email , password)=>{
    return async dispatch => {
        
        
    try{
 
  
 const getPassword= await firebase.firestore().collection('admin')
                .doc(password)

                if(getPassword.isEqual(password))
               { getPassword.get()}
               else{
                throw new Error ("not valid ")
               }

                

                dispatch ({type:ADMIN ,email:email,
                    userId:password})
                }
        catch(err){
         
        
            throw new Error (err)

        }

       
        
    }
}