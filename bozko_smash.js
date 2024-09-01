/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : bozko smash
BY : sha (@shaseng on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// CSS
content.insertAdjacentHTML('beforeend', `<style>
#fp-player .fp-golem .fist.left {
    border: unset;
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozarms.png);
    width: 66.5px;
    height: 225px;
    transform: translateX(20px) translateY(-100px);
}

#fp-player .fp-golem .fist.right {
    border: unset;
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozarmsalt.png);
    width: 66.5px;
    height: 225px;
    transform: translateX(-20px) translateY(-100px);
}

#fp-player .fp-golem::after {
    background-image: url(/img/sprites/obesk/bozko/full/bozkohead.gif);
}

#fp-player .fp-golem {
    background-image: url(/img/sprites/obesk/bozko/full/bozkobody.gif);
}

#fp-player .fp-golem .fist::before {
    content: unset;
}

#fp-player .fp-golem.prepared .fist.left, #fp-player .fp-golem.prepared .fist::before {
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozarms.png);
    background-size: contain;
    transform: translateX(-20px) translateY(-135px) rotate(30deg);
    width: 66.5px;
    height: 225px;
    border-radius: unset;
    box-shadow: unset;
}

#fp-player .fp-golem.prepared .fist.right, #fp-player .fp-golem.prepared .fist::before {
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozarmsalt.png);
    background-size: contain;
    transform: translateX(20px) translateY(-135px) rotate(-30deg);
    width: 66.5px;
    height: 225px;
    border-radius: unset;
    box-shadow: unset;
}

.fp[a_stage="result"] #fp-player .fp-golem[a="knock"] {
    transform: rotateX(-60deg) rotateY(-150deg) rotateZ(-15deg);
}

.fp[a_stage="result"] #fp-player .fp-golem[a="block"] {
    transform: translate(181px, 140px) rotateX(-90deg) rotateY(-120deg);
}

.fp[a_stage="result"] #fp-player .fp-golem[a="advance"] {
    transform: translate(0px, 0px) rotateX(-90deg) rotateY(0deg);
}

.fp[a_stage="result"] #fp-player .fp-golem[a="strike"] {
    transform: translate(0px, 5px) translateZ(148px) rotateX(-164deg) rotateY(22deg);
}

.dialogue-message.bozko {
    --background: var(--dark-color);
    text-shadow: unset;
    font-size: 0.9em;
    letter-spacing: 0;
    line-height: 1.5em;
    text-transform: unset;
}

.fp[a_stage="collide"] #fp-player .fp-golem[a="advance"] {
    transform: translateY(0px) rotateX(-170deg)
}

.fp-controls::before {
    content: "OBJECTIVE::'be bozko'";
    font-size: 0.75rem;
    position: absolute;
    bottom: 0;
    transform: translateY(120%);
    padding: 1em;
    background: var(--dark-color);
    white-space: pre-wrap;
    width: 100%;
}
</style>`);


// COMBAT REACTION
env.COMBAT_ACTORS.bozko.reactions = { catchall: ["BOZKO SMASH!!!"] }


// FUNCTION
page.melee.fakeAttack = () => {
    if(env.fakeAttacking == true) return
    env.fakeAttacking = true
    page.melee.player.golem.setAttribute('a', 'advance')

    setTimeout(()=>page.melee.el.setAttribute('a_stage', 'windup'), 100)
    setTimeout(()=>page.melee.el.setAttribute('a_stage', 'collide'), 1000)
    setTimeout(()=>{play('crit');env.fakeAttacking = false}, 1150)
}


// COMBAT ACTION
env.ACTIONS['dull_pillard'] = {
    slug: "dull_pillar",
    name: "the dull",
    type: 'target',
    desc: "'push opponent into dull pillar'",
    anim: "basic-attack",
    help: "50% -1HP, 10%C x2",
    usage: {
        act: "%USER SHOVES %TARGET",
        crit: "BOZKO PUSHES %TARGET INTO A DULL PILLAR",
        hit: "%TARGET IS STRUCK, BUT BY WHAT?",
        miss: "%TARGET EVADES"
    },
    accuracy: 1,
    crit: 10,
    amt: 100,
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
        })
    }
}


// DIALOGUE
env.dialogues["boss_tut"] = generateDialogueObject(`
start
    sourceless
        the foundation golem raises its spherical gauntlets
            EXEC::ratween(env.bgm, 0.75)
        each of them easily nearly the size of a newborn veilk's eye
        with fists like that... it would simply crush any of us
        ...except, of course, karik and itzil!!

____SHOWIF::["pa|ikgolem"]
    sourceless
        i reach out through the timestopper...

    akizet
        karik! take the lea--!
    
____SHOWIF::[["pa|ikgolem", false]]
    sourceless
        in our stilled time, i observe their golem
        itzil asleep within, but karik, a kiv, directing the body
        yes, they will surely know what to do
        i instruct the timestopper to release the flow of time for an instant to call out,
    
    akizet
        kari--!
____END

    bozko
        BOZKO SMASH
            AUTOADVANCE::
    
    sourceless
        bozko?!
        bozko shoves past garik and itzil
        pushing them aside, he incidentally shove them into the dull pillar
            EXEC::env.ACTIONS['dull_pillard'].exec(null, env.rpg.allyTeam.members.find(({slug}) => slug == 'ikgolem'))
        i can see in how the foundation golem hovers - it is--

    bozko
        BOZKO SMASH
            AUTOADVANCE::

    sourceless
        a kelnit, stepped into a spar for--

    bozko
        BOZKO SMASH
            AUTOADVANCE::

    sys
        WARNING::'abnormal thoughtform activity detected'
        WARNING::'entity FOUNDATION GOLEM';'altering thoughtspace'
        ANALYSIS::'intention to destroy recollection locus'
        EXECUTING::'structure enforcement'

____SHOWONCE::
    moth
        wait, didn't it just tell you to use a proxy last time?
        what's going on?
____END
    
    sys
        ATTENTION::'utilizing structure':'MELEE'
            EXEC::page.melee.tutorialStep()
        ATTENTION::'neural controls adjusted';'command menu enabled'
            EXEC::page.melee.tutorialStep()
        NOTICE::'enqueue two actions for ally to enact';'foe will select two options'
        NOTICE::'either entity being knocked into DULL COLUMN will end round'
        EXECUTING::'action list'
        STRIKE::'stationary punch';'stave off enemy advance'
            EXEC::page.melee.tutorialStep()
        ADVANCE::'forward movement';'attack enemy on contact'
            EXEC::page.melee.tutorialStep()
        GUARD::'stationary defense';'steal attack charge if enemy wound up'
            EXEC::page.melee.tutorialStep()
        WIND UP::'move back one space and charge attack';'improves ADVANCE, STRIKE'
            EXEC::page.melee.tutorialStep()
        WARNING::'winner of evenly matched attacks decided randomly'

____SHOWONCE::
    self
        what does that mean
        how does this work
        did your friend include a manual
    
    moth
        lol no
        still, there's only four actions, how hard can it be?
        besides, didn't it only get hard last time when that bastard showed up?
            SHOWIF::"item|sorry_cyst"
        just hit stuff, it'll work out
____END

    RESPONSES::akizet
        fight!!<+>END
            EXEC::page.melee.tutorialStep();ratween(env.bgm, 1)
            FAKEEND::(begin melee)
`)

env.dialogues["boss_half"] = generateDialogueObject(`
start
    sourceless
        in our foe, i see something change
        across its dense chassis are myriad impact marks, bleeding sludge
        it hunches like a wounded predator...
        desperate now, more deadly
        we will need to plan more carefully

    akizet
        bozko--!

    bozko
        BOZKO SMASH!!
    
    sys
        NOTICE::'instruction queue lengthened to 3'
        NOTICE::'3 commands now required to proceed'

    RESPONSES::akizet
        fight!!<+>END
            FAKEEND::(continue fight)
`)

env.dialogues["boss_laststand"] = generateDialogueObject(`
start
    sourceless
        the golem is crumbling
        it is nearly done - we are so close to the power we need
        but the dull columns have grown unstable, disrupting the timestopper's effectiveness
        some portion of them thrashes and spins out of control within the dull plane, plucking at our connection
        we have to stop this now while we have the advantage
    
    akizet
        bozko!! one more--

    bozko
        BOZKO
            WAIT::2000
            AUTOADVANCE::
        SMAAASH!!!!
    
    sys
        NOTICE::'KO enemy once to destroy them'

    RESPONSES::akizet
        fight!!<+>END
            FAKEEND::(begin melee)
`)

env.dialogues["boss_closeout"] = generateDialogueObject(`
start
    sourceless
        the golem is forced into the destructive column one last time
            EXEC::ratween(env.bgm, 0.5, 10000)
        its fists are little more than melted blobs of sludge now
            EXEC::env.stages['g_boss'].hideBoss();
        they fall away, unable to endure any more damage - and it is finally without defense
        bozko rears the great shell of their body into the construct
        unable to block any more, the constructor's head is skewered
            EXEC::page.melee.fakeAttack()
        whatever intelligence it had is pierced, causing the rest of its body to fall limp,
        the impact enough to briefly tilt the chamber
        i nearly celebrate, but watch on as bozko slam their head into the ground,
            EXEC::page.melee.fakeAttack()
        smashing it with their body, over and over...
            EXEC::page.melee.fakeAttack()

    akizet
        bozko--?
    
    bozko
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
    
    karik
        bozko!!
    
    bozko
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
    
    sourceless
        the noise does not stop until there is nothing left for him to hold
            EXEC::page.melee.fakeAttack()

    RESPONSES::akizet
        ...<+>END
            FAKEEND::(end combat)
            EXEC::cutscene(true);endCombat(env.rpg.enemyTeam);page.melee.stop();specialCam(false)

END::cutscene(false);startDialogue('bossclear')
`)