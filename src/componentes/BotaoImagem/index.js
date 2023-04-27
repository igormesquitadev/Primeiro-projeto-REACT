import './BotaoImagem.css'

const BotaoImagem = (props) => {
    return (
        <div className='imagemBotao'>
            <button type='button' onClick={props.onClick}>Procurar</button>
        </div>   
    )
}
export default BotaoImagem
