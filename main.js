const body = document.getElementById('body');
const buttons = document.querySelectorAll('div')
const letters = document.querySelectorAll('span');
const text = document.getElementById('text');

body.addEventListener('keydown', keyDown);
body.addEventListener('keyup', keyUp);

function keyDown(e) {
    if (e.code == 'KeyQ') {
        letters[0].style = "color: red;";
        buttons[1].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
        text.innerHTML += 'Q';
    }
    if (e.code == 'KeyW') {
        letters[1].style = "color: red;";
        buttons[2].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyE') {
        letters[2].style = "color: red;";
        buttons[3].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyR') {
        letters[3].style = "color: red;";
        buttons[4].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyT') {
        letters[4].style = "color: red;";
        buttons[5].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyY') {
        letters[5].style = "color: red;";
        buttons[6].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyU') {
        letters[6].style = "color: red;";
        buttons[7].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyI') {
        letters[7].style = "color: red;";
        buttons[8].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyO') {
        letters[8].style = "color: red;";
        buttons[9].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyP') {
        letters[9].style = "color: red;";
        buttons[10].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'BracketLeft') {
        letters[10].style = "color: red;";
        buttons[11].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'BracketRight') {
        letters[11].style = "color: red;";
        buttons[12].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }

    if (e.code == 'KeyA') {
        letters[12].style = "color: red;";
        buttons[14].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyS') {
        letters[13].style = "color: red;";
        buttons[15].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyD') {
        letters[14].style = "color: red;";
        buttons[16].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyF') {
        letters[15].style = "color: red;";
        buttons[17].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyG') {
        letters[16].style = "color: red;";
        buttons[18].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyH') {
        letters[17].style = "color: red;";
        buttons[19].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyJ') {
        letters[18].style = "color: red;";
        buttons[20].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyK') {
        letters[19].style = "color: red;";
        buttons[21].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyL') {
        letters[20].style = "color: red;";
        buttons[22].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'Semicolon') {
        letters[21].style = "color: red;";
        buttons[23].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'Quote') {
        letters[22].style = "color: red;";
        buttons[24].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }

    if (e.code == 'KeyZ') {
        letters[23].style = "color: red;";
        buttons[26].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyX') {
        letters[24].style = "color: red;";
        buttons[27].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyC') {
        letters[25].style = "color: red;";
        buttons[28].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyV') {
        letters[26].style = "color: red;";
        buttons[29].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyB') {
        letters[27].style = "color: red;";
        buttons[30].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyN') {
        letters[28].style = "color: red;";
        buttons[31].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'KeyM') {
        letters[29].style = "color: red;";
        buttons[32].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'Comma') {
        letters[30].style = "color: red;";
        buttons[33].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'Period') {
        letters[31].style = "color: red;";
        buttons[34].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
    if (e.code == 'Slash') {
        letters[32].style = "color: red;";
        buttons[35].style = "transform: translate(0.2vw, -0.2vh); box-shadow: 6px 6px 6px black;";
    }
}

function keyUp(e) {
    if (e.code == 'KeyQ') {
        letters[0].style.removeProperty('color');
        buttons[1].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyW') {
        letters[1].style.removeProperty('color');
        buttons[2].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyE') {
        letters[2].style.removeProperty('color');
        buttons[3].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyR') {
        letters[3].style.removeProperty('color');
        buttons[4].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyT') {
        letters[4].style.removeProperty('color');
        buttons[5].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyY') {
        letters[5].style.removeProperty('color');
        buttons[6].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyU') {
        letters[6].style.removeProperty('color');
        buttons[7].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyI') {
        letters[7].style.removeProperty('color');
        buttons[8].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyO') {
        letters[8].style.removeProperty('color');
        buttons[9].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyP') {
        letters[9].style.removeProperty('color');
        buttons[10].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'BracketLeft') {
        letters[10].style.removeProperty('color');
        buttons[11].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'BracketRight') {
        letters[11].style.removeProperty('color');
        buttons[12].style.removeProperty('transform', 'box-shadow');
    }

    if (e.code == 'KeyA') {
        letters[12].style.removeProperty('color');
        buttons[14].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyS') {
        letters[13].style.removeProperty('color');
        buttons[15].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyD') {
        letters[14].style.removeProperty('color');
        buttons[16].style.removeProperty('transform', 'box-shadow');   
    }
    if (e.code == 'KeyF') {
        letters[15].style.removeProperty('color');
        buttons[17].style.removeProperty('transform', 'box-shadow');   
    }
    if (e.code == 'KeyG') {
        letters[16].style.removeProperty('color');
        buttons[18].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyH') {
        letters[17].style.removeProperty('color');
        buttons[19].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyJ') {
        letters[18].style.removeProperty('color');
        buttons[20].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyK') {
        letters[19].style.removeProperty('color');
        buttons[21].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyL') {
        letters[20].style.removeProperty('color');
        buttons[22].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'Semicolon') {
        letters[21].style.removeProperty('color');
        buttons[23].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'Quote') {
        letters[22].style.removeProperty('color');
        buttons[24].style.removeProperty('transform', 'box-shadow');
    }

    if (e.code == 'KeyZ') {
        letters[23].style.removeProperty('color');
        buttons[26].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyX') {
        letters[24].style.removeProperty('color');
        buttons[27].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyC') {
        letters[25].style.removeProperty('color');
        buttons[28].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyV') {
        letters[26].style.removeProperty('color');
        buttons[29].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyB') {
        letters[27].style.removeProperty('color');
        buttons[30].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyN') {
        letters[28].style.removeProperty('color');
        buttons[31].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'KeyM') {
        letters[29].style.removeProperty('color');
        buttons[32].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'Comma') {
        letters[30].style.removeProperty('color');
        buttons[33].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'Period') {
        letters[31].style.removeProperty('color');
        buttons[34].style.removeProperty('transform', 'box-shadow');
    }
    if (e.code == 'Slash') {
        letters[32].style.removeProperty('color');
        buttons[35].style.removeProperty('transform', 'box-shadow');
    }
}
