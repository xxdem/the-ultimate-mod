/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : gakvu fools
BY : max :ᶅ (@the_dem on discord)

*/


// CSS
var css = `
    #content.eject {
        animation: shake-crazy 100ms linear infinite;
    }
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);


// DIALOGUE

env.dialogues["d1_gakvu"]=generateDialogueObject(` 
start
    sourceless
        GAKVU LEANS AGAINST A LISTENER, EYES DISTANT
            EXEC::pauseSwapCam(true)
        A FALSE ENVIRONMENT CYST SITS UPON ONE OF HER RECEPTORS
        WHEN I APPROACH AND LEAN MY HEAD TO EITHER SIDE, I CANNOT DISCERN A LOGO UPON IT
        I WONDER - IS IT ANOTHER SURFACE SIMULATION? SHE HAS A MORBID OBSESSION WITH THEM
        OF COURSE, THIS EARNS HER ATTENTION, AND SHE GIVES ME A JOVIAL RECEPTOR GESTURE
            EXEC::vnp({hideStage: true, gakvu: "show"})
        
    gakvu
        hi akizet!
        ready for the focus?

    akizet
        yes!
        i was coming to ask you the same thing, actually
        do you have something?
    
    gakvu
        oh yeah!!
        tozik and i were tracking the call earlier, and...
    
    sourceless
        SHE GLANCES TOWARDS TOZIK, WHO STARES INWARD
    
    gakvu
        well, he found it really
        but there was a spike in the call
        a distinct break from the normal baseline
        very interesting!
    
    akizet
        and what did you do?
    
    gakvu
        have you seen him? he has fused his skin to the chair!
        i had to fetch all of the archival cysts and feed them to the <span definition="NOTE::'partial translation';'inherited description-generated noun'">time-stopper</span> myself
        ah, with some help from cavik, of course

    sourceless
        I CHUCKLE, AND SO DOES SHE, BUT I SENSE IT IS FOR A DIFFERENT REASON
    
    gakvu
        did you need anything else?
        otherwise i will be here until the focus starts

    sourceless
        IT PAINS ME TO DO THIS
        BUT I SHOULD PROBABLY BRING UP THE COMPLAINT
        
    RESPOBJ::d1_gakvuresp

complaint
    akizet
        there is a matter i must mention
        gakvu, you and i, we understand
        however... the balance of work, has
    
    gakvu
        bozko!

    sourceless
        WHAT
        DID BOZKO SPEAK WITH HER ALREADY??
        MY CONFUSION IS LAID BARE IN MY RECEPTORS' CURL
    
    gakvu
        was it not him?
        i know it was him!
        he just has a problem with <span definition="INHERITED CONTEXT::'ethnic implication'">ekivik</span>
        
    sourceless
        I LAUGH, AND URGENTLY WAVE MY HANDS AND RECEPTORS DISMISSIVELY
        SHE LAUGHS, TOO--I AM CERTAIN SHE APPRECIATES MY UNDERSTANDING OF THE DRY <span definition="INHERITED CONTEXT::'ethnic implication'">EKIVIK</span> WIT
        
    akizet
        no no, gakvu...
        it does not matter who brought this to my attention
        i know you enjoy your efforts here,
        and above all else i know your ability to strike
        but to certain others, it is not so clear
        and with enough of these complaints, it will start to turn eyes towards me
        so, for my sake, 
        
    sourceless
        I PAUSE TO THINK OF AN ELEGANT WAY TO SAY THIS...
        "AT LEAST PRETEND TO LOOK BUSY WHEN YOU ARE IN HERE"?
        GAKVU WRINGS HER RECEPTORS SMUGLY, KNOWING FULL WELL WHAT I MEAN TO SAY

    gakvu
        do not worry, i understand
    
    akizet
        good!

    RESPOBJ::d1_gakvuresp

false
    sourceless
        BEFORE I COULD COMMENT ON HER FALSE ENVIRONMENT

    gakvu
        akizet!
        please try this
    
    sourceless
        SHE OFFERS A FALSE ENVIRONMENT CYST PREVIOUSLY HIDDEN BEHIND HER
        I SPY A STRANGE TWITCH IN HER RECEPTOR MOVEMENTS, ALMOST CYNICAL
        IT FEELS AS IF HER SMILE IS MORE SMUG
        IS SHE PLANNING SOMETHING?

    gakvu
        this is one from my home
        a skilled veilk-hopper's memories, gamified
        so the veilk march towards the weather wall,
        and you must leap from veilk to veilk while they grow faster
        or else you are subsumed beyond the air's border!

    sourceless
        BY THE GESTICULATIONS OF HER RECEPTORS AND HANDS,
        IT IS AS IF SHE IS TRYING TO BARTER WITH ME
    
    akizet
        that sounds terrifying
    
    gakvu
        that is why it is so fun!

    sourceless
        THE CYST REMAINS OUTSTRETCHED IN HER HAND
        EVEN THOUGH THERE ARE IMPORTANT MATTERS TO ATTEND TO...
        I COULD NOT HELP BUT CONSIDER CONNECTING TO THE CYST
        VEILK-HOPPING IS SUCH A STRANGE FANTASY,
        THAT I MUST TRY IT MYSELF

    akizet
        alright
            EXEC::vn.done()
        i will try it

    gakvu
        yes!

    sourceless
        I TAKE THE CYST AND RAISE IT TO A RECEPTOR
            EXEC::content.classList.add('innerfocus')
            WAIT::5000

    sourceless
        I HEAR A SOUND REVERBERATING THROUGHOUT THE THOUGHTSPACE
        BUT JUST AS I SEEM TO COMPREHEND IT
        PAIN
            EXEC::painnnn(); changeBgm(env.embassy.april, {length: 1000, seek: 0});
            WAIT::7100
    sys
        WARNING::"incoherence detected";"memory stream destabilizing"
            EXEC::ratween(env.bgm, 1)

    moth
        what
        what the hell is going on

    sourceless
        ÏCOUg^EÔLD T¶HÏ½S BE ºA PRANK?
        ¡ES VEKOA DOING THIS?
        ¯RI CAž­NNOT FSE’æEL MY B©˚YD
        TI ÎS T½UÒRNING N©√TO Sõ‹SDGE
        ½Òmõ‹SK’æÃE:Ž‹©é·0³Jºž­¥ÙYj0iT¶º½Òmõ‹SK’æÃE:Ž‹©é·0³Jºž­¥ÙYj0i7]ëz¦‹5DÒ
            EXEC::gakvuFooled(); content.classList.add('eject')
            WAIT::4000

coat
    akizet
        your coat...
        i have never seen it off like that before!
        
    sourceless
        GAKVU DRAWS HER ATTENTION OUTWARDS, TO STARE DOWN AT IT
        SHE PULLS AT THE FALSE FABRIC, RECEPTORS SLIGHTLY TWISTING IN CONFUSION
    
    gakvu
        oh
        that is strange!
        i never turn this off
    
    sourceless
        THE TWIST IN HER RECEPTORS SLOWLY GROWS MORE PRONOUNCED

    gakvu
        what did i just say?
            EXEC::ratween(env.bgm, 0.75, 3000);content.classList.add('incoherence')
        'turn it off'?
        it is fungus...
        wait, no--it is, a representation of fungus...
        that i emulate with my clothing!
    
    sourceless
        I WATCH HER WITH SOME CONCERN - SHE IS SAYING THINGS I ALREADY KNOW
        LIKE SHE IS CONVINCING HERSELF... BUT, WHY? THIS IS VERY STRANGE
    
    akizet
        are you ok?

    gakvu
        ah...
        yes!
            EXEC::ratween(env.bgm, 1, 3000);content.classList.remove('incoherence')
        sorry... sometimes when i am using these false environments,
        i get context overlap!
        for a second, it is like i was my signature rather than myself!
        i should really start pausing these things when talking, hehe

    sourceless
        THE LIGHTS OF HER COAT RESUME
            EXEC::change("gakpause", false);content.classList.remove('gakpause')

    moth
        interesting... that was some sort of memory bleed
            SHOWONCE::
        avoid doing that kind of thing, ok?
            SHOWONCE::

    RESPOBJ::d1_gakvuresp
`)


// AUDIO
env.embassy["april"] = new Howl({
        src: ['https://file.garden/ZBykMtEMpVTUWZ-e/april.mp3'],
        preload: true,
        loop: true,
        volume: 0,
        sprite: {
            __default: [168, 18699, true]
        }
})


// FUNCTIONS
function painnnn() {
    content.classList.add('painprep')
    setTimeout(()=>{
        env.recentSfx = false; play('criticalError', 0.25)
        content.classList.add('painmode')
        setTimeout(()=>content.classList.remove('showfocus'), 1000)
    }, 500)
}

function gakvuFooled(){
    change('gakvu_fooled', true)

    setTimeout(()=>{
        cutscene(true)
        MUI("off")
        MUI("prohibit")
        setTimeout(()=>{
            flash(true)
            play('criticalError', 0.75)
            readoutAdd({message: `WARNING::'data overload';'safeguards active'`, name:"sys"})
        }, 60)
        setTimeout(()=>{
            flash(false)
        }, 700)

    }, 0)
    setTimeout(()=>{
        flash(true)
        play('criticalError', 0.5)
        readoutAdd({message: `CRITICAL_ERROR::'severe data overload';'ejecting'`, name:"sys"})
        setTimeout(()=>{
            flash(false)
        }, 700)
        setTimeout(()=>{
            moveTo("/")
        }, 1400)
        setTimeout(()=>{
            cutscene(false)
            MUI("deprohibit")
        }, 5000)
    }, 4000)
}