/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : betterNAV
BY : overcast system (@overcastwarmth on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// DIALOGUE RESP EDIT
env.dialogues["menu_hub"].start.responses[0].replies.splice(1, 0, {
    name: "jokzi ozo",
    destination: "EXEC::endDialogue()",
    hideRead: true,
    showIf: ['visited_localozo'],
    exec: () => {
        change("TEMP!!from", false)
        cutscene(true);
        corruRefresh("/local/ozo", 3000);
        if (env.e3a2) env.e3a2.clearWarningListener();
        setTimeout(() => {
        readoutAdd({
            message: `EXECUTING::'navigate';'jokzi-ozo'`,
            name: "sys",
        });
        }, 1000);
    },
})