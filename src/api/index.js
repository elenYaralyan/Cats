export async function getCats(processId = 1) {
    const data = await fetch(` 
        https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=${processId} `
    );
    const cats = await data.json();
    return cats;
}

export async function getCategories() {
    const data = await fetch(`https://api.thecatapi.com/v1/categories`);
    const categories = await data.json();
    return categories;
}