export const SIGNUP="SIGNUP"
export const LOGIN="LOGIN"

export const signup = (email , password)=>{
    return async dispatch => {
     const response=  await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7Y1RFQHnZlNvjpldmzXPBS6eKx3xbEWU"
        , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
           

            }
        )

        if(!response.ok){
         
            let errMessage='something went wrong';
                const errResData = await response.json();
                const errId= errResData.error.message
    
               
                if(errId==='EMAIL_EXISTS'){
                    errMessage=" The email address is already in use by another account."
                }
               
                throw new Error (errMessage)
    
            }

        const resData=await response.json()
        console.log (resData)
        dispatch ({type:SIGNUP ,
        token: resData.idToken,
    userId:resData.localId})
    }
}

export const login = (email , password)=>{
    return async dispatch => {
     const response=  await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7Y1RFQHnZlNvjpldmzXPBS6eKx3xbEWU"
        , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })
           

            }
        )

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

        const resData=await response.json()

        console.log (resData)
        dispatch ({type:LOGIN ,token: resData.idToken,
            userId:resData.localId})
    }
}