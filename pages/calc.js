import Header from '../componentes/comunes/Header'
import BarraTitulo from '../componentes/comunes/BarraTitulo'
import Calculadora from '../componentes/Calculadora'

export default ()=>(
    <div>
    <Header/>
    <BarraTitulo/>
        <h1>Calculadoras</h1>
        <Calculadora/>

    <style jsx global>
    {
        `
        body{
            background:#ffca20;
            margin-bottom:100px;
        }
        `
    }
    </style>  
    </div>
)