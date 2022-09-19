import React from "react"
export default function Usuario() {
  const listaUsuario = { username: "Catana", userimg: "assets/img/catanacomics.svg" }
  const [username, ChangeUsername] = React.useState(listaUsuario.username)
  const [Image, changeImage] = React.useState(listaUsuario.userimg)
  function EditUserImage() {
    const askUrl = prompt("Digite a URL de sua Imagem")
    changeImage(askUrl)
  }
  function EditUserName() {
    const askName = prompt("Digite seu nome de Usuario")
    ChangeUsername(askName);
  }
  return (
    <div class="usuario">
      <img src={Image} onClick={() => EditUserImage()} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {username}
          <ion-icon name="pencil" onClick={() => EditUserName()}></ion-icon>
        </span>
      </div>
    </div>
  )
}