export function renderCereal() {
    const div = document.createElement('div');
    div.classList.add('stop');

    const img = document.createElement('img');
    img.src = stop.image;

    cnst a = document.createElement('a');
    a.href = `./stop-detail/?id=${cereal.id}`;

    a.append(img);
    div.append(a);
    return div;
}

export function findById(id, arr) {
    console.log(id);
    console.log(arr);
    for (let item of arr) {
        if (id === item.id) {
            return item;
        }
    }
}
