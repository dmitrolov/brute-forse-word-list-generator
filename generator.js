const possible = "abcdefghijklmnopqrstuvwxyz";

const addSymbol = (arr) => {
    let newArray = []
    arr.forEach((item) => {
        for (let i = 0; i < possible.length; i++) {
            newArray.push(item + possible[i]);
        }
    })
    return newArray;
}
const l1 = addSymbol(['']);
const l2 = addSymbol(l1);
const l3 = addSymbol(l2);
const l4 = addSymbol(l3);
const l5 = addSymbol(l4);

console.log(l3.length)
console.log(l4.length)
console.log(l5.length)

// let counter = 0;
// setInterval(() => {
//     fetch("https://passport.twitch.tv/usernames/" + l3[counter] + "?is_rename=true")
//         .then(response => {
//             if(response.status === 204) {
//                 console.log(l3[counter])
//             } else console.log('false')
//         })
//     counter++;
// }, 1000)