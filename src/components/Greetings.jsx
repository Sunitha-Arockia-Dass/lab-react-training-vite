function Greetings(props){
  const  {lang,children} =props
const greetings={
    de:"hallo",
    en: "hello" ,
    es:"hola",
    fr:"Bonjour"
}
return (
    <div className="greetings">
    {greetings[lang]}, {props.children}

    </div>
)
}

export default Greetings