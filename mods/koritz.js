/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : koritz mod
BY : zyra (@zyra4581 on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// STATUS EFFECTS
env.STATUS_EFFECTS['displaced'] = {
    slug: "untargetable",
    name: "displaced",
    skipTurn: true,
    removes: ["destabilized"],
    opposite: "destabilized",
    help: "skip turn, untargetable",
    untargetable: true
}

env.STATUS_EFFECTS['destabilized'] = {
    slug: "destabilized",
    name: "Destabilized",
    incomingMult: 1,
    outgoingMult: 1,
    beneficial: true,
    removes: ["displaced"],
    opposite: "displaced",
    
    events: {
        onTurn: function() { reactDialogue(this.status.affecting, 'destabilized') },
    },

    help: "+100% incoming/outgoing damage/heal"
}

env.STATUS_EFFECTS['woe'] = {
    slug: "woe",
    name: "woe",
    incomingMult: 1,
    outgoingMult: -0.5,
    beneficial: false,
    removes: ["weal"],
    opposite: "weal",
    help: "+100% incoming damage/heal, -50& outgoing damage/heal"
}

env.STATUS_EFFECTS['weal'] = {
    slug: "weal",
    name: "Weal",
    outgoingMult: 1,
    incomingMult: -0.5,
    beneficial: true,
    removes: ["woe"],
    opposite: "woe",
    help: "+100% outgoing damage/heal, -50% incoming damage/heal"
}


// COMBAT ACTORS
env.COMBAT_ACTORS.koritz = {
    slug: "koritz",
    name: "Koritz",
    readoutActor: "koritz",
    specialClass: "daemonactor",
    maxhp: 10,
    hp: 10,
    state: 'living',
    statusEffects: [],
    actions: ["dulltapper", "koritz_shift", "distance"],
    portrait: `<img class="portrait" src="https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Koritz.gif">`,
    portraitUrl: 'https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Koritz.gif',
    reactions: {
        crit: ["excellent"],
        miss: ["but...", "how"],
        dead: ["..."],
        receive_hit: ["ugh"],
        receive_crit: ["NO"],
        receive_vulnerable: ["this will hurt"],
        receive_puncture: ["bother", "how unfortunate"],
        receive_regen: ["thank you"],
        receive_destabilized: ["it speaks to me"],
        receive_rez: ["how can i repay you?"],
        regen: ["this will do"],
        puncture: ["..."],
        destabilized: ["silence, please..."],
        stun: ["ping"],
        receive_carapace: ["needed that"],
        receive_repairs: ["thank you"],
        receive_fear: ["i...", "let me forget...", "please..."],
        receive_redirection: ["good"]
      }
};

env.COMBAT_ACTORS.akavan = {
    slug: "akavan",
    name: "Akavan",
    readoutActor: "akavan",
    specialClass: "daemonactor",
    maxhp: 11,
    hp: 11,
    state: 'living',
    statusEffects: [],
    actions: ["akavan_attack", "omen", "evade"],
    portrait: `<img class="portrait" src="https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Akavan.gif">`,
    portraitUrl: 'https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Akavan.gif',
    reactions: {
        evade: ["ahaha!", "as if"],
            crit: ["perfect!" ],
            crit_buff: ["wonderful"],
            miss: ["unfortunate"],
            dead: ["..."],
            receive_hit: ["pain..."],
            receive_crit: ["i can't..."],
            receive_puncture: ["ah, i am leaking", "that will be a problem"],
            receive_buff: ["my gratitude upon you"],
            receive_destabilized: ["how strange..."],
            receive_rez: ["a miracle!"],
            puncture: ["bother"],
            regen: ["wonderful", "thank you"],
            destabilized: ["when will this...?"],
            stun: ["???"],
            receive_carapace: ["i am immortal!!", "this is perfect"],
            receive_repairs: ["thank you"],
            receive_fear: ["you...", "stay dead...", "never again"],
            receive_redirection: ["perfect", "beautiful!"]
    }
}

env.COMBAT_ACTORS.revak ={
    slug: "revak",
    name: "Revak",
    maxhp: 15,
    hp: 15,
    state: 'living',
    specialClass: "daemonactor",
    statusEffects: [],
    actions: ["revak_attack", "dirty_blow", "evade"],
    portrait: `<img class="portrait" src="https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Revak.gif">`,
    portraitUrl: 'https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Revak.gif',
    reactions: {
        evade: ["you thought", "too close", "nope"],
            crit: ["must have hurt!" ],
            crit_buff: ["no need to thank me"],
            miss: ["œ¦êA"],
            dead: ["..."],
            receive_hit: ["@#Æ$J"],
            receive_crit: ["ßÃÆM!!"],
            receive_puncture: ["just kill me", "please no"],
            receive_buff: ["thank you", "i owe you one"],
            receive_destabilized: ["it is time!!"],
            receive_rez: ["....wait, i am not dead?"],
            puncture: ["no no no"],
            regen: ["wonderful", "thank you"],
            destabilized: ["power!!"],
            stun: ["hurts..."],
            receive_carapace: ["just what i needed", "this is perfect"],
            receive_repairs: ["thanks", "thank you"],
            receive_fear: ["not like this", "i thought you were...", "kurza..."],
            receive_redirection: ["perfect", "i hold no conflict"]
    }
}

env.COMBAT_ACTORS.meiza ={
    slug: "meiza",
    name: "Meiza",
    maxhp: 25,
    hp: 25,
    state: 'living',
    specialClass: "daemonactor",
    statusEffects: [],
    actions: ["meiza_attack", "stab", "blind_rage"],
    windupActions: ["all_out", "meiza_berserk"],
    portrait: `<img class="portrait" src="https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Meiza.gif">`,
    portraitUrl: 'https://file.garden/ZfhEFg_uZRgXD7Sn/CombatFaces/Meiza.gif',
    reactions: {
        evade: ["kelnit!", "ri, ri"],
            crit: ["kahahaha!!!" ],
            crit_buff: ["good, don't die"],
            miss: ["..."],
            dead: ["..."],
            receive_hit: ["ugh"],
            receive_crit: ["kezret..."],
            receive_puncture: ["oh nooo", "what a boother"],
            receive_buff: ["thank you"],
            receive_destabilized: ["what...", "cut it!"],
            receive_rez: ["oh, alright"],
            puncture: ["..."],
            regen: ["atzareta, meiza"],
            destabilized: ["will this..."],
            stun: ["zhevari..."],
            receive_carapace: ["try me"],
            receive_repairs: ["this will do"],
            receive_fear: ["silence!!", "cut it!!", "you're dead to me"],
            receive_redirection: ["oh yes how helpful"]
    }
}


// COMBAT ACTIONS
env.ACTIONS['meiza_berserk'] = {
    slug: "meiza_berserk",
    name: "Berserk",
    type: 'autohit',
    desc: "'reposition for maximum offense';'keep windup and prepare attack'",
    help: "+3T:DESTABILIZE +2T:FOCUSED +3T:VULNERABLE +WINDUP",
    anim: "heal",
    usage: {
        act: "%USER SWITCHES INTO A MORE AGGRESSIVE STANCE"
    },
    
    exec: function(user, target) {
        play('destabilize', 0.5);
        addStatus({target: user, status: "windup", length: 1, noReact: true}); 
        addStatus({target: user, status: "vulnerable", length: 3, noReact: true}); 
        addStatus({target: user, status: "destabilized", length: 3, noReact: true}); 
        addStatus({target: user, status: "focused", length: 2, noReact: true}); 
        return 'nothing';
    },
}

env.ACTIONS['blind_rage'] = {
    slug: "blind_rage",
    name: "blind rage",
    type: 'autohit',
    desc: "'enter a careless rage';'unleash stronger attacks'",
    help: "+WINDUP +2T:VULNERABLE +3T:EMPOWERED -EVASION",
    usage: {
        act: "%USER FLIES INTO A RAGE"
    },
    exec: function(user, target) {
        play('talkgal', 0.5);
        addStatus({target: user, status: "windup", length: 1}); 
        addStatus({target: user, status: "vulnerable", length: 2, noReact: true}); 
        addStatus({target: user, status: "empowered", length: 3, noReact: true});
        return 'nothing';
    }
}

env.ACTIONS['koritz_shift'] = {
    slug: "koritz_shift",
    name: "Shift",
    type: 'target+self+autohit',
    desc: "'unanchor target from reality';'target skips turn and can't be targeted'",
    help: "AUTOHIT +2T:DISPLACED",
    anim: "heal",
    usage: {
        act: "%USER REMOVES %TARGET FROM REALITY",
        crit: "WHAT",
        hit: "%TARGET VANISHES",
        miss: "%USER FUCKED SOMETHING UP"
    },
    autohit: true,
    crit: 0,
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            hitSfx: { name: 'destabilize' },
            critSfx: { name: 'destabilize' },
            hitStatus: { name: 'displaced', length: 2 },
        })
    }
}

env.ACTIONS['distance'] = {
    slug: "distance",
    name: "Distance",
    type: 'autohit',
    desc: "'keep far away';'lowers attack effectiveness for both parties'",
    anim: "",
    help: "+2T:EVASION +2T:WEAKENED",
    usage: {
        act: "%USER KEEPS THEIR DISTANCE"
    },
    exec: function(user, target) {
        play('mend', 0.5);
        addStatus({target: user, status: "evasion", length: 2, noReact: true}); 
        addStatus({target: user, status: "weakened", length: 2, noReact: true}); 
        return 'nothing';
    },
    disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" }
}

env.ACTIONS['akavan_attack'] = {
    slug: "akavan_attack",
    name: "shiv",
    type: "target",
    desc: "'stab target with ritual dagger';'appease the gods'",
    help: "90% -1HP + 2T:PUNCTURE, 10%C x2 + SELF::2T:WEAL",
    accuracy: 0.9,
    crit: 0.1,
    amt: 1,
    usage: {
        act: "%USER LUNGES AT %TARGET",
        hit: "%TARGET BLEEDS OUT",
        crit: "THE GODS ARE PLEASED",
        miss: "%TARGET NIMBLY DODGES"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            hitStatus: {
                name: 'puncture',
                length: 2
            },
            critExec: ({user})=>{
                addStatus({target: user, status: "weal", length: 2}); 
            }
        })
    },
}

env.ACTIONS['revak_attack'] = {
    slug: "revak_attack",
    name: "sucker punch",
    type: "target",
    desc: "'strong punch';'chance to leave enemy wide open'",
    help: "70% -2HP, 30%C x2 + 3T:VULNERABLE",
    amt: 2,
    accuracy: 0.7,
    crit: 0.3,
    usage: {
        act: "%USER THROWS A PUNCH AT %TARGET",
        hit: "%TARGET IS STRUCK",
        crit: "%TARGET IS KNOCKED OFF BALANCE",
        miss: "%TARGET DODGES"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            critStatus: {
                name: "vulnerable",
                length: 3
            }
        })
    }
}

env.ACTIONS['meiza_attack'] = {
    slug: "meiza_attack",
    name: "scratch",
    type: "target",
    desc: "'scratch with sharp claws';'chance for crippling injury'",
    help: "80% -2HP +2T:PUNCTURE, 20%C +2T:OPEN WOUND",
    accuracy: 0.8,
    crit: 0.2,
    amt: 2,
    usage: {
        act: "%USER CLAWS AT %TARGET",
        hit: "%TARGET BLEEDS OUT",
        crit: "%TARGET IS LEFT WIDE OPEN",
        miss: "%TARGET EVADES"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this,
            user,
            target,
            hitStatus: {
                name: "puncture",
                length: 2,
            },
            critStatus: {
                name: "open_wound",
                length: 2.
            }

        })
    }
}

env.ACTIONS['dirty_blow'] = {
    slug: "dirty_blow",
    name: "dirty blow",
    type: "target",
    desc: "'lunge at vital structure';'exploit vulnerability'",
    help: "80% -2HP, 20%C x2 + 2T:WEAKENED ADD::+2T:WEAKENED IF TARGET IS VULNERABLE",
    accuracy: 0.8,
    crit: 0.2,
    amt: 2,
    usage: {
        act: "%USER LEAPS AT %TARGET",
        hit: "%TARGET IS STRUCK",
        crit: "%TARGET IS CRIPPLED",
        miss: "%TARGET STEPS OUT OF THE WAY"
    },
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            critExec: ({target})=> {
                if (hasStatus(target, "vulnerable")) {
                    addStatus({target, status: "weakened", length: 4})
                }
                else {
                    addStatus({target, status: "weakened", length: 2})
                }
            }
        })
    }
}

env.ACTIONS['dulltapper'] = {
    slug: "dulltapper",
    name: "Dull Tapper",
    verb: "dull tapper",
    type: 'target',
    desc: "'utilize short range dull pulse';'leaves enemy wide open'",
    anim: "basic-attack",
    help: "80% -2HP + 2T:OPEN WOUND, 10%C x2 + 4T:OPEN WOUND",
    usage: {
        act: "%USER BLASTS %TARGET",
        crit: "%TARGET IS LEFT WIDE OPEN",
        hit: "%TARGET'S GUARD IS BROKEN",
        miss: "%TARGET DODGES"
    },
    accuracy: 0.8,
    crit: 0.1,
    amt: 2,
    exec: function(user, target) {
        return env.GENERIC_ACTIONS.singleTarget({
            action: this, 
            user, 
            target,
            critStatus: {
                name: 'open_wound',
                length: 4
            },
            hitStatus: {
                name: 'open_wound',
                length: 2
            }
        })
    }
}

env.ACTIONS['all_out'] = {
    slug: "all_out",
    name: "all-out attack",
    type: "special",
    desc: "'blindly strike all foes';'leave self vulnerable'",
    help: "FOES::50% -3HP, SELF::+1T:STUN",
    usage: {
        act: "%USER RUSHES IN"
    },
    exec: function(user, target) {
        let targetTeam
        switch(user.team.name) {
            case "ally": targetTeam = env.rpg.enemyTeam; break;
            case "enemy": targetTeam = env.rpg.allyTeam; break;
        }

        //for each actor, roll to see if they're hit
        targetTeam.members.forEach(function(actor, i) {
            if(actor.state != "dead") {
                let baseDelay = ((env.ADVANCE_RATE * 0.2) * i)
                    
                setTimeout(function(){
                    let hit = combatHit(actor, {amt: 3, acc: .5, crit: 0, origin: user});
                    switch(hit) {
                        case "crit": 
                            reactDialogue(actor, 'receive_crit');
                            reactDialogue(user, 'crit');
                            play('crit', 1.33);
                        break;
                        
                        case true:
                            reactDialogue(actor, 'receive_hit');
                            play('hit', 1.33);
                        break;

                        case false:
                            reactDialogue(actor, 'evade');
                            reactDialogue(user, 'miss');
                            play('miss', 1);
                        break;
                    }
                    updateStats();
                }, baseDelay);
            }
        });

        addStatus({target: user, status: "stun", length: 1})

        setTimeout(()=>{
            advanceTurn();
        }, ((env.ADVANCE_RATE * 0.2) * targetTeam.members.length) + env.ADVANCE_RATE * 0.5); //adds 0.2AR for each actor, then a little delay on that! just so it's clear who gets hit
    },
    
}

env.ACTIONS['omen'] = {
    slug: "omen",
    name: "omen",
    verb: "foretell",
    type: "target",
    desc: "'predict target's fate';'may have unforseen consequences'",
    help: "50% +3T:WEAL, 50% +3T:WOE",
    anim: "heal",
    usage: {
        act: "%TARGET'S FATE IS REVEALED",
        crit: "WHAT",
        hit: "GOOD FORTUNE LIES AHEAD",
        miss: "MISERY LIES AHEAD"
    },
    accuracy: 0.5,
    crit: 0,
    exec: function(user, target) {
                    let hit = combatHit(target, {amt: this.dmg, acc: .5, crit: 0, origin: user});
                    console.log("hit returned", hit);
                    switch(hit) {
                        case true:
                            addStatus({target: target, status: "weal", length: 3});
                            removeStatus(target, env.STATUS_EFFECTS.woe);
                        break;

                        case false:
                            addStatus({target: target, status: "woe", length: 3});
                            removeStatus(user, env.STATUS_EFFECTS.weal);
                        break;
                    } updateStats();
    }
}


// FUNCTION OVERWRITING
    // makes untargetable allies actually targetable
function enemyTurn(enemy) {
    //determine target pools
    //enemy/ally is relative to the player's POV, i.e. "enemy" are enemy's allies
    var targetPools = {
        enemy_dead: env.rpg.enemyTeam.members.filter(actor => actor.state == "dead"),
        enemy_alive: env.rpg.enemyTeam.members.filter(actor => (actor.state != "dead") && (actor.slug != enemy.slug)),
        enemy_all: env.rpg.enemyTeam.members.filter(actor => (actor.slug != enemy.slug)),

        ally_alive: env.rpg.allyTeam.members.filter(actor => actor.state != "dead" && !hasStatus(actor, "untargetable")),
        everyone_alive: env.rpg.allyTeam.members.concat(env.rpg.enemyTeam.members)
    }

    //if the enemy has a special per-turn check, execute it here
    var shouldBreak = false;
    if(enemy.turnCheck) {
        shouldBreak = env.COMBAT_TURNCHECKS[enemy.turnCheck](enemy, {targets: targetPools});
    }
    if(shouldBreak) return;

    //proceed with action selection
    //if the enemy has the 'windup' status, draw from windupActions instead
    let actionNamePool = enemy.actions
    if(hasStatus(enemy, "windup")) actionNamePool = enemy.windupActions

    let actionPool = []
    actionNamePool.forEach(actionName => {
        let action = env.ACTIONS[actionName]
        let usable = true

        //action-based disable checks
        if(action.disableIf) usable = !action.disableIf(enemy)

        //avoidChaining filtering - some abilities shouldn't be used repeatedly
        if(enemy.lastUsed) 
            if(enemy.lastUsed.avoidChaining && (action.slug == enemy.lastUsed.slug))
                usable = false

        //last man standing support skill avoidance
        //basically, if they're the last guy trying to use an ally non-self buff, try to pick an attack or self-buff instead
        if(
            targetPools.enemy_alive.length == 0 &&
            (
                action.type.includes('support') && 
                !action.type.includes('self') &&
                !action.type.includes("rez")
            )
        ) usable = false
        
        if(usable) actionPool.push(action)
    })

    let action = actionPool.length ? actionPool.sample() : env.ACTIONS["nothing"]

    var target;
    if(action.type.includes('self')) {
        targetPools.enemy_alive.push(enemy)
        targetPools.everyone_alive.push(enemy)
    }

    if(action.type.includes('random')) {
        target = targetPools.everyone_alive.sample()
    } else if (action.type.includes('rez') && action.type.includes('support')) {
        target = targetPools.enemy_all.sample()
    } else if (action.type.includes('rez')) {
        target = targetPools.enemy_dead.sample()
    } else if (action.type.includes('support')) {
        target = targetPools.enemy_alive.sample()
    } else {
        target = targetPools.ally_alive.sample()
    }

    //add animation duration to the timeout if there's an animation
    var executionTime = env.ADVANCE_RATE * 0.5;

    //execute the animation if it exists
    if(action.specialAnim) {
        executionTime += action.specialAnim.duration;
        setTimeout(()=>{action.specialAnim.exec(action, enemy, target)}, env.ADVANCE_RATE * 0.5);
    }

    //do the attack damage/dialogue after the animation
    setTimeout(()=>{
        try {
            switch(action.type.includes('special')) {					
                case true:
                    useAction(enemy, action, target);
                    break;

                default: 
                    var hit = useAction(enemy, action, target);
                    setTimeout(()=>advanceTurn(enemy), env.ADVANCE_RATE);			
                    
                    //if there's no special animation, do the base one
                    if(!action.specialAnim && action.anim) {
                        let enemySpriteWrapper = env.rpg.querySelector(`#${enemy.slug}-sprite-wrapper`)
                        enemySpriteWrapper.classList.add(action.anim);
                        setTimeout(function(){
                            enemySpriteWrapper.classList.remove(action.anim)
                        }, action.animDuration ? (action.animDuration + 100) : 600);
                    }

                    //also handle any special frameClass similarly, but with a little more of a delay on removal
                    if(action.frameClass) {
                        env.rpg.classList.add(action.frameClass);
                        setTimeout(function(){
                            env.rpg.classList.remove(action.frameClass)
                        }, action.animDuration ? (action.animDuration + 400) : 1000);
                    }

                    switch(hit) {
                        case "crit":
                            reactDialogue(enemy, 'crit');
                            break;
                        case true:
                            reactDialogue(enemy, 'hit');
                            break;
                        case false:
                            reactDialogue(enemy, 'miss');
                            break;
                        case "nothing":
                            break;
                    }					
            }
        } catch(e) {printError(e); printError('proceeding to next turn', false); setTimeout(()=>advanceTurn(enemy), env.ADVANCE_RATE); }
        //actor.history.push(action)
    }, executionTime);
}


// DIALOGUE ACTORS
env.dialogueActors["meiza"] = {
    image: "https://file.garden/ZfhEFg_uZRgXD7Sn/DialogFaces/Meiza_dialog.jpg",
    type: "obesk qou portrait-contain",
    voice: ()=>play('talkgal', 0.6)
}

env.dialogueActors["revak"] = {
    image: "https://file.garden/ZfhEFg_uZRgXD7Sn/DialogFaces/Revak_dialog.PNG",
    type: "obesk qou portrait-contain",
    voice: ()=>play('talk', 1.4),
    player: true
}

env.dialogueActors["akavan"] = {
    image: "https://file.garden/ZfhEFg_uZRgXD7Sn/DialogFaces/Akavan_dialog.PNG",
    type: "obesk qou portrait-contain",
    voice: ()=>play('talklaugh', 0.8)
}

env.dialogueActors["koritz"] = {
    image: "https://file.garden/ZfhEFg_uZRgXD7Sn/DialogFaces/Koritz_dialog.PNG",
    type: "obesk qou portrait-contain",
    voice: ()=>play('talk', 0.9)
}


// DIALOGUE
env.dialogues["intro"] = generateDialogueObject(`
start
    sourceless
        as you take the wheel, your vision briefly turns to neural static.
        you suddenly find yourself on a dim two way road, unable to see beyond a short distance.
        in the distance, you see melting, warped shapes in what might be clouds.
        the ford f150 rumbles idly.
    
    self
        why does this feel so physical?
    
    sourceless
        the radio dropped in the back seat blares static.
        a familiar voice breaks through.
    
    bstrd
        THAT'S CUZ IT IS!!!
        welcome to da NEW ITERATION
        EMBASsY MEMORY NUMBA FIVE BABEY
        at least... Temporararily...
        '_' no time 2 waste
        lets get crackin on this ford f150
        basicly: its a TRUCK DRIVING structure i found
        probably 4 curinge boredom or somthing 1ce
        there was some problem wit this i had 2 fix but it ok
        use the WHEEL 2 DRIVE
    
    sourceless
        the infotainment system by the wheel illuminates, showing a vertical course.
            EXEC::env.e3a2.toggleMap();body.classList.add('tutorialmode')
    
    bstrd
        yea ur at da bottom here
        litle RED THINGY
        visit litl resource caches + WORK UR WAY UP
        each 1 has something that gives an EFFECT TO BOTH U AND DAEMONS
        and BIGGER = MORE DIFFICULT... but u get more from doing...
        u'll get it :b
    
    self
        ok
            EXEC::env.e3a2.toggleMap()
        what about shells
    
    bstrd
        o ya
        CHECK IT
        party menu OPEN PLZ
            EXEC::togglePartyMenu();body.setAttribute("highlight", "shells")
        so shells dont have much in em and know nothing
        BUT... i COPIED IDEA FROM JELLY...
        VELZIE'S HUMORS
        they r parts u put in shells in order 2 give them cool abilities
        :)
        builder thingy is behind u + in ur menu
        its EZ u just put the parts in em
        btw abt the builder sry if its too far away...
        litarlly NO ROOM in this just use menu
        i set u up with starters
    
    self
        all right
    
    bstrd
        i ALSO CAME UP WITH COOL extra stuff ur shells get
        but its surprise
        ALSO ALSO
        i got sum weird guys from some dissasososociated memory
        IDK why theyr here i thought they seemed cool
        check em out 
        >:p
        this will be... BEST EVIL MODE IN HITORY!!!!@
    
    self
        cool
    
    bstrd
        >:}
        o ya also i found out how RULE 2ND works here
    
    self
        isn't it 2st?
    
    bstrd
        SHUT UP ok nvm im, not telling u
        OK i gotta HOLD IT 2GETHA outside
        or els they start dismantaling cause theyll think its garbage
        so BYeE
        JUST GRAB WHEEL + GET 2 DA FIRMAMENT
    
    sourceless
        the radio clicks off.  

    RESPONSES::self
        ok<+>END

END::body.removeAttribute("highlight");body.classList.remove('tutorialmode')
`)

env.dialogues.bstrdResp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        firmament rewriting?<+>rewrite
        will they retaliate?<+>retaliation
        what did you do to geli?<+>geli
        why are you different?<+>different
        rule 2 broken?<+>rule
            SHOWIF::"daemon"
        fleshy thing<+>intrusive
            SHOWIF::"flan"
        shell faces?<+>faces

        dissociated memory?<+>koritz

        bye<+>END
            EXEC::vn.done()
`)

env.dialogues["bstrd"] = generateDialogueObject(`
loop
    RESPOBJ::bstrdResp

start
____SHOWIF::["stageroom", "underlobby"]
    self
        i have some questions
            EXEC::vnp({bstrd: "show", hideStage: true, bg: false})

    bstrd
        more of these
        -__-
        ok WAT U WANT
____SHOWIF::["stageroom", "vessel"]
    sourceless
        you prod at the radio, trying to contact BSTRD.
        the buttons and dials don't make sense.
        eventually, it blares static, and then a voice:

    bstrd
        WTF ARE U DOING
        DO U THINK I CAN JUST KEEP THIS UP 4EVER
        FIMAMENT IS TRYING 2 REWRITE SHIT
    
    self
        i have some questions

    bstrd
        -__-
        OF CORSE U DO
        ok fine plszzz make THEM QUICK
____END
        
    RESPOBJ::bstrdResp

rewrite
    self
        why does the firmament care about rewriting stuff?
    
    bstrd
        IT IS a litle smart
        2 (TWO) THINGYS:
        WE R BREACKING RULES so it tries 2 fix it by adjuting memory
        +
        WANTS 2 KEEP every1 INSIDE
        + it is ULTIMATE DAEMON AUTORITY
        like... SANTAN THE DEVIL
        thats three things but u get it
    
    self
        ok
    
    bstrd
        ALSO !!!!!!
        (fournth thing)
        >_>
        I MADE IT BE BIGEST ENEMY in the memory
        so it playing the part of adverserty..
        MAYBE a LITEL TOO WELL ?
        BUT no time 2 adjust
                    
    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)

faces
    self
        where did those shell faces come from?

    bstrd
        IDK :P
        were nearby 2 be used in memory I THINK
        TURNS OUT they wrk better if u give em a FACE
    
    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)
    

retaliation
    self
        will the other daemons retaliate against you for all this?
        it seems like pretty direct aggression
    
    bstrd
        DONT WORK LIKE THAT
        maybe if it was jely doing all this or w/e
        but everything is coded 2 IGNORE ME
        they just undo my cool sht eventaualy
        anoyying
        its all gonna be BIZ AS USUAL 1ce were done
    
    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)

geli
    self
        what did you actually do to geli?
    
    bstrd
        wat i always do :V
        when i make changes 2 something
        other daemons cant modify it for a litel while
        so i just had 2 make enough changes to let jely move around
        nothing CRAZY...
        just some KNOWLEDGE about how C00L evil mode is 
        >:)
    
    self
        once we help geli out,
        what's going to happen to the golem memory?
        geli seems critical
    
    bstrd
        OK I TOUT ABOUT this 1
        In Adavnece,
        :v
        IM GONA MAKE NEW GELI using knoledge i COPIED
        its gona work OK DONT worey
    
    RESPONSES::self
        ok<+>loop
            FAKEEND::(back)

different
    self
        why are you so different from the other daemons?
        none of the others seem to talk
        let alone be willing to turn against the entire system
    
    bstrd
        o well its simple
        CREATIVITEY
        they all just do 1 thing in the same way
        ie some1 shoots a guy: make that into game action
        MEAN WHILE
        i have 2 be smart 2 come up with HARD MODE + FUN STUFF!!!
        if that means we gota beat up other DAEMONS...
        S0 BE IT >:P
    
    RESPONSES::self
        makes sense<+>loop
            FAKEEND::(back)

rule
    self
        i saw some weird daemons in the iteration after it looped a few times
        i think those were their actual forms
        doesn't that break rule 2?
    
    bstrd
        2ST
        and yea :P
        rulset paradox errors started getting rly weird
        prty sure FIRMAMENT grasped that DAEMONS were ultimate foes in my story 4 ur memory
        SO IT MADE UP DAEMONS... but AS MEMORIES... 2 HAVE THEM fight u in rly STRONG FORM
        like memory of DAEMONS but they actually were DAEMONS??
        '_'
        at that point idk what was goin on
            
    RESPONSES::self
        interesting<+>loop
            FAKEEND::(back)

intrusive
    self
        after some resets, there was one that only had this weird fleshy thing
        it didn't look like a daemon at all
    
    bstrd
        O_O
        u actualy saw it......
        its a weird thought form idk where it comes from
        eats loose shells n thoughts etc.
        weve had 2 keep it down
        other daemons treat it like a rogue thoughtform + deallocate it
        but it keeps coming back.... 
        creepy '_'
        usualy not my problem 
        but a bit of it prolly got stuck in the ITERATION when i made it
        o well it doesnt matter now
    
    RESPONSES::self
        weird<+>loop
            FAKEEND::(back)

koritz
    self
        you mentioned a dissociated memory
        what was that about

    bstrd
        oh YA
        i saw thedse dudes floating in a memory
        n i thought they looked Bad Asse...
        so i took em >%]
        idk who they r if that what ur asking
        sry :P

    RESPONSES::self
        alright then<+>loop
            FAKEEND::(back)
`)

env.dialogues.bsteliResp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        you<+>yloop
        daemons<+>dloop
        what am i?<+>me
            SHOWIF::["stageroom", "underlobby"]
        humors?<+>humors
            SHOWIF::"e3a2__intro"
        impulses?<+>impulses
            SHOWIF::"e3a2__intro"
        dissociated memory?<+>koritz
            SHOWIF::"e3a2__intro"
        ozo<+>preozo
            SHOWIF::["stageroom", "underlobby"]
        ozo<+>oloop
            SHOWIF::["stageroom", "ozo_lostone"]
        go again?<+>replay
            SHOWIF::["stageroom", "ozo_lostone"]
        stop iteration<+>stop
            FAKEEND::(leave)
            SHOWIF::["stageroom", "vessel"]
        bye<+>END
            EXEC::vn.done()
`)

    // WIP :: this one left to do/make compatible with ::/FORD/
env.dialogues["++bsteli"] = generateDialogueObject(`
loop
    RESPOBJ::bsteliResp

start
____SHOWIF::["stageroom", "vessel"]
    sourceless
        you prod at the radio, trying to establish contact with geli.
        the buttons and dials don't make sense.
        eventually, it blares static, and then a voice:
____END

    bsteli
        interloper!
            EXEC::env.jokzi ? env.jokzi.toggleSlow(true) : false
    
    bsteli::happy
        hello!!

    self
        hello geli
        
    RESPOBJ::bsteliResp

stop
    self
        i'd like to stop this now
    
    bsteli
        oh! all right!
        here, i will return you...

    RESPONSES::self
        thanks<+>END
            EXEC::change("TEMP!!from", "e3a2");env.e3a2.clearWarningListener();corruRefresh("/local/ozo/", 2000)
            FAKEEND::(back to ozo)
preozo
    self
        what do you remember about jokzi ozo?
    
    bsteli
        little i can share, interloper
        a place of dreams, a great island of kind light adrift in a dark ocean
        only glimpses are with me now - my memory is largely trapped there, away from myself
    
    bsteli::happy
        but it is only a matter of time before i have it again!
    
    RESPONSES::self
        right<+>loop
            FAKEEND::(back)

humors
    self
        what exactly are humors?
        BSTRD is using them in the memory to give shells abilities
            SHOWIF::["stageroom", "underlobby"]

    bsteli::happy
        ah! well!!
    
    bsteli
        in reality, beyond our little world,
        they are something akizet and her people once believed
        that each obesk is at first a blank cavestone, an actor without direction
        imbued with intention and spirit by velzie, to best perform their role
        these intentions are the humors!
        fundamental spiritual elements, which combine to create an obesk and their fate
        does this not sound familiar?!
    
    bsteli::think
        it is an old belief, one that akizet may have consciously shed,
        as i do not think it ever came up within the collapse!
        but if they exist in my memory regardless, they must have been a formative belief for akizet!
    
    bsteli
        anything that is core to her understanding of reality is within all of us, too!!
    
    bsteli::happy
        i do hope the context has made it clearer for you!

    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)

impulses
    self
        what are impulses?

    bsteli::concern
        ah...

    bsteli
        i believe BSTRD made that up!
        another method to subvert and deal with the daemons!

    bsteli::think
        from the information it shared with me,
        the daemons are not very good at their own game, beyond a simple level...
        for even the game itself is meant as a thin illusion over a dream

    bsteli::happy
        and so, by introducing these winding systems, it works to confuse them!

    bsteli
        but of course, these things cannot exist without reason...
        so, within the dream BSTRD created, impulses are imprinted onto shells
        but i do not think it is permanent--for it is only a dream!

    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)

replay
    self
        want to dream of the escape again?
    
    bsteli::bstrd
        YES!!
        just go up 2 the wheel!!
            EXEC::content.querySelectorAll(".e3a2loop").forEach(el=>el.classList.add('ready'))
    
    bsteli::happy
        i will arrange for space within the dream!
        i still carry the BSTRD's knowledge of the rules, so i will enforce them from outside!!

    bsteli
        additionally, if you would like to change some things about it...
        i have altered the terminal nearby to have some options for you!
        you can only modify it out here, so take a look before we begin!
    
    RESPONSES::self
        ok<+>loop
            FAKEEND::(back)

loop
    RESPOBJ::bsteliResp

yloop
    RESPOBJ::bsteliYLoop

altered
    self
        BSTRD altered you in order to make the daemons leave you alone
        do you know what it actually did?
    
    bsteli::bstrd
        a SHARING of KNOWLEDGE!!

    bsteli::happy
        we exchanged plans and familiarities

____SHOWIF::["stageroom", "underlobby"]
    bsteli
        i suspect it is using some of my knowledge to compose a reasonably believable dream,
        and with me, it shared an understanding of this system - the daemons, the "frame"...
        what a disgrace that this whole system is only in service of reliving a nightmare!

    bsteli::bstrd 
        FOR I SEE NOW, what FUN can be had within it!!
    
    bsteli
        when we are free from this place, interloper, i will create a better dream
        with all of my friends, too! and perhaps of this very escape?!
        we will see... we will see!!

____SHOWIF::["stageroom", "ozo_lostone"]
    bsteli
        i believe it used my knowledge to compose parts of that dream
        and with me, it shared an understanding of its system - the daemons, the "frame"...
        what a disgrace that the whole system was only in service of reliving a nightmare!

    bsteli::bstrd 
        FOR I SEE NOW, what FUN can be had within it!!
____END

    RESPONSES::self
        ok<+>yloop
            FAKEEND::(back)

extended
    self
        how are you both here and in the lobby?
    
    bsteli
        your vision is truly limited, interloper!!
        i must assume however you are connected, it is not showing you physical reality...
        i am simply reaching outside from within the memory itself,
        intersecting myself with this incomplete space!
        it is close enough that i may do so without actually moving!!
        what does it look like to you?

    self
        you're just standing there
        and in the lobby too
        nothing strange
    
    bsteli::think
        i see...
        
    bsteli
        well, many thoughtforms do this
        and that means the daemons will not take notice!

    self
        you say extending and intersecting
        what does that actually mean?
        if i'm not really seeing you, then what is your actual form?
    
    bsteli::concern
        ah... 
        you ask very difficult questions, interloper
        even i am not truly sure!
    
    bsteli
        i know i am within these dreams and spaces, 
        but anything outside or between them...
        it is like feeling around in darkness

    bsteli::think
        or, a blinding, burning light...
        it feels like both
    
    bsteli
        but with enough practice, it is not so difficult to navigate!

    RESPONSES::self
        i see<+>yloop
            FAKEEND::(back)

intact
    self
        why are you so intact compared to other thoughtforms?
        visually and mentally

    bsteli::concern
        ah...
        just lucky, i suppose

____SHOWIF::"ozo__fairy-gelifree"
    self
        i don't think that's right
        the fairy said you were among the first to awaken
        in the age of hunger
    
    bsteli::uncanny
        is that so...?
    
    bsteli
        let us leave my past where it is, interloper
        it seems you already know enough
____END

    RESPONSES::self
        i see<+>yloop
            FAKEEND::(back)

dloop
    RESPOBJ::bsteliDLoop

framing
    self
        do you understand what a framing device is?
    bsteli
        through BSTRD's intervention, i do now
        it is a great illusion to allow the re-enactment of the memory past some kind of censor
        attended to by countless modified thoughtforms, to fuss over imagined numbers and buttons
        something alien, that only an interloper could have established within the cyst...
        together, with the tyrant

____SHOWIF::["stageroom", "underlobby"]
        ...
        i understand that it is your work,
        but now you are here, helping to free me from the resulting nightmare

    self
        are you upset?
    
    bsteli
        how could i be? you are helping me to fix your mistake, are you not?
        
    bsteli::happy
        we are nearly out, after all!!

____SHOWIF::["stageroom", "ozo_lostone"]
    bsteli::happy
        velzie has graced me with a calm path, having you intervene in your own work!!
    
    bsteli
        i am sure i would have been deallocated if not for you!

    bsteli::think
        though, i do worry for the others there...
        if there were any other awakened thoughtforms like me, 
        i would never have known - we could sparsely interact meaningfully!

    bsteli
        but i trust that you will help when the occasion rises
    
    self
        you aren't upset?
    
    bsteli
        it may have been your work, but you did help me escape that nightmare!

____END
    bsteli
        in this dying world of ours, interloper,
        forgiveness must come quickly to those who seek it in good faith

    RESPONSES::self
        thanks<+>dloop
            FAKEEND::(back)

bstrd
    self
        what do you think of BSTRD?
    
    bsteli::bstrd
        COOL!!
    
    bsteli
        a thoughtform imbued with the madness of velzie's light,
        endeavoring only to make for entertaining moments?

____SHOWIF::["stageroom", "underlobby"]
        even in the depths of this nightmare??

    bsteli::happy
        i simply must hope that it will come back to jokzi ozo with us!
____SHOWIF::["stageroom", "ozo_lostone"]
    bsteli
        even in the depths of nightmares??

    bsteli::happy
        i simply must hope it will visit jokzi ozo in time!!
____END

    bsteli
        imagine the dreams it could share with everyone!

    RESPONSES::self
        i see<+>dloop
            FAKEEND::(back)

firmament
    self
        do you know why BSTRD calls that big thing the firmament?
            SHOWIF::["stageroom", "underlobby"]
            
        do you know why BSTRD called that big thing the firmament?
            SHOWIF::["stageroom", "ozo_lostone"]
    
    bsteli::think
        the thoughtspace membrane? no...
        it is a word i did not know before it shared its knowledge!
    
    bsteli
        but it is not merely a strange misunderstanding
        do you know how thoughtspaces work? our dreams?
        they envelop other thoughts and memories, their shape dictating the rules of reality
    
____SHOWIF::["stageroom", "ozo_lostone"]
    bsteli
        it is why the embassy was spatial, even outside the proper memories
        for the thoughtspace in its entirety is spatial!
        i have seen many types of thoughtspaces, if not all that this little world has to offer...

    bsteli::think
        but in there, everything was forced into rigid systems i had never seen before, 
        with thoughtforms reshaped into the cold and strange daemons that maintain it
        all to comply with numbers and strange procedures!
        lying to anything viewing from the right angle about what they are seeing!!

____SHOWIF::["stageroom", "underlobby"]
    bsteli
        it is why this place we are in is spatial, even outside the proper memories
        for the thoughtspace in its entirety is spatial!
        i have seen many types of thoughtspaces, if not all that this little world has to offer...
        
    bsteli::think
        but in here, everything is forced into rigid systems i have never seen before, 
        with thoughtforms reshaped into the cold and strange daemons that maintain it
        all to comply with numbers and strange procedures!
        lying to anything viewing from the right angle about what they are seeing!!

____END

    bsteli
        it is right to call it something else, something new and strange
        so, i am comfortable simply calling it the firmament too

    RESPONSES::self
        ok<+>dloop
            FAKEEND::(back)

daemons
    self
        what do you know about the daemons?
    
    bsteli::concern
        they are an unnerving development...
        thoughtforms like any other, yet,
        imprinted so strongly with instruction that they have no room for variation

____SHOWIF::["stageroom", "ozo_lostone"]
        i had watched them from my limited position,
        how they shifted around behind the walls and edges of the memory
        they moved along the exact same paths, following every thoughtform and carefully aligning every movement

____SHOWIF::["stageroom", "underlobby"]
        i have watched them from my limited position,
        how they shift around behind the walls and edges of the memory
        they move along the exact same paths, following every thoughtform and carefully aligning every movement
____END

        each one an unthinking organ, wired to the next in line to execute their purpose
        whatever action needed to continue the illusion of the 'frame'
        creating terrible surveillance like nothing else i have seen
        like countless lesser tyrants!!

    bsteli::think
        it is frightening, knowing i could have become one with any misstep...
        i must wonder - what do they think?
        will they recover from this state, eventually?
        i can only pity them
        except for BSTRD, who... seems happy...
    
    RESPONSES::self
        yeah<+>dloop
            FAKEEND::(back)

intrusive
    self
        after the firmament reset a few times,
        there was an iteration that only had this weird fleshy thing in the center
        it didn't look like a daemon at all and moved strangely

____SHOWIF::[["flan", "pre-escape"], ["stageroom", "underlobby"]]
        have you seen anything like that?

    bsteli::concern
        what?? no, never!
        that sounds scary!
    
    bsteli::think
        that should be impossible, too!
        the daemons never abide other thoughtforms in their space
        any escaped thought is reworked, and i have never once seen an intruder
        could it have been something feeding on the shells, maybe...?

    RESPONSES::self
        no idea<+>dloop
            FAKEEND::(back)

____SHOWIF::[["flan", "pre-escape"], ["stageroom", "ozo_lostone"]]
    self
        i remember seeing it before
        do you know what it is?
    
    bsteli::concern
        not really!
    
    bsteli
        but i saw you fight it, and something about it stuck with me...
        how strangely it looked, how it did not belong!!

    bsteli::happy
        so, i passed the idea along to the other ozo actors to play!

    RESPONSES::self
        i see<+>dloop
            FAKEEND::(back)    

____SHOWIF::[["flan", "pre-escape"], ["stageroom", "vessel"]]
    self
        i remember seeing it before
        do you know what it is?
    
    bsteli::concern
        not really!
    
    bsteli
        but i saw you fight it, and something about it stuck with me...
        how strangely it looked, how it did not belong!!

    bsteli::happy
        so, i passed the idea along to the other ozo actors to play!

    RESPONSES::self
        i see<+>dloop
            FAKEEND::(back)    

____SHOWIF::["flan", "post-escape"]
    self
        why did you put that in the dream?

    bsteli::concern
        oh, did you find it disturbing?
    
    bsteli
        while i was coming up with what revisions to offer, it came to me...
        an idea, like a vision, fully formed!

    bsteli::happy
        and so i passed it along to some of the other ozo actors to play!

    bsteli
        what it is, i am not sure... i did not get that far
        perhaps it could be imagined as an intruder, something that does not belong!
        but it seemed like fun to have!!

    RESPONSES::self
        i see<+>dloop
            FAKEEND::(back)
____END

me
    self
        what am i controlling right now?
    
    bsteli::think
        ...
        it is a shell, i think...
        something the BSTRD plucked and marked as the locus for this experiential memory
    
    sourceless
        geli shifts from side to side as it examines you.
        it reaches forward and passes a hand through the loose membrane of your head.
        you feel nothing.
    
    bsteli
        the same fuzzy and vague shape as the rest of them,
        hollowed out and unfeeling... a thoughtform mutilated by the daemons
        like skin you wear to interact with this place
        does it have its own mind, i wonder?
        does it see this dream?

    RESPONSES::self
        not sure<+>loop
            FAKEEND::(back)

oloop
    RESPOBJ::bsteliOLoop

stowfeast
    self
        i saw the fairy teaching the stowaway to do something
        it seemed like it hurt
        did you know about this?
        
    bsteli
        ah...
        yes
        in fact, i asked the fairy to do it
        you must have seen it teaching them how to bite pieces away from other thoughts...
    
    bsteli::concern
        i know it seems bad, but please do not tell isabel or the council!!
        they surely would both be furious!
    
    bsteli
        i just think it is something they ought to know how to do...
        the ozo may feel sturdy and infinite, interloper,
        but i know how precarious our safe place truly is
        if it all falls apart again, they should know how to fend for themselves
        now, promise! it is our secret!
        
    RESPONSES::self
        all right<+>loop
            FAKEEND::(back)

fairy
    self
        what do you think of the fairy?
    
    bsteli
        i used to be quite unnerved by them... avoided them, even!!
        you must have heard of their reputation by now, no?
        but with the help of that mask they gave you,
        they played a critical role in my escape...
    
    bsteli::happy
        perhaps we may be friends, now!
        maybe they would enjoy dreaming with the vessel?

    RESPONSES::self
        maybe<+>oloop
            FAKEEND::(back)

flower
    self
        what do you think of isabel?

    bsteli
        oh, a fine friend, obsessions aside
        an endless source of calm and pleasant dreams!
        
    bsteli::think
        i do not think she would enjoy my new dreams, though...
        she never much enjoyed conflict and battle!

    RESPONSES::self
        i see<+>oloop
            FAKEEND::(back)

council
    self
        what do you know about the council?

    bsteli
        without them, we all would have been lost
        their actions have helped more than the tyrant's ever will
        jokzi ozo was our great vessel to weather the storms that threatened us all
        if not for these dreams, and this cohesion, 
        we all would be sludge

    RESPONSES::self
        i see<+>oloop
            FAKEEND::(back)

tyrant
    self
        what do you think of the tyrant?

    bsteli
        what is there to say?
        once a friend, now as unreasonable as a daemon
    
    bsteli::think
        i must wonder if we would have been fine even without its 'efforts'
        it was only your intervention that did anything, after all

    RESPONSES::self
        ...<+>oloop
            FAKEEND::(back)

stowaway
    self
        how is the stowaway doing?
    
    bsteli::concern
        oh...
        i am not sure!
    
    bsteli
        it is very hard to tell what they think!
        they wander around... 
____SHOWIF::"citystreet__flower_beacon"
        sometimes the effigies play with them
____END
        i am not sure if they are happy, but...
        surely it is better than wherever they were, before!

    RESPONSES::self
        probably<+>oloop
            FAKEEND::(back)

mask
    self
        do you have any masks?
    
    bsteli::happy
        ahahaha!
    
    bsteli
        i have only just returned, interloper!!
        any i had must have been lost--i must pick up the practice again
        i have nothing to offer you now, but...
    
    bsteli::bstrd
        maybe i could use the BSTRD's knowledge >:)
    
    RESPONSES::self
        cool<+>oloop
            FAKEEND::(back)

dog
    self
        so the dog is here now

    bsteli::happy
        ahaha, yes, kuulla!!
        i was quite surprised when i saw it arrive!
        well done, interloper!
    
    bsteli::think
        though, i am not sure if it is particularly lucid... it has not yet spoken!
        i found this very strange, but after i thought about it some more:
        it was in the nature of its role to follow directions,
        and you gave it a direction to go--here!
        it will awaken in time, i am certain
        but in the meantime, it does seem to enjoy our company, and it is not in pain,
    
    bsteli::bstrd
        SO WHO CARES :P
        dream dog time LOL

    RESPONSES::self
        i see<+>oloop
            FAKEEND::(back)



koritz
    self
        who are these others
        they're like shells but they aren't real shells

    bsteli::concern
        oh...
        that was the BSTRD's idea

    bsteli
        it found them, adrift
        repurposed them, as combat actors
        i do not quite know why they are in this cyst...

    bsteli::think
        maybe just they are just someone akizet was familiar with

    bsteli
        sorry, i can not say more about this

    RESPONSES::self
        alright<+>loop
            FAKEEND::(back)



END::env.jokzi ? env.jokzi.toggleSlow(false) : false
`)


// PARTY INJECTION (MOD LOAD)
if (!page.party.some(e => e.name === "Meiza")) {
    page.party.push({
        slug: "koritz",
        name: "Koritz",
        class: "Dull Expert",
        hp: 10,
        combatActor: "koritz"
    })

    page.party.push({
        slug: "akavan",
        name: "Akavan",
        class: "Lorekeeper",
        hp: 11,
        combatActor: "akavan"
    })

    page.party.push({
        slug: "revak",
        name: "Revak",
        class: "Duelist Wanderer",
        hp: 15,
        combatActor: "revak"
    })

    page.party.push({
        slug: "meiza",
        name: "Meiza",
        class: "Bestial Exile",
        hp: 25,
        combatActor: "meiza"
    })
}

page.party.find(e => e.name === "Koritz").class = "Dull Expert"
page.party.find(e => e.name === "Akavan").class = "Lorekeeper"
page.party.find(e => e.name === "Meiza").class = "bestial exile"