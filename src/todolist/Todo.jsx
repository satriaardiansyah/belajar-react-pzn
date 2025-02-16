// export default function Todo({text, isCompleted, isDeleted = false}) {
//     if (isDeleted) {
//         return null;
//     } else if (isCompleted) {
//         return (
//             <li>
//                 <del>{text}</del>
//             </li>
//         )
//     } else {
//         return (
//             <li>{text}</li>
//         )
//     }
// }


// Ternary operator
// export default function Todo({text, isCompleted, isDeleted = false}) {
//     if (isDeleted) {
//         return null;
//     } else {
//         return (
//             <li>
//                 {isCompleted ? <del>{text}</del> : text}
//             </li>
//         )
//     }
// }

//Logical AND
export default function Todo({text, isCompleted, isDeleted = false}) {
    if (isDeleted) {
        return null;
    } else {
        return (
            <li>
               {text} {isCompleted && '✅'}
            </li>
        )
    }
}
