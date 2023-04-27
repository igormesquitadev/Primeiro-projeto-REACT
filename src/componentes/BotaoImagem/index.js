import { useState } from 'react'
import './BotaoImagem.css'

const BotaoImagem = (props) => {

   

    return (
        <div className='imagemBotao'>
            <button type='button' className='botaoImagem'>{props.children}</button>
        </div>
        
    )
}

export default BotaoImagem