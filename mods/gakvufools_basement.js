/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : gakvu fools
BY : max :ᶅ (@the_dem on discord)

*/


// DIALOGUE
env.dialogues['gakvu_recovery'] = generateDialogueObject(`
start
    sourceless
        a sharp pain pierces your skull. your mindspike recoils from the corrucyst.
            EXEC::document.querySelector('#connection-overlay').classList.add('show');content.classList.add('ep0-epi')

    sys
        ATTENTION::'emergency ejection complete'
        ANALYSIS::'minimal connector damage';'minor neural impact'
            EXEC::document.querySelector('#connection-overlay').classList.add('fade');setTimeout(()=>document.querySelector('#connection-overlay').classList.remove('show'),3000)
    
    moth
        okay i was not prepared for that at all
        are you all right?
        oh, shit
    
    sourceless
        moth pulls the wires out of a smoking processor. the room smells like fried electronics.
        again.

    moth
        jesus christ
        what the fuck was that??
        that was one hell of a false environment
        guess that's what happened to akizet then
    
    RESPONSES::self
        damn<+>END

END::flash(true);setTimeout(()=>{content.classList.remove('ep0-epi');;flash(false)}, 1000)
`)

if(!check('fbx__gakvu_recovery') && check('gakvu_fooled')) startDialogue('gakvu_recovery')