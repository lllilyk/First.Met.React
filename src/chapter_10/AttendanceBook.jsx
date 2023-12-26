import React from "react";

const students = [
    {   
        id: 1,
        name: "myeongheon",
    },
    {
        id: 2,
        name: "woosung",
    },
    {
        id: 3,
        name: "hyeoncheol",
    },
    {
        id: 4,
        name: "hannah",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
                
                // key를 포맷팅 된 문자열로 변경
                //return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;