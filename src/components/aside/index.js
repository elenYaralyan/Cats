import { getCats } from '../../api/index.js';
import { state } from '../../state/index.js';
import { mainContainer } from '../mainContainer/index.js';

const asideRender = (rootContainer) => {
    const aside = document.createElement("aside")
    aside.className = "aside-contener"
    state.categories.forEach(item => {
        const div = document.createElement("div")
        const span = document.createElement("span")
        div.className = "aside-item-wrapper"
        span.className = "aside-item"
        span.onclick = () => handelClick(item.id, rootContainer)
        span.innerText = item.name
        div.append(span)
        aside.append(div)
    })
    rootContainer.append(aside)

}

export default asideRender

function handelClick(id, rootContainer) {
    getCats(id).then(res => {
        state.cats = res
        state.processID = id
        mainContainer(rootContainer)
    })

}