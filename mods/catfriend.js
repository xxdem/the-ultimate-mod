/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : catfriend
BY : jill (@oatmealine on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// CSS
body.insertAdjacentHTML('beforeend', `<style>
.buddy {
    --buddyimg: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/catfriend.gif);
    --offsetX: 50vw;
    --offsetY: 50vh;
    --size: 75px;
    --speed: 1000ms;
    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    transform-origin: center;
    transform: translate(-50%, -50%) translate(calc(var(--offsetX) * 1px), calc(var(--offsetY) * 1px));
    transition: transform var(--speed) ease-in-out;
    z-index: 10;
}

#ffproxy {
    --buddyimg: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/catproxyfriend.gif) !important;
}
</style>`)


// FUNCTIONS
const uwuMap = [
    [/(?:r|l)/g, "w"],
    [/(?:R|L)/g, "W"],
    [/n([aeiou])/g, "ny$1"],
    [/N([aeiou])/g, "Ny$1"],
    [/N([AEIOU])/g, "NY$1"],
    [/ove/g, "uv"],
];

    // dialogue replacement therapy
function uwuify(text) {
    for (const [oldWord, newWord] of uwuMap) {
        text = text.replace(oldWord, newWord);
    }

    return text;
}

    // transforms in place
function processDialogueObject(generated) {
    for (const k of Object.keys(generated)) {
        if (!generated[k].body) continue;
        for (const line of generated[k].body) {
        if (line.actor === 'funfriend' || line.actor === 'proxyfriend') {
            line.text = uwuify(line.text);
        }}
    }

    return generated;
}

    // add ontop of generateDialogueObject
generateDialogueObject = (orig => {
    return genString => {
        const generated = orig(genString);
    return processDialogueObject(generated);
}})(generateDialogueObject);

    // change dialogues
if (env.dialogues) {
    for (const dialogue of Object.values(env.dialogues)) {
        processDialogueObject(dialogue)
    }
}

    // apply onto chatter
chatter = (orig => { return data => {
    if (data.actor === 'funfriend' || data.actor === 'proxyfriend') {
        data.text = uwuify(data.text);
    }
    
    return orig(data);
    }
})(chatter);