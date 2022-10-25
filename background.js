; // при загрузке любой страницы кроме chrome:// ;
chrome.tabs.onUpdated.addListener((id, info, tab) => {
    if (!tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: (tab.status === "complete") ? tabComplete : load,
        });
    }
});

// выполняется при каждом tab complete, если в прошлом onUpdated были изменения, если нет то устанавливает attr
function tabComplete() {  'с'
    let html = document.documentElement;
    let c = html.getAttribute('c');
        let isUp;
        for (const tag of document.body.querySelectorAll(':not(script):not([bt])')) {
            const styles = getComputedStyle(tag);
            let b = tag.hasAttribute('b'); // атрибут 'b' указывает что стиль фона уже изменен
            let t = tag.hasAttribute('t'); // атрибут 't' указывает что цвет текста уже изменен

            if (!b && !styles.backgroundColor.startsWith("rgba")) { // игнор любого прозрачного фона
                let rgb = styles.backgroundColor.match(/\d+/g).map(Number);
                let cf = ((rgb[0] + rgb[1] + rgb[2]) / 3) - 43;
                if (cf > 10 || cf < -10) { // допустимая разность яркостей, при котором фон не будет изменен
                    tag.style.setProperty("background-color", `rgb(${rgb[0] - cf} ${rgb[1] - cf} ${rgb[2] - cf})`, "important");
                }
                tag.setAttribute((t) ? 'bt' : 'b', '');
                b = true;
                isUp = true;
            }
            // игнор если цвет наследуется, убрал проверку пустых тегов, т.к в некоторых сайтах контент подгружается позже
            if (!t && (styles.color !== getComputedStyle(tag.parentElement).color)) {
                let rgb = styles.color.match(/\d+/g).map(Number);
                let cf = 185 - ((rgb[0] + rgb[1] + rgb[2]) / 3);
                if (cf > 10) { // допустимая разность яркостей, при котором цвет текста не будет изменет
                    tag.style.setProperty("color", `rgb(${rgb[0] + cf} ${rgb[1] + cf} ${rgb[2] + cf})`, "important");
                }
                tag.setAttribute((b) ? 'bt' : 't', '');
                isUp = true;
            }
        }
        if (!isUp) {
            html.setAttribute('c', (++c).toString());
        }
    console.log(c + " - пустых попыток смены стилей")

}

function load() {     // выполняется один раз при первом onUpdated, устанавливает attr l
    let html = document.documentElement;

    if (!html.hasAttribute('l')) { // атрибут 'l' указывает что load body update уже был
        let body = document.body;
        html.style.backgroundColor = "rgb(43 43 43)";
        body.style.backgroundColor = "rgb(43 43 43)";
        body.style.color = "rgb(169 183 198)"; // 169 183 198

        for (const tag of body.querySelectorAll(':not(script):not([bt])')) {
            const styles = getComputedStyle(tag);
            let b;

            if (!styles.backgroundColor.startsWith("rgba")) { // игнор любого прозрачного фона
                let rgb = styles.backgroundColor.match(/\d+/g).map(Number);
                let cf = ((rgb[0] + rgb[1] + rgb[2]) / 3) - 43;
                if (cf > 10 || cf < -10) { // допустимая разность яркостей, при котором фон не будет изменет
                    tag.style.setProperty("background-color", `rgb(${rgb[0] - cf} ${rgb[1] - cf} ${rgb[2] - cf})`, "important");
                }
                tag.setAttribute( 'b', '');
                b = true;
            }
            // игнор если цвет наследуется, убрал проверку пустых тегов, т.к в некоторых сайтах контент подгружается позже
            if (styles.color !== getComputedStyle(tag.parentElement).color) {
                let rgb = styles.color.match(/\d+/g).map(Number);
                let cf = 185 - ((rgb[0] + rgb[1] + rgb[2]) / 3);
                if (cf > 10) { // допустимая разность яркостей, при котором цвет текста не будет изменет
                    tag.style.setProperty("color", `rgb(${rgb[0] + cf} ${rgb[1] + cf} ${rgb[2] + cf})`, "important");
                }
                tag.setAttribute((b) ? 'bt' : 't', '');
            }
        }
        html.setAttribute('l', '');
    }
}
