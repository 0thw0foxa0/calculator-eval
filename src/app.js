let screen = document.getElementById('disp');
let errlog = document.getElementById('err');
let screen1 =document.getElementById('dispprev');
screen.value='0';
const wipe1 =() => {
    screen.value=screen.value.slice(0,-1);
}
const wipe = () => {
    screen1.value='';
    screen.value='';

}
const show =(i) => {
    screen.value+=i;

}
const calc = () => {
    screen1.value=screen.value;
    screen.value =eval(screen.value);
}
// 1.1.+1.1
// function checker(n)
// { a=['0','1','2','3','4','5','6','7','8','9'];
// switch (n)
// {
//     case '.':
//         if(screen.value[screen.value.length-1]=='+'){
//             errlog.value='. before operations';
//             return false;
//         }
//         else if(a.includes(screen.value[screen.value.length]) 
//       )
//         {
//             errlog.value='';
//             return true;
//         }
//     break;
//     default:
//     errlog.value='';
//     return true;
// }
// }