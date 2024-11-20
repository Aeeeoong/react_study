import React, { useEffect, useState } from "react";

const students = [
    {
        id : 1001,
        name : "커피머신",
        score : 4.5,
        age : 28,
    },
    {
        id : 1002,
        name : "스키다이",
        score : 4.0,
        age : 24,
    },
    {
        id : 1003,
        name : "다이스",
        score : 4.5,
        age : 28,
    },
    {
        id : 1004,
        name : "키토",
        score : 3.2,
        age : 29,
    },
    {
        id : 1005,
        name : "히토가",
        score : 2.8,
        age : 21,
    },
]

function AttendanceBook(props) {
    const [order, setOrder] = useState("id")
    const sortedItem = students.sort(
        (a,b) => (a.name) ? (a[order] > b[order] ? 1 : -1) : b[order] - a[order]
    )

    useEffect(() => {
        console.log("================")
        console.log(`${order}을(를) 선택하셨습니다..`)
    })
    
    return (
        <div>
            <h2>{order}순으로 조회되었습니다.</h2>
            <select name="" id="" onChange={(event) => setOrder(event.target.value)}>
                <option value="id">학번</option>
                <option value="name">이름</option>
                <option value="score">점수</option>
                <option value="age">나이</option>
            </select>
            <ul>
                {sortedItem.map((student) => {
                    return <li key={student.id}>{student.id}</li>
                })}
            </ul>
        </div>
    )
}

export default AttendanceBook