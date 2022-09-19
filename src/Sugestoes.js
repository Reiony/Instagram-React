export default function Sugestao() {
    const listaSugestoes = [
        {
            userimage: "assets/img/bad.vibes.memes.svg",
            username: "bad.vibes.memes",
            followstate: "Segue você"
        },
        {
            userimage: "assets/img/chibirdart.svg",
            username: "chibirdart",
            followstate: "Segue você"
        },
        {
            userimage: "assets/img/razoesparaacreditar.svg",
            username: "razoesparaacreditar",
            followstate: "Novo no Instagram"
        },
        {
            userimage: "assets/img/adorable_animals.svg",
            username: "adorable_animals",
            followstate: "Segue você"
        },
        {
            userimage: "assets/img/smallcutecats.svg",
            username: "smallcutecats",
            followstate: "Segue você"
        }
    ]
    return (
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {listaSugestoes.map((suggestion) =>
                <li class="sugestao">
                    <div class="usuario">
                        <img src={suggestion.userimage} />
                        <div class="texto">
                            <div class="nome">
                                {suggestion.username}
                            </div>
                            <div class="razao">
                                {suggestion.followstate}
                            </div>
                        </div>
                    </div>
                        <div class="seguir">
                            Seguir
                        </div>
                </li>
            )}
        </ul>

    )
}