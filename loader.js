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
        BY: pocl.v (@pocl.v on discord), octo (@ocktoe on discord)


NOTICE :: '14 of 14 mods added' ; 'a lot more to come'
*/


// LOADER
    // page specific mods
switch(page.path) {
    case "/hub/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;

    case "/local/ocean/": addResources([
        "https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;

    case "/local/ocean/embassy/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;

    case "/local/ocean/embassy/golem/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;

    case "/local/beneath/embassy/":addResources([
        "https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js",
        "https://dudemine.com/upload/mods/laughterhouse.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}],
        ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_velzieglee')}]]); break;

    case "/local/ozo/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/stowaway_unity.js"]); break;
}

    // ones that runs anywhere
addResources([
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js",
    ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_silentmasks')}],
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/sysmenu_mods.js"
])

    // run once but not on corru_loaded
addResources([
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/darkstatic.js"
])


// EVENT LISTENER
document.addEventListener('corru_loaded', ()=>{
    // page specific mods
    switch(page.path) {
        case "/hub/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;
    
        case "/local/ocean/": addResources([
            "https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;
    
        case "/local/ocean/embassy/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;
    
        case "/local/ocean/embassy/golem/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;
    
        case "/local/beneath/embassy/":addResources([
            "https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js",
            "https://dudemine.com/upload/mods/laughterhouse.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}],
            ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_velzieglee')}]]); break;
    
        case "/local/ozo/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/stowaway_unity.js"]); break;
    }
    
        // ones that runs anywhere
    addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js",
        ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_silentmasks')}]
    ])
})