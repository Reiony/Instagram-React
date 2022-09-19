export default function Stories() {
    const listaStories = [
        { image: "assets/img/9gag.svg", user: "9gag" },
        { image: "assets/img/meowed.svg", user: "meowed" },
        { image: "assets/img/barked.svg", user: "barked" },
        { image: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { image: "assets/img/wawawicomics.svg", user: "wawawicomics" },
        { image: "assets/img/respondeai.svg", user: "respondeai" },
        { image: "assets/img/filomoderna.svg", user: "filomoderna" },
        { image: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }]
    return (

        < ul class="stories" >
            {listaStories.map((story) =>
                <li class="story">
                    <div class="imagem">
                        <img src={story.image} />
                    </div>
                    <div class="usuario">
                        {story.user}
                    </div>
                </li>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul>
    )
}