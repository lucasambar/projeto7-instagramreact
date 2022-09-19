import React from "react";

function Post (Props) {
    let [icon,setIcon] = React.useState("bookmark-outline"); 
    let [boo,setBoo] = React.useState(false)

    let [heart,setHeart] = React.useState("heart-outline")
    let [cor,setCor] = React.useState("")
    let [num,setNum] = React.useState(Props.numCurtidas) //mudar
    let [curtido,setCurtido] = React.useState(true)


    function salvar () {
      if (!boo) {
        setIcon("bookmark")
        setBoo(!boo)
      }
      else {
        setIcon("bookmark-outline")
        setBoo(!boo)
      }  
    }

    function curtir () {
      if (curtido) {
        setHeart("heart")
        setCor("vermelho")
        setNum(num+0.001)
        setCurtido(!curtido)
      }
      else {
        setHeart("heart-outline")
        setCor("")
        setNum(num-0.001)
        setCurtido(!curtido)
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

              <div class="conteudo" onClick={curtir}>
                <img src={Props.conteudo} alt="" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon class={cor} name={heart} onClick={curtir}></ion-icon>
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
                    Curtido por <strong>{Props.curtido}</strong> e <strong>outras {num} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}


export default function Posts() {
  let obj = [
    {img:"./assets/img/meowed.svg",
    nome:"meowed",
    conteudo:"./assets/img/gato-telefone.svg",
    curtidoImg:"./assets/img/respondeai.svg",
    curtido:"respondeai",
    numCurtidas: 123.122
    },
  
    {img:"./assets/img/barked.svg",
    nome:"barked",
    conteudo:"./assets/img/dog.svg",
    curtidoImg:"./assets/img/adorable_animals.svg",
    curtido:"adorable_animals",
    numCurtidas: 192.444
    }
  ]

    return (
        <div class="posts">
          {obj.map((obj)=> <Post img={obj.img} nome={obj.nome} conteudo={obj.conteudo} curtidoImg={obj.curtidoImg} curtido={obj.curtido} numCurtidas={obj.numCurtidas} numPost={obj.numPost}/>) }
        </div>
    )
}