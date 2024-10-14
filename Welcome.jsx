

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}</p>
      
      {age > 18 ? <p>I am {age} years old</p> :
        "you are too young"}

    </div>
  );
}
export default Welcome