/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : Random Velzie Event
BY : niaandovah (@niaandovah on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// FUNCTIONS
    // velzie jumpscares you and talks
function forceVelzieOnThisWaywardSinner() {
    flash(true);
    setTimeout(()=>{env.recentSfx = false;play('criticalError', 1)}, 75)

        // HTML/CSS styling for velzie
    velzie = new DocumentFragment();
    velzieCont = document.createElement('div');
    velzieCont.id = 'vello';

    face = document.createElement('div');
    bg = document.createElement('div');

    face.className = 'face';
    face.id = 'velzieface';
    bg.className = 'bg';
    velzieCont.appendChild(face);
    velzieCont.appendChild(bg);

    velzie.append(velzieCont);

    velzieStyling = document.createElement('style');
    velzieStyling.id = "velRanStyle"
    velzieStyling.innerHTML = `
        #vello {
            position: fixed;
            width: 100%;
            top: 0% !important;
            left: 0% !important;
            height: 100%;
            z-index: 10;
            pointer-events: none;
            display: none;
            transition: opacity 10s ease-in-out;
        }

        #vello .face {
            width: 10%;
            height: 10%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;
            background-image: url(/img/sprites/velzie/smile2.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            filter: invert(1);
            mix-blend-mode: exclusion;
        }

        #vello .bg {
            background-image: url(/img/local/ocean/depths/warp.gif), url(/img/textures/corrurippletran.gif), url(/img/textures/badstatic.gif);
            width: 150vmax;
            height: 150vmax;
            background-size: 100%, auto, auto;
            background-position: center;
            background-color: black;
            background-repeat: no-repeat, repeat, repeat;
            animation: SPIN 30s linear infinite;
            border-radius: 100%;
            overflow: hidden;
            transform-origin: center;
            position: absolute;
            top: 50%;
            left: 50%;
            --baseTransform: translate(-50%, -50%);
        }

        .vello #vello {
            display: block;
            opacity: 100 !important;
        }
    `

    document.head.appendChild(velzieStyling);
    document.body.appendChild(velzie);

        // THINGS HAPPEN HERE

    setTimeout(()=>{document.body.classList.add('vello')}, 1000);
    setTimeout(()=>startDialogue('random_velzie'),1000)
}

    // kicks & redirects
function velzieOut(url) {
    setTimeout(()=>{document.querySelector("#vello").remove()
    endDialogue()
    document.querySelector("#velRanStyle").remove()}, 1499)
    
    
    setTimeout(()=>{
    flash(true);
    play('criticalError', 0.5)
    readoutAdd({message: `CRITICAL_ERROR::'severe data overload'; 'ejecting'`, name:"sys"})
    setTimeout(()=>{window.location = url; flash(false)}, 500)
    }, 1000)
}


//DIALOGUE
    // randomly decides what dialogue begins
velzieDialogues = [
`start
    unknown
        interloper...
            EXEC::flash(false)
        you have been connected for a while
        ...
        i am concerned
        forgive me for this
            EXEC::velzieOut('https://www.google.com/')
            WAIT::5000`,
`start
    unknown
        BOO
            EXEC::flash(false); velzieOut('https://www.google.com/')
            WAIT::5000`,
`start
    unknown
        interloper...
            EXEC::flash(false)
        have you had fun
        corru dot observing?
    RESPONSES::self
        yes<+>correct
        no<+>wrong

correct
    unknown
        good
        you should go support the developer interloper
        forgive me for this
            EXEC::velzieOut('https://ko-fi.com/corruworks')
            WAIT::5000

wrong
    unknown
        ...
            EXEC::velzieOut('https://www.google.com/')
            WAIT::5000`,
`start
    unknown
        interloper
            EXEC::flash(false)
        hello
        how are you
        ...
        i am good
        thank you for asking
        ...
        i am trying to learn small talk
        is it working.
    RESPONSES::self
        i guess<+>guess
        not really<+>notReally
        i don't like small talk<+>smallTalk

guess
    unknown
        that makes me happy
        ...
        thank you interloper
            EXEC::velzieOut('https://corru.works/img/posts/jobserver.gif')
            WAIT::5000

notReally
    unknown
        velzie kill me now
        i mean
        well
        not
        velzie as in me
        whatever
        fires of hell for you interloper
            EXEC::velzieOut('https://www.google.com')
            WAIT::5000

smallTalk
    unknown
        ah
        that is fair
        i suppose
        ...
        i am sorry interloper
        ...
        i will let you leave now
        ...
            EXEC::velzieOut('https://www.google.com')
            WAIT::5000`,
`start
    unknown
        interloper...
            EXEC::flash(false)
    self
        velzie.
    moth
        wait is that velzie again?
        i cant see it on my logs
        what is it doing here?
    unknown
        i apologise for intruding
        it was not my intent to scare you
        i just wanted to say
        happy birthday interloper
    self
        its not my birthday
    unknown
        w
        what
        but that daemon said
        ...
        oh.
        i see.
        i have been lied to
        forgive me interloper
        i have something to attend to
            EXEC::velzieOut('https://www.google.com/')
            WAIT::5000`,
`start
    unknown
        interloper
            EXEC::flash(false)
    self
        hello velzie
    unknown
        forgive me interloper
        for appearing unnanounced
        i realise that my appearance has marked
        ...
        unpleasent times for you
        but i wish to help you
    moth
        dude is that velzie?
        again?
        what does it want?
    self
        it's saying that it wants to help me
        it apologised again
    moth
        entertain it i guess
        just be careful alright bud?
    unknown
        i have something for you interloper
        but i must know
        how do you feel about funfriend?
    RESPONSES::self
        hate it.<+>hate
        i love funfriend!<+>love
hate
    unknown
        i see
        i have found something you may take your frustrations out on
        i hope it can be of use to you then
        ...
            EXEC::velzieOut('https://corru.store/en-aud/products/funfriend')
            WAIT::5000

love
    unknown
        i see
        i have something for you then
        since you like it so much
        for reasons I cannot understand
        ...
            EXEC::velzieOut('https://corru.store/en-aud/products/funfriend')
            WAIT::5000`]  

env.dialogues["random_velzie"] = generateDialogueObject(velzieDialogues.sample());


// MOD LOAD
if(Math.floor(Math.random() * 1000) < 20) {
    forceVelzieOnThisWaywardSinner();  
} else {
    console.log('velzie avoided');  
}