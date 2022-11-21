import "./styles.css"

function ValorTotal({list}){
    const valorTotla = list.reduce((acc, elem) => acc + Number(elem.value), 0)
    return(
        <ul className="conteiner-value">
            <li className="valueTotal">Valor total: <span>R$ {valorTotla}</span></li>
            <li>O valor se refere ao saldo</li>
        </ul>
    )
}

export default ValorTotal