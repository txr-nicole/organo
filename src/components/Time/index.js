import { Colaborador } from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
  return (
  props.colaboradores.length > 0 &&
    <section style={{ backgroundColor: props.corSecundaria }} className="time">
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria={props.corPrimaria}
          />
        ))}
      </div>
    </section>
  );
};
