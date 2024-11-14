import React, {useState} from "react";

function ConfirmButtonFunc(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = (id) => {
        setIsConfirmed((preConfirmed) => !preConfirmed);
        window.alert(id)
    };

    return (
        <button onClick={() => {handleConfirm(1)}} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButtonFunc