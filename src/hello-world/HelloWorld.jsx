export default function HelloWorld() {
    const props = {
        text: "Hello W12orld"
    }
  return (
    <div>
      <HeaderHelloWorld {...props}/>
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({text = "default"}) {
//   const text = "Hello World123123";
  return <h1 style={{ 
    color: "red",
    backgroundColor: "blue",
   }}>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "selamat datang satria";
  const style = {
    color: "blue",
    backgroundColor: "red",
  };
  return <p style={style }>{text.toLowerCase()}</p>;
}
