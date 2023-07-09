
import {formatISO9075} from "date-fns";
import { Link } from "react-router-dom";


export default function Post ({_id,author,title,summary,cover,content,createdAt}) {
  console.log("tatush",title);  
  
  return(
        <div className='post'>
        <div className='entry'>
  
          <div className='images'>
            <Link to={`/post/${_id}`}>
              <img src={'http://localhost:5000/'+cover} alt='Post Cover' /> 
            </Link>
          </div>
  
          <div className='texts'>
            <Link to={`/post/${_id}`}>
              <h2>{title}</h2>
            </Link>
  
            <p className='info'>
              <a className='author'>{author.username}</a>
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className='summary'>{summary}</p>
          </div>
        </div>
      </div>
  
    )
}