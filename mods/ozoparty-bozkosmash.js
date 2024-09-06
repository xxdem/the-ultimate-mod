/*

OZO PARTY MOD

If this is working correctly,
(and if this link is put into the console @ https://corru.observer/ during Golem Maintenance),
you should be able to play as the Council, the Fairy, Isabel, Geli and the Stowaway!

CREDITS:

Newmoon - main maker
Dem - helped an insane amount with code
Zyra - made the basis and inspiration + helped with coding
Crow - drew fairy hallucination
Vangare, Adr, Jewel - helped with hallucination rendering
DudeMine, Joael, Sola, Nova - provided suggestions for hallucination design
God - retrieved fairy portrait

*/


// HALLUCINATION MODIFICATION

env.COMBAT_ACTORS["hallucination"] = {
    name: "Â»ÃµGQÃ Âº3Â¾Ãµâ€cR%",
    maxhp: 3,
    hp: 3,
    actions: ["speak", "husk_attack_weak"],
    graphic: `
        <div class="sprite-wrapper hallucination" id="%SLUG-sprite-wrapper">
            <div class="sprite-overflow spritestack">
                <img class="sprite basis" src="/img/sprites/combat/foes/hallucinations/akizet.png" id="%SLUG-sprite">
                <img class="sprite base" src="/img/sprites/combat/foes/hallucinations/akizet.png" id="%SLUG-sprite">
                <img class="sprite eyes" src="/img/sprites/combat/foes/hallucinations/akizet_eyes.png" id="%SLUG-sprite">
            </div>
            <div class="target" entity="Â»ÃµGQÃ Âº3Â¾Ãµâ€cR%"></div>
        </div>
        `,
    reactions: {},
    initialStatusEffects: [["ethereal", 1]],
    turnCheck: "hallucinations",
    events: {
        onSpriteCreation: (sprite) => {
            if(!sprite) return

            let basis = sprite.querySelector('img.basis')
            let base = sprite.querySelector('img.base')
            let eyes = sprite.querySelector('img.eyes')

            if(env.hallucinator == "generic") {
                basis.src = `/img/sprites/combat/foes/hallucinations/gakvu.png`
                base.src = `/img/sprites/combat/foes/hallucinations/gakvu.png`
                eyes.src = `/img/sprites/combat/foes/hallucinations/gakvu_eyes.png`
            } else if(env.hallucinator == "council") {
                basis.src = `https://file.garden/ZpmqdRbyKSpKbO5L/councilhallucination-base.png`
                base.src = `https://file.garden/ZpmqdRbyKSpKbO5L/councilhallucination-base.png`
                eyes.src = `https://file.garden/ZpmqdRbyKSpKbO5L/counchaleyes.png`
            } else if(env.hallucinator == "fairy") {
                basis.src = `https://file.garden/ZpmqdRbyKSpKbO5L/hallucination-fairy-main-from-copper-crow.png`
                base.src = `https://file.garden/ZpmqdRbyKSpKbO5L/hallucination-fairy-main-from-copper-crow.png`
                eyes.src = `https://file.garden/ZpmqdRbyKSpKbO5L/hallucination-fairy-eyes-from-copper-crow.png`
            } else if(env.hallucinator == "isabel") {
                basis.src = `https://file.garden/ZpmqdRbyKSpKbO5L/isahalmain.png`
                base.src = `https://file.garden/ZpmqdRbyKSpKbO5L/isahalmain.png`
                eyes.src = `https://file.garden/ZpmqdRbyKSpKbO5L/isahaleyes.png`
            } else if(env.hallucinator == "gelicombactor") {
                basis.src = `https://file.garden/ZpmqdRbyKSpKbO5L/gelihalmain.png`
                base.src = `https://file.garden/ZpmqdRbyKSpKbO5L/gelihalmain.png`
                eyes.src = `https://file.garden/ZpmqdRbyKSpKbO5L/gelihaleyes.png`
            } else if(env.hallucinator == "stowaway") {
                basis.src = `https://file.garden/ZpmqdRbyKSpKbO5L/stowahalmain.png`
                base.src = `https://file.garden/ZpmqdRbyKSpKbO5L/stowahalmain.png`
                eyes.src = `https://file.garden/ZpmqdRbyKSpKbO5L/stowahaleyes.png`
            } else {
                basis.src = `/img/sprites/combat/foes/hallucinations/${env.hallucinator}.png`
                base.src = `/img/sprites/combat/foes/hallucinations/${env.hallucinator}.png`
                eyes.src = `/img/sprites/combat/foes/hallucinations/${env.hallucinator}_eyes.png`                    
            }
        }
    }
}


// ISABEL ADDITIONAL STUFF

createEntity({
name: 'effigy',
image: '/img/local/uncosm/ozo/akieffigy_portrait.gif',
type: "thoughtform portrait-bright portrait-covers",
text: `::INCOMPLETE THOUGHTFORM
::EXPLICIT PURPOSE::'recollection'
<span style="color: var(--obesk-color)" definition="ANALYSIS::'malformed entity';'potential tampering'">::INCOHERENCE DETECTED</span>
::INHERITED CONTEXT::<span style='color: var(--bright-color)'>'isabel! isabel! isabel!'</span>`
})

env.ACTOR_AUGMENTS.isabel = {
    efgy: {
        slug: "efgy",
        name: "Firearms",
        image: "https://corru.observer/img/sprites/combat/augs/surge.gif",
        description: "'disseminate guns among effigies'", // 'i love a gun's';'the placeholderrrrrrr'
        alterations: [["reform", "weaponize"]],
        cost: 1
    }
}


// ACTIONS

env.ACTIONS['incoherent_mimic'] = {
    slug: "incoherent_mimic",
    name: "Mimic",
    type: 'support+target+self+autohit',
    desc: "'copy actions of target';'does not persist after combat';'use of some actions may cause prohibitive incoherence'",
    help: "AUTOHIT MIMIC",
    anim: "heal",
    usage: {
        act: "%USER MIMICS %TARGET",
        hit: "%TARGET IS FLATTERED",
    },
    crit: 0,
    amt: 0,
    autohit: true,
    beneficial: true,
    noRepeat: true,
    exec: function(user, target) {
        addStatus({target: user, status: "incoherent", length: 1, noReact: true});
        let actions = [...new Set(target.actions)]
        let windupActions = [...new Set(target.windupActions)]

        removeStatus(user, "windup")

        actions = actions.filter(actionSlug=>{
            let action = env.ACTIONS[actionSlug]
            if(
                action.type.includes("summon") ||
                action.type.includes("nomimic") ||
                action.slug.includes("incoherent")
            ) return false;
            
            return true
        })

        actions.push("incoherent_mimic")
        console.log(actions, actions.length, actions[0])

        if(actions.length == 1 && actions[0] == "incoherent_mimic") {
            play("talkfairy", 0.5)
            return sendFloater({
                target: user,
                type: "arbitrary",
                arbitraryString: "MIMIC FAILED!",
                size: 2,
                isGood: false
            })
        } else {
            sendFloater({
                target: user,
                type: "arbitrary",
                arbitraryString: "MIMIC SUCCESS!",
                size: 2,
                isGood: true
            })                
            play("talkchoir", 0.5)
        }

        user.actions = actions
        user.windupActions = windupActions

        if(user.member) {
            user.member.mimic = {
                actions: user.actions,
                windupActions: user.windupActions
            }
        }
    },

    avoidChaining: true
},

env.ACTIONS['unity'] = {
    slug: "unity",
    name: "Unity",
    type: 'special',
    desc: "'invoke favorite concept';'absorb team as own'",
    help: "+4T:VULNERABLE, ALLIES::+4T:DESTABILIZED +4T REDIRECTION (TO USER)",
    anim: "basic-attack",
    accuracy: 1,
    crit: 0,
    usage: {
        act: "%USER UNITES THEIR TEAM"
    },
    exec: function(user, target, beingUsedAsync) {
        addStatus({target: user, status: "vulnerable", length: 4}); 
        env.GENERIC_ACTIONS.teamWave({
            team: user.team,
            exec: (actor, i) => {
                if(actor.slug == user.slug) return
                addStatus({target: actor, origin: user, status: "redirection", length: 4}); 
                addStatus({target: actor, status: "destabilized", length: 4}); 
                play('talkchoir', 1);
            },
            advanceAfterExec: true, beingUsedAsync, user,
        })
    },

    disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" },
    avoidChaining: true
}

env.ACTIONS['visions'] = {
    slug: "visions",
    name: "visions",
    type: "autohit",
    desc: "'imbue allies with empowering dreams'",
    help: "AUTOHIT TEAM::+2T:FOCUSED",
    accuracy: 1,
    crit: 0,
    usage: {
        act: "%USER EMPOWERS THEIR TEAM"
    },
    exec: function(user, target, beingUsedAsync) {
        addStatus({target: user, status: "focused", length: 2}); 
        env.GENERIC_ACTIONS.teamWave({
            team: user.team,
            exec: (actor, i) => {
                if(actor.slug == user.slug) return
                addStatus({target: actor, status: "focused", length: 2}); 
                play('talkchoir', 1);
            },
            advanceAfterExec: true, beingUsedAsync, user,
        })
    }
}

env.ACTIONS['hunger'] = {
    slug: "hunger",
    name: "Hunger",
    type: 'autohit',
    desc: "'invoke favorite concept';'prepare to feast'",
    help: "-5HP +1T:EVASION +1T:FOCUSED",
    usage: {
        act: "%USER PREPARES FOR A FEAST"
    },
    exec: function(user, target) {
        play('destabilize', 1);
        combatHit(user, {amt: 5, acc: this.accuracy, crit: this.crit, origin: user})
        addStatus({target: user, status: "evasion", length: 1, noReact: true}); 
        addStatus({target: user, status: "focused", length: 1, noReact: true}); 
        return 'nothing';
    },

    disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" },
    avoidChaining: true
}

env.ACTIONS['devour'] = {
    slug: "devour",
    name: "Devour",
    type: "target",
    desc: "'attempt to eat enemy';'more powerful if desperate'",
    help: "90% -2HP 20%C x2\nADD::-2HP +40%C +1T:STUN IF SELF::HP <= 5",
    accuracy: 0.9,
    crit: 0.2,
    amt: 2,
    usage: {
        act: "%USER BITES AT %TARGET",
        crit: "%TARGET IS TORN OPEN",
        hit: "%TARGET IS CAUGHT",
        miss: "%TARGET RECOILS"
    },
    exec: function(user, target) {  // stole this code from countercall action
        let amt = this.amt
        let crit = this.crit

        if(user.hp <= 5) {
            amt = this.amt + 2
            crit = this.crit + .4
        }

        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            hitSfx: {
                name: 'talkfairy',
                rate: 1
            },
            critExec: ()=>{
                if(user.hp <= 5) {
                    addStatus({target, origin: user, status: "stun", length: 1, noReact: true}); 
                }
            }
        })
    }
}

env.ACTIONS['gun'] = {
    slug: "gun",
    name: "Gun",
    type: 'support+target+self+autohit',
    desc: "'fire at enemy with handgun','supplied by geli!','yay!!'",
    help: "AUTOHIT -1HP",
    usage: {
        act: "%USER SHOOTS %TARGET",
    },
    amt: 2,
    autohit: true,
    beneficial: true,
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            beneficial: true,
            action: this, 
            user, 
            target,
        })
    },
    avoidChaining: true,
    disableIf: (actor) => {
        return (
            actor.team.name == "enemy" &&
            !actor.team.members.some(member => ((member != actor) && (member.state != "dead") ))
        )
    }
}

env.ACTIONS['reform'] = {
    slug: "reform",
    name: "reform",
    type: 'target',
    desc: "'warp thoughtform';'repurpose materials'",
    help: "90% -1HP, 20% x2 + SUMMON::EFFIGY",
    accuracy: 0.9,
    crit: 0.2,
    amt: 1,
    usage: {
        act: "%USER REACHES TOWARDS %TARGET",
        crit: "%TARGET IS REPURPOSED",
        hit: "%TARGET WRITHES",
        miss: "%TARGET RECOILS"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            critExec: ({target})=>{
                midCombatEnemyAdd('effigy', 'right');
            }
        })
    }
}

env.ACTIONS['weaponize'] = {
    slug: "weaponize",
    name: "weaponize",
    type: 'target',
    desc: "'warp thoughtform';'repurpose materials';'now with more guns'",
    help: "90% -1HP, 20% x2 + SUMMON::EFGY",
    accuracy: 0.9,
    crit: 0.2,
    amt: 1,
    usage: {
        act: "%USER REACHES TOWARDS %TARGET",
        crit: "%TARGET IS REPURPOSED",
        hit: "%TARGET WRITHES",
        miss: "%TARGET RECOILS"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            critExec: ({target})=>{
                midCombatEnemyAdd('efgyhelper', 'right');
            }
        })
    }
}

env.ACTIONS['joy'] = {
    slug: "joy",
    name: "joy",
    type: "autohit",
    desc: "'imbue allies with empowering dreams'",
    help: "AUTOHIT TEAM::+2T:FOCUSED", // vanity visions restyle from councilmod
    accuracy: 1,
    crit: 0,
    usage: {
        act: "%USER EMPOWERS THEIR TEAM"
    },
    exec: function(user, target, beingUsedAsync) {
        addStatus({target: user, status: "focused", length: 2}); 
        env.GENERIC_ACTIONS.teamWave({
            team: user.team,
            exec: (actor, i) => {
                if(actor.slug == user.slug) return
                addStatus({target: actor, status: "focused", length: 2}); 
                play('talkflower', 1.25);
            },
            advanceAfterExec: true, beingUsedAsync, user,
        })
    }
}


// ACTORS

env.COMBAT_ACTORS.effigy = {
    slug: "container", // this line is staying forever >O}
    name: "Effigy",
    readoutActor: "effigy",
    maxhp: 4,
    hp: 2,
    state: 'living',
    initialStatusEffects: [["ethereal", 1]],
    actions: ["nothing"],
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://file.garden/ZfhEFg_uZRgXD7Sn/Akieffigy_full.png" id="%SLUG-sprite">
            <div class="target" entity="effigy"></div>
        </div>`,
    reactions: {
        catchall: ["go go interloper!!", "not now interloper you're beating them", "!!!", "yayayaay!!", "interloper!! yeah!!", "isabel look what the interloper's doing!!"],
        dead: ["oh okay!!"]
    }
}

env.COMBAT_ACTORS.efgyhelper = {
    slug: "container", // this line is staying forever >O}
    name: "EFGY",
    readoutActor: "efgyhelper",
    maxhp: 4,
    hp: 2,
    state: 'living',
    initialStatusEffects: [["ethereal", 1]],
    specialClass: "bstrdactor",
    actions: ["gun"],
    graphic: `
        <div class="sprite-wrapper" id="%SLUG-sprite-wrapper">
            <img class="sprite" src="https://corru.observer/img/local/uncosm/ozo/akieffigy_bstrd_gun.gif" id="%SLUG-sprite">
            <div class="target" entity="effigy"></div>
        </div>`,
    reactions: {
        catchall: ["go go interloper!!", "not now interloper you're beating them!", "!!!", "yayayaay!!", "interloper!! yeah!!", "isabel look what the interloper's doing!!", "i love a gun's!"],
        dead: ["oh okay!!"]
    }
}

env.COMBAT_ACTORS.council = {
    slug: "council",
    name: "Council",
    readoutActor: "council",
    maxhp: 25,
    hp: 25,
    state: 'living',
    statusEffects: [],
    actions: ["parasite", "visions", "unity"],
    portrait: `<img class="portrait" src="https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/council.png">`,
    portraitUrl: 'https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/council.png',
    reactions: {
        evade: ["ha!", "easy!", "dance with us!"],
        crit: ["got you!", "aha!", "we see now"],
        crit_buff: ["together we will prevail", "you are welcome, friend"],
        miss: ["too fast!", "we are sorry!", "we must do better"],
        dead: ["..."],
        puncture: ["torn apart...", "restoratives, please"],
        regen: ["together again!", "..."],
        destabilized: ["♫", "♪", "♫♪", "♪♫♪"],
        stun: ["our limbs...", "what..."],
        laugh: ["♫", "♪", "♫♪", "♪♫♪"],
        receive_hit: ["..."],
        receive_crit: ["this does not bode well for us...", "stop that!"],
        receive_buff: ["thank you, friend", "we will not let you down"],
        receive_destabilized: ["♫", "♪", "♫♪", "♪♫♪"],
        receive_rez: ["oh? thank you!!", "let the dreams continue!"],
        receive_carapace: ["this will help"],
        receive_repairs: ["we feel better", "thank you"],
        receive_fear: ["no, no no...", "no... we are not alone!!", "i...", "together...!", "hunger..."],
        receive_redirection: ["oh, thank you!", "we will not let you down"],
    }
}

env.COMBAT_ACTORS.fairy = {
    slug: "fairy",
    name: "Fairy",
    readoutActor: "fairy",
    maxhp: 10,
    hp: 10,
    state: 'living',
    statusEffects: [],
    actions: ["devour", "hunger", "evade"],
    portrait: `<img class="portrait" src="https://file.garden/ZfdsGg_uZRgXD4MH/Corrufaceicons/existingcharacter/Sfairysecreticon.png">`,
    portraitUrl: 'https://file.garden/ZfdsGg_uZRgXD4MH/Corrufaceicons/existingcharacter/Sfairysecreticon.png', //special thanks to @rainbowcutieo3o!
    reactions: {
        catchall: ["eheheheheHEHEHAHAHAHA!!", "AAHAHAHAA!!", "HAA! ahaha!!", "eheHEEHeheh!!", "HEHEHËHæ æAA!!!!", "heheôíhôhehe", "ha! HA HA!!", "ahaAⱧȺȀ", "eȇĕhehehehɇ", "aHAHAahYS§“&I‘Ì¥‹gµž={ùa", "hee hee²<®¿hee!!", "ħħeheheḩeheḛ", "HẴĦẪ¬", "AHAHA", "%—HÀÀ ðw Øw", "ha/¯qhaœ'ha"],
        dead: ["hahaå÷ú*¼-- ...", "HA«¶¾ß-- ...", "«hehe-- ...", "ha®½-- ..."],
    }
}

env.COMBAT_ACTORS.isabel = {
    slug: "isabel",
    name: "isabel",
    readoutActor: "isabel",
    maxhp: 10,
    hp: 10,
    state: 'living',
    statusEffects: [],
    actions: ["reform", "joy", "evade"],
    portrait: `<img class="portrait" src="https://corru.observer/img/local/uncosm/ozo/flowerfriend_eye.gif">`,
    portraitUrl: 'https://corru.observer/img/local/uncosm/ozo/flowerfriend_eye.gif',
    reactions: {
        evade: ["oh!", "good!"],
        crit: ["and go!!", "reinforcements!"],
        miss: ["..."],
        dead: ["..."],
        laugh: ["ahaha", "hehe", "hahahe"],
        receive_crit: ["ah!!!", "ow oww-"],
        receive_vulnerable: ["this could be bad", "..."],
        receive_puncture: ["i'm losing cohesion!", "is there a heal to spare?"],
        receive_regen: ["thank you!", "much better, thank you!"],
        receive_destabilized: ["what... is happening?", "akizet..."],
        receive_rez: ["thank you!!!", "oh!! thank you!"],
        regen: ["better...", "thank you"],
        destabilized: ["what is this!?", "akizet...", "is it really you?"],
        stun: ["ah...", "my arms..."],
        receive_carapace: ["this will help!"],
        receive_repairs: ["thank you!", "much better, thank you!"],
        receive_fear: ["no, please...", "akizet-!!", "is it really you?"],
        receive_redirection: ["for me?", "what are you doing?"]
    }
}

env.COMBAT_ACTORS.gelicombactor = {
    slug: "gelicombactor",
    name: "Geli",
    readoutActor: "gelicombactor",
    maxhp: 15,
    hp: 15,
    actions: ["unfocused_shot", "windup_cover"],
    windupActions: ["focused_shot", "hold_aim"],
    initialStatusEffects: [["visionary_geli", 1]],
    specialClass: "bstrdactor",
    portrait: `<img class="portrait" src="[[PORTRAITURL]]">`,
    portraitUrl: '/img/sprites/obesk/geli/bsteli/combatportrait.gif',
    reactions: {
        evade: ["wow!", "aahAHaha!!"],
        crit: [ "ahaha! i GOT THEM!!" ],
        miss: ["oh NO!!", "WASTED BULLET", "WILL GET NEXT 1!"],
        dead: ["i CANT MOVE"],
        receive_hit: ["OW"],
        receive_crit: ["WHY DOES IT HURT SO BAD", ">:("],
        receive_puncture: ["WHY DOES IT HURT SO BAD"],
        receive_buff: ["}:^)"],
        receive_destabilized: ["WAKING UP AGAIN", "MEGA BULLET!!"],
        receive_rez: ["NICE 1"],
        puncture: [":("],
        regen: ["doing GOOD", "ahahaAhaha!!"],
        destabilized: ["WATCH THIS"],
        stun: ["uu382*((U*#*( U("],
        receive_fear: [":O", "O_O"],
    }
};

env.COMBAT_ACTORS.stowaway = {
    slug: "stowaway",
    name: "Stowaway",
    readoutActor: "stowaway",
    maxhp: 10,
    hp: 10,
    state: 'living',
    statusEffects: [],
    actions: ["incoherent_mimic"],
    portrait: `<img class="portrait" src="/img/portraits/interlopercombat_rainbowcuteo3o.png">`,
    portraitUrl: '/img/portraits/interlopercombat_rainbowcuteo3o.png',
    reactions: {
        evade: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "missed", "close", "aa", "watch out!!", "nice try", "not fast enough", "ha! HA HA!!", "HA! idiot!!", "did you really think that would hit me?", "not so easy", "i saw it!!", "over heËere ehehe", "missed missed missed ahahaha!!!", "unthinking thing!", "ah!", "haha!", "no!!", "woaah!", "no", "not so easy", "oh!!", "what?!", "stop that!", "deflected!", "s tŒ¥ó y  aw œ y", "n o  c l os er", "O)", "COOL BREEZE!! YAY!!", "8)", "IT S0 EASY"],
        crit: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "ha", "perfect", "take that", "yes!!", "everyone, follow my lead!", "this was inevitable", "you will not last", "BURN! BLEED! DIE! DIE DIE DIE!", "BLEED! BURN!", "DIEDIEDIEDIEDIEDIE!!", "DIE!", "you will not get past me", "i will shatter you", "AHAHA", "D«¶¾NK!!!", "this is ¤UR¬¶ world!", "clean...", "it is simply that easy", "a few more like that...", "that was lucky", "die!! die!!", "get away from them", "smashed to pieces", "i got you!", "catch!", "ahaha...", "incredible!", "Ü di¢ö1€Oe Î", "R E TU RN", "ISABEL LOOK!!", "BLAMM~!", "YAYAYAYA", "BL4MN!!", "PoW!!", ">%^)"],
        crit_buff: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "easy", "good", "are you feeling better?", "do you need more?", "i have your back!", "there you go", "do not waste this", "you are WELCOME!", "now KILL THEM!",  "do not make me regret this", "life is literall¬y so easy", "i can ÷ú*¼see the cells...!", "do not worry, my friend!!", "trusst meÉe", "so that goes there...", "keep going", "is that better??", "take this", "this should help!", "i hope that helps!"],
        miss: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "oh no", "i missed", "sorry", "oh!! sorry... i missed...", "i messed up again...", "àœœm!!", "i need to focus", "i was too slow", "DIE ALREADY!!", "ñÔœþ}Ó !", "º¥Ä¥’¥×!!!", "USELESS!!", "ßÐƒ", "eheheHAHA", "oh nooo ahaha!!", "stupid! stupi½id!!", "what!! cheater!!!", "use focus stupid!!", "€Öä!", "oh...", "it is too fast!", "too bad", "how does it move like that?!", "next time", "ah!", "÷°ò!!", "wat!! geli how do i hit them", "ok i try again?", "can i redo my turn", "SHT", "almost GOT U"],
        dead: ["...", "...", "...", "...", "hahaå÷ú*¼-- ...", "HA«¶¾ß-- ...", "«hehe-- ...", "ha®½-- ...", "¿", "???", "no! get up, get up!", "the body is not responding!!", "waaa!! nooo!", "aeaeu HUrts BAD!!"],
        puncture: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "bleeding", "is there a heal to spare?", "what? i am fine!", "i need this fixed", "you are taking too long", "help me now", "i cannot fight like this!!!", "help me! NOW NOW NOW NOW!", "let me fix this", "i must have something to stop this bleeding", "oww hahaa", "fix me! fix me f&5«ix  meœ fiºQôux mÆ!", "helloooo?? FIX ME!!", "i have blood??", "ohh haha that is verý¯Ÿ bad for m£+¤", "OOUUEU", "such a strange feeling", "make this stop", "i need to fix this", "i am losing cohesion!", "blood everywhere", "i need to seal this!", "losing cohesion fast!", "h¿(‰n g er", "e}vªer ytíh&i ng", "%ÿoÛÙ", "oww wowawaoww", "HEAL plz"],
        regen: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "ahh", "feels good", "feeling good!!", "a slow recovery", "better than before..!", "not healing FAST ENOUGH!", "good...", "yess¬", "feeling better", "feeling good", "...", "coming together again!", "much better", "m y f  le sh", "cl o½ se ®±… r", "m¿ ó+r  e", "eheheeeaaahahaha", "okk!!! yes", ":)", "SO BACK"],
        destabilized: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "...", "...", "...", "...", "...", "...", "heheôíhôhehe", "...", "it mæm¬îV°0kes my voice funny", "hahaaå¬¬h#±aaahaha", "yo*¼u-„should ƒ„eel this¤", "DOUBLE BULLETS !!"],
        stun: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "oouaa", "eeou", "my arms...", "ah...", "eåeaaaåauu", "what--?", "heavyy", "i want my turnnn", "boØringg[Œÿ:ä‘", "so s st upid", "b ored", "where did my eyes go?!", "where...", "oaauuuau", "what--", "whhaahh", "it will not respond!!", "o u  t ou t o ut", "ou to u t o  ut", "the dream is broken!! help!", "CANT AIM WTF help"],
        laugh: ["ehehe", "hehe", "haha", "ahaha", "hehehehe", "ahaha!", "heehee!", "ehehehe!", "ha ha ha ha", "heh heh", "ohoho", "hmhmhm", "eheheheheHEHEHAHAHAHA!!", "AAHAHAHAA!!", "HAA! ahaha!!", "eheHEEHeheh!!", "heh", "hah", "oho", "hmh", "ahaAⱧȺȀ", "eȇĕhehehehɇ", "aHAHAahYS§“&I‘Ì¥‹gµž={ùa", "hee hee²<®¿hee!!", "ħħeheheḩeheḛ", "HẴĦẪ¬"],
        receive_hit: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "ow", "ouch", "ÅÍ£", "aaÍ", "€ŸÀaa", "eåe!", "ow!!"],
        receive_crit: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "ow!", "ouch!", "aùÓŸ=ý!!", " ÜÃ¼ÎüeÈ", "€EÙÓï#ÜÃ¼Î", "ÃÍáÊ!!", "a cruel trick", "i see you now", "wooaaa big hit", "hahaa d onk", "n not fun nyy", "Æöö!!", "you!", "ow, ow!!!", "how--?!", "hu r ts", "mny PETALS!!", "YEAOUUCH!!"],
        receive_puncture: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "it cut me", "this is nothing...", "good thing it was me!", "this will need to be fixed", "do not delay in mending me", "OW!", "you will PAY for this!", "you-- I WILL KILL YOU!", "this will not stop me", "it went thro¢u®gh”¨", "%—HÀÀ ðw Øw", "i am... bleeding...?", "ow!! what...", "restorative, quick!", "cavik!", "it punched through...", "oh no...", "the chassis!!", "h¿(‰n g er", "e}vªer ytíh&i ng", "%ÿoÛÙ", "i dont like this part", "buncgture", "bleedink...", "GOT BUNCTURE"],
        receive_buff: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "thank you", "very cool", "for me? really?", "you should not have!", "ah, i will repay this!", "was that really your best?", "that will do, for now", "good!", "they will MELT beneath us!!", "it was ABOUT TIME!!", "feeling fine", "yee@¼±¬SS", "ha/¯qhaœ'ha", "thanks", "thank you!", "keep it up", "thank you!", "excellent", "µÿÁiKp%Ñ", "OK I SHOOT BIG NEXT??", "TIME 2 GET EM ;}"],
        receive_destabilized: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "feels blurry", "i can fix everything...", "it is happening again", "DIE!! DIE DIE die DIE die die DIE!", "HEHEHËHæ æAA!!!!", "you all look so frail...", "you will never get past me now", "•±NOW i will HURT them!", "i kn¨ow the ˜¥lines", "GOOD", "the wall i¼s ÇrÁ°rackˆ.ing", "WOaoOAw", "may velzie look away", "i hear it calling", "die DIE!! DIE!! DIE!!!", "i hear them again...", "it hurts", "hurts", "someone is there", "i feel you", "i cannot wake up", "something is so wrong...", "âª¥lé§ÎéýÁ", "dÆis co ne ct", "WOaoOAw"],
        receive_rez: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "i almost died?", "i am back? we can fix this!!", "good", "NOTHING can stop me! NOTHING!", "time to DIE!", "back again...", "it seems i can trust you, at least", "reembodied!! the old one?", "ahahaaa thank you friend", "pulled from thÈe sea!¡!", "AHAHA :^) GOT U", "thank you", "my savior", "let us finish this", "get back up...", "what happened?!", "i am back...?", "ah, it works again!", "ÿæÿ", "AHAHA :^) WE BACK"],
        receive_carapace: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "oh, armor", "this will help", "no, i am fine!", "a shield for me?", "this will not last for long", "i will need further shielding", "they will not leave a scratch on me!!", "they will not get through this", "perfect", "cool!! cool!!", "this looks so cool on mee", "so heavy", "thank you", "a shell!", "good", "more armor! yes!", "MËºY¾Ñ"],
        receive_repairs: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "i feel better", "thanks", "if only we always had this...", "it is better than nothing", "good! more, NOW!", "ugh!! finally!!", "ffeels nice", "thanks cavik", "that is better", "thank you, thank you!!", "so much better", "...", "thank you, thank you"],
        receive_fear: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "what is that?", "what did it say?", "it is so unnatural", "this feels wrong", "is this real...?", "i...", "what...", "but...", "this... changes NOTHING...!", "ugh...","euuehh", "no--they are my friends!!", "they would never...", "fake... fake feeling¤’*s its fake","is this a¬ll there is?¢¤?", "i do not want to go ba¢k", "hëelp me heËl‡p", "where are we??", "i dd‰o not want t®¼o live th‡!¦s way", "stop looking at me!!", "get away from me!", "no, no no no", "what did it say??", "hollowed out...", "and yet it moves", "what happened to you?", "that cannot be", "...", "that one looks like...!", "stop...", "velzie take me from here", "stay away! away!!", "no...", "stay back!", "...", "is it really you...?", "akizet!!", "i... i remember you...", "keep it away from me!", "h--help me!", "no, no no no", "what did this to you?!", "i feel sick...", "O", "WTF O_O"],
        receive_redirection: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "oh, thank you", "i will not let you down", "what are you doing?", "but they will hurt you!", "quit wasting time and hit them", "you will still be hit", "better YOU than me!", "i do not need your help", "like one body!! haha!!", "brave! i like you!!", "bozko??", "i will return the favor", "what??", "oh, thank you!", "thank you, bozko!", "i will cover you!", "what?", "unnecessary, but thanks", "f ina l ly aw  ake"],
        give_redirection: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "stay behind", "look at me!"],
        receive_spikes: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "come on", "strike me now..."],
        sacrifice: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "this is how it has to be..."],
        receive_vulnerable: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "ƒøÊ=è¶", "s e e"],
        give_fear: ["1Uië2W‡", "‡eÎKßJää", "/…¿?÷ ôLãØ", "C©Ë", "0E™Nó¨ýQÒ", "€LWé{ðÍ", "ÇæýÙ‡ß†C", "£~Uþfâ", "…Tú**", "cÅ4Ä–sT ý æôr,§½ÿlfÃ ÄS¿De", "ÐⱤ0 Ø Ⱳƞ ", "§±ÂⱤ ṾḮɲG─", "YºŮ ɃěC ‰ Ṃể", "šøừ Ɍ€cɇ hȩḸ─lƥ mĒ ṨØ°ṹȑĉœ", "ḧỂḺᵽ ḿḝ ḫeȽƤ ṃệ ĦɆȽⱣ ṂỆ", "ⱤEMŒM BEɌ"],
    }
}

// PARTY ADDITION
page.party.push({
    slug: "council",
    name: "Council",
    class: "digitally certified horse",
    hp: 25,
    combatActor: "council"
})

page.party.push({
    slug: "fairy",
    name: "Fairy",
    class: "devourer of thoughts",
    hp: 10,
    combatActor: "fairy"
})

page.party.push({
    slug: "isabel",
    name: "Isabel",
    class: "bearer of kind dreams",
    hp: 10,
    combatActor: "isabel"
})

page.party.push({
    slug: "gelicombactor",
    name: "Geli",
    class: "Bastardous Sniper",
    hp: 15,
    combatActor: "gelicombactor"
})

page.party.push({
    slug: "stowaway",
    name: "Stowaway",
    class: "Shell",
    hp: 10,
    combatActor: "stowaway"
})


// DIALOGUE ACTORS

env.dialogueActors["council"] = {
    image: check('recosm_state', 'killed') ? '/img/sprites/council/godportrait.gif' : '/img/sprites/council/portrait.gif',
    type: "thoughtform awakened portrait-haze portrait-auto portrait-center",
    voice: ()=>play('talkchoir')
}

env.dialogueActors["isabel"] = {
    image: '/img/local/uncosm/ozo/flowerfriend_portrait.gif',
    type: "thoughtform flowerfriend awakened portrait-cover portrait-haze",
    voice: ()=>play('talkflower')
}

env.dialogueActors["fairy"] = {
    image: '/img/local/uncosm/ozo/sprite_portrait.gif', 
    type: "thoughtform fairy awakened portrait-haze portrait-auto portrait-center",
    voice: ()=>play('talkfairy')
}

env.dialogueActors["stowaway"] = {
    image: '/img/sprites/loper.gif',
    type: "thoughtform portrait-top portrait-cover portrait-blocker",
    voice: ()=>play('talkcroak')
}

env.dialogueActors["bstigy"] = {
    name: "EFGY",
    image: '/img/local/uncosm/ozo/akieffigy_portrait_bstrd.gif',
    type: "bstrd portrait-cover",
    voice: ()=>play('talkflower', 1.4)
}

env.dialogueActors["bsteli"] = {
    name: "geli",
    type: "portrait-round portrait-cover portrait-blocker bastard-color",
    voice: ()=>play('talkgel', 0.9),
    element: ".ozofriend.geli",
    expressions: {
        default: {
            image: "/img/sprites/obesk/geli/bsteli/portrait.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', ''))
        },
        bstrd: {
            class: "bastard-font",
            image: "/img/sprites/obesk/geli/bsteli/portrait_bstrd.gif",
            voice: ()=>play('talkgel', 0.75),
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'bstrd'))
        },
        concern: {
            image: "/img/sprites/obesk/geli/bsteli/portrait_concern.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'concern'))
        },
        happy: {
            image: "/img/sprites/obesk/geli/bsteli/portrait_happy.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'happy'))
        },
        think: {
            image: "/img/sprites/obesk/geli/bsteli/portrait_think.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'think'))
        },
        uncanny: {
            image: "/img/sprites/obesk/geli/bsteli/portrait_uncanny.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'uncanny'))
        },
        blueeyes: {
            image: "/img/sprites/obesk/geli/bsteli/portrait_blueeyes.gif",
            exec: ()=>document.querySelectorAll('#bsteli').forEach(el=>el.setAttribute('expression', 'blueeyes'))
        },
    },

}


// DIALOGUE
env.dialogues["genericenemyvictory"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>
____END

    sourceless
        OUR FOES LAY DESTROYED
        TEXEC::env.combat.dynamicReward()

    RESPONSES::akizet
        continue<+>END
            EXEC::forceSwapCam(false)
`)

env.dialogues["loss"] = generateDialogueObject(`
start
    sourceless
        A SHARP LIMB STRIKES MY MINDCORE
        ...
            EXEC::content.classList.add('goodbye');ratween(env.bgm, 0.2, 10000);content.classList.add('dying');
        WHAT IS HAPPENING
        EVERYTHING HAS STOPPED
        HELLO?
        TOZIK? GAKVU??
        COUNCIL?
        FAIRY? ISABEL?
        GELI? STOWAWAY?
        FUNFRIEND?
        IS ANYONE THERE?
        HELP

    unknown
        ...
            SHOWONCE::

    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>

    sys
        ALERT::"recollection locus destroyed";"iteration unable to continue"
        ADVISE::"start new iteration";"load saved iteration"
            SHOWIF::'collapseSave'
        ADVISE::"start new iteration"
            SHOWIF::['collapseSave', false]

    RESPONSES::sys
        return to selection<+>END
            EXEC::moveTo("/local/ocean/embassy/")
`)

env.dialogues["gol_intro"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        the plan<+>plan
        
        wait<+>wait
            SHOWIF::'gol__intro-plan'
            EXEC::vn.done()
            FAKEEND::(end preparations)

    RESPONSES::itzil
        kivii<+>kivii

    RESPONSES::miltza
        hesitance<+>hesitance
            SHOWIF::'gol__intro-plan'

    RESPONSES::karik
        sfer<+>sfer
            SHOWIF::[["PAGE!!karikfed", false]]

    RESPONSES::council
        who are you?<+>ozoidentity
`)
env.dialogues["intro"] = generateDialogueObject(`
loop
    RESPOBJ::gol_intro

start
    sys
        ATTENTION::'continuing memory stream'
        NOTE::'inheriting iteration context'
        NOTE::'thoughtform activity detected';'new dialogue available'
    
    RESPONSES::sys
        continue<+>continue
        skip<+>END
            SHOWIF::"gol__intro-end"
            EXEC::vn.done();
            FAKEEND::(skip sequence)

continue
    movefriend
        ok gakvukani
        commencing relocation!

    sourceless
        the descent begins, though it is terribly unsteady
        was that something knocking against the underside of the chamber?
        movefriend does not get far before it slows to a halt again

    movefriend
        wow!!
        friends: please forgive the turbulence!
        corroyi density is unusually high in this area
        in fact, all standard currents have ceased!
        but do not worry!! i can still get you where you need to go!

    akizet
        what does that mean for the spire?

    sourceless
        i feel the chamber's ground shift beneath us, pulling outwards
        ah... it is forming limbs outside of the chamber
        indeed, it must physically crawl through the spireblood and drag the chamber with it
        an extremely strenuous process, i suspect

    movefriend
        i must focus on the locomotion sorry!!
        please ask the constructor within the chamber!

    sourceless
        i look towards tozik at first
        he looks back at me absently, then makes an uncertain gesture with his receptors
        before i can ask it to clarify, one of the mindcores announces themselves

    karik
        that is me!!
            EXEC::vnp({karik:"show", bg: true})
    
    sourceless
        i sense some surprise between the ekiviks
        that would be a little funny, if not for the circumstances
        their kiv rarely take part directly in structural management

    karik
        if the corroyi is no longer correctly distributed across the spire,
        then that means it is going to be pooling at the lower levels...
        and grow more dense as the layers separate, until, ah...
        well, the lower levels will be crushed by the pressure
        and then the spire's outer walls will explode
        as you imagine, my friends, this is not conducive to our goals

    gakvu
        the groundsmind would be destroyed, but so would the explanation for all of this...
            EXEC::vnp({gakvu:"showright"})

    tozik
        along with any would-be survivors
            EXEC::vnp({tozik:"showright"})

    karik
        exactly...
        there is a solution to this, but we require groundsmind control
        it seems that the perpetrator is not properly attending to the structure's systems

    miltza
        do you expect us to be able to get there in time?
            EXEC::vnp({gakvu:"hide", tozik: 'hide', miltza: 'showleft'})
        the groundsmindry is at the lowest portion of the spire...

    karik
        well...
            EXEC::vnp({miltza: 'hide'})
        i will say our chances are not ideal
        but what else can we do?

    sourceless
        i sense a spark of inspiration from tozik, 
        even reflected in his receptors...
        but he does not yet speak up, ever hesitant to share an unfinished thought
        while we wait for the movefriend to deliver us to golem maintenance,
        a plan should be devised
        ...and we should get a profile of itzil's kivii

    sys
        ATTENTION::'memory stream halted'

    self
        WHAT?

    moth
        what?

    council
        hello!!

    self
        COUNCIL?!
        WHAT ARE YOU DOING HERE

    council
        we are here to help you!
        this framing device is treacherous...
        we know that you cannot fight the daemons alone

    self
        I HAVE THE CALL TEAM ACTORS
        I'VE DONE THIS SEVERAL TIMES OVER BEFORE
        I'LL BE FINE

    council
        is that so...?
        well, we suppose that is too bad
        we even brought our friends along to help you!!

    self
        WAIT WH

    fairy
        hello interloper!! hehe

    isabel
        yes, hello interloper

    effigy
        interloper interloper!!
        hiiii!!

    bsteli::bstrd
        IM HERE TOO!!
        AHAHAHAAA!

    stowaway
        here too

    self
        ...
        THIS FEELS EXCESSIVE

    council
        well, we thought you might have trouble

    self
        THANKS
        I APPRECIATE IT
        ...
        COULD YOU PLEASE STICK AROUND
        IT'LL BE FUN TO PLAY AS YOU

    moth
        dude
        this is seriously going to fuck with coherency
        funfriend being pissed will be the least of our worries

    council
        absolutely, interloper!
        let us just introduce ourselves to the call team!

    sys
        ATTENTION::'memory stream resumed'

    council
        akizet!!
        hello!!

    sourceless
        WHAT IS THAT
        WHAT IN VELZIE'S CRUEL GAZE IS THAT

    akizet
        hello...?

    council
        the journey ahead will be treacherous for us all
        we want to help!
        and we have our friends with us as well!

    akizet
        your what

    isabel
        hello akizet
        will you kiss me please

    akizet
        what?! no!!

    effigy
        :(

    bsteli
        hi

    itzil
        geli??
        what are you doing here?

    bsteli::blueeyes
        :)

    itzil
        sorry, i do not understand

    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>

    itzil
        how did you just say that aloud
        and- why am i an issue?

    isabel
        the real issue here is akizet not wanting to kiss me!!

    akizet
        excuse me??

    council
        FRIENDS!!
        SHUT UP!!!
        akizet: we are sorry for our friends' behaviour
        we will now be quiet so that you can talk to your own friends

    sourceless
        YOU HAD BETTER

    RESPONSES::akizet
        what to ask first...<+>loop
            EXEC::vnp({karik: "hide", bg: false})

plan
    sourceless
        in the near silent tension of our descent, 
        i feel that our lack of a clear plan is causing even more anxiety
        all are in thought, though itzil is pacing
        so i speak up with what i know:

    akizet
        my friends, the time is coming
        we should align our paths

    sourceless
        i briefly pause to garner their collective attention, then continue,
            EXEC::vnp({miltza: "show far", gakvu: "show far", tozik: "show far", karik: "show far", itzil: "show far", hideStage:true})

    akizet
        i am unfamiliar with the layout of the golem maintenance segment, but itzil, you know it well, yes?

    sourceless
        itzil ceases their endless skittering to nervously wave their receptors

    itzil
        oh, yes!! even better than my home!

    akizet
        excellent, then tell me if any of this seems unreasonable:
        when we arrive, we should immediately find ways to arm ourselves
        assuming the foundry vats are still operational, we need only find some schematics
        next, we should probably find a body for--

    tozik
        akizet, if the structure fails, then this will not yield us any gain

    sourceless
        IMMEDIATELY, THE MORALE I WAS ATTEMPTING TO BUILD IS CRUSHED
        THERE IS THAT PANG OF FEAR AGAIN - THOUGH THIS TIME, IT IS MINE
        THE POSSIBILITY OF US ALL UNCEREMONIOUSLY DYING ON OUR WAY
        COMPLETELY OUT OF OUR CONTROL, REALLY...

    akizet
        ...yes, tozik, i know, but--

    tozik
        no no, you see, i have an idea
            EXEC::vnp({tozik: "focus far"})
        i was here recently while giving advice on the design of the deep-sea constructor golems
        it was in the distribution area of the manufacturing tendril that i saw something unusual...
        for quick deployment, they have their own groundsmindry override
        there was a θjut using it to directly release golems to the exterior of the spire

    itzil
        aah!!! of course!!
            EXEC::vnp({tozik: "defocus far"})
        it is only a small range in which it is effective, but...
        that could be just enough to delay total collapse!!
        do you think that would work, karik?

    karik
        oh yes, oh yes
        by releasing some of the pressure, that should buy us some time

    sourceless
        ah, and so he shapes the morale back up, though in a different design

    miltza
        we could use that to evacuate any survivors we find!
        it can form tunnels to the outside, yes?

    sourceless
        the way miltza stands and fidgets...
        if a tunnel opened, she would scramble through it without any thought
        the very same fear as in fresh surface runners
        cowardice, perhaps, but i cannot truly blame her
        a remote coordinator does not simply change expertise for fun

    tozik
        if we must, i suppose
        but we will need all the help we can get if we intend to assault the groundsmind

    gakvu
        what if i expand the control of the override?

    sourceless
        in a brief stunned silence, our attention is drawn towards gakvu
        how many unauthorized miracles does she know how to perform?
        groundsmindry overrides are tightly controlled, but...
        she is clearly capable of more than i have ever known

    miltza
        how could you possibly do that?
            EXEC::vnp({tozik: "hide", karik: "hide", itzil: "hide", miltza: "", gakvu: ""})
        in fact - <em>how</em> have you been doing any of this?
            EXEC::vnp({miltza: "focus"})
        it is so convenient that you can guide us through the impossible as you have been

    sourceless
        miltza's voice is heavy with accusation, her receptors closed like fists
        an outburst simply driven by fear, but...
        what is she implying...?

    fairy
        yes yes!! fight!!

    council
        fairy

    sourceless
        itzil skitters forth, announced by the clicking of their sharp legs against the cystic glass

    itzil
        hey! does it matter??
            EXEC::vnp({miltza: "defocus far", gakvu: "far", itzil: "show far"})
        gakvu is helping us save everyone!

    sourceless
        itzil's assertion earns miltza's attention, for she seems to have no retort
        but this alone is not enough to defuse her suspicions
        gakvu hangs her receptors back cynically
        she could elect not to even answer, but...

    gakvu
        all right, if you want a proper explanation, then fine
            EXEC::vnp({miltza: "", gakvu: "focus", itzil: "hide"})
        yes, i have a mindcore with groundsmindry capabilities
        ah, what can i say
        i am quite attached to it

    sourceless
        where is this spite coming from?
        the briefest silence passes, miltza looking between us
        she seems to take particular interest in tozik in this moment

    miltza
        is this issue only mine?
            EXEC::vnp({miltza: "", gakvu: "defocus"})
        our tools and golems usurped, and here before us is a cynical vel with that very ability?
        is your groundsmindry destination truly to help us?

    fairy
        ahaha yess!
        fight! fight!!

    council
        fairy

    sourceless
        miltza reaches a peak, and tozik eyes me
            EXEC::vnp({tozik: "show downright"})
        itzil backs off to the corner with karik, their eye drifting with concern now
        i will admit, this coincidence did not even occur to me... it is suspicious
        but it is without roots - gakvu would never intend us harm 
        yes, i should intervene
            EXEC::vnp({tozik: "hide"})

    akizet
        miltza...
            EXEC::vnp({miltza: "focus"})

    sourceless
        she pauses and gazes at me, her receptors slightly releasing from their fist-like clench

    akizet
        i have worked with gakvu long enough to know,
        she could not be doing this
        in fact, the terror i felt from her when she was first attacked...
        no, she could not be a perpetrator
        but... it is still unusual, this is true

    sourceless
        then, i turn to gakvu, disappointed in her unhelpful handling of the situation
        she seemed proud of herself with her little joke, but now i see apologetic shame
        her tone softens to explain,

    gakvu
        ...yes, i know how it looks
            EXEC::vnp({miltza: "defocus"})
        the truth is complex
        miltza, you must trust that i am here to help
        i can explain everything later
        but we have to get out of here intact, first

    sourceless
        i see a wordless agreement as miltza's receptors lose their tension
        though they do not stray near one another, they have an accord... for now

    fairy
        awww!
        i wanted to see them fight

    council
        FAIRY

    akizet
        ...ok
        to return to our path,
        top priority: use the override in manufacturing to stop the structure from collapsing
        next: arm ourselves - in fact, if we can make more timestopper connectors, even better
        also, we should find suitable bodies for itzil and karik
        then: find any survivors, itzil's kivii included
        finally, we descend to the groundsmind, and cease this madness
        all right?

    itzil
        sounds good!!

    sourceless
        the others agree with a simple forward waving of their receptors

    akizet
        excellent

    RESPONSES::akizet
        what else...<+>loop
            EXEC::vnp({miltza: "hide", gakvu: "hide", hideStage: false})

kivii
    akizet
        itzil!
            EXEC::vnp({itzil: "show"})
        tell me about your kivii
        their name, their receptors, where you think they may be...
        anything will help

    sourceless
        ah...
        as i said that, i felt a murmur of my larval life, searching for missing runners
        i may have said those exact words before
        velzie's fondness for repetition is truly nauseating

    itzil
        oh, ok!
        well, her name is dozkallvi kiv gediziki, and she styles herself with a broken receptor!
        she is ok, of course, it is just a strange styling, hehehe
        i do not know which area she would be in, specifically...
        you see, she was covering for me while i reconnected with some family over the collective
        she does not really enjoy the company of my family very much, and, ah, i do not blame her,
        they were never really happy with me finding a mate from another cave-city, you see...

    sourceless
        itzil trails off after seeing the look upon my face and receptors
        am i too flat? should i be more interested in their romance?

    itzil
        ah, umm, right--i was going to say, i do not know which area she would be in
        she was simply a substitute for my hands for the <span definition="INHERITED CONTEXT::'time period';'numerous within eyes'">gaze</span>
        so, wherever you may find a kiv, i think! 
        they probably had her in manufacturing!

    isabel
        a tragic tale indeed, itzil
        ...
        we will find her here, i promise

    bsteli
        and fight an absolutely nightmarish boss

    bsteli::bstrd
        BESTA LUCK!! HAHA

    council
        geli
        remember: this iteration of itzil shares the real itzil's personality
        please, be kind to them

    bsteli
        oh, okay
        sorry, itzil

    itzil
        ...
        it is ok
        i will brace myself

    RESPONSES::akizet
        what else...<+>loop
            EXEC::vnp({itzil: "hide"})

sfer
    akizet
        karik!
            EXEC::vnp({karik: "show"})
        did you mention earlier that your sfer reserves were low?

    isabel
        yes, they did
        here, have some sfer

    effigy
        sfer! sfer!!

    sourceless
        the flower draws a cube of sfer from our stash,
        wait how in velzie's cruel gaze did she access our stash

    karik
        thank you!

    sourceless
        karik coils an emergency leg around the sfer and presses it against their side
        their shell extends to envelop it and draw it inward

    karik
        ahh, that is much better
        i appreciate your efforts, my friend!

    isabel
        of course
        hopefully akizet will now love me

    RESPONSES::akizet
        as if<+>loop
            EXEC::vnp({karik: "hide"});change("PAGE!!karikfed", true)

hesitance
    fairy
        interloper really??
        this is an optional memory segment
        are you really going to waste my time

    council
        fairy

    akizet
        miltza
            EXEC::vnp({miltza: "show far"})

    miltza
        ah, akizet, hello!
        sorry...

    sourceless
        at once, it seems she may launch into an apology, gesturing even with her third arm
        but i simply wave the notion away with my receptors
        she seems more at ease with my acceptance

    akizet
        at this point, there are no laws binding us anymore
        the only thing that matters is survival
        can i trust that you will stand with us against whatever awaits?

    miltza
        yes, of course...

    sourceless
        gakvu pretends to be uninterested in our conversation
        the room is too small for any secrets

    miltza
        but let me say, there is a reason ekiva frowns upon mobile groundsmindry
            EXEC::vnp({miltza: "show"})
        i never much cared for structurism, but the anti-structurists were a sour option themselves
        they used illegal groundsmindry to sow chaos anonymously
        i mean, that is all a flicker in the past now, but... the flame is carried into θdeath still
        this could be a coordinated attack, not just by one person, but many
        still, if you can trust gakvu, i will trust her too
        ...
        in these times, we must, despite whatever may hang over us

    sourceless
        what a strange turn of phrase - she certainly means culturally
        but there is something in her tone...
        i feel a certain weight to it - has her larval history affected her so severely?
        or... is she within the greater conflict herself?
        despite her flightiness and her outburst, i feel i can trust her
        yes, she must simply be scared beyond her limits
        remote coordinators like her rarely saw any direct action,
        only ever experiencing the terror of the surface through their distant eyes
        but it seems that terror has found her, now
        final death has never been closer to all of us

    RESPONSES::akizet
        true...<+>loop
            EXEC::vnp({miltza: "hide"})

ozoidentity
    akizet
        friends!
        who are you?

    council
        we are the council!
        and this is isabel, the effigies, the fairy, geli and the stowaway

    stowaway
        stowaway

    bsteli
        hello akizet!
        i am the receptionist here
        i will also appear in the reception

    bsteli::happy
        i am in two places at once due to a new form of thoughtform technology!!

    bsteli
        it's called...

    bsteli::bstrd
        BSTRD!!! >:^]

    akizet
        thoughtform... technology?

    fairy
        stupid!
        we are all thoughtforms!!

    akizet
        oh ok
        that explains it
        i guess that it means that my personal cyst survived this encounter, at least

    isabel
        and your memory!
        we can bask in it forever

    effigy
        forever! forever!!

    akizet
        ok this is getting kinda creepy
        could you please just stop that
        or go away

    isabel
        no

    council
        isabel

    sourceless
         ...

    council
        please do not hold conflict against our friends
        they are an absolute liability, that is true
        but they will help you
        ...
        probably

    moth
        buddy, you're lucky this memory didn't devolve into utter incoherence
        don't do that again, ok?

    RESPONSES::self
        funfriend is so going to kill me<+>loop

wait
    sourceless
        with my curiosities sated (well mostly), we wait
        the remaining sfer we collected is distributed amongst ourselves
        to mend wounds, attempt repairs to inner components, so on
        and there is some small chat here and there, but in time, our progress slows
        to a worrying degree, in fact... the corroyi no longer murmurs past the walls as it did

    movefriend
        ok friends! good news!
        the density is so high i was not able to get you to the usual entry point
        in fact, the entire segment is surrounded by dangerously dense corroyi!
        sorry!! that was not the good news yet! here it is!
        we are near one of the personnel tendrils of the golem maintenance segment!
        it seems to have sunken and partially collapsed from the damage...
        but it is still attached to the main area!
        i can connect you there, but until the corroyi flows are restored,
        that is the best i can do!

    itzil
        oh... my room...
            EXEC::vnp({itzil: "showright far"})

    gakvu
        how will we get around without a movefriend?
            EXEC::vnp({gakvu: "showleft focus"})
        i was able to help before, but... that is not sustainable
        especially not if the density is going to be very high

    itzil
        ...oh!!
            EXEC::vnp({gakvu: "defocus"})
        gakvu! the entire floor is connected! it is not like your segment at all
        or most of them, really...
        all of the tendrils and chambers are connected semi-permanently
        it is easier to move golems and resources around that way!

    tozik
        yes, this was impressed upon me in my recent visit
            EXEC::vnp({tozik: "showleft far"})
        it was as if i were strolling through a vaznian cavern

    karik
        ahh, in that case...
            EXEC::vnp({tozik: "hide", itzil: "hide", karik: "show far"})
        even with the high density, it should still be mostly intact
        contiguous spire chambers are typically well reinforced, for they do not move often

    movefriend
        yes yes very good structure!
            EXEC::vnp({gakvu: "hide", karik: "hide", bg: false})
        however it will not last forever!
        archival veins around the segment are collapsing and will soon be falling into the area directly
        be careful friends! i will wait here for when you return!

    akizet
        are you able to handle the corroyi pressure here?

    movefriend
        umm no sorry!!
        once it is safe for all of you to leave me, i will return to a safe level until you have resolved the pressure problem!

    miltza
        you are leaving us??

    movefriend
        oh no no no!
        only a little!
        i will be back to deliver you to the groundsmindry floor, of course!
        and if you take too long,
        ...
        nevermind!
        good luck!

    sourceless
        movefriend forms a tunnel to the personnel tendril, 
        though it remains partially closed until we are ready to proceed
        but before then, i should consider...
        who do i want to accompany me? 
        miltza has proven to be a powerful defensive force, despite her hesitance
        tozik, i think, we will need for his repair skills...
        but gakvu's control over corru is uniquely effective
        hmm...

    council
        we suppose that this is as good a time as any to introduce our own abilities!
        we are a tanky damage dealer that can make a team stronger while absorbing all of its damage
        we also have basic healing abilities...
        though not enough to keep ourself consistently alive against strong opponents
        still, our moves are probably overpowered, somewhat

    fairy
        i deal more damage when i have low health!
        i can invoke my hunger to drain my own health and make my attacks stronger!
        bring a healer!

    isabel
        the greatest part of my arsenal is my effigies
        i can make more out of the foes that we face
        they serve as moral support

    bsteli::think
        if we get some augments...
        i could give you the materials to make your effigies stronger!

    bsteli::bstrd
        LIKE GUNS!! >:}

    bstigy
        yeah!!
        i love a gun's!

    bsteli
        i myself have a sniper rifle with me

    council
        and the stowaway...
        it can mimic its enemies and friends!

    stowaway
        mimic

    sys
        NOTICE::'PARTY MENU';'attached to SPATIAL NAVIGATION';'associated with letter Z'
        NOTICE::'additional functionality enabled'
        NOTICE::'activate or deactivate potential party members';'drag from or into active party'
        NOTICE::'recollective locus cannot be removed from party'

    RESPONSES::akizet
        velzie be kind<+>END
            EXEC::vn.done()
`)

env.dialogues["personnel"] = generateDialogueObject(`
start
    sourceless
        we advance to the personnel tendril, those of us with timestopper connectors at the front
        movefriend's tunnel slowly becomes crooked as it adjusts to the uneven tendril
        the corru walls take the form of false cave-stone, just like our recreation chamber
        and so the terrible brutality before us is like a vision of the past...
        but it is here now, a failed barricade given way to invasion
        and it is silent, without sign of foe
        the qou here are dissected, mindcores half-dissolved in their bled components
        the others avert their eyes after a quick scan, but i find myself staring
        why are their bodies so intact? why such precision?
        regardless - i do not see any sign of itzil's kivii, these are Î¸jut and vel

    akizet
        just keep moving

    sourceless
        i gesture for the mindcores to climb up along the walls and ceiling, as it will be safer

    sourceless quiet
        then, a step into our advance, a familiar whisper comes again...
            EXEC::changeBgm(env.embassy.music_signal, {length: 10000, seek: 0});
        we exchange a few glances, the council's changing receptors at attention
        they speak surprisingly gleefully
            EXEC::content.classList.add('painprep', 'painhalf')

    council
        friends, brace yourselves
        it is happening again

    sourceless quiet
        the signal, the pain, it is here
            EXEC::env.embassy.day3Signal(3000)
        the wordless message, breathed again
        it feels stronger, but we still stand--are we more resilient?
        i can think this time... i can feel that the pain is not mine
        i manage to stay standing against a wall, and the others stumble, clutch their heads, their chests...
        my eyes bend, my sense of gravity is disrupted... but i stay conscious
            EXEC::ratween(env.bgm, 1, 2000)

    karik
        <em>what</em> is happening again?

    itzil
        hey!! are you ok?!

    sourceless quiet
        what...
        i see through the pain, the mindcores plainly looking down upon us from the ceiling
        are they... not affected...?
        the signal is short-lived this time, like an echo of itself - already, it abates
        my eyes slowly recover, though i feel my perception is still not entirely accurate
        but before i can say anything, there is a rustling throughout the room
            EXEC::content.classList.add('painfade')
        the slain qou... some have risen
            EXEC::vnp({husk1:"show far", bg: true})
        their bodies distorted by their damage, as if drawn to terrible life by secri
            EXEC::vnp({husk2:"show far", hideStage: true})

    miltza
        is that... 

    stowaway
        here
        usurpers

    sourceless
        Å¸Ã†kf
        it is not an illusion
        they are real, and they walk towards us with the strangest serenity

    aggressor
        here
        i am here
            EXEC::content.classList.add('slowpain');
        i am here
            EXEC::content.classList.remove('painmode', 'painhalf', 'painfade');vnp({husk2:"show", bg: true})

    sourceless
        they speak in unison, each unique voice blending into one another
        a droning metallic chorus, filling the tendril
        at first, with each step towards us, we back away, uncertain
        to kill an aberrant container is simple, but...
        do these ones intend us harm? or is it more? can they be helped?
        i step forward

    akizet
        hello?

    aggressor
        here
        i hÃªâ€™Ë†Â³ar you
        i hear you
        usurpers
            EXEC::content.classList.remove('painprep')

    gakvu
        akizet... stay back
        those are not obesk!!

    bsteli::concern
        gakvu is right!
        they are infested husks

    bsteli::bstrd
        NOW FIGHT! FIGHT!!

    council
        geli
        please, show some respect

    RESPONSES::akizet
        attack<+>END
            EXEC::change("PAGE!!gp", true);env.embassy.startGolemFight('g_prelobby1', 'personnel_clear');vn.done()
            SHOWIF::['gameplay_off', false]
            FAKEEND::(initiate combat)
        bypass<+>CHANGE::personnel_clear
            SHOWIF::['gameplay_off', true]
            FAKEEND::(bypass combat)
            EXEC::change("PAGE!!gp", true);vn.done()
        skip (debug)<+>CHANGE::personnel_clear
            SHOWIF::'TEMP!!debug'
            EXEC::vn.done()
`)

env.dialogues["personnel_clear"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>
____END

    sourceless
        the last husk crumbles into itself
        immediately, i scan over our team, and we are fine enough
            EXEC::changeBgm(env.embassy.music_unsafe_golems)
        itzil and karik cling to the ceiling in the corners, itzil refusing to look
        miltza and gakvu both have recoiled in our victory with no celebration
        tozik, most of all, seems present in this moment with me, drawn to one of the corpses
        the adrenaline, the subtle joy i felt before, is overwhelmed by grief
        i did not know these qou, but in their incoherent faces were every person i have ever spoken kindly to
        ...

    isabel
        ...these qou have no mark of control,
        no sigil or connector
        no mindcore...
        how would this have been possible?
        qou-bodies are too complex even for regular groundsmindry
        could i fix them?

    council
        it is too late for that, isabel
        remember, this was long ago
        we cannot change the past
        but we can help the interloper for the future

    self
        for your information this is not helping

    sourceless
        these bodies are all truly uninhabited?
        the mindcores, itzil, karik... maybe they could...
        no, no - a terrible thought, i dare not even complete it
        but that does bring something to mind

    akizet
        hey
        itzil, karik
        did you not feel the signal a moment ago?
        the same one as before? the pain, the madness

    sourceless
        they look at one another, though itzil returns to huddling in the corner, eyespot turned away

    karik
        ...no!
        i mean, i felt something...
        but it... it just passed
        it was not like before

    akizet
        gakvu, miltza, you felt it?

    sourceless
        a simple affirmative receptor gesture from both is all they can muster for now
        tozik stands from the body he examined, drawing his corruskivi back beneath the surface of his hand

    tozik
        i did, too...
        it felt closer
        we are on the right path

    stowaway
        did too

    sourceless
        tozik's finality implies we should leave this tendril sooner rather than later, so we commence
        but still... closer is a good way to put it
        it felt stronger, but it may just be proximity

    akizet
        itzil, karik
        remain close
        stay high and far away from any bodies or inactive golems

    fairy
        yeah, let us do the fighting!

    itzil
        ok!

    RESPONSES::akizet
        continue<+>END
`)

env.dialogues["lobby_clear"] = generateDialogueObject(`
start
    sourceless
        with the area clear, i also notice the doors here are sealed
            EXEC::content.classList.add("safe");
        it is safe enough, so i call back
            EXEC::changeBgm(env.embassy.music_golems)

    akizet
        it is safe to proceed! come, quickly!

    sourceless
        and so we stand in this great lobby, where i imagine movefriend first tried to deliver us
        the stone, the decorations of false life...
        were it not for the splattered corroyi and sludge from our once-friends, it would be beautiful

    fairy
        the stone??
        pink floyd reference???

    council
        fairy

    akizet
        itzil, where is maintenance from here?
            EXEC::vnp({bg: true, itzil: "show far"})

    sourceless
        itzil scurries towards me, then... past me?
        they approach the central desk, which seems to have a managerial golem stationed at it
            EXEC::vnp({hideStage: true, itzil: "show far", geli: "show far"})
        it is inactive, i did not even notice it at first
        uncanny... it resembles geli

    itzil
        geli? geli?
        you are here also?
        sorry akizet - i will answer you, but i must see...

    bsteli
        oh!

    bsteli::happy
        yes, that is also me!
        i am in two places at once, you see

    bsteli::bstrd
        FOUND WAY AROUND DA DAEMONS >:}

    council
        you are welcome, geli

    sourceless
        itzil climbs up onto the golem's shoulder, then extends a branched receptor towards its head
            EXEC::vnp({itzil: "show", geli: "show"})
        tozik steps forward, reaching out in objection
            EXEC::vnp({tozik: "showleft downleft"})

    tozik
        itzil--
        you should not take any chances with--

    bsteli::bstrd
        NAH DW IT FINE

    sourceless
        of course, it is too late, as itzil has already connected to it
            EXEC::env.embassy.geliState('boot');vnp({tozik: "hide"})
        in an instant, the golem's face flickers to life, its glow restored
        then comes the rest of its body...
            EXEC::env.embassy.geliState('on')
        it looks down at the mindcore on its shoulder, away from us
            EXEC::document.querySelectorAll('.geli').forEach(el=> el.classList.remove('inactive'))

    geli
        hello, itzil
        what are you--

    bsteli
        aaand that's enough from that thing!
        you can talk to me instead

    council
        geli, to prevent noticeable incoherence,
        could you please prompt some infodumping from the call team?

    bsteli::happy
        absolutely!!

    bsteli
        first, try interrogating me though
        idk you might want to look around first

    RESPONSES::akizet
        interrogate<+>CHANGE::geli_first
            EXEC::vnp({hideStage: true, itzil: "hide"});pauseSwapCam(false)
            HIDEREAD::
        look around more first<+>END
            EXEC::vn.done();pauseSwapCam(false)
`)

env.dialogues["geli_first"] = generateDialogueObject(`
start
    akizet
        alright, interrogating now

    bsteli
        the groundsmindry override is in manufacturing
        the impressor is in advanced operations in the form of a corboku
        i cannot grab it for you, sorry
        also tozik what is an impressor

    tozik
        an instruction deep cloning tool
        usually, it is only used in qou-body and golem construction, but i think we can use it for this
        you see, if we want to make more timestopper connectors,
        it is not enough to simply copy them, for their connection to the timestopper is complex
        a total dull synchronization must occur, and an impressor will let us do that remotely

    bsteli
        yeah there's a dangerous golem in there

    akizet
        all right, the plan is the same, then...
        we stop the collapse, we find itzil's kivii and any survivors, we scrape together what we can...
        and then we proceed
        geli - can you open the smaller doors nearby for us if they are clear?

    bsteli::happy
        sure! 

    bsteli
        directly connected tendrils are sfer supply, manufacturing, and minor operations
        you can ask me about them if you want
            EXEC::change("PAGE!!geli", true);change("TEMP!!nogelizoom", true)

    RESPONSES::akizet
        ask about something else<+>CHANGE::geli
            HIDEREAD::
        proceed<+>END
            EXEC::vn.done()
`)

env.dialogues["geli_resp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        door<+>door
            SHOWIF::[["mask", "hunger"], ["gol__geli_beacon", true], ["e3a2__bstrdmeet", false]]

    RESPONSES::akizet
        manufacturing<+>manufact
        sfer supply<+>sfer
        operations<+>ops
        dog<+>dog
            SHOWIF::"PAGE!!dog"
        leave<+>END
            EXEC::vn.done()
`)
env.dialogues["geli"] = generateDialogueObject(`
loop
    RESPOBJ::geli_resp

start
    sourceless
        i approach geli again, and it regards me with a kind forward bow of its receptors
            EXEC::vnp({hideStage: true, geli: "show far"})
            SHOWIF::['TEMP!!nogelizoom', false]

        i linger near geli, thinking about what lay ahead
            EXEC::vnp({hideStage: true, geli: "show"});sessionStorage.removeItem("TEMP!!nogelizoom")
            SHOWIF::['TEMP!!nogelizoom']

    bsteli
        no need to talk to that thing
        i am here
            EXEC::vnp({hideStage: true, geli: "show"})

    RESPOBJ::geli_resp

manufact
    akizet
        what can you tell me about the manufacturing tendril?

    bsteli::happy
        there you can find augments!

    bsteli
        just go to the lesser vats
        first door on the left
        and clear the room before interacting with the terminal
        second door on the left is greater vats
        once you have golem-grade sfer from sfer supply,
        and blueprints from distribution,
        you can construct a golem there!
        to access distribution, blow up the door
        you need to either find cavik or use three kavrukas
        neither is particularly hard
        what is particularly hard, however, is dozkallvi
        you will find her behind the door
        she will be wielding two gauntlets
        good luck
        oh and also it will traumatize itzil

    council
        geli
        spoilers

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

sfer
    akizet
        what do you know about the sfer supply tendril?

    bsteli::bstrd
        CONTAINES a DOG!!

    bsteli
        you will find a few foes there
        including a dullzika which summons warped containers every round
        i recommend that you bring cavik if you can
        once defeated, it will allow communications
        only cavik, bozko, gordon, bstrd and the ozo will pick up
        and you will find golem-grade sfer
        if you clear either side of the door on the left, it links to manufacturing

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

ops
    akizet
        what lies within the minor operations tendril?

    bsteli::happy
        cavik and bozko!
        you do not even need to reach the end of the tendril to find them!

    bsteli
        there are two sets of monsters before them
        both are easily avoidable

    bsteli::happy
        both ways, according to dem!

    bsteli::concern
        also, there is the translation core!
        it is very dangerous
        taking a golem in may prove invaluable

    bsteli::happy
        we ozo actors each have our own hallucinations!

    bsteli
        be sure to equip one of us!

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

dog
    akizet
        we encountered a little construct in sfer supply
        it looked like a <span definition="NOTE::'partial translation';'implied closest cultural equivalent'">dog</span>!
        what is that for?
        it did not even attack us, it simply ignored us...

    bsteli::bstrd
        OZO BLAST IT!!!

    akizet
        that does not answer my question

    bsteli::bstrd
        TOO BAD

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

door
    self
        the door is open i think
        i don't know how this works
        can you escape?

        bsteli
        of course not, silly!
        this way of evasion that i am using only works within here
        and as you know i really want to get back to the ozo
        so just play the frame okay?
        if you want you can hack into the mod's code and get us actors there too

    akizet
        who are you talking to

    bsteli
        the interloper watching these memories

    akizet
        oh yes, right
        i almost forgot about that thing

    bsteli::happy
        it is ok!!

    bsteli::concern
        oh and...
        sorry for making you incoherent

    akizet
        no no it is ok

    RESPONSES::self
        funfriend is so going to kill me<+>loop
            FAKEEND::(back)
`)

env.dialogues["geli_beacon"] = generateDialogueObject(`
start
    bsteli
        wrong mask bitch

    council
        geli!
        language!!

    moth
        sure glad i don't have the council watching me for explicit language
        right buddy?

    RESPONSES::self
        yeah<+>END
            EXEC::change("geli_beacon", true);vn.done()

END::vfx({type: 'beacon', state: false})
`)

env.dialogues["m_clear"] = generateDialogueObject(`
start
    sourceless
        with the area secured, the others file in to assess the situation
            EXEC::change("PAGE!!mmidclear", true)
        i notice tozik considering the side rooms
        two are labelled as the vat rooms, lesser and greater
        greater foundry vats will take too long for our needs, but...
        if the lesser foundry vats are still functional, we can use them to our advantage

    sourceless
        karik skitters ahead, prodding at the damaged door opposite the entrance
        it looks unhealthy, the different parts fused together
        karik waves a leg to rid it of some sludge
        then, they climb up atop the nearby desk
            EXEC::pauseSwapCam(true);specialCam('g_m_door')

    karik
        ah, i thought so!

    sourceless
        itzil soon follows

    karik
        akizet, the door to the override is partially sludged!
        do you have any explosives?

    itzil
        what!! will that not just cause a greater collapse?

    fairy
        sounds good! do it!!

    council
        fairy

    karik
        not like you think, my friend!
        i have done a great deal of structural management in my Î¸death
        with thanks to the intelligent structuring of these tendrils,
        a directed explosion - especially with kavrukas - will allow us a degree of safety
        if this were the research segment, this would be an issue... but here, it is fine

    akizet
        any alternative, gakvu?

    gakvu
        i cannot help with this one
            EXEC::vnp({gakvu: "show downleft"})
        my tricks only work on living corru

    akizet
        ah...
            EXEC::vnp({gakvu: "hide"})
        how many kavrukas would do it?

    karik
        to clear this door and open a hole...
        three should be safe!

____SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) < 3'
    sourceless
        i scan over the things i carry, then eying the others connected with me
        and not a single kavruka is held between us...
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) == 0'
        we have only one...
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) == 1'
        we are short just one kavruka
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) == 2'

    akizet
        we have no kavrukas
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) == 0'
        we do not have enough kavrukas
            SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) > 0'
        do you think we could find some?

    karik
        well, this is the place for it!

    itzil
        yes, they were a frequent production in this area!!
        they are very useful to have on construction golems!

____SHOWIF::'EXEC::checkItem(env.ITEM_LIST.kavruka) >= 3'
    sourceless
        i scan over the things i carry, and eye the others connected with me

    akizet
        yes, we have enough!

    karik
        excellent! 
        come over here when you are ready to proceed!

    sourceless
        we could do this right away,
        but it may not be a bad idea to check the side rooms

____SHOWIF::'PAGE!!bozcav'
    sourceless
        cavik, who had been rummaging through the disabled golem parts, approaches us
            EXEC::vnp({cavik: "show downleft", bg: true})
        his claws are darkened with sludge, clutching a few murky spherical organs

    cavik
        hey!
        you may not need to use kavrukas at all...
        the golems in here, they had a few small-scale dull eyes
        i know how we could wire them to explode

    karik
        what?

    itzil
        wow, really??
        you should do it!

    akizet
        ah--cavik
        you are sure it will be safe?

    sourceless
        bozko's voice emanates from behind me, 
        the loudest in this room despite his intent to speak quietly

    bozko
        i have seen it
        trust him

    cavik
        ...yes!
        thank you bozko
        yes, it is, well--
        it is as safe as using kavrukas to blow open a door, hehe

    akizet
        then that will do!!

____SHOWIF::[['PAGE!!mmidclear'],['PAGE!!smidclear'],['PAGE!!smcut', false]]
    sourceless quiet
        suddenly, one of the side doors unlocks with a strange little musical chime
            EXEC::play('obeskToggle', 0.75);specialCam('g_m_shortcut');vn.done()
        a familiar voice quickly follows...

    bsteli
        hello!! 
        i have detected all enemies,
        in BOTH manufacturing and sfer supply,
        have been killed!

    bsteli::bstrd
        WELL DONE!! AHAHAHAA

    bsteli
        anyway i am opening the connective tunnel between these areas now!
        thank you!

    sourceless
        a small chime plays as it deactivates
            EXEC::setTimeout(()=>step(), 100);change('PAGE!!smcut', true);vn.done();

    akizet
        ah... thank you, geli
____END

    RESPONSES::akizet
        continue<+>END
            EXEC::vn.done();pauseSwapCam(false);specialCam(false)
`)

env.dialogues["m_door"] = generateDialogueObject(`
start
    sourceless
        karik waits patiently by the door
            EXEC::vnp({karik: "show far", bg: false})
        in their gaze, i sense a strange calmness
        i did not notice before, but they seem unconcerned by the situation...
        do they know something i do not? or are they simply that confident?

    karik
        ready to proceed?

____SHOWIF::[['PAGE!!bozcav', true]]
    akizet
        cavik! can you help, with your explosives?

    cavik
        yes! just say when!
            EXEC::vnp({karik: "show far", cavik: "show"})

____SHOWIF::[['PAGE!!bozcav', false], ['EXEC::checkItem(env.ITEM_LIST.kavruka) < 3', true]]
    akizet
        not yet...
        let us look around some more

    karik
        yes!
        and if there are none within this tendril,
        we should explore elsewhere!
        it seems they were preparing a lot of construction golems,
        so there should be a few around somewhere

____SHOWIF::[['PAGE!!bozcav', false], ['EXEC::checkItem(env.ITEM_LIST.kavruka) >= 3', true]]
    sourceless
        i check our tools again, and--yes! we have plenty!

    akizet
        yes!
____END

    RESPONSES::akizet
        detonate the door<+>boom
            EXEC::change('PAGE!!kavboom', true);
            SHOWIF::[['PAGE!!bozcav', false], ['EXEC::checkItem(env.ITEM_LIST.kavruka) >= 3', true]]
        detonate the door<+>boom
            EXEC::change('PAGE!!cavboom', true)
            SHOWIF::'PAGE!!bozcav'
        debug force boom<+>boom
            SHOWIF::'TEMP!!debug'
            EXEC::change('PAGE!!kavboom', true);
        continue<+>END
            EXEC::vn.done()

boom
____SHOWIF::'PAGE!!kavboom'
    sourceless
        i collect three of our kavrukas, and prepare to place them on the ground before the door
            EXEC::pauseSwapCam(true);specialCam('g_m_door2');removeItem(env.ITEM_LIST.kavruka, 3)
        karik taps the spots where they should be placed, equidistant in a half-circle
            EXEC::vnp({karik: "show far"})
        then, they skitter closer to twist their angles slightly...

    karik
        yes, good, that should do it! let me just instruct them...

    sourceless
        with a quick pseudoreceptor connection to each, karik imparts some direction
        they flicker to life, rising on their little legs
        karik guides us away from the door, then calls out,

    karik
        all right, go!

    sourceless quiet
        the two on the sides each angle their front upwards,
        and the center kavruka scurries up onto the door itself
            EXEC::vnp({karik: "hide"})
        all at once, they detonate - sludgy debris splattering across the walls
            EXEC::change("PAGE!!gmdoor", true);play('shot5', 0.5);step()

____SHOWIF::'PAGE!!cavboom'
    sourceless
        cavik steps forward, sewing a connective vein through the pilfered golem dull-organs
            EXEC::vnp({karik: "show far", cavik: "show downright"})
        he looks to karik for direction, who taps a few spots around the door along the walls
            EXEC::pauseSwapCam(true);specialCam('g_m_door2')

    karik
        this is a parting door, so it has a few points we can target
        here, here...

    cavik
        here?

    karik
        no no, you would think that, but that is a tendril reservoir for locking...

    sourceless
        ...
        after a few moments, a traveling mold-like pattern has been drawn across the edges of the door
        nodules of destabilized dull components glow and jitter dangerously
        karik and itzil have both backed away, and us with them

    karik
        all right, go!

    sourceless quiet
        there is a sudden searing flash of gray, and then a heavy impact,
            EXEC::vnp({karik: "hide", cavik: "hide"});play('dull');change("PAGE!!gmdoor", true);
        the remnants of the door melted away
            EXEC::setTimeout(()=>step(), 200)
____END

        as karik promised, an uneven entrance is opened
        itzil starts to approach the tunnel, undoubtedly eager to find their kivii
        but karik moves in the way, waving their pseudoreceptors urgently
    
    karik
        woah! no no, not yet!
        if there are any hostiles within...
        they will be expecting us, if they are not already coming
        akizet, you and the team go in first!

    bsteli
        please brace itzil

    bsteli::concern
        their kivii will...

    bsteli::bstrd
        GIVE US AN AWESOME BOSS FIGHT!!

    council
        geli
        spoilers

    RESPONSES::akizet
        let us proceed<+>END
            EXEC::vn.done();specialCam(false);pauseSwapCam(false)
`)

env.dialogues["m_minvat"] = generateDialogueObject(`
start
    sourceless
        i have only used a foundry vat a few times before
        but i recognize that most here are fully functional
        i wonder - why were they passed over by the signal?
        perhaps it is the sheer simplicity of their function, or...
        ah, it does not matter now - let us see what they have for us

    isabel
        is there anything that i can use?

    bsteli::happy
        yes there is, isabel!

    bsteli
        you can create some weapons for your effigies
        then they will be able to fight alongside you!

    bstigy
        YAEY!!
        PLS MAKE GUNS ISABEBL

    bsteli
        you need to ask the interloper

    bstigy
        ok!!
        PLS MAKE GUNS INTERLOPR

____SHOWIF::["PAGE!!augments", false]
    sys
        ATTENTION::'additional party functionality';'augments';'now available'
        NOTICE::'alter party member abilities via augment menu'
        NOTICE::'contained within party menu';'Z'
        NOTICE::'initial augment point count'::'3'
        NOTICE::'remove and replace at any time'
        NOTICE::'additional augment points gained from defeating powerful foes'
            EXEC::change("PAGE!!augments", true);body.classList.add('augments-enabled')
____END

    RESPONSES::akizet
        investigate the vats<+>END
            EXEC::cutscene(true)
            FAKEEND::(open augment menu)

END::toggleAugmentMenu();cutscene(false)
`)

env.dialogues["m_bossclear"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>
____END

    sourceless
        it has stopped moving
            EXEC::env.stages['g_m_dist'].removeBoss();
        ...
            EXEC::toggleBgm(env.embassy.music_golems_cleared)
        distantly, i hear the rustling of the others down the hall we came through
            EXEC::env.embassy.music_unsafe_golems.rate(1)
        they heard the screaming, and must have come to see if we could be helped...
        i call back to them

    akizet
        it... it is clear, come in...

    sourceless
        wait
        itzil
        where is itzil??

    akizet
        itzil?!

    sourceless
        karik enters the room last, noticing the corpses before me...
        then, quickly staring off in a corner of the room, at--what is that?
        a mindcore lay in the corner...
            EXEC::vnp({itzilBusted: "show far", hideStage: true})
        that... is itzil, having entered stasis, even their pseudoreceptors retracted into their shell

    karik
        oh...
            EXEC::vnp({karik: "showleft far"})

    sourceless
        gakvu steps past me without expression, towards the override
        tozik follows her, both intent on resolving the structural situation quickly
        each of them briefly match eyes with me, knowing full well what is unfolding
        then i see miltza... she and karik both approach itzil gently
        she kneels, receptors open empathetically
            EXEC::vnp({miltza: "showleft far"})

    miltza
        itzil?
        ...
        they are alive, just, retracted...
        i have seen this before with separative trauma
        but... never in a qou!
        we can only hope they do not turn anything off

    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>

    council
        fairy that is a tasteless joke
        stop being so insensitive

    fairy
        yes, but it is not the real itzil
        it knows this

    sourceless
        itzil peeks out from their stasis

    itzil
        yes, i know, fairy
        but i feel bad for the real itzil
        and i grieve the real dozka
        so the council is right

    sourceless
        itzil withdraws again

    karik
        itzil told me that they had been with their kivii since they were both larval
        even ascending on the same <span definition="INHERITED CONTEXT::'time period';'numerous within eyes'">gaze</span>...
        it will not be easy

    sourceless
        miltza looks back towards me, noticing my staring
            EXEC::vnp({karik: "hide", itzilBusted: "hide", miltza: "show"})

    miltza
        akizet, you should let me and karik tend to itzil
        see to the structure, yes?
        now, karik...
        
    sourceless
        miltza eyes gakvu briefly, but then returns to a murmur with karik
        she is likely briefing them on what to do when itzil awakens again...
        the ever-caring nature of the tir shines through all else
            EXEC::vnp({miltza: "hide"})

____SHOWIF::'PAGE!!bozcav'
    sourceless
        bozko remains by the door, keeping watch,
            EXEC::vnp({bozko: "show far"})
        but i feel it is more to distance himself from this scene velzie has assigned us
        in our short time throughout this disaster, we have seen much, but...
        what has he seen to make him this way?

    cavik
        akizet?
            EXEC::vnp({cavik: "show"})

    sourceless
        cavik lingers nearby,
        examining golem parts that remained intact

    cavik
        i was going to tear into these for their components
            EXEC::vnp({bozko: "hide"})
        for my explosives, you see
        but... there are quite a few still usable parts
        in fact, anything that was not in use is nearly in perfect condition

    sourceless
        he aggressively occupies his mind with his work
        avoiding even looking in the direction of the bodies, as if they are not there

    akizet
        interesting
        though, cavik, grant me a moment and leave them
        perhaps we could use them in some way...
        but we should resolve the corroyi issue first

    cavik
        ok!
____END

    RESPONSES::akizet
        to gakvu and tozik<+>CHANGE::m_fix
            SHOWIF::"golem_decompression"
            EXEC::vn.done()
            HIDEREAD::

        to gakvu and tozik<+>CHANGE::m_metatrauma
            SHOWIF::["golem_decompression", false]
            EXEC::vn.done()
            HIDEREAD::
`)

env.dialogues["s_vats"] = generateDialogueObject(`
start
    sourceless
        it is clear
            EXEC::change("PAGE!!smidclear", true);pauseSwapCam(true)
        i call back to the team to enter, and they file in to assess the room

    sourceless
        tozik approaches the vats, prodding at their sides and testing their connections
            EXEC::vnp({tozik:"show downright", bg: false })

    tozik
        the sfer vats are functional
        that is strange...
        the golems have fallen, the bodies of our kin are risen without clear connection
            EXEC::vnp({tozik:"show", bg: true })
        yet the vats, the doors... these mindless, stationary technical things are intact
        is mobility the common factor?

    akizet
        what about movefriend?

    tozik
        ah...

    gakvu
        no, that was different,
            EXEC::vnp({gakvu:"showleft far"})
        it was the groundsmind noticing our interference

____SHOWIF::[["PAGE!!goverride", true], ["PAGE!!bozcav", true]]
    cavik
        the groundsmind?
            EXEC::vnp({cavik:"showright far"})
        you have spoken to them??

    akizet
        it was hardly talking
        just more of the same signal
        sickness, feverish nonsense
____END

    sourceless
        suddenly, gakvu doubles over in pain
            EXEC::vnp({cavik:"hide", tozik: "hide", gakvu: "show"})
        she clutches her head in her claws

    tozik
        gakvu--?

    gakvu
        what is that?
        that noise...
        do you hear that?
        ugh
        velzie above is screaming into my mindcore

    sourceless
        gakvu looks around, then ahead at the room we have yet to explore
            EXEC::specialCam('g_s_bossdoor');pauseSwapCam(true);vnp({bg: false, gakvu: "downleft"})
        i do not hear anything...
        gakvu notices our confusion, turning her focus inwards

    gakvu
        i must be feeling it through my groundsmindry
        it is a dull signal...
        if i can feel it without a communicator, by simply approaching it...
        then it is <em>very</em> strong

    miltza
        ah!! i just turned my communicator on for an instant!
            EXEC::vnp({miltza: "show far", bg: true})
        no, i hear it too!
        it is the same signal as before, but it is like...
        it is the first part of it, over and over...
        do not enable yours, my friends
        it hurts...

    sourceless
        i need not test their assertions
        miltza clutches her face, enduring whatever it is she has exposed herself to
        she lowers her claws, a realization forming in her open receptors

    miltza
        no... wait... that is the noise!!
            EXEC::vnp({miltza: "show"})
        i heard that earlier, over and over, before you found me
        that is what has been disrupting all of our communications!
        or, at least, a part of it...
        maybe we can destroy it to restore clarity?

____SHOWIF::["PAGE!!goverride", false]
    itzil
        umm...
            EXEC::vnp({miltza: "show far", gakvu: "show far", itzil:"show far"})
        that is the storage room
        it only has a delivery golem for directing sfer, why would it...

    bsteli
        dull microconnectors yada yada
        let's get on with the fight scene already

    council
        geli
____END

    akizet
        ok
            EXEC::vn.done()

____SHOWIF::[['PAGE!!mmidclear'],['PAGE!!smidclear'],['PAGE!!smcut', false]]
    sourceless quiet
        suddenly, one of the side doors unlocks with a strange little musical chime
            EXEC::play('obeskToggle', 0.75);specialCam('g_m_shortcut');vn.done()
        a familiar voice quickly follows...

    bsteli
        hello!! 
        i have detected all enemies,
        in BOTH manufacturing and sfer supply,
        have been killed!

    bsteli::bstrd
        WELL DONE!! AHAHAHAA

    bsteli
        anyway i am opening the connective tunnel between these areas now!
        thank you!

    sourceless
        a small chime plays as it deactivates
            EXEC::setTimeout(()=>step(), 100);change('PAGE!!smcut', true);vn.done();

    akizet
        ah... thank you, geli
____END

    RESPONSES::akizet
        continue<+>END
            EXEC::specialCam(false);pauseSwapCam(false)
`)

env.dialogues["s_callspeople"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        gordon<+>gordon
            SHOWIF::["PAGE!!gordcall", false]
        cavik<+>cavik
            EXEC::change("PAGE!!callbc", true)
            SHOWIF::[["PAGE!!bozcav", false], ["PAGE!!callbc", false]]
        bozko<+>bozko
            EXEC::change("PAGE!!callbc", true)
            SHOWIF::[["PAGE!!bozcav", false], ["PAGE!!callbc", false]]
        kazki<+>kazki
        vekoa<+>vekoa
        family and collective<+>collective
        bstrd<+>bstrd
        jokzi ozo<+>council
        nevermind<+>END
            EXEC::vnp({hideStage: false});vn.done()
`)
env.dialogues["s_calls"] = generateDialogueObject(`
loop
    RESPOBJ::s_callspeople

start
    sourceless
        funfriend - activate communications
            EXEC::vnp({hideStage: true})

    funfriend
        ok!
        standing by!

    RESPOBJ::s_callspeople

gordon
    sourceless
        gordon...

    council
        no need, akizet!
        we can explain what we know
        gordon had to tell his higher-ups unfortunately
        they then got scared and probed the source of the call
        that is what we believe happened anyway
            EXEC::change("PAGE!!gordcall", true)

    RESPONSES::akizet
        debatable<+>loop
            FAKEEND::(back)

cavik
    sourceless
        cavik...
        we need to know if he is still in the spire at all

    funfriend
        ok!!
        ...
        connection established!

    akizet
        cavik!

    cavik
        akizet...?
        you got through?
        it is so clear now!

    sourceless
        i nearly fall over from the relief
        the thought of cavik dead from this...

    cavik
        akizet, where are you? we can come get you!

    akizet
        what? what do you mean?
        we? how many do you have?
        you have a way around too?

    cavik
        what - do you?
        um, we have been using the archival tunnels
        most are still connected, despite the veins collapsing!
        and bozko has been taking care of all the golems!

    sourceless
        with what...?
        we have the only timestopper in the embassy

    cavik
        he is ok... physically... it is impressive how he has dealt with them
        honestly, he is not really doing so well otherwise
        it has been brutal
        but he is leading us down regardless
        ...there used to be more of us, 
        but now it is just me and bozko

    akizet
        down? what? why?
        hold on - cavik, i have gakvu, tozik, and some others
        some of whom are strange and very annoying
        we are in golem maintenance, down from our research segment
        we intend to stop the groundsmind

    cavik
        us too!
        listen - we will meet you soon!
        we are nearly down to maintenance ourselves
        i will tell bozko!
        but i need to go - there are more coming...
        be careful!
    
    akizet
        you as well, my friend

    isabel
        you seem so relieved to hear him
        just wanted to confirm that we are still romantic partners-

    council
        isabel
        your effigies will do
        this akizet does not care for you
            EXEC::change("PAGE!!callbc", true)

    RESPONSES::akizet
        thank goodness we have the council<+>loop
            FAKEEND::(back)

bozko
    sourceless
        bozko...
        we need to know if he is still in the spire at all

    funfriend
        ok!!
        ...
        connection established!

    akizet
        bozko!

    sourceless
        an immense weight of dread floods through the connection
        not from me calling - but persistently, like from a responsibility
        bozko... what has he seen...?

    bozko
        akizet
        where are you?
        are you hurt?

    akizet
        bozko, i have gakvu, tozik, and some others from our floor
        alongside a few strange friends
        we are all in golem maintenance, heading down to stop the groundsmind
        what about you - are you ok?
        have you seen cavik?

    bozko
        yes
        cavik is with me
        there were some others, but...
        ...

    sourceless
        no concept needs to be formed

    bozko
        ...we are heading down for the exact same reason
        the archival tunnels are still mostly intact
        we occasionally need to detonate some to open blocked paths,
        but they serve well enough in our descent

    akizet
        what!!
        what about the golems?
        it is only with the help of the timestopper we have been able to...

    bozko
        they are not a problem

    sourceless
        something about him is different - he is even shorter in tone
        i cannot measure what trauma he carries, but it is beyond that
        he has altered himself, somehow

    bozko
        we are nearly to golem maintenance ourselves
        i will let cavik know you called
        he will be relieved to know you are all right
        as am i...
    
    akizet
        bozko, did you... did you do anything to yourself?

    bozko
        akizet... i...
        no--i will explain when we are there
        i must focus
        more of these surface-sent golems are coming

    akizet
        please be careful!!

    sourceless
        the connection ceases
        if they are fighting, cavik will be too busy to call...
        we will simply have to watch for them
            EXEC::change("PAGE!!callbc", true)

    RESPONSES::akizet
        stay safe, my friends<+>loop
            FAKEEND::(back)

kazki
    sourceless
        kazki...
        i think she was out of the spire this <span definition="INHERITED CONTEXT::'time period';'numerous within eyes'">gaze</span>
        or, 'day' would be more accurate, given her schedule...

    funfriend
        ok!!
        ...
        ...
        akizet, when i try to call her...
        it is like that noise you stopped - it is overpowering!!
        i do not know why, but something is stopping me from reaching her

    sourceless
        what does that mean?
        is she in the embassy?

    funfriend
        i do not know akizet!!
        it does not sound like anything i can hear in the embassy!

    sourceless
        peculiar
        velzie, guide her to us again...

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

vekoa
    sourceless
        vekoa!
        maybe we can try and get an explanation?

    funfriend
        ok!!
        ...
        ...
        ...
        no...
        nothing
        i cannot even locate her communications signature
        her device must be destroyed!

    sourceless
        *Â´Â«:
        i hope she is not behind this...

    RESPONSES::akizet
        a vel's luck<+>loop
            FAKEEND::(back)

collective
    sourceless
        can you call my sister rouzesche?
        is the contrivance even intact, still?

    funfriend
        let me try!!
        ...
        connection established!

    akizet
        rou!!
        oh- let me tell you everything!!
        could you hear the noise?
        the embassy is collapsing
        i may not make it out alive
        this may be the last you hear from me
        but please know, before anything!
        i love you!!

    isabel
        i love you too, akizet

    sourceless
        what?
        that is not rou's voice!
        that is...

    akizet
        ...isabel?

    council
        isabel that was cruel
        do not do that again

    effigy
        yeah!!
        dance with me instead!!

    akizet
        ISABEL YOU SON OF A

    council
        akizet

    RESPONSES::akizet
        ...i fucking swear to velzie...<+>loop
            FAKEEND::(back)

bstrd
    sourceless
        is there an entity named bstrd around here?

    funfriend
        yes!!
        calling now!!
        connection established!

    bstrd
        WHAR
        HELLOE??

    akizet
        are you bstrd?

    bstrd
        YEA
        >%^}

    akizet
        geli talks a lot about you
        what did you do to it?

    bstrd
        >:(
        I HATE QUESATIONS
        STFU!!!

    akizet
        if you hate questions so much,
        why did you pick up?

    bstrd
        ...

    sourceless
        ...
        ...

    funfriend
        akizet the connection has been lost

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

council
    sourceless
        i heard there was a place called jokzi ozo
        could you try contacting it?

    funfriend
        ok!!
        connection established!!

    council
        sorry, jokzi ozo is currently closed for an excursion
        please hold while we deal with-
        wait, akizet?

    akizet
        council?

    council
        why are you calling us?

    akizet
        i heard from a veilk's whisper that there was a place called jokzi ozo
        i thought that it may be able to help

    council
        well you are in luck!
        we are already helping you!

    akizet
        alright
        ...
        thanks i guess

    RESPONSES::akizet
        you are not helping<+>loop
            FAKEEND::(back)
`)

env.dialogues["ops_bozcav"] = generateDialogueObject(`
start
    sourceless
        as we step into the main hall once again, 
        the ground trembles--a rumble from above!
        is it another vein collapse? we back up, ready to escape into the room behind us
        no, no--it was too quick, too quiet... like the directed detonation of a kavruka
        ...
        another!!! the ceiling gives way, letting forth the blood of the spire
        at first it is one hole, then it keeps going as parts of an archival vein collapse through the ceiling
        an archival golem lands in the sludge, still alive, but is crushed by debris before it can engage us
            EXEC::vnp({agolem: "show downed", hideStage: true})
        then... it is quiet, the operations hall lit by the dazzling archival lights
        this was another directed destruction...
        who...?

    cavik
        we are good!

    sourceless
        cavik!!
        he drops down from above, landing atop the sludgy debris with a splat
            EXEC::vnp({cavik: "show far", hideStage: true})

    akizet
        cavik! you are alive!!

    sourceless
        at the first sound, he turns to us with aggression, but it fades instantly
        what is that he nearly threw at us? it has such a thin shell
        oh--he is carrying a number of improvised explosives...

    cavik
        akizet!
            EXEC::vnp({cavik: "show"})
        is everyone all right...? 
        when we could not find you above, we thought the worst...

    sourceless
        i almost run to embrace him, for perhaps the first time in our Î¸deaths
        with the bright lights from above forcing our eyes to adjust...
        it is too late for me to notice what has risen in the darkness behind him
            EXEC::changeBgm(env.embassy.music_unsafe_golems);vnp({agolem: "show attacking"})
        that same archival golem, its hardy fists glimmering as they reach out...

    akizet
        cavik, behind--!!

    sourceless
        i activate the timestopper by reflex, as i have so many times now
            EXEC::ratween(env.bgm, 0.65)
        but i do not think any of us can reach him in time
        he is there, frozen, staring at me,
        as a sharpened golem limb sails for his chest

    timestopper
        what do we do?
        akizet?

    RESPONSES::akizet
        there is nothing<+>accept

accept
    timestopper
        i do not think there is anything we can do
        even if we all ran...
        it would be too late
        cavik has a heart-placed mindcore
        our connection seems weaker now - is it still moving??

    isabel
        let me save you some embarassment
        bozko is with cavik
        he will survive
        plus, this is a memory

    akizet
        really??

    council
        we can testify that isabel is telling the truth

    akizet
        ok fine i believe you

    sourceless quiet
        i turn away, and there is a great thud, a squelch
            EXEC::play('stab', 0.75);vn.fadeChars(true);
        followed by a few other splatters...
            EXEC::play('stab', 0.5)
            EXEC::vnp({agolem: "hide"})

    bozko
        i told you not to go ahead of me
        that one was still intact
            EXEC::vnp({cavik: "show", bozko: "show"})

    sourceless
        cavik is staring down at what remains of the golem
            EXEC::vn.fadeChars(false);changeBgm(env.embassy.music_golems_cleared)
        then, he brings that stare back up to me, speechless...
        but most of all, unharmed
        behind him is bozko, who had just dropped down...
        and smashed the golem before it could...
        bozko waves one of his gauntlets to rid it of viscera

    bozko
        still, good work, this vein was a clean detonation
        akizet, it is good to see you are still all together
        what is the situation?

    akizet
        the timestopper has been helping us survive
        we are trying to get to the groundsmind to stop all of this madness
____SHOWIF::["PAGE!!ikgolem", false]
        but we need weapons, and a body for two of the mindcores we have saved
____SHOWIF::["PAGE!!ikgolem", true]
        but we need more timestopper connectors
____END
        this tendril has a number of archival cores and connections we can use to find schematics
        after that, we intend to destroy a large golem in the way of an impressor
        we can use that to set you and cavik up with timestopper connectors
        and then we will be unstoppable

    bozko
        all right

    sourceless
        i expect the subtle twist of his receptors whenever he is about to say something clever
        he always knows what to say...
        like kazki, he is practically a vel at heart
        but...
        there is none of that here
        a terrible darkness looms over him

    bozko
        we are here to help

    cavik
        ...yeah!
        we will get through this!

    akizet
        well isabel
        i suppose you were right this time

    isabel
        will you kiss me now

    akizet
        no

    sys
        NOTICE::'additional party members';'CAVIK';'BOZKO';'now available'
            EXEC::env.embassy.addPartyMember("bozcav")

____SHOWIF::"PAGE!!augments"
        NOTICE::'additional augments enabled for new party members'
        NOTICE::'alter party member abilities via augment menu'
        NOTICE::'contained within party menu';'Z'
____END

    RESPONSES::akizet
        good to see you two again<+>END
            EXEC::change("PAGE!!bozcav", true);vn.done()
`)

env.dialogues["bossclear"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>
____END

    sourceless
        then... silence
            EXEC::toggleBgm(env.embassy.music_golems_cleared);env.embassy.music_unsafe_golems.rate(1);env.stages['g_boss'].hideBoss();
        indeed, this is victory, but...
            EXEC::change("PAGE!!golboss", true)
        shared between all of us, the connection feels little joy
        for the storm has not yet passed
    
    akizet
        ...all clear!
    
    sourceless
        soon we are all assembled in this final room
        tozik waves gakvu over near the far wall,
            EXEC::vnp({tozik: "show downleft", gakvu:"show downright"});
        both giving our sludged conjoined friends some space
        i do not truly know itzil or their kivii, yet...
        i understand what must be going on in their mindcore
    
    tozik
        where is it?
    
    sourceless
        gakvu focuses, squinting at sludgy wall component covers
        then, she points with one of her receptors at one near the far end
    
    gakvu
        cut through here, and we will have our extra connectors!
            EXEC::specialCam('g_postboss')
    
    tozik
        on it
    
    sourceless
        he exposes his corruskivi, preparing to cut through the wall
        but then it occurs to him how large a task this truly is
        that is a big cover...
    
    tozik
        itzil, karik?
        can you remove this for me?
    
    sourceless
        our attention shifts to their shared golem
            EXEC::vnp({tozik: "hide", gakvu:"hide", ikgolem: "show far", bg: true})
        they are still on the floor, doubled over near the dull pillar...
        but then they rise, floating over to the panel--
            EXEC::vnp({tozik: "hide", gakvu:"hide", ikgolem: "show", bg: true})
            WAIT::250
            AUTOADVANCE::

    bozko
        BOZKO SMASH
            EXEC::vnp({ikgolem: "hide", bozko: "show", bg: true}); setTimeout(()=>{play('crit')}, 200)

    sourceless quiet
        bozko shoves them off to the side again.. the shared body shoved into a dull pillar, collapsing onto the floor
            EXEC::play('dull')
    
    bozko
        BOZKO... RIP!!
            EXEC::vn.fadeChars(true);vnp({bg: false}); setTimeout(()=>{play('crit', 0.75)}, 100)
    
    sourceless
        bozko digs his claws into the sides of the wall, tearing the panel away
            EXEC::vnp({tozik: "show downleft", gakvu:"show downright", bozko: "hide"});env.stages['g_boss'].removeHatch()
        of course, it is so damaged that once he pull it away, it simply melts in his claws...
            EXEC::vn.fadeChars(false);
    
    tozik
        ah... thank you
        let me see...
    
    sourceless
        tozik pulls a wired connector from the wall, placing it upon his receptor
        he taps at the face of the little assistant display

    tozik
        yes, we can use this - still functional
        it was in a hibernative state, so... only a little incoherence
        just like geli...
        anyway, we can make enough connectors for everyone
        then--after that, we can descend further to the groundsmind
        just like we planned, right?
    
    sourceless
        he looks between us
        i still feel confident that we are making the right decision, but..
        this feels larger than the groundsmind...
        what if it does not actually stop this madness?
        still - i gesture my receptors affirmatively at him, dipping my head confidently

    tozik
        all right
        give me some time
        cavik, stand by - i will need your help
    
    cavik
        will do!!

    sys
        ATTENTION::'memory stream corrupt';'unable to access further events'
        NOTE::'sufficient intact data';'coherent render can continue'
        NOTE::'no further activity detected'
        ATTENTION::'memory stream halted'

    council
        well done, interloper!!
        you did well

    stowaway
        did well

    council
        we will probably not join you for the next memory stream...
        but please!
        visit us in the ozo when you can!
        if the presence of an oliver buckland song is somehow insufficient to convince you to visit,
        we now have numerous random events!
        and you can replay the frame!

    fairy
        i suggest you play nomble's jankmode next!!

    self
        i'm not sure
        it may be too hard

    fairy
        <img src="https://file.garden/ZpmqdRbyKSpKbO5L/itzilissue.png" width="300px"/>

    council
        FAIRY WILL YOU SHUT THE FUCK UP

    sys
        ATTENTION::'memory stream resumed'

    RESPONSES::sys
        save and continue render<+>explore
            EXEC::vn.done()
            FAKEEND::(continue recollection)
        save and end render<+>save
            EXEC::vn.done()
            FAKEEND::(end recollection)
        end render without saving<+>END
            EXEC::vn.done();moveTo("/local/ocean/embassy")
            FAKEEND::(end recollection)

explore
    sys
        ATTENTION::'saving iteration...'
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'
        NOTE::'return to entity tozik once stream repair is complete'

    RESPONSES::self
        ok<+>END
            EXEC::pauseSwapCam(false);specialCam(false)

save
    sys
        ATTENTION::'saving iteration...'
        ...
            EXEC::env.embassy.collapseSave({effects: true})
            WAIT::1000
        NOTE::'save process complete'
        ATTENTION::'terminating render'

    RESPONSES::self
        ok<+>END
            EXEC::moveTo("/local/ocean/embassy/")
`)