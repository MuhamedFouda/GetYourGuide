import { atom } from "recoil";
// const Localdata = JSON.parse(localStorage.getItem('userslogined'));

 const $Wishlist = atom({
    key: "$wishlist",
    default:[]
});

export default $Wishlist;



