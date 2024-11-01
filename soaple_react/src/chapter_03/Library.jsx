import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} price={3000} />
            <Book name="처음 만난 AWS" numOfPage={400} price={40000} />
            <Book name="처음 만난 리액트" numOfPage={500} price={10000} />
        </div>
    )
}

export default Library;