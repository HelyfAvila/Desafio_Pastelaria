import Subdivisao from "./Subdivisao";
import style from '../styles/Linha.module.css';
export default function Linha(props) {
    return(
        <div className={style.linha}>
        {
                Array.from({length: 8}).map((_,i) => (
                <Subdivisao
                    key={i}
                    preta={i % 2 === 0 ? props.preta: !props.preta}    
                    peca={props.peca && ( i % 2 === 0 ? props.preta : !props.preta)}
                    jogador2 = {props.jogador2}
                />
            ))
        }
        </div>
    )
}