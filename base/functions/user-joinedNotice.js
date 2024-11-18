export function userJoinedNotice(data){
    const textHolder = document.querySelector('.container middle');
    const p = document.createElement('p');

    textHolder.appendChild(p);

    p.innerTEXT = data;
}