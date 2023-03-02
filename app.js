const createElements = () => {
    const root = document.createElement('div');
    const text = document.createElement('div');
    const container = document.createElement('div');
    const load = document.createElement('div');

    return {root, text, container, load}
}

const editElements = ({root, text, container, load}) => {
    root.setAttribute('class', 'root');
    text.setAttribute('class', 'text');
    container.setAttribute('class', 'container');
    load.setAttribute('class', 'load');
}

const startCounting = ({text, load}) => {
    let count = 0;
    let intervalID;

    const func = () => {
        if (count === 100)
            clearInterval(intervalID);
        text.innerHTML =  `${count}%`;
        load.style.width = `${count}%`;
        count++;
    };

    intervalID = setInterval(func, 20);
    
}

const init = () => {
    const {root, text, container, load} = createElements();
    editElements({root, text, container, load});

    document.body.appendChild(root);
    root.appendChild(text);
    root.appendChild(container);
    container.appendChild(load);

    startCounting({text, load});
}


init()