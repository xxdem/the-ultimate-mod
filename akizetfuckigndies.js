/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : akizet fuckign dies
BY : SPARKLEFRIEND (@twilight.sparkle on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// CSS
body.insertAdjacentHTML('beforeend', `<style>
#realgrid .gridpiece:not(.blocks):empty.falseteleport {
    background: var(--neutral-color);
    border: 10px solid var(--neutral-color);
    border-style: outset;
}

#realgrid .gridpiece:not(.blocks):empty.falseteleport.fakelocked {
    background: var(--obesk-color);
    background-image: url('/img/textures/fadein.gif');
    background-size: cover;
    background-position: center;
}

#realgrid .door.fakelocked:not(.fakeunlock)::after {
    background-image: url(/img/local/embassy/doorlocked.gif);
}

.grid-plane[specialcam="cystfocus"] .grid-container {
    --camera-x: 4.5;
    --camera-y: 1;
    --camera-rotation: 10;
}

body[currentdialogue="cyst"]#embassy_quarters .grid-animator { 
    --camera-rotation: 0 !important;
    --camera-x: 4;
    --camera-y: 1;
}
</style>`);


// AUDIO
var akizet_fuckign_dies = new Howl({
    src: ['https://cdn.freesound.org/previews/360/360662_5121236-lq.mp3'] // https://freesound.org/people/InspectorJ/sounds/360662/
});


// STAGE
env.stages['embassy_quarters'].exec = () => {
    env.embassy.updateStageData()
    toggleBgm(page.bgm)

    if(check('PAGE!!akiroomunlocked', false))
        content.querySelector('[slug="q"]').classList.add('fakelocked')
}

env.stages['embassy_quarters'].onStep = () => {
    if(check('PAGE!!akiroomunlocked', true))
        content.querySelector('[slug="q"]').classList.remove('fakelocked')
}

env.stages['embassy_quarters'].entities['q'] = {
    class: 'door left falseteleport',
    /*html: `"style="background: var(--neutral-color);
    border: 10px solid var(--neutral-color);
    border-style: outset;`*/
    exec: ()=>{
        if(check('PAGE!!akiroomunlocked', false)) {
                // hard-forces you back heh
            let homeBox = stageCoordinatesFromId('creature')
            gridMoveTo(elementAtStageCoordinates(homeBox.x, homeBox.y), elementAtStageCoordinates(2, 2))
            step()

            chatter({actor: 'akizet', text: 'i should check the cyst first', readout: true})
        }
    }
}

env.stages['embassy_quarters'].entities['U'] = {
    class: `"style="background:none; border:none; opacity:0;`,
    exec: ()=>{
        document.querySelector('.truecreature>*').style.transition="transform 2500ms linear"
        document.querySelector('.truecreature>*').style.transform="translateY(0px)"

        cutscene(true)
        forceSwapCam(true)

        setTimeout(()=>{
            akizet_fuckign_dies.play()
            akizet_fuckign_dies.on('play', ()=>{setTimeout(()=>document.querySelector('.truecreature>*').style.transform="translateY(3500px)",250)})
        },2000)

        setTimeout(()=>{
            changeStage('embassy_personnel', 26, 'left')
            akizet_fuckign_dies.stop()
            cutscene(false)
        }, 7000)
    }
}

env.stages['embassy_quarters'].width = 8
env.stages['embassy_quarters'].plan = [
    '.','N','l','x','d','x','l','.',
    '.','.','░','░','░','░','X','.',
    'U','q','░','░','░','p','b','.',
    '.','.','░','░','░','░','X','.',
    '.','.','l','o','L','C','l','S',
]

env.stages['embassy_personnel'].entities['a'].teleportSpot = 18


// DEBUG
// changeStage('embassy_quarters')