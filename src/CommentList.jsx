import Comments from "./Comments"
import "./CommentList.css"
import { useState } from "react"

export default function CommentList(){

    let [comments , setComments] = useState([{
        username : "Sujal@2002",
        comment : "Great Job",
        rateing : 5
    }])

    let addNewComment = (comment) => {
        setComments((currComment) => [...currComment , comment]
        )
    }

    return(
        <div>

            <Comments addNewComment={addNewComment}/>

            <hr></hr>

            <h3>ALL COMMENTS</h3>

            {
                comments.map((comment , idx) => (
                    <div key={idx} className="comment">
                        <span># UserName = {comment.username}</span>
                        <br></br>
                        <span># Comment = {comment.comment}</span>
                        <br></br>
                        <span># Rateing = {comment.rateing}</span>
                    </div>
                ))
            }

        </div>
    )
}