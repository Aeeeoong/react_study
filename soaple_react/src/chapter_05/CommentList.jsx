import React from "react";
import Comment from "./Comment";

const comments_data = [
    {
        name: "Mr.KIM",
        comment: "OH HELLO BRO",
    },
    {
        name: "Ms.J",
        comment: "와타시와 카와이데스",
    },
    {
        name: "Mr.DD",
        comment: "ALWAYS HUNGRY!",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments_data.map((data) => {
                return (
                    <Comment name={data.name} comment={data.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;