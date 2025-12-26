import { useState } from "react"

export default function Comments({addNewComment}){  // new

    let [formData , setFormData] = useState({
        username : "",
        comment : "",
        rateing : ""
    })

    let handleComment = (event) => {
        setFormData((currData) => {
            return {...currData ,[event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        addNewComment(formData)    // new
        setFormData({
        username : "",
        comment : "",
        rateing : ""  
        })
    }

    return(
        
        <form onSubmit={handleSubmit}>
            <h2>!! Comment Form !!</h2>
            <label htmlFor="username">Username : </label>
            <input placeholder="Enter Username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleComment}

            ></input>
            <br></br><br></br>

            <label htmlFor="comment">Comment : </label>
            <textarea placeholder="Remark"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleComment}

            ></textarea>
            <br></br><br></br>

            <label htmlFor="rateing">Rateing : </label>
            <input placeholder="Rate" 
            type="number" 
            min ={1}
            max={5}
            id="rateing"
            name="rateing"
            value={formData.rateing}
            onChange={handleComment}

            ></input>
            <br></br><br></br>

            <button>Submit Comment</button>

        </form>
    )
}