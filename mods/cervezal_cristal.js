/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : cerveza cristal
BY : max :ᶅ (@the_dem on discord)

*/


// CSS
var css = `
.drinklayer[drink="cristal"] {
    position: absolute;
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/cerveza_cristal.gif) !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.drinklayer[drink="cristal"] .target[entity="cristal"] {
    display: flex; !important
}

#content > .drinklayer[drink="cristal"] {
    bottom: 0;
    right: 10vw;
    width: 30vw;
    height: 30vw;
    transform: translateY(15%) rotate(-10deg);
    transition: transform 1s ease-in-out;
}
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);


// DIALOGUE
env.dialogues["barfriend"] = generateDialogueObject(`
start
    sourceless
        the barfriend stands before a display of simulacra
            EXEC::pauseSwapCam(true)
        it is rare that the urge to interact with it ever strikes me
        however, this is one of those times
____SHOWIF::[["netstat|<", 0], ["citystreet_gotdrinks"]]
        that citric drink i had in the envoy's city...
        terrible as it was,
        it has awoken something
____SHOWIF::[["netstat|>=", 0]]
        another θgaze upon this bright planet...
        it calls for an equally bright beverage
____END
    
    akizet
        barfriend!
    
    barfriend
        HELLO AKIZETESCHE

    RESPOBJ::barfriendresp

orange
    sourceless
        YES... <span definition="NOTE::'no translation required'">ORANGE</span> JUICE
        THAT IS WHAT I WANT
        AN EXOTIC TASTE--WITH THE BUZZ OF CITRIC ACID!

    akizet
        an orange juice simulacrum, please
    
    barfriend
        UNFORTUNATELY WE ARE OUT!!
        BUT I HAVE SOMETHING ELSE
    
    sourceless
        THE BARFRIEND EXTENDS A TENDRIL TO A COOLER NEARBY
        IT RIFES THROUGH THE LITTLE ICE CUBES LIKE A HAND IN SAND
        EVENTUALLY PRODUCING A CYLINDRICAL BOTTLE OF A COUSINLY VARIETY
        ALTHOUGH... IT IS A SIMULACRUM SHAPED IN THAT WAY
        BUT IT LOOKS KIND OF COOL
    
    barfriend
        HERE YOU GO!
            EXEC::document.querySelectorAll('.drinklayer').forEach(e=>e.setAttribute('drink', 'cristal')); document.querySelector("#content > div.drinklayer > div").setAttribute('entity', 'cristal'); setTimeout(()=>{cerveza_cristal_audio.play()}, 2000)
        PLEASE ENJOY!!
    
    akizet
        thank you, barfriend

    RESPONSES::akizet
        depart<+>END
            EXEC::pauseSwapCam(false)
`)


// EXM ENTITY
createEntity({
    name: 'cristal',
    type: "thoughtform",
    image: "https://file.garden/ZBykMtEMpVTUWZ-e/cristal_small.gif",
    text: `::RESPONSIVE THOUGHTFORM
    ::EXPLICIT PURPOSE::'recollection'
    ::INHERITED CONTEXT::<span style='color: var(--obesk-color)'>'a delightful reconstruction of the bright-drink by the materials initiative'</span>`,
    actions: [
        {
            name: "sip-u-lacrum",
            exec: ()=>{  
                content.classList.add('sipping')
                cerveza_cristal_audio.play()
                change('PAGE!!citrusip', "++")
                chatter({actor: 'sourceless', text: 'THE SIMULACRUM STAYS THE SAME, BUT THE TASTE REGISTERS CLEARLY', readout: true})
                setTimeout(()=>chatter({actor: 'sourceless', text: 'THE STRENGTH OF IT DISTORTS MY FEATURES AND SENDS MY RECEPTORS INTO A REFLEXIVE CURL', readout: true}), 3000)
                setTimeout(()=>chatter({actor: 'sourceless', text: 'STRONG!! BUT THE ETHANOL INSPIRES A PLEASANT SATIATION', readout: true}), 7000)
                setTimeout(()=>{content.classList.remove('sipping')}, 5000)
            },
            showIf: ()=> {return !content.classList.contains('sipping')}
        }
    ]
})


// MUSIC
let cerveza_cristal_audio = new Howl({
    src: ['https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/cerveza_cristal.ogg'],
    preload: true,
    volume: 1,
    sprite: {
        __default: [0, 8213]
    }
})