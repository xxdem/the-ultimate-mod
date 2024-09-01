/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : kazki & bozko VO (discovery) + kazki VO (suspicion)
BY : max :ᶅ (@the_dem on discord)

*/


// DIALOGUE
env.dialogues["d2_kazki"] = generateDialogueObject(` 
start
    sourceless
        SURPRISINGLY, KAZKI STANDS WITHIN THE VERY SAME RELOCATOR AS ME
            EXEC::pauseSwapCam(true)
        THE CHANCES OF THIS ARE SLIM, BUT SHE APPEARS TO BE LOITERING, WAITING FOR SOMETHING
        IS SHE WAITING FOR ME?
        HELD WITHIN ONE OF HER BRANCHED RECEPTORS IS A COMMUNICATIONS CYST
        WITH THE OTHER, SHE GIVES ME A KIND GREETING
            EXEC::vnp({hideStage: true, kazki: "show"})
    
    kazki
        hii akizet!
            EXEC::playVoice('start1')
    
    akizet
        kazki!
            EXEC::kazkivoicemap.stop()
        this is a surprise--i do not often see you linger in this segment
        what brings you here?
    
    kazki
        ohh, i am waiting for the crew!
            EXEC::playVoice('start2')
        they are having their little expedition, 
            EXEC::playVoice('start3')
        and i am headed to the shores to discuss the next polygonation spire... again
            EXEC::playVoice('start4')
        but!! we are all setting out together
            EXEC::playVoice('start5')
    
    akizet
        ah, of course
            EXEC::kazkivoicemap.stop()

    RESPOBJ::d2_kazkiresp

creature
    akizet
        how is the little creature faring?
            EXEC::kazkivoicemap.stop()

    kazki
        it is alive!!
            EXEC::playVoice('creature1')
        it does not move very much... but it reacts very quickly to my prodding!
            EXEC::playVoice('creature2')
        i have been speaking with a contact of mine, a bright cousin
            EXEC::playVoice('creature3')

    sourceless
        SHE WAGS THE COMMUNICATOR-BEARING RECEPTOR SLIGHTLY
            EXEC::kazkivoicemap.stop()

    kazki
        and she says it is a 'arthropod'!
            EXEC::playVoice('creature4')
        so--i thought, i will call it 'arthur'!
            EXEC::playVoice('creature5')
        after the bureau construction contact!
            EXEC::playVoice('creature6')

    sourceless
        AH--ARTHUR
            EXEC::kazkivoicemap.stop()
        A JITTERY ONE...
        IF ONLY I COULD BE THERE WHEN SHE OPENS HER HEAD TO SHOW THE CREATURE WITHIN TO HIM
        WAIT--WHAT WAS THAT SHE SAID?
    
    akizet
        you are on casual speaking terms with a bright cousin?
    
    sourceless
        WITH HER LARGE RECEPTORS, HER BASHFUL EXPRESSION IS DIFFICULT TO HIDE
        SHE MUST THINK I WILL TAKE ISSUE--WHY DOES SHE ALWAYS ASSUME THIS?

    akizet
        kazki, you know it is not an issue if you are
        the silent veil has long been drawn
        but--how are you communicating? 
    
    kazki
        oh!!
            EXEC::playVoice('creature7')
        you have not heard?
            EXEC::playVoice('creature8')
        it is a new development by the θjut
            EXEC::playVoice('creature9')
        very recent! these new communicators...
            EXEC::playVoice('creature10')
        they allow a sort of connection to the human collective!
            EXEC::playVoice('creature11')
        the 'internet' they call it!
            EXEC::playVoice('creature12')
        it is very flat... and there are many problems with the connection
            EXEC::playVoice('creature13')
        but it is not so different from ours aside from that!
            EXEC::playVoice('creature14')

    sourceless
        HOW COULD THAT POSSIBLY WORK?
            EXEC::kazkivoicemap.stop()
        THEIRS IS NOT DICTATED BY THOUGHT...
        AH, IT DOES NOT MATTER - SHE WOULD NOT KNOW ANYWAY

    akizet
        and you are using it to speak with a bright cousin?
    
    kazki
        yes!!
            EXEC::playVoice('creature15')
        is that not remarkable?? it is COOL!!!
            EXEC::playVoice('creature16')

    akizet
        fascinating...
            EXEC::kazkivoicemap.stop()
        i must see about getting one of those

    RESPOBJ::d2_kazkiresp

cyst
    sourceless
        THIS SHOULD BE EASY
        KAZKI SIMPLY CANNOT HIDE ANY EMOTION

    akizet
        kazki, did you have a cyst delivered to my room recently?
    
    kazki
        huh? no!
            EXEC::playVoice('cyst1')

    sourceless
        NOTHING... IT IS NOT HER
            EXEC::kazkivoicemap.stop()

    kazki
        i have been so busy coordinating all of this!
            EXEC::playVoice('cyst2')
        but i do have a few cysts i need to return to you...
            EXEC::playVoice('cyst3')
        what was it?
            EXEC::playVoice('cyst4')
    
    akizet
        ah, it was nothing of note, a mundane collection of memories
            EXEC::kazkivoicemap.stop()
        
    kazki
        i can ask around for you!
            EXEC::playVoice('cyst5')
    
    sourceless
        …¤,¿…¶¡Øn
            EXEC::kazkivoicemap.stop()

    funfriend
        RECOMMENDATION: DEFINITELY STOP THAT NOW

    sourceless
        I HAD NOT CONSIDERED THIS POSSIBILITY...
        BUT SHE ALWAYS GETS INVOLVED
        IF WORD SPREADS, THE SPEAKER WILL SUSPECT SOMETHING STRANGE IS HAPPENING

    akizet
        ah--no, no no
        no no, it is all right
    
    kazki
        are you sure??
            EXEC::playVoice('cyst6')
        i have my communicator on right now, i could help!
            EXEC::playVoice('cyst7')
    
    sourceless
        I WAVE MY RECEPTORS NEGATIVELY WITH PERHAPS TOO MUCH EMPHASIS, AND SHE RELENTS
            EXEC::kazkivoicemap.stop()
        SHE SMILES LIKE A BRIGHT COUSIN WOULD, HER RECEPTORS TAKING ON A TEASING POSTURE

    kazki
        oh, i think i get it
            EXEC::playVoice('cyst8')
        it was one of <em>those</em> cysts
            EXEC::playVoice('cyst9')

    akizet
        no!! no no no
            EXEC::kazkivoicemap.stop()

    kazki
        uh-huh!!
            EXEC::playVoice('cyst10')

    funfriend
        ACTUALLY MAYBE LET HER THINK THAT SO SHE WILL STAY QUIET
            EXEC::kazkivoicemap.stop()
    
    sourceless
        UUGH
        YOU ARE RIGHT... FINE
        I WILL ABIDE THIS EMBARRASSMENT
    
    akizet
        ...
        ok, it was,
        but please do not tell anyone
        
    kazki
        do not worry!!
            EXEC::playVoice('cyst11')
        it is between us and the arthropod!
            EXEC::playVoice('cyst12')

    RESPOBJ::d2_kazkiresp

bye
    akizet
        bye kazki!
            EXEC::kazkivoicemap.stop()

    kazki
        bye!!
            EXEC::playVoice('bye')
    
    RESPONSES::akizet
        leave<+>END
            EXEC::pauseSwapCam(false); kazkivoicemap.stop()
`)

env.dialogues["d1_kazkibozkoresp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        our focus approaches<+>focus
            EXEC::change('PAGE!!d1_kbcollected', true);bozkokazkivoicemap.stop()
        what was that about?<+>story
            EXEC::bozkokazkivoicemap.stop()
        anything happening?<+>talk
            EXEC::bozkokazkivoicemap.stop()
        fare well for now<+>END
            EXEC::specialCam(false);pauseSwapCam(false);vn.done();bozkokazkivoicemap.stop()
`)

env.dialogues["d1_kazkibozko"] = generateDialogueObject(` 
start
    sourceless
        BOZKO AND KAZKI IDLE NEAR THE INNER WALL, THEIR CHATTER DROWNED OUT BY THE NUMEROUS OTHERS NEARBY
            EXEC::pauseSwapCam(true)
        KAZKI'S BRANCHED RECEPTORS GESTICULATE AS WILDLY AS HER HANDS WHILE SHE SPEAKS TO BOZKO
        HIS FOCUS LAY MOSTLY UPON THE <span definition="NOTE::'partial translation';'implied closest functional equivalent';'technological implication'">WINDOW</span>, OBSERVING THE COUSINS' RESEARCH VESSEL
        HER TALE BECOMES MORE DISTINCT AS I APPROACH
    
    kazki
        ... so i said, it is because my larval form was <span definition="ERROR::TRANSLATION_FAILED:'no equivalent internal meaning';'no relevant inherited context'::ROMANIZATION SUCCESSFUL">tir</span>! and i told him of the function that entails...
            EXEC::playVoice('start1kazki')
        i even talked a little about that story from the kozazni excavation--you know the one, ah, when i was first starting work there
            EXEC::playVoice('start2kazki')
    
    bozko
        oh, no
            EXEC::playVoice('start1bozko')

    kazki
        and while i was saying these things, my funfriend was attempting to warn me about something, but i kept talking...
            EXEC::playVoice('start3kazki')
        and then when i was done, i checked to see what it was, and it was telling me to stop! 
            EXEC::playVoice('start4kazki')
        he was apparently expressing terror on his face! as though i might drench him in acid at random! 
            EXEC::playVoice('start5kazki')
        ahahaha!!
            EXEC::playVoice('start6kazki')

    sourceless
        BOZKO CHUCKLES AND ROLLS HIS RECEPTORS SLIGHTLY
            EXEC::bozkokazkivoicemap.stop()
        HE LOOKS FROM THE WINDOW TO KAZKI, WITNESSING MY APPROACH INCIDENTALLY
        WITH ANOTHER LITTLE RECEPTOR GESTURE, KAZKI TURNS TO FACE ME AS WELL, DELIGHTED
            EXEC::specialCam('kazkibozko');vnp({bg: true, kazki: "show", bozko: "show"})

    bozko
        hello, akizet
            EXEC::playVoice('start2bozko')

    kazki
        hi akizet!!
            EXEC::playVoice('start7kazki')
    
    akizet
        hello my friends
            EXEC::bozkokazkivoicemap.stop()
    
    RESPOBJ::d1_kazkibozkoresp
    
story
    sourceless
        I CANNOT CONTAIN MY CURIOSITY
        KAZKI'S STORIES, EVEN IF HYPERBOLIC, ARE ALWAYS ENTERTAINING

    akizet
        what was that story you were telling, kazki?
    
    sourceless
        HER BRANCHED RECEPTORS FAN OUTWARDS EXCITEDLY

    kazki
        ah! i was in the nation of australia recently! 
            EXEC::playVoice('story1kazki')
        for the polygonation spire meeting, you see
            EXEC::playVoice('story2kazki')
        it went well, but my contact was curious, because he had not seen a once-tir before, 
            EXEC::playVoice('story3kazki')
        and so he had a number of questions unrelated to the construction approval
            EXEC::playVoice('story4kazki')
        mostly about my receptors...
            EXEC::playVoice('story5kazki')
        which!! by the way! the construction was approved!
            EXEC::playVoice('story6kazki')
    
    bozko
        through some giggle of velzie, it occurred to her to share the events of her early larval work
            EXEC::playVoice('story1bozko')
    
    sourceless
        THE KOZAZNI EXCAVATION STORY...
            EXEC::bozkokazkivoicemap.stop()
        OF COURSE A CLUELESS BRIGHT COUSIN WOULD FEAR FOR THEIR LIFE AFTER HEARING THAT

    kazki
        it was in good nature! he found it funny after i explained away his fears!
            EXEC::playVoice('story7kazki')
    
    akizet
        i say this with a deep respect, kazki,
            EXEC::bozkokazkivoicemap.stop()
        with how much you share so readily with the cousins,
        your diplomatic successes always come as a surprise

    RESPOBJ::d1_kazkibozkoresp
    
talk
    akizet
        my friends, what news do you carry?
        for yourselves, of course
        we have the imminent focus to share our works
    
    sourceless
        BOZKO PEERS INTO THE ESTIMATION OF THE <span definition="NOTE::'partial translation';'implied closest functional equivalent';'technological implication'">WINDOW</span>
    
    bozko
        outside of our works,
            EXEC::playVoice('talk1bozko')
        i have been observing the creatures of the water nearby
            EXEC::playVoice('talk2bozko')
        a few dispatched <span definition="NOTE::'partial translation';'implied closest cultural equivalent'">golems</span> with relays
            EXEC::playVoice('talk3bozko')
        here, look at this--see how they form great organized clouds?
            EXEC::playVoice('talk4bozko')

    sourceless
        BOZKO REACHES INTO THE WINDOW, DISRUPTING THE DISPLAY, TO PULL A CONNECTIVE CYST FROM ITS INTERNAL DOCK
            EXEC::content.classList.add('bozkoceptor');vnp({fade: true});bozkokazkivoicemap.stop()
        HE AFFIXES IT TO HIS CLOSEST RECEPTOR, AND ADJUSTS THE DISPLAY TO A RECOLLECTION
        THE WINDOW'S COLORS RIPPLE UNTIL THEY FIX UPON A MENTAL PROJECTION
            EXEC::content.classList.add('fishies')
        IT IS AS HE SAYS - A CLOUD OF IMPECCABLY ORIENTED WATER INHABITANTS
        HOW DO THEY DO IT? 

    akizet
        remarkable

    bozko
        and i am not the sole observer of the bright world's creatures among us
            EXEC::playVoice('talk5bozko')
    
    sourceless
        BOZKO RETURNS THE CONNECTOR BENEATH THE WINDOW'S SURFACE
            EXEC::content.classList.remove('bozkoceptor');bozkokazkivoicemap.stop()
        THE IMAGE SOON DISSIPATES
            EXEC::content.classList.remove('fishies');vnp({fade: false})
        HE GESTURES TOWARDS KAZKI TEASINGLY AFTER A MOMENT'S SILENCE

    kazki
        bozko!
            EXEC::playVoice('talk1kazki')
    
    bozko
        although, she is taking a more live approach
            EXEC::playVoice('talk6bozko')

    kazki
        bozko!!
            EXEC::playVoice('talk2kazki')

    sourceless
        HER RECEPTORS CURL INTO THEMSELVES, LIKE BALLED FISTS
            EXEC::bozkokazkivoicemap.stop()

    kazki
        fine, fine!
            EXEC::vnp({kazki: "focus"}); playVoice('talk3kazki')
        it is an experiment i am doing, akizet
            EXEC::playVoice('talk4kazki')
        well, hmm, sort of
            EXEC::playVoice('talk5kazki')
        on my trip to australia i found this little creature skittering around on a window
            EXEC::playVoice('talk6kazki')
        so, i looked closer... and it had eight legs, vibrant stripes, and many large eyes! and it was staring at me!
            EXEC::playVoice('talk7kazki')
        it even had armored skin, just like a <span definition="NOTE::'partial translation';'inherited description-generated noun'">cave keeper!</span>
            EXEC::playVoice('talk8kazki')
        and and i thought, 'ah, how cute!' and i wanted to keep it!
            EXEC::playVoice('talk9kazki')

    sourceless
        WITH HOW EMOTIONALLY SHE WEIGHTS HER WORDS
            EXEC::bozkokazkivoicemap.stop()
        IT IS LIKE SHE EXPECTS ME TO SAY SHE SHOULD PUT IT BACK

    bozko
        so she made a cavity in her head
            EXEC::vnp({kazki: "defocus"}); playVoice('talk7bozko')
    
    akizet
        what? are you--?
            EXEC::bozkokazkivoicemap.stop()

    kazki
        i am getting to that!!
            EXEC::vnp({kazki: "focus"}); playVoice('talk10kazki')
        so... i went to pick it up, but it leaped into my hand!
            EXEC::playVoice('talk11kazki')
        like it wanted to be with me! ah, but, by this time, some bright cousins were coming to see what i was doing...
            EXEC::playVoice('talk12kazki')
        so i excused myself and went back to my vessel
            EXEC::playVoice('talk13kazki')
        and i realized--there is no life support in our vessels, so, if i wanted to keep it alive... i had to think!
            EXEC::playVoice('talk14kazki')
        with my head!
            EXEC::playVoice('talk15kazki')
    
    akizet
        so you hollowed out your head,
            EXEC::bozkokazkivoicemap.stop()
        and are keeping it in an air pocket?

    kazki
        exactly!! do you want to see it???
            EXEC::playVoice('talk16kazki')
    
    sourceless
        MY RECEPTORS DROOP SLIGHTLY, AND I CHUCKLE EXASPERATEDLY
            EXEC::bozkokazkivoicemap.stop()
        BOZKO FINDS MY REACTION VERY FUNNY
        INDEED, THIS IS BOTH A PROBLEM AND SOLUTION THAT ONLY A ONCE-TIR WOULD COME TO
    
    akizet
        of course i do

    sourceless
        KAZKI DIPS HER HEAD FORWARD, THE FEATURES OF HER FACE MELTING AWAY, AND THE COLOR OF HER SKIN FADING TO TRANSPARENCY
            EXEC::specialCam('kazkihead');content.classList.add('kazkihead')
        IT IS EMPTY, CLEAR AS THE BRIGHT COUSINS' GLASS, CONTAINING ONLY A SPACIOUS SPHERICAL CAVITY
        I TILT MY HEAD FROM SIDE TO SIDE, EVEN ADJUST THE ACCURACY OF MY EYES, BUT DO NOT SEE IT
        AT LEAST, NOT AT FIRST... BUT THEN IT IS THERE, SITTING SUSPENDED ON BARELY VISIBLE STRANDS OF ITS OWN CREATION
    
    sys
        ALERT::'memory of arachnid detected';'render?'

    RESPONSES::sys
        render<+>arthur
            EXEC::content.classList.add('spider')
        omit<+>arthur

arthur
    sourceless
        IT LOOKS AT ME, THEN RAISES ITS FORELEGS AND WAVES THEM BOTH FROM SIDE TO SIDE
        I IMAGINE THIS IS SOME SORT OF THREAT
    
    akizet
        i can see why you chose to keep it
    
    sourceless
        KAZKI REPLACES HER FACIAL FEATURES, PULLING HER HEAD BACK
            EXEC::specialCam('kazkibozko');content.classList.remove('kazkihead')
    
    kazki
        such life in its little eyes!
            EXEC::content.classList.remove('spider');vnp({kazki: "defocus"}); playVoice('arthur1kazki')

    RESPOBJ::d1_kazkibozkoresp

focus
    akizet
        our focus approaches, my friends
        are you prepared? do you have any topics to bring?
    
    sourceless
        THEY BOTH DIP THEIR RECEPTORS AFFIRMATIVELY

    kazki
        yes!
            EXEC::playVoice('focus1kazki')
    
    akizet
        good! report to the signal chamber when you are ready
            EXEC::bozkokazkivoicemap.stop()
        i arranged for the <span definition="NOTE::'partial translation';'inherited description-generated noun'">time-stopper</span> to be used this time, so it will be quick
    
    bozko
        excellent
            EXEC::playVoice('focus1bozko')
        we will be there shortly, you go ahead
            EXEC::playVoice('focus2bozko')

    RESPOBJ::d1_kazkibozkoresp
`)


// AUDIO
var kazkivoicemap = new Howl({
    src: ['https://file.garden/ZBykMtEMpVTUWZ-e/kazkivoice.mp3'],
    preload: true,
    html5: true,
    volume: 1,
    sprite: {
        start1: [0, 1440],
        start2: [1440, 2352],
        start3: [3792, 2544],
        start4: [6336, 5088],
        start5: [11424, 2712],
        creature1: [14136, 1560],
        creature2: [15696, 5328],
        creature3: [21024, 3888],
        creature4: [24912, 2520],
        creature5: [27432, 2832],
        creature6: [30264, 2016],
        creature7: [32280, 912],
        creature8: [33192, 1704],
        creature9: [34896, 2520],
        creature10: [37416, 3168],
        creature11: [40584, 3360],
        creature12: [43944, 1704],
        creature13: [45648, 4560],
        creature14: [50208, 3432],
        creature15: [53640, 936],
        creature16: [54576, 3168],
        cyst1: [57744, 1632],
        cyst2: [59376, 4384],
        cyst3: [62760, 3768],
        cyst4: [66528, 1200],
        cyst5: [67728, 2088],
        cyst6: [69816, 1368],
        cyst7: [71184, 3792],
        cyst8: [74976, 2376],
        cyst9: [77352, 1824],
        cyst10: [79176, 1080],
        cyst11: [80256, 1608],
        cyst12: [81864, 2856],
        bye: [84720, 864],
        __default: [0, 1]
    }
});

var bozkokazkivoicemap = new Howl({
    src: ['https://file.garden/ZBykMtEMpVTUWZ-e/kazkiandbozko.wav'],
    preload: true,
    html5: true,
    volume: 1,
    sprite: {
        start1kazki: [0, 6408],
        start2kazki: [6408, 8160],
        start3kazki: [14568, 6840],
        start4kazki: [21408, 5544],
        start5kazki: [26952, 6192],
        start6kazki: [33144, 1464],
        start7kazki: [34608, 1440],
        story1kazki: [36048, 3456],
        story2kazki: [39504, 3264],
        story3kazki: [42768, 6168],
        story4kazki: [48936, 4824],
        story5kazki: [53760, 2304],
        story6kazki: [56064, 3600],
        story7kazki: [59664, 4992],
        talk1kazki: [64656, 1128],
        talk2kazki: [65784, 1128],
        talk3kazki: [66912, 1680],
        talk4kazki: [68592, 3360],
        talk5kazki: [71952, 2064],
        talk6kazki: [74016, 5040],
        talk7kazki: [79056, 7992],
        talk8kazki: [87048, 3552],
        talk9kazki: [90600, 4224],
        talk10kazki: [94824, 1560],
        talk11kazki: [96384, 4200],
        talk12kazki: [100584, 6600],
        talk13kazki: [107184, 3576],
        talk14kazki: [110760, 7656],
        talk15kazki: [118416, 1392],
        talk16kazki: [119808, 2352],
        arthur1kazki: [122160, 2520],
        focus1kazki: [124680, 936],
        start1bozko: [125616, 1543],
        start2bozko: [127159, 2406],
        story1bozko: [129565, 8126],
        talk1bozko: [137691, 2249],
        talk2bozko: [139940, 4939],
        talk3bozko: [144879, 3581],
        talk4bozko: [148460, 6167],
        talk5bozko: [154627, 6324],
        talk6bozko: [160951, 4626],
        talk7bozko: [165577, 3372],
        focus1bozko: [168949, 1595],
        focus2bozko: [170544, 4078],
        __default: [0, 1]
    }
});



// DIALOGUE ACTOR
    // modified to be voiceless
env.dialogueActors["kazki"] = {
    image: "/img/sprites/obesk/kazki/portrait.gif",
    type: "obesk qou kazki",
    voice: false
}

env.dialogueActors["bozko"] = {
    image: "/img/sprites/obesk/bozko/portrait.gif",
    type: "obesk qou bozko",
    voice: false
}


// FUNCTION
function playVoice(line) {
    if(kazkivoicemap.playing() || line == 'stop')
        kazkivoicemap.stop()
    else if(bozkokazkivoicemap.playing() || line == 'stop')
        bozkokazkivoicemap.stop()

    if(Object.keys(kazkivoicemap._sprite).includes(line))
        kazkivoicemap.play(line)
    else
        bozkokazkivoicemap.play(line)
}