import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Belajar HTML",
      isCompleted: true
    },
    {
      id: 1,
      text: "Belajar CSS",
      isCompleted: true
    },
    {
      id: 2,
      text: "Java Script",
      isCompleted: true
    },
    {
      id: 3,
      text: "Belajar React",
      isCompleted: false
    },
    {
      id: 4,
      text: "Belajar React JS Router",
      isCompleted: false
    }
  ];

  // const todos = data.map((todo) => {
  //   <Todo text={todo.text} isCompleted={todo.isCompleted} />
  //   //Spread operator fungsinya sama seperti diatas
  //   return <Todo key={todo.id} {...todo} />
  // })
  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
