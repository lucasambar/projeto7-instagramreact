function Usuario () {
    return (
        <div class="usuario">
            <img src="./assets/img/catanacomics.svg" alt=""/>
            <div class="texto">
            <strong>catanacomics</strong>
            Catana
            <ion-icon name="pencil" ></ion-icon>
          </div>
        </div>
     )
}
function Sugestao (props) {
    return (
    <div class="sugestao">
        <div class="usuario">
            <img src={props.img} alt=""/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

        <div class="seguir">Seguir</div>
    </div>
    )
}

function Sugestoes () {
    let obj = [
        {img:"./assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes"},
        {img:"./assets/img/chibirdart.svg", nome:"chibirdart"},
        {img:"./assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
        {img:"./assets/img/adorable_animals.svg", nome:"adorable_animals"},
        {img:"./assets/img/smallcutecats.svg", nome:"smallcutecats"}
    ]

    return (
    <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>

        {obj.map((i) => <Sugestao img={i.img} nome={i.nome}/>)}
    </div>
    )
}


export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes/>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}