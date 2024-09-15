/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : disco elysium
BY : TD (@.td. on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// AUDIO
var discolines = new Howl({
    src: 'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/discoelysium.wav',
    preload: true,
    sprite: {
        perception1: [0, 8000],
        shivers1: [8000, 5000],
        volition1: [13000, 7000],
        handeye1: [20000, 6000],
        logic1: [26000, 6000],
        phys1: [32000, 10000],
        phys2: [42000, 2000]
    }
})


// DIALOGUE ACTORS
env.dialogueActors.perception = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/perception_portrait.png', voice: false }
env.dialogueActors.shivers = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/shivers_portrait.png', voice: false }
env.dialogueActors.volition = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/volition_portrait.png', voice: false }
env.dialogueActors.handeye = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/handeye_portrait.png', voice: false }
env.dialogueActors.phys = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/phys_portrait.png', voice: false }
env.dialogueActors.logic = { image:'https://file.garden/ZBykMtEMpVTUWZ-e/ULTIMATE_MODPACK/logic_portrait.png', voice: false }


// DIALOGUE
env.dialogues["d1_start"] = generateDialogueObject(` 
start
    perception
        Your consciousness resumes, the rejuvenation chamber opens, and from outside flows the glow of the embassy's cystic glass.
            EXEC::discolines.play('perception1')
            WAIT::8000

    akizet
        what

    shivers
        Through the distant dull contrivance, you feel another gaze has begun.
            EXEC::discolines.play('shivers1')
            WAIT::4300

    akizet
        funfriend is that you?

    funfriend
        HELLO AKIZETESCHE!!!
        IS WHAT ME?

    akizet 
        there are voices narrating my actions and thoughts!!

    funfriend
        HAHA NO
        WHAT DREAD!
        DISEMBODIED VOICES!

    volition
        You try to keep yourself together, but these 'voices' seem to be more integral to you at this time than before.
            EXEC::discolines.play('volition1')
            WAIT::7000

    akizet
        stop that!!
    
    RESPONSES::akizet
        emerge from the chamber<+>emerge
            EXEC::content.classList.add('swapcam')

emerge
    handeye
        You clamber out the chamber, though foolishly in a panic, from your newfound situation.
            EXEC::discolines.play('handeye1')
            WAIT::6250
            AUTOADVANCE::

    phys
        Your qou-body is refreshed. It feels the same as it did after your ascension. A rare, lovely feeling - as though you could twist it into any shape
            EXEC::discolines.play('phys1')
            WAIT::10500
            AUTOADVANCE::
        and you should.
            EXEC::discolines.play('phys2')
            WAIT::2500
            AUTOADVANCE::
    logic
        Stay focused, you have a meeting today. They will not be waiting for you for very long.
            EXEC::discolines.play('logic1')
            WAIT::5500

    RESPONSES::akizet
        off to work...<+>END
`)