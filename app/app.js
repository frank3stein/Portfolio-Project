import '../css/styles.css';

function navigation (appendTarget, menuArray) {
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    addChildElement(nav, ul);
    menuArray.forEach(function(element){
        let li = document.createElement('li');
        addChildElement(ul, li, element);
    })
    document[appendTarget].append(nav);
}

function addChildElement (parent, child, innerText){
    child.textContent = innerText;
    parent.append(child);
}

function paragraph (appendedElement, innerText) {
    let p = document.createElement('p');
    p.textContent = innerText;
    document[appendedElement].append(p);
}

function listItems(listArray) {

}

var navigationItems = ['Home', 'About', 'Etc'];

navigation('body', navigationItems);
paragraph('body', 'Hello again!!!');
paragraph('body', 'We must prevail!')