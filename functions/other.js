
function draw(img, x, y, width, height) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    img = document.getElementById(img);
    ctx.drawImage(img, x, y, width, height);
}
function fly({ x, y, speed}) {
    x += speed;
    y += 0.5;
    return { x, y, speed};   
} 
function gameLoop() {
     setInterval(()=>game.update(), 7)
}
function start() {
    game.adjust()
    changeText('Press Enter to start')
    game.startLevel()
    gameLoop()
}
function getScreenSize() {
    let width, height
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    return { width, height };
}
function createBtn(name, func) {
    const tools = document.getElementById("btn_bar");
    let btn = document.createElement("img");
    btn.className = "btn";
    btn.id = name;
    btn.src = `images/other/${name}.png`;
    btn.ontouchstart = e => {
        e.stopPropagation();
    };
    btn.onclick = () => func();
    tools.appendChild(btn);
}
async function prepare({ width, height }) {
    createBtn("restart", game.startLevel);
    createBtn("speed1", game.setSpeed)
    addInputs(game);
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.width = width + "px";
    loadingScreen.style.height = height + "px";
    let load = await new Promise((resolve) => openingAnimation(resolve));
    let imagesP = await new Promise((resolve, reject) => downloadFiles(resolve, reject));
    return load + imagesP
};