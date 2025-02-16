import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo isCompleted={true} text="Belajar HTML" isDeleted={true} />
      <Todo isCompleted={true} text="Belajar CSS" />
      <Todo isCompleted={true} text="Java Script" />
      <Todo isCompleted={false} text="Belajar React" />
    </ul>
  );
}
