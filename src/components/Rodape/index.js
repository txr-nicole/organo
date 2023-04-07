import "./Rodape.css";

export const Rodape = ()=> {
    return (
      <footer className="rodape">
        <div className="redes">
          <a href="https://github.com/txr-nicole">
            <img src="./imagens/github.png" alt="" />
          </a>
            <img src="./imagens/tw.png" alt="" />
            <img src="./imagens/ig.png" alt="" />
          
        </div>
        <div className="logo">
          <img src="./imagens/logo.png" alt="" />
        </div>
        <div className="credito">
            <h6>Feito por Nicole Teixeira</h6>
        </div>
      </footer>
    );
}