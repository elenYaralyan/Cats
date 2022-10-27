import { getCategories } from './api/index.js';
import asideRender from './components/aside/index.js';
import { state } from './state/index.js';

export const rootContainer = document.getElementById("root")
getCategories().then(res => {
    state.categories = res
    asideRender(rootContainer)
})