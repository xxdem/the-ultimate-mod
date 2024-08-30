/*

*****   THE ULTIMATE MODPACK   *****
the mega-modpack featuring nearly ALL mods created for corru.observer, to be loaded all at once

CREDITS:
    More Decline Buttons, More Velzie's glee, Vs. Call Research, Fintrusive, Missing Entities, Overcoherent Waters
        BY: adr (@adr_furret on discord)
    Quieter Masks, Stowaway Unity
        BY: agent7 (@agent7 on discord)
    100% Velzie's Glee, Doubled EVILMODE Entities, Laughterhouse Self-proc
        BY: dudemine (@dudemine on discord)
    HAMMER FUNFRIEND, Random Velzie Event
        BY: Niaandovah (@niaandova on discord)
    bettergak
        BY: pocl.v (@pocl.v on discord)


NOTICE :: '10 of 14 mods added'
PLANS :: 'sys menu thing that makes 100% velz gele, doubled, and quieter masks a menu setting'
*/


// LOADER
    // page specific mods
switch(page.path) {
    case "/hub/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;
    case "/local/ocean/": addResources(["https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;
    case "/local/ocean/embassy/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js"]); break;
    case "/local/ocean/embassy/golem/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js"]); break;
    case "/local/beneath/embassy/":addResources(["https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
                                                "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
                                                "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
                                                "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
                                                "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js"]); break;
}

    // ones that runs anywhere
addResources(['https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js'])


// EVENT LISTENER
document.addEventListener('corru_loaded', ()=>{
        // page specific mods
    switch(page.path) {
        case "/hub/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;
        case "/local/ocean/": addResources(["https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;
        case "/local/ocean/embassy/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js"]); break;
        case "/local/ocean/embassy/golem/": addResources(["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js"]); break;
        case "/local/beneath/embassy/":addResources(["https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
                                                    "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
                                                    "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
                                                    "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
                                                    "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js"]); break;
    }

        // ones that runs anywhere
    addResources(['https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js'])
})