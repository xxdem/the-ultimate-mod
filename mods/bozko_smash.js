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
    border-radius: unset;
    box-shadow: unset;
}

#fp-player .fp-golem .fist.right {
    border: unset;
    background-image: url(https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/bozarmsalt.png);
    width: 66.5px;
    height: 225px;
    transform: translateX(-20px) translateY(-100px);
    border-radius: unset;
    box-shadow: unset;
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


// COMBAT ACTION
env.ACTIONS['incoherent_golemboss'].exec = function(user, target) {
    addStatus({target: user, status: "incoherent", length: 1, noReact: true});
    actionMessage(user, "%USER RAISES ITS GAUNTLETS", target);

    if(!page.melee) page.melee = new FPFight()
    
    if(user.state != "lastStand") { //regular melee mode
        let halfHP = (user.hp < user.maxhp / 2)

        page.melee.start({
            movesPerStep: halfHP ? 3 : 2,
            koCallback: ({playerDamaged, enemyDamaged}) => {
                console.log(playerDamaged, enemyDamaged)

                let trueTarget = env.rpg.allyTeam.members.filter(member => member.hp > 0).sample()
                let message

                if(enemyDamaged) {
                    message = "%USER IS STRUCK DOWN"

                    user.box.classList.add('struck')
                    user.sprite.classList.add('struck')
                    reactDialogue(user, 'receive_crit')

                    setTimeout(()=>{user.sprite.classList.remove('struck');user.box.classList.remove('struck');}, 4000)


                    combatHit(user, {amt: 20, autohit: true, crit: 0})
                }

                if(playerDamaged) {
                    if(trueTarget.slug == "bozko") message = "%TARGET IS STRUCK DOWN"
                    else message = "%TARGET IS HURT IN THE CHAOS"

                    trueTarget.box.classList.add('struck')
                    reactDialogue(trueTarget, 'receive_crit')

                    setTimeout(()=>{trueTarget.box.classList.remove('struck');}, 4000)

                    combatHit(trueTarget, {amt: 3, autohit: true, crit: 0})
                }

                if(playerDamaged && enemyDamaged) message = "%TARGET AND %USER ARE BOTH HURT IN THE CHAOS"

                page.melee.stop()
                setTimeout(()=>{
                    actionMessage(user, message, trueTarget, "crit", 3000)

                    advanceTurn()
                }, 1000)
            }
        })    

        if(!user.usedMelee) {
            user.usedMelee = true
            startDialogue('boss_tut')
            page.melee.tutorialStep()
        } else if(halfHP && !user.halfAlert) {
            user.halfAlert = true
            startDialogue('boss_half')
        }
    } else { //last stand mode
        startDialogue('boss_laststand')

        page.melee.start({
            height: 11,
            movesPerStep: 3,
            koCallback: ({playerDamaged, enemyDamaged}) => {
                console.log(playerDamaged, enemyDamaged)

                let trueTarget = env.rpg.allyTeam.members.filter(member => member.hp > 0).sample()
                let message

                if(enemyDamaged) {
                    user.box.classList.add('struck')
                    setTimeout(()=>{user.sprite.classList.remove('struck');user.box.classList.remove('struck');}, 4000)
                    page.melee.el.classList.add('fp-stopped')
                    page.melee.el.classList.add('fp-closeout')

                    page.melee.fakeAttack = () => {
                        if(env.fakeAttacking == true) return
                        env.fakeAttacking = true
                        page.melee.player.golem.setAttribute('a', 'advance')
                    
                        setTimeout(()=>page.melee.el.setAttribute('a_stage', 'windup'), 100)
                        setTimeout(()=>page.melee.el.setAttribute('a_stage', 'collide'), 1000)
                        setTimeout(()=>{play('crit');env.fakeAttacking = false}, 1150)
                    }                    

                    startDialogue('boss_closeout')
                }

                if(playerDamaged) {
                    if(trueTarget.slug == "bozko") message = "%TARGET IS STRUCK DOWN"
                    else message = "%TARGET IS HURT IN THE CHAOS"

                    trueTarget.box.classList.add('struck')
                    reactDialogue(trueTarget, 'receive_crit')

                    setTimeout(()=>{chatter({text: [`keep fighting!!`, `you can do this`, `it is falling apart! just one more time!`].sample(), actor:"akizet", readout: true})}, 2000)
                    setTimeout(()=>{trueTarget.box.classList.remove('struck');}, 4000)

                    combatHit(trueTarget, {amt: 3, autohit: true, crit: 0})

                    if(env.rpg.allyTeam.members.filter(member => member.hp > 0).length == 0) { //ya died
                        page.melee.stop()
                        setTimeout(()=>advanceTurn(), 1500)
                    }
                }
            }
        })

        page.melee.el.classList.add('long')
    }
}

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


// FUNCTION
FPFight.prototype.start = function({koCallback, movesPerStep = 2, height = 7}) {
    if(body.classList.contains("in-melee")) throw 'already doing melee'
    this.movesPerStep = Number(movesPerStep)
    this.height = Number(height)
    this.koCallback = koCallback
    window.melee = this

    this.queue = []

    this.enemy = {
        name: "foe",
        slug: "enemy",
        position: 1,
        damage: 0,
        prepared: false,
        offBalance: false,
        posMult: 1,
        plan: []
    }

    this.player = {
        name: "BOZKO",
        slug: "player",
        position: 5,
        damage: 0,
        prepared: false,
        offBalance: false,
        posMult: -1 //determines direction of movement - player moves up, so -1 * all movement
    }

    this.turn = {}

    this.enemy.foe = this.player
    this.player.foe = this.enemy

    this.running = true
    this.paused = true
    
    MUI("prohibit")
    
    body.classList.add('in-melee')
    content.insertAdjacentHTML("beforeend", `
        <div class="fp fp-unsetcam fp-stopped">

            <div class="fp-grid-container">
                <div class="fp-crane">
                    <div class="fpgrid-look">
                        <div class="fpgrid"></div>
                    </div>
                </div>
            </div>

            <div class="fp-controls">
                <div class="fp-enemy-queue fp-queuelist"></div>

                <div class="fp-buttons">
                    <div class="offensive">
                        <button definition="${this.validMoves.strike.desc}" onclick="javascript:window.melee.enqueue('strike')">strike</button>
                        <button definition="${this.validMoves.advance.desc}" onclick="javascript:window.melee.enqueue('advance')">advance</button>
                    </div>
                    <div class="prepare">
                        <button definition="${this.validMoves.guard.desc}" onclick="javascript:window.melee.enqueue('guard')">guard</button>
                        <button definition="${this.validMoves.windup.desc}" onclick="javascript:window.melee.enqueue('windup')">wind up</button>
                    </div>
                </div>

                <div class="fp-queue">
                    <div class="fp-current-queue fp-queuelist"></div>
                    <div class="fp-queue-buttons">
                        <button class="go" onclick="javascript:window.melee.step(window.melee.queue)">go</button>
                        <button class="clear" onclick="javascript:window.melee.clearQueue()">clear</button>
                    </div>
                </div>
            </div>

            <div id="fp-declare">
                <!-- example:
                <div class="fp-declare player">IK::'advance'</div>
                <div class="fp-declare enemy">FOE::'advance'</div>
                <div class="fp-declare-winner enemy">FOE</div>
                -->
            </div>
        </div>
    `)

    //init element selectors
    this.el = document.querySelector('.fp')
    this.grid = document.querySelector('.fpgrid')
    for (let i = 0; i < this.height; i++) {
        this.grid.insertAdjacentHTML('beforeend', '<div class="fp-gridpiece"></div>')
    }

    this.el.querySelectorAll('button').forEach(el=>{
        el.addEventListener('mouseenter', ()=>{ play("obeskHover", 1, 0.5) })
        el.addEventListener('click', ()=>{ play("obeskClick", 0.75, 0.5) })
    })

    this.player.position = this.height - 2;

    //set up initial tiles
    [this.grid.children[0], this.grid.children[this.grid.children.length - 1]].forEach(tile=>{
        tile.classList.add('fp-damagepanel')
        tile.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        `
    })
    this.grid.insertAdjacentHTML(`beforeend`, `
        <figure id="fp-enemy" class="fp-ent">
            <div class="fp-golem">
                <div class="left fist"></div>
                <div class="right fist"></div>
            </div>
        </figure>
        <figure id="fp-player" class="fp-ent">
            <div class="fp-golem">
                <div class="left fist"></div>
                <div class="right fist"></div>
            </div>
        </figure>
    `)

    this.queueListEl = document.querySelector('.fp-current-queue')
    this.enemyQueueEl = document.querySelector('.fp-enemy-queue')
    this.enemy.golem = document.querySelector('#fp-enemy .fp-golem')
    this.player.golem = document.querySelector('#fp-player .fp-golem')

    this.gridContainer = document.querySelector('.fp-grid-container')
    this.gridContainer.style.setProperty("--stage-width", 1)
    this.gridContainer.style.setProperty("--stage-height", this.height)

    this.declare = document.querySelector('#fp-declare')
    
    this.updateProperties()
    this.generateEnemyPlan()

    //animate in
    setTimeout(()=> { this.el.classList.add('fp-start'); this.el.classList.remove('fp-stopped') }, 50)
    
    //finalize creation of active fight
    setTimeout(()=> {
        this.paused = false
        this.el.classList.remove('fp-unsetcam')
    }, 2000)
}

FPFight.prototype.animateStep = async function() {
    /* each step needs to go through a few animation segments: 
        1) WINDUP - player and enemy 'wind up', sorta telegraphing what they do (1s)

            all of these reach a sort of 'about to happen' pose
        2) DECLARE - the text saying what each side will do appears on screen, 'flying' in (1s)

        3A) CONTINUE - no clash, so just advance (no 4)

        3B) COLLIDE - if there was a dispute, the two clash just after text shows up, showing the winner (2s)
        4B) RESULT - send the winner/loser flying, leaving an 'ending' pose as time slows down again (1s)

        FINAL) RESET - if either entity is in their damage tile, we reset positions 
    */

    /* Step 1: WINDUP
        enemy rep and player hands are animated into an 'about to move/attack' pose
            advance - enemy tilts forward, arms come up. player does similar move
            strike - enemy rears an arm, player does same thing, starts to lower it
            wind up - arm raised back, ready to smash
            prepare - arms crossed, guarding
    */
    this.el.setAttribute('a_stage', 'windup'); await wait(50); //so anim_stage has a sec to apply transition rules
    this.enemy.golem.setAttribute('a', this.enemy.move)
    this.player.golem.setAttribute('a', this.player.move)
    
    this.debug ? await this.debugWait() : await wait(300)

    /* Step 2: DECLARE
        the moves that the enemy and player are planning on doing appear in the declaration tab
    */
    this.declare.insertAdjacentHTML(`afterbegin`, `
        <div class="fp-declare player">BOZKO::${this.player.move}</div>
        <div class="fp-declare enemy">FOE::${this.enemy.move}</div>
    `)
    await wait(100)
    this.declare.classList.add('flyin')
    this.debug ? await this.debugWait() : await wait(600)

    if(this.player.move == "windup") { this.player.golem.classList.add('prepared'); play('dull', 1.5, 1) }
    if(this.enemy.move == "windup") { this.enemy.golem.classList.add('prepared'); play('dull', 1.5, 1) }

    /* Step 3 branch: COLLIDE or CONTINUE
        if there's no dispute, we just CONTINUE since nothing interesting is happening this turn.
        Otherwise, we continue onwards with the animation.
    */        
    if(this.turn.dispute) { //3B - COLLIDE - moves are animated up to the second they hit, then it pauses and the winner of the step is declared
        //this is the moment when fists meet
        this.el.setAttribute('a_stage', 'collide');

        ratween(env.bgm, 0.5, 300)
        if(this.distance > 1) { //if one person is lunging, they should visibly come closer
            let preparedCount = this.turn.loser.prepared + this.turn.winner.prepared
            let baseWeight = (this.distance - 1) / (2 + preparedCount * 0.5);
            
            this.gridContainer.style.setProperty(`--${this.turn.winner.slug}-position`, this.turn.winner.position + ((this.turn.winner.prepared ? baseWeight * 1.5 : baseWeight)) * this.turn.winner.posMult)
            this.gridContainer.style.setProperty(`--${this.turn.loser.slug}-position`, this.turn.loser.position + ((this.turn.loser.prepared ? baseWeight * 1.5 : baseWeight)) * this.turn.loser.posMult)

        } else { //otherwise, they should battle slightly for the same space
            this.gridContainer.style.setProperty(`--${this.turn.winner.slug}-position`, this.turn.winner.position + (0.5 * this.turn.winner.posMult))
            this.gridContainer.style.setProperty(`--${this.turn.loser.slug}-position`, this.turn.loser.position - (0.5 * this.turn.loser.posMult))
        }

        this.declare.insertAdjacentHTML('beforeend', `
            <div class="fp-declare-winner ${this.turn.winner.slug} ${this.turn.dispute == "power clash" ? "both" : ""}" type="${this.turn.dispute}">${this.turn.dispute == "power clash" ? "both" : this.turn.winner.name}</div>
        `)

        this.el.classList.add('shake')
        if(this.turn.winner.slug == "player") this.el.classList.add('forwardtilt'); else this.el.classList.add('backtilt')
        switch(this.turn.dispute) {
            case "block":
                play('hit', 0.75)
                if(this.turn.winner.justSiphoned) {
                    this.turn.winner.justSiphoned = false
                    setTimeout(()=>{this.turn.loser.golem.classList.add('prepared'); play('dull', 1.5, 1)}, 200)
                } else {
                    setTimeout(()=>play('guard', 0.75), 200)
                }
            break
            case "power clash":
                play('crit', 0.5)
            break
            case "position":
                play('hit', 0.75)
            break
            case "clash":
                play('stab', 0.75)
            break
        }

        await wait(100)
        setTimeout(()=>this.el.classList.remove('shake'), 400)

        this.declare.classList.add('win')
        ratween(env.bgm, 1, 300)
        this.debug ? await this.debugWait() : await wait(500)
        this.el.classList.remove('backtilt', 'forwardtilt')

        /* Step 4B: RESULT
            finally, the collision reaction classes are assigned, and we continue
            //on a power clash, both winner and loser should have knockback
            //on a block, the loser should wince, and attacker should recoil a little
            //on a regular clash, loser should have knockback, winner should have ending class based on the move (prepared attack, prepared move, attack, move)
        */
        this.el.setAttribute('a_stage', 'result')
        await wait(50)

        switch(this.turn.dispute) {
            case "block":
                this.turn.winner.golem.setAttribute('a', 'knock')
                if(this.turn.winner.move == "advance") {
                    this.turn.loser.golem.setAttribute('a', 'knock')
                    this.turn.winner.golem.setAttribute('a', 'strike')
                } else {
                    this.turn.loser.golem.setAttribute('a', 'block')
                    this.turn.winner.golem.setAttribute('a', 'knock')
                }
            break
            case "power clash":
                this.turn.winner.golem.setAttribute('a', 'knock')
                this.turn.loser.golem.setAttribute('a', 'knock')
            break
            case "position":
                this.turn.winner.golem.setAttribute('a', 'advance')
                this.turn.loser.golem.setAttribute('a', 'knock')
            break
            case "clash":
                this.turn.winner.golem.setAttribute('a', this.turn.winner.move) //advance and strike have result classes
                this.turn.loser.golem.setAttribute('a', 'knock')
            break
        }
        
        this.turn.winner.golem.classList.remove('prepared'); 
        if(this.turn.dispute != "block") this.turn.loser.golem.classList.remove('prepared'); 

    } else { //3A - CONTINUE - no 'winner' needs to be shown or animated
        this.el.setAttribute('a_stage', 'continue')
    }

    [this.player, this.enemy].forEach(ent => {
        this.moveTo(ent, ent.endPosition)
    })

    this.debug ? await this.debugWait() : await wait(500)

    //start cleanup
    this.declare.classList.remove('active', 'win', 'flyin')
    await wait(400)
    this.declare.innerHTML = ""

    //if the enemy or player entered the damage zone, reset their positions and add to the counter
    let reset = false
    if(this.player.position == this.height - 1) { this.player.damage += 1; reset = true; this.player.justDamaged = true; console.log('player is', this.height - 1, 'resetting') }
    if(this.enemy.position == 0) { this.enemy.damage += 1; reset = true; this.enemy.justDamaged = true; console.log('enemy is 0, resetting') }

    if(reset) {
        this.moveTo(this.player, this.height - 2)
        this.moveTo(this.enemy, 1)

        try{
            playCombatCrit('shot5')
        } catch(e) { play('shot5', 0.75, 1) }            
        
        if(this.enemy.justDamaged) this.enemy.golem.setAttribute('a', 'downed')
        if(this.player.justDamaged) this.player.golem.setAttribute('a', 'downed')

        if(typeof this.koCallback == "function") {
            console.log('calling KO callback with,', this.player.justDamaged, this.enemy.justDamaged)
            this.koCallback({playerDamaged: this.player.justDamaged, enemyDamaged: this.enemy.justDamaged})
        }
        this.enemy.justDamaged = false
        this.player.justDamaged = false

        this.el.classList.add('shake')
        setTimeout(()=>this.el.classList.remove('shake'), 300)
    }
    
    return reset
}



// DIALOGUE
console.log(env.dialogues["boss_tut"])
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
            WAIT::250
            AUTOADVANCE::
    
____SHOWIF::[["pa|ikgolem", false]]
    sourceless
        in our stilled time, i observe their golem
        itzil asleep within, but karik, a kiv, directing the body
        yes, they will surely know what to do
        i instruct the timestopper to release the flow of time for an instant to call out,
    
    akizet
        kari--!
            WAIT::250
            AUTOADVANCE::
____END

    bozko
        BOZKO SMASH
    
    sourceless
        bozko?!
        he shoves past karik and itzil
        pushing them aside, he incidentally shove them into the dull pillar
            EXEC::env.ACTIONS['dull_pillard'].exec(null, env.rpg.allyTeam.members.find(({slug}) => slug == 'ikgolem'))
        i can see in how the foundation golem hovers - it is--
            WAIT::250
            AUTOADVANCE::

    bozko
        BOZKO SMASH

    sourceless
        a kelnit, stepped into a spar for--
            WAIT::250
            AUTOADVANCE::

    bozko
        BOZKO SMASH

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

console.log(env.dialogues["boss_half"])
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
            WAIT::250
            AUTOADVANCE::

    bozko
        BOZKO SMASH!!
    
    sys
        NOTICE::'instruction queue lengthened to 3'
        NOTICE::'3 commands now required to proceed'

    RESPONSES::akizet
        fight!!<+>END
            FAKEEND::(continue fight)
`)

console.log(env.dialogues["boss_laststand"])
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
            WAIT::250
            AUTOADVANCE::

    bozko
        BOZKO
            WAIT::1500
            AUTOADVANCE::
        SMAAASH!!!!
    
    sys
        NOTICE::'KO enemy once to destroy them'

    RESPONSES::akizet
        fight!!<+>END
            FAKEEND::(begin melee)
`)

console.log(env.dialogues["boss_closeout"])
env.dialogues["boss_closeout"] = generateDialogueObject(`
start
    sourceless
        the golem is forced into the destructive column one last time
            EXEC::ratween(env.bgm, 0.5, 10000)
        its fists are little more than melted blobs of sludge now
            EXEC::env.stages['g_boss'].hideBoss();
        they fall away, unable to endure any more damage - and it is finally without defense
        bozko rears the great shell of their body into the construct
        unable to block any more, the constructor's head is smashed
            EXEC::page.melee.fakeAttack()
        whatever intelligence it had is crushed, causing the rest of its body to fall limp,
        the impact enough to briefly tilt the chamber
        i nearly celebrate, but watch on as bozko slam their head into the ground,
            EXEC::page.melee.fakeAttack()
        smashing it with their body, over and over...
            EXEC::page.melee.fakeAttack()

    akizet
        bozko--?
            WAIT::250
            AUTOADVANCE::
    
    bozko
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
            WAIT::1500
            AUTOADVANCE::
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
            WAIT::1500
            AUTOADVANCE::
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
            WAIT::1500
            AUTOADVANCE::
    
    akizet
        bozko!!
    
    bozko
        BOZKO SMASH
            EXEC::page.melee.fakeAttack()
    
    sourceless
        the noise does not stop until there is nothing left for him to slam into
            EXEC::page.melee.fakeAttack()

    RESPONSES::akizet
        ...<+>END
            FAKEEND::(end combat)
            EXEC::cutscene(true);endCombat(env.rpg.enemyTeam);page.melee.stop();specialCam(false)

END::cutscene(false);startDialogue('bossclear')
`)

env.dialogues["bossclear"] = generateDialogueObject(`
start
____SHOWIF::'gameplay_off'
    sys
        ATTENTION::"thoughtform combat gameplay bypassed";'toggle within system menu if desired'
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

    sourceless
        bozko shoves them off to the side again.. this time the shared body collapsing onto the floor 
            EXEC::vnp({ikgolem: "hide", bozko: "show", bg: true})
    
    sourceless quiet
        BOZKO... RIP!!
            EXEC::vn.fadeChars(true);vnp({bg: false});play('crit', 0.75)
    
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
    
    moth
        oh, interesting...
        this one doesn't end in a hard crash
        but it isn't incoherent, like the interview was...
        so you can still look around some. nice
        i'll keep an eye on activity, but it looks like a good time for a break
        if i see any changes in these memories, i'll let you know
        you can probably save the iteration again, but...
        i don't think there's anything else to do yet

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


// DEBUG
// startDialogue('boss_half')


    // scrapped
    // this was gonna be a whole bit but like i figured nah not enough time + boring and repetitive strain injury
    /*
env.dialogues["bozko"] = generateDialogueObject(`
loop
    RESPOBJ::bozko_resp

start
    sourceless
        bozko hovers with all the flat expression of a golem
            EXEC::vnp({hideStage: true, bozko: "show focus"})
        something is so wrong... he is not himself
            SHOWIF::['PAGE!!boztalk', false]
        i have never seen self-alteration myself before, but this feels like it
            SHOWIF::['PAGE!!boztalk', false]
        i wish there was more i could do for him...
            SHOWIF::'PAGE!!boztalk'
        he notices my staring, and stares back
    
    RESPOBJ::bozko_resp

survival
    akizet
        bozko!
            EXEC::change("PAGE!!boztalk", true)
        how have you been able to make it down here?
            WAIT::250
            AUTOADVANCE::

    bozko
        bozko smash

    akizet
        even with the timestopper, we...
        makes sense
    
    sourceless
        i see some sparse expression in his receptors
        a backwards pull, maybe some twist - he does not want to talk about it
        but i have to talk to him about something
        he is not well
        and it is like the tir say--reality withdrawal is the only sure path to final death
        well, it was...
        oh! he lifts his floating arms
        the twist in his receptors grows more severe as he eyes a gauntlet
    
    bozko
        bozko smash... bozko bozko smash bozko
        ...bozko bozko bozko smash smash
        bozko SMASH
        
    sourceless
        is it that simple? no...
        there is something else
        he fights like an automaton, with such practice
        i saw it when he saved cavik - the speed with which he helped...
        it was beyond natural
    
    akizet
        but--
    
    bozko
        bozko bozko
        bozko smash bozko bozko
        bozko smash, smash...
        smash smash, bozko, smash
        smash, smash bozko bozko
        bozko smash <em>bozko</em> bozko smash, smash...
    
    sourceless
        he clutches his face, growing silent
    
    akizet
        bozko, you--you do not have to--
    
    bozko
        bozko smash, bozko bozko
        bozko...
        bozko bozko
        bozko smash smash, smash smash smash
        bozko smash smash bozko smash
        bozko... bozko smash
        smash bozko, bozko smash... bozko smash,
        smash bozko bozko bozko
        bozko smash, smash bozko...
    
    sourceless
        the twist in his receptors becomes undone, 
        and in his voice is the sole strong expression i have heard from him this gaze
        it is anger--spite, maybe disgust
    
    bozko
        bozko's bozko bo bozko bozko bo bozko bozko smash

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

notalone
    akizet
        bozko...
        you are not alone in this
        do not try to rewrite yourself just for our sakes
        we have made it this far--and together, we will finish this
        
    bozko
        yes...
        i understand the strength of the timestopper
        but akizet, i cannot let anyone else meet their final deaths
        not even a chance can remain
        i will do whatever it takes to get us all out
        the aftermath, whatever happens to me... does not matter
    
    akizet
        yes it does!!
        
    sourceless
        ah--i must be careful of my tone...
        he hovers now over a razor's edge
        a spiral of self modification, or a spiral of memory re-integration
        it is only the balance he has managed so far that has saved him
        bozko...
    
    akizet
        just let us share the burden
        if you want to help us escape, we must truly work together
        and that means you must be well
        please, just be careful
    
    bozko
        i will, akizet

    RESPONSES::akizet
        ...<+>loop
            FAKEEND::(back)

theory
    sourceless
        with the state he is in
        is it inappropriate to ask him his thoughts?
        the more i can speak with him, the more i can reach him, so...
        i will try it!
    
    akizet
        bozko!
        what do you think is happening? the cause of all this...
        we have discussed it a little, but
    
    sourceless
        i find myself trailing off as he prepares to respond
        in his stance, his gaze, his receptors
        all at once comes a crushing darkness
        
    bozko
        i cannot begin to speculate how
        but it is an infestation, spreading outwards...
        since even golems cut off from the network were hostile
        so the source must be destroyed--the groundsmindry
        and i will ensure that whoever has orchestrated this does not escape

    RESPONSES::akizet
        we will, bozko<+>loop
            FAKEEND::(back)
`) */