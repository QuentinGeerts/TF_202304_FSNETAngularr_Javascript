const input = document.getElementById('firstname');
// console.log('input :>> ', input);

console.log('input.attributes :>> ', input.attributes);

// for (const key in input.attributes) {
//     console.log(key + ' :>> ', input.attributes[key]);
// }

for (const prop of input.attributes) {
    console.log('prop :>> ', prop);
    console.log('prop.name :>> ', prop.name);    
    console.log('prop.value :>> ', prop.value);    
}

console.clear();

const content = document.getElementById('content');
console.log('content.childNodes :>> ', content.childNodes);
console.log('content.children :>> ', content.children);

console.log('content.firstChild :>> ', content.firstChild);
console.log('content.lastChild :>> ', content.lastChild);

console.log('content.children[0] :>> ', content.children[0]);
console.log('content.children[content.children.length - 1] :>> ', content.children[content.children.length - 1]);

console.clear();

const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    console.log('event :>> ', event);
    console.log('event.target :>> ', event.target);
    console.log('event.target.parentNode :>> ', event.target.parentNode);
    console.log('event.target.parentNode.parentNode :>> ', event.target.parentNode.parentNode);
    console.log('event.target.parentNode.parentNode.parentNode :>> ', event.target.parentNode.parentNode.parentNode);
})

const p2 = document.getElementById('p2');
// console.log('p2 :>> ', p2);

// console.log('p2.previousSibling :>> ', p2.previousSibling);
// console.log('p2.nextSibling :>> ', p2.nextSibling);

console.log('p2.previousElementSibling :>> ', p2.previousElementSibling);
console.log('p2.nextElementSibling :>> ', p2.nextElementSibling);

console.clear();

console.log('content :>> ', content.textContent);
console.log('content :>> ', content.innerText);
console.log('content :>> ', content.innerHTML);

// content.innerHTML = '<input type="text">';
// content.innerText = '<input type="text">';
content.textContent = '<input type="text">';


