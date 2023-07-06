import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header () {
    const [username,setUsername] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/profile',{
            credentials:"include"
        }).then((res)=>{
            console.log("response efect",res)
            res.json().then(userInfo=>{
                console.log("information of user from headers",userInfo)
                setUsername(userInfo.username)
            })
        })
    },[])

    function logout() {
        fetch("http://localhost:5000/logout",{
            credentials:'include',
            method:"POST"
        })

        setUsername(null)
    }

    return(
    <header>
        <Link to='/' className='logo'>MyBlog</Link>
        <nav>
            {username && (
                <>
                <h3>{username}</h3>
                <Link to="/create">create a post</Link>
                <a onClick={logout}>logout</a>
                </>
            )}
        
            {!username && (
                <>
                    <Link to='/login'>login</Link>
                    <Link to='/register'>register</Link>
                </>
            )}    
        </nav>
    </header>
    )
}