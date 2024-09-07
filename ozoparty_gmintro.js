/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : OZOPARTY
BY : newmoonwastaken (@newmoonwastaken on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


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


// DIALOGUE
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