export const SIGNUP="SIGNUP"
export const LOGIN="LOGIN"
import firebase from "../../firebase";
import { firestore } from "firebase";


export const signup = (email , password)=>{
    return async dispatch => {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        if (response.user.uid) {
            const user = {
                uid: response.user.uid,
                email: email
            }

            await firestore.collection('users')
                .doc(response.user.uid)
                .set(user)
        }

        if(!response.ok){
         
            let errMessage='something went wrong';
                const errResData = await response.json();
                const errId= errResData.error.message
    
               
                if(errId==='EMAIL_EXISTS'){
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
    
 const resData= await firebase.firestore().collection('users')
                .doc(response.user.uid)
                .get()

                console.log(resData.currentUser.email)

                dispatch ({type:LOGIN ,token: resData.data().email,
                    userId:resData.data().userId})
      
        if(!response.ok){
         
        let errMessage='something went wrong';
            const errResData = await response.json();
            const errId= errResData.error.message

           
            if(errId==='EMAIL_NOT_FOUND'){
                errMessage=" There is no user record corresponding to this identifier. The user may have been deleted."
            }
            else if (errId==='INVALID_PASSWORD'){
                errMessage=' The password is invalid or the user does not have a password.'
            }
            throw new Error (errMessage)

        }

       
        
    }
}