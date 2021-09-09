import React, { useState } from "react";
// 컴포넌트에 상태값을 추가할땐 useState 훅을 사용

export default function MyComponent() {
    const [color, setColor] = useState("red");
    // useState훅은 상탯값,상탯값변경함수를 차례로 반환
    // 상탯값, 변경함수 위치는 고정이므로 외우자!

    function onClick() {
        setColor("blue");
    }
    return (
        <button style={{ backgroundColor: color}} onClick={onClick}>
            좋아요
        </button>
    );
}