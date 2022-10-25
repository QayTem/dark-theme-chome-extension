// Initialize butotn with users's prefered color
let btnOn = document.getElementById("btn-on");

// When the button is clicked, inject putDarkTheme into current page
//При нажатии кнопки, вводит putDarkTheme на текущую страницу

// document.addEventListener("DOMContentLoaded",  async () => {
//     let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: putDarkTheme,
//     });
// });
//
// // The body of this function will be execuetd as a content script inside the current page
// // Тело этой функции будет выполняться как скрипт содержимого внутри текущей страницы
// function putDarkTheme() {
//     chrome.storage.sync.get("color", ({color}) => {
//         document.documentElement.style.backgroundColor = "rgb(30 30 30)";
//         document.body.style.color = "rgb(155 155 155)";
//
//         recursDOM(document.body, 30);
//
//         function recursDOM(element, bg) {
//             const styles = getComputedStyle(element);
//
//             // игнор любого прозрачного фона
//             if (!styles.backgroundColor.startsWith("rgba")/* && !(parseInt(styles.height) < 100 && parseInt(styles.width) < 150)*/) {
//                 element.style.setProperty("background-color", `rgb(${bg},${bg},${bg})`, "important");
//             }
//             let rgb = styles.color.match(/\d+/g);
//             // игнор цветного текста
//             if ((rgb[0] === rgb[1]) && (rgb[1] === rgb[2])) {
//                 let tc = (bg > 99) ? 255 : 155 + bg;
//                 element.style.setProperty("color", `rgb(${tc},${tc},${tc})`, "important");
//             }
//
//             for (const child of element.children) {
//                 if (child.tagName !== "SCRIPT") {
//                     recursDOM(child, bg + 2)
//                 }
//             }
//         }
//     });
// }

