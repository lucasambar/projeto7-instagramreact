import React from "react";

let curtidas1 = 101.523
let curtidas2 = 99.159


function Post (Props) {
    let [icon,setIcon] = React.useState("bookmark-outline"); 
    let boo = false

    let [heart,setHeart] = React.useState("heart-outline")
    let [cor,setCor] = React.useState("")
    let [num,setNum] = React.useState(101523)
    let booleano =false


    function salvar () {
      if (!boo) {
        setIcon("bookmark")
        boo = true
      }
      else {
        setIcon("bookmark-outline")
        boo = false
      }  
    }

    function curtir () {
      console.log(booleano)
      if (!booleano) {
        booleano = true
        setHeart("heart")
        setCor("vermelho")
        setNum(num+1)
      }
      else{
        setHeart("heart-outline")
        setCor("")
        setNum(num-1)
        booleano = false
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

              <div class="conteudo" onClick={()=>{curtir(Props.numPost)}}>
                <img src={Props.conteudo} alt="" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon class={cor} name={heart} onClick={()=>{curtir(Props.numPost)}}></ion-icon>
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
    numCurtidas: curtidas1,
    numPost: 1
    },
  
    {img:"./assets/img/barked.svg",
    nome:"barked",
    conteudo:"./assets/img/dog.svg",
    curtidoImg:"./assets/img/adorable_animals.svg",
    curtido:"adorable_animals",
    numCurtidas: curtidas2,
    numPost: 2
    }
  ]

    return (
        <div class="posts">
          {obj.map((obj)=> <Post img={obj.img} nome={obj.nome} conteudo={obj.conteudo} curtidoImg={obj.curtidoImg} curtido={obj.curtido} numCurtidas={obj.numCurtidas} numPost={obj.numPost}/>)}
        </div>
    )
}