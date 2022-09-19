import React from "react";
function RenderPosts(props) {
    /* Interacao */
    const [foiClicado, mudaClique]=React.useState(false)
    const [ClicouSalvar, mudaClicouSalvar]=React.useState(false)
    const [foiCoracao, mudaCoracao]=React.useState('heart-outline')
    const [contador, mudaContador]=React.useState(props.likedcounter)
    const [cor, adicionaCor]=React.useState("")
    const [foiSalvo, mudaSalvo]=React.useState('bookmark-outline')
    function VerificaContador(){
        if (foiClicado){
            mudaCoracao('heart-outline')
            mudaContador(contador-1)
            adicionaCor("")
        } else {
            mudaCoracao('heart')
            mudaContador(contador+1)
            adicionaCor("vermelho")
        }
        
        mudaClique(!foiClicado);
        console.log(contador)
    }
    function SalvaAi(){
        if (ClicouSalvar){
            mudaSalvo('bookmark-outline')
        } else {
            mudaSalvo('bookmark')
        }
        mudaClicouSalvar(!ClicouSalvar);
    }
    /* Renderizacao */
    return (
        <ul class="posts">
                <li class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.userimg} />
                            {props.username}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={props.contentimg} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name={foiCoracao} class={cor} onClick={()=>VerificaContador(props)}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name={foiSalvo} onClick={()=>SalvaAi()}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={props.likedicon} />
                            <div class="texto">
                                Curtido por <strong>{props.likeduser}</strong> e <strong>outras {contador} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </li>
        </ul>
    );
}


export default function Posts() {
    const listaPosts = [
        {
            username: "meowed",
            userimg: "assets/img/meowed.svg",
            contentimg: "assets/img/gato-telefone.svg",
            likedicon: "assets/img/respondeai.svg",
            likeduser: "respondeai",
            likedcounter: 101523,
            heartstate:"heart-outline"
        },
        {
            username: "barked",
            userimg: "assets/img/barked.svg",
            contentimg: "assets/img/dog.svg",
            likedicon: "assets/img/adorable_animals.svg",
            likeduser: "adorable_animals",
            likedcounter: 99159,
            heartstate:"heart-outline"
        }
    ]
    const RenderAll=listaPosts.map((post) => <RenderPosts username={post.username} userimg={post.userimg} contentimg={post.contentimg} likedicon={post.likedicon} likeduser={post.likeduser} likedcounter={post.likedcounter}/>)
    return (
        RenderAll
    )
}