import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header () {
    // const [username,setUsername] = useState(null)

    const {userInfo,setUserInfo} = useContext(UserContext)

    useEffect(()=>{
        fetch('http://localhost:5000/profile',{
            credentials:"include"
        }).then((res)=>{
            console.log("response efect",res)
            res.json().then(user=>{
                console.log("information of user from headers",userInfo)
                // setUsername(userInfo.username)
                setUserInfo(user)
            })
        })
    },[])

    function logout() {
        fetch("http://localhost:5000/logout",{
            credentials:'include',
            method:"POST"
        })

        // setUsername(null)
        setUserInfo(null)
    }

    const username = userInfo?.username
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