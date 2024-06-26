import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
const [error,setError] = useState(null)
const [isLoading,setIsLoading] = useState(null)
const {dispatch} = useAuthContext()
const {user} = useAuthContext

const login = async (username,pw) => {
    setIsLoading(true)
    setError(null)


const response = await fetch('http://localhost:5000/api/users/login',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username,pw})
})

const json = await response.json()

if(!response.ok){
    setIsLoading(false)
    setError(json.error)

}

if(response.ok){
    //localStorage.setItem('user', JSON.stringify(json))
    //localStorage.setItem('token', user._id)
    localStorage.setItem('user', JSON.user);
    localStorage.setItem('token', json.token);

    dispatch({type: 'LOGIN', payload: json})

    setIsLoading(false)






}


}
return { login ,isLoading,error}

}
