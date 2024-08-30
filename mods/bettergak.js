/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : bettergak
BY : pocl.v (@pocl.v on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


function changeGakvu() {
    content.insertAdjacentHTML('beforeend', `<link type="text/css" rel="stylesheet" href="https://pocl.vip/corru/bettergak.css">`);

    env.dialogueActors.gakvu.image = "https://pocl.vip/corru/bettergak/portrait.gif";

    env.COMBAT_ACTORS.gakvu.portrait = `<img class="portrait" src="https://pocl.vip/corru/bettergak/gakattak.gif">`;
    env.COMBAT_ACTORS.gakvu.portraitUrl = 'https://pocl.vip/corru/bettergak/gakattak.gif';

    env.entities['gakvu'].image = 'https://pocl.vip/corru/bettergak/portrait.gif'

    document.addEventListener('corru_entered', changeGakvu, true)
}

document.addEventListener('corru_entered', changeGakvu, true)