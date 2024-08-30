/*

*****   THE ULTIMATE MODPACK   *****
the mega-modpack featuring nearly ALL mods created for corru.observer, to be loaded all at once

CREDITS:
    More Decline Buttons, More Velzie's glee, Vs. Call Research, Fintrusive
        BY: adr (@adr_furret on discord)
    Quieter Masks, Stowaway Unity
        BY: agent7 (@agent7 on discord)
    100% Velzie's Glee, Doubled EVILMODE Entities, Laughterhouse Self-proc
        BY: dudemine (@dudemine on discord)
    HAMMER FUNFRIEND, Random Velzie Event
        BY: Niaandovah (@niaandova on discord)
    bettergak
        BY: pocl.v (@pocl.v on discord)


NOTICE :: 'temporary template loader put in place'
*/


// LOADER
switch(page.path) {
    case "/local/ocean/embassy/golem/": chatter({actor: 'sys', text: `NOTICE::'mod loaded by script load'`, readout: true}); break;
    default: chatter({actor: 'sys', text: `NOTICE::'mod loaded by script load'`, readout: true}); break;
}


// EVENT LISTENER
document.addEventListener('corru_loaded', ()=>{
    switch(page.path) {
        case "/local/ocean/embassy/golem/": chatter({actor: 'sys', text: `NOTICE::'loaded by event listener'`, readout: true}); break;
        default: chatter({actor: 'sys', text: `NOTICE::'loaded by event listener'`, readout: true}); break;
    }
})