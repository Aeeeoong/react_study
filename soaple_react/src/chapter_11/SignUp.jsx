import React, { useEffect, useState } from "react";

const savedDataBase = [
    {
        id: 1,
        name: "Kim",
        age: 19,
    },
    {
        id: 2,
        name: "Lee",
        age: 21,
    },
    {
        id: 3,
        name: "Jeong",
        age: 17,
    },
]


function SignUp(props) {
    const [name, setName] = useState("");
    const [check, setCheck] = useState("");
    const [gender, setGender] = useState("남자")

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const savedCheck = () => {
        if (name !== '') {
            for (let i = 0; i < savedDataBase.length; i++) {
                return savedDataBase[i].name === name ? setCheck("이미 있음") : setCheck("사용가능")
            }
        } else {
            setCheck("공백은 불가능합니다.")
        }
    }

    const handleSumbit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit}>
            <div>
                <label>
                    LastName:
                    <input 
                        type="text"
                        name="LastName"
                        value={name} 
                        onChange={handleChangeName} 
                        placeholder="Hong" 
                        spellCheck={false} 
                        maxLength={6} />
                </label>
                <br/>
                <label>
                    성별:
                    <select name="gender">
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <button type="submit">제출</button>
                {/* <button onClick={savedCheck}>체크</button> */}
            </div>
            {/* <div style={{color: "red"}}>{check}</div> */}
        </form>
    )

}

export default SignUp;