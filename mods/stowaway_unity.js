/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : stowaway unity
BY : agent7 (@agent7 on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


let loper = env.entities['interloper']
loper.actions[loper.actions.length] = {
    name: "unity",
    class: "act-ozo",
    exec: ()=>{
        cutscene(true);MUI('off')

        env.setTimeout(()=>{
            play("talkchoir", 0.75)
            vfx({type: 'beacon', state: true})
        }, 400)

        setTimeout(()=>{
            vfx({type: 'beacon', state: false})
        }, 3000)
        
        chatter({ actor: "stowaway", text:"<img src='/img/mui/mask/unity.gif' width='40px'/>", readout: true, delay: 3800})
        
        env.setTimeout(()=>{
            play("talkchoir", 0.75)
            vfx({type: 'beacon', state: true})
        }, 4200)

        env.setTimeout(()=>{
            vfx({type: 'flash', state: true})
            readoutAdd({message: `<p>ATTENTION::'thoughtform activity detected'::'resources removed'</p>`, name:"sys"})
            setTimeout(()=>play('dull', 1), 400)
            setTimeout(()=>moveTo('/not_found/'), 1200)
            setTimeout(()=>{
                vfx({type: 'flash', state: false})
                vfx({type: 'beacon', state: true})
                cutscene(false)
            }, 1500)
        }, 5000)
            
    },
    showIf: [["mask", "unity"]]
}