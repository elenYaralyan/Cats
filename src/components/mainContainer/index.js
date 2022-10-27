import { getCats } from '../../api/index.js';
import { state } from '../../state/index.js';

export function mainContainer(rootContainer) {
    rootContainer.children[1] && rootContainer.children[1].remove()
    const main = document.createElement("main")
    const button = document.createElement("button")
    button.className = "load-more"
    button.innerText = "Load More..."
    button.onclick = ()=>btnClick(rootContainer)
    main.className = "main-container"
    state.cats.forEach(item => {
        const img = document.createElement("img")
        img.src = item.url
        img.className = "img"
        main.append(img)
    })
    main.append(button)
    rootContainer.append(main)

}
function btnClick(rootContainer) {
getCats(state.processID).then(res=>{
    state.cats=[...state.cats,...res]
    mainContainer(rootContainer)

})
}