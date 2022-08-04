// import styles from "./List.module.css"
import { useEffect, useState } from "react"

const List = () => {
  const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
          .then(response => response.json())
          .then(json => setPosts(json.data))
   }, [])
  
  return (
    <div>
      {posts.map(data => (
        <div key={data.anime_id}>
          <div >
            {data.anime_name} 
          </div>
          <img src={data.anime_img} alt="sjs" height="200" />
        </div>
      ))}
    </div>
  )
}

export default List