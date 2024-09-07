/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : strafing
BY : Avidya (@solitai7e on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// CSS
body.insertAdjacentHTML('beforeend', `<style>
.stage-arrows > div::after {
    content: attr(key);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 1.5em;
    font-family: spacemono;
    font-size: 0.5em;
    text-transform: uppercase;
    background: black;
    border: 2px solid var(--friend-color);
    border-radius: 50px;
    transition: opacity 1s ease-in-out;
    transform: translateY(-130%);
    opacity: 0;
    pointer-events: none;
    padding: 0.25em;
    text-wrap: nowrap;
    text-align: center;
    width: unset;
    min-width: 1.5em;
}

.shiftarrows.right {
    color: var(--friend-color) !important;
}

.shiftarrows.left {
    color: var(--friend-color) !important;
}
</style>`);


// HTML INJECTION
if (check('setting_altbindstrafe')) {
    content.querySelector("#stage-navigator .stage-arrows .left[key='a']").classList.add('shiftarrows')
    content.querySelector("#stage-navigator .stage-arrows .right[key='d']").classList.add('shiftarrows')
} else {
    content.querySelector('#stage-navigator .stage-arrows').insertAdjacentHTML('beforeend', `
        <div class="shiftarrows right" key="shift + d" onclick="javascript:playerTurn({forceShift: true})">
            <i class="ci-right"></i>
        </div>
    `)
    
        // hacky fix but i realized that this fails the loading if this the quality button doesn't exist
    if (content.querySelector('#stage-navigator .stage-arrows .quality'))
        content.querySelector('#stage-navigator .stage-arrows .quality').insertAdjacentHTML('afterend', `
            <div class="shiftarrows left" key="shift + a" onclick="javascript:playerTurn({clockwise: false, forceShift: true})">
                <i class="ci-left"></i>
            </div>
        `)
    else
        content.querySelector('#stage-navigator .stage-arrows').insertAdjacentHTML('afterbegin', `
            <div class="shiftarrows left" key="shift + a" onclick="javascript:playerTurn({clockwise: false, forceShift: true})">
                <i class="ci-left"></i>
            </div>
        `)
}


// FUNCTION
if(typeof _playerTurn == 'undefined') {
    const _playerTurn = playerTurn

    playerTurn = function ({clockwise = true, specificDirection = false, forceShift = false} = {}) {
        if (!env.pressedKeys.shift && !forceShift && check('setting_altbindstrafe', false))
            return _playerTurn({clockwise, specificDirection});

        if (env.pressedKeys.arrowleft || env.pressedKeys.arrowright && check('setting_altbindstrafe', true))
            return _playerTurn({clockwise, specificDirection});
    
        const delta = clockwise ? -1 : 1;
        let {x, y} = stageCoordinatesFromId("creature");
        const homePlate = elementAtStageCoordinates(x, y);
        switch (env.stage.lastMoved) {
            case "up":    x += delta; break;
            case "right": y -= delta; break;
            case "down":  x -= delta; break;
            case "left":  y += delta; break;
        }
        const targetSquare = elementAtStageCoordinates(x, y);
        if (!targetSquare)
            return;
    
        gridMoveTo(homePlate, targetSquare);
        step();
        if(!env.stage.enemyPause)
            enemyStep();
    }
}