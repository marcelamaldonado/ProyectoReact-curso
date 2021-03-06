import Link from 'next/link'

const link = [
    {url:"/",nombre:"Home"},
    {url:"/calc",nombre:"Calculadora"}
]

export default ()=>(
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Curso de Next.js y React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
            link.map(link=>{
                return(
                    <li key={link.url}>
                    <Link href={link.url}><a>{link.nombre}</a></Link>
                    </li>
                )
            })
        }
      </ul>
    </div>
  </nav>

)