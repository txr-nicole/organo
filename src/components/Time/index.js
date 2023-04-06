import "./Time.css"

export const Time = (props)=>{
    return (
      <section style={{ backgroundColor: props.corSecundaria }} className="time">
        <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
      </section>
    );
}