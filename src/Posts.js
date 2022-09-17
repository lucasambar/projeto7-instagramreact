import React from "react";

function Post (Props) {
    let [icon,setIcon] = React.useState("bookmark-outline"); 
    let boo = false

    function salvar () {
      if (!boo) {
        let newIcon = "bookmark"
        setIcon(newIcon)
        boo = true
      }
      else {
        let newIcon = "bookmark-outline"
        setIcon(newIcon)
        boo = true
      }  
    }

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
                    <ion-icon name="heart-outline" ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name={icon} onClick={salvar}></ion-icon>
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


let obj = [
  {img:"./assets/img/meowed.svg",
  nome:"meowed",
  conteudo:"./assets/img/gato-telefone.svg",
  curtidoImg:"./assets/img/respondeai.svg",
  curtido:"respondeai",
  numCurtidas: 101.523},

  {img:"./assets/img/barked.svg",
  nome:"barked",
  conteudo:"./assets/img/dog.svg",
  curtidoImg:"./assets/img/adorable_animals.svg",
  curtido:"adorable_animals",
  numCurtidas: 99.159}
]

export default function Posts() {
    return (
        <div class="posts">
          {obj.map((obj)=> <Post img={obj.img} nome={obj.nome} conteudo={obj.conteudo} curtidoImg={obj.curtidoImg} curtido={obj.curtido} numCurtidas={obj.numCurtidas}/>)}
        </div>
    )
}