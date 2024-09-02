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
    nuh uh
        BY: cyril (@cantharus on discord)
    BetterNAV
        BY: overcast system (@overcastwarmth on discord)
    normal moth, bitch!
        BY: sawlf (@sawlferton on discord)
    bad apple on gakvu's poncho
        BY: garlic (@garlic_os on discord)
    bozko smash
        BY: shaman (@shaseng on discord)
    darkstatic, DIALOGUE TELEPHONE::intro, ::/FORD/, noSpin, ExpandedENT, cerveza cristal, kazki & bozko VO (discovery), kazki VO (suspicion), gakvu fools, THE FUNNY LITTLE MAZE, corru observin', collapse funny
        BY: max/dem (@the_dem on discord)


NOTICE :: 'total count at 31'
*/


// LOADER
    // page specific mods
switch(page.path) {
    case "/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/dialoguetelephone/telephone_start.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakvufools_basement.js"]); break;

    case "/hello/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/dialoguetelephone/telephone_hello.js"]); break;

    case "/hub/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;

    case "/local/ocean/": addResources([
        "https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;

    case "/local/ocean/embassy/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakponcho.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]],); break;

    case "/local/ocean/ship/interview/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/funny/FUNNYLITTLEMAZE_FORK.js",
        ["https://cantharus.nekoweb.org/dump/nospookies.js", ()=>{return check('setting_nuhuh')}]
    ])

    case "/local/ocean/embassy/golem/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakponcho.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;

    case "/local/beneath/embassy/":addResources([
        "https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
        "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js",
        "https://dudemine.com/upload/mods/laughterhouse.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/car.observer/ford.observer_final.js",
        ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}],
        ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_velzieglee')}]]); break;

    case "/local/ozo/": addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/stowaway_unity.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/car.observer/ford.ozo.js",
        ["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/no_spin.js", ()=>{return check('setting_nospin')}]]); break;
}

    // ones that runs anywhere
addResources([
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js",
    ["https://file.garden/ZfLavVA4xzfd-zhM/quiet_masks.js", ()=>{return check('setting_silentmasks')}],
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/sysmenu_mods.js",
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/normal_moth.js",
    ["https://file.garden/ZkyoNoBsKjjFvjMv/normaler.js", ()=>{return check('setting_normalmoth')}]
])

    // run once but not on corru_loaded
addResources([
    ["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/darkstatic.js", ()=>{return check('setting_flashing')}],
    "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/betterNAV.js",
    ["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/expanded_ent.js", ()=>{return check('setting_expandedent')}],
    ["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/corruobserving.js", ()=>{return check('setting_corruobserver')}]
])


// EVENT LISTENERS
document.addEventListener('corru_loaded', ()=>{
    // page specific mods
    switch(page.path) {
        case "/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/dialoguetelephone/telephone_start.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakvufools_basement.js"]); break;
    
        case "/hello/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/dialoguetelephone/telephone_hello.js"]); break;
    
        case "/hub/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/hammer_funf.js"]); break;
    
        case "/local/ocean/": addResources([
            "https://adrfurret.neocities.org/corrumods/overcoherentwaters.js"]); break;
    
        case "/local/ocean/embassy/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakponcho.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]],); break;
    
        case "/local/ocean/ship/interview/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/funny/FUNNYLITTLEMAZE_FORK.js",
            ["https://cantharus.nekoweb.org/dump/nospookies.js", ()=>{return check('setting_nuhuh')}]
        ]); break;
    
        case "/local/ocean/embassy/golem/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bettergak.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakponcho.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}]]); break;
    
        case "/local/beneath/embassy/":addResources([
            "https://adrfurret.neocities.org/corrumods/e3a2_decline.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_morevelziesgleestatuses.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_callresearch.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_fintrusive.js",
            "https://adrfurret.neocities.org/corrumods/e3a2_missingenemies.js",
            "https://dudemine.com/upload/mods/laughterhouse.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/car.observer/ford.observer_final.js",
            ["https://dudemine.com/upload/mods/double_enemies.js", ()=>{return check('setting_doubled')}],
            ["https://dudemine.com/upload/mods/laughterhouse.js", ()=>{return check('setting_velzieglee')}]]); break;
    
        case "/local/ozo/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/stowaway_unity.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/car.observer/ford.ozo.js",
            ["https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/no_spin.js", ()=>{return check('setting_nospin')}]]); break;
    }
    
        // ones that runs anywhere
    addResources([
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/random_velzie.js",
        ["https://file.garden/ZfLavVA4xzfd-zhM/quiet_masks.js", ()=>{return check('setting_silentmasks')}],
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/sysmenu_mods.js",
        "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/normal_moth.js",
        ["https://file.garden/ZkyoNoBsKjjFvjMv/normaler.js", ()=>{return check('setting_normalmoth')}]
    ])
})

    // this is for the mods that wont run because the game loads too fast
    // this event listener runs after either clicking proceed or after the initial resources have loaded
document.addEventListener('corru_entered', ()=>{
        // page specific mods
    switch(page.path) {
        case "/local/ocean/embassy/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/cerveza_cristal.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/kazki_vo.js",
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/gakvufools.js",
            ["https://file.garden/ZBykMtEMpVTUWZ-e/collapsefunny.js", ()=>{return check("fbx__ep2intro-end")}],
        ]); break;

        case "/local/ocean/embassy/golem/": addResources([
            "https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozko_smash.js",
        ]); break;
    }
})