export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <paragraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  return <h1>Hello World</h1>;
}

function paragraphHelloWorld() {
  return <p>Selamat datang satria</p>;
}
