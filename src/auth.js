import { Navigate } from "react-router-dom";

export const setMail = (mail)=>{
    localStorage.setItem('temitope',mail);
}

export const fetchToken = ()=>{
    let res=localStorage.getItem('temitope');

    return res
}

export function RequireToken({children}){
    let auth = fetchToken();

    if (!auth)
    {
        return <Navigate to='/' state={{from:'/forgetpassword1'}}></Navigate>
    }
    return children
}

export const setJWT = (jwt) => {
    localStorage.setItem('lavenderhaze',jwt);
}

export const fetchJWT = ()=>{
    let res=localStorage.getItem('lavenderhaze');

    return res
}
export function RequireJWT(children){
    let auth = fetchJWT();
    if (!auth)
    {
        return <Navigate to='/' state={{from:'/dashboard'}}></Navigate>
    }
    return children
}