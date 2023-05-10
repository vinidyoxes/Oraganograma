import './Rodape.css'

const Rodape = ()=>{
    return(
        <footer className='rodape'>
            <div className='col--redes'>
                <img src='/img/fb.png'></img>
                <img src='/img/tw.png'></img>
                <img src='/img/ig.png'></img>
            </div>

            <div className='col--logo'>
                <img src='/img/logo.png'>
                </img>
            </div>
            <div className='col--copyright'><h4>Desenvolvido por <a href='https://furyagency.sytes.net'><strong>Vinicius Henrique</strong></a></h4></div>
        </footer>

    )
}

export default Rodape