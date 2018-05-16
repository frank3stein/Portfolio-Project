function listBuilderUl(list, htmlElement){
    const ul = document.createElement('ul');
    list.forEach(item => {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    })
    htmlElement.appendChild(ul);
}

export default listBuilderUl;