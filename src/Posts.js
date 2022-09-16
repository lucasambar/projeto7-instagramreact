function Post (Props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                  <img src={Props.img} alt=""/>
                  {Props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={Props.conteudo} alt="" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={Props.curtidoImg} alt=""/>
                  <div class="texto">
                    Curtido por <strong>{Props.curtido}</strong> e <strong>outras {Props.numCurtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}




export default function Posts() {
    return (
        <div class="posts">

        </div>
    )
}