import { classListAdjustal } from "../functions/class-adjustal.js";

export function userlistAdjustal(){
    const userlist = document.querySelector(".user-list")
    let toggle = false
    userlist.addEventListener("click", () =>{
        const rightSide = document.querySelector(".right-side")
        if (toggle === false){
            classListAdjustal(rightSide, "rs-break", "rs-active")
            toggle = true
        } else{
            classListAdjustal(rightSide, "rs-active", "rs-break")
            toggle = false
        }
    })
}