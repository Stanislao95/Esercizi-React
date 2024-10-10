 export default function  Welcome({name, age}){
  return (
   <div>
    <p>Welcome, {name}</p>
    <p>I am {age} yars old</p>
    <welcome name="Stanislao" age={28}/>
   </div>
  )
}

