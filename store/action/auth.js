export const SIGNUP="SIGNUP"

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
            throw new Error ('something went wrong')

        }

        const resData=await response.json()

        console.log (resData)
        dispatch ({type:SIGNUP})
    }
}