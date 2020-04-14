function addInputs(game) {
    document.addEventListener(
        "keydown",
        event => {
            switch (event.keyCode) {
                case 38:
                    game.flyUpOrDown("down");
                    break;
                case 40:
                    game.flyUpOrDown("up");
                    break;
                case 32:
                    game.togglePause()
                    break;
                case 13:
                    game.togglePause()
                    break;
                default:
                    break;
            }
        },
        {
            passive: true
        }
    );
    document.addEventListener(
        "touchstart",
        event => {
            game.togglePause(false)
            let screenHeight, touchY, middle
            screenHeight = document.documentElement.clientHeight;
            touchY = event.targetTouches[0].clientY;
            middle = screenHeight / 2;
            touchY >= middle ? game.moveY("-") : game.moveY("+");

        },
        { passive: true }
    );
}