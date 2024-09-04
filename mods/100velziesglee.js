env.STATUS_EFFECTS['light_glee'] = { 
    slug: "light_glee",
    name: "Velzie's Glee",
    passive: "modifier",
    beneficial: false,
    icon: "/img/sprites/combat/passives/light_glee.gif",
    impulse: {type: "common", component: "light"},
    extraStatuses: ["puncture", "destabilized", "regen", "rot", "vulnerable", "focused", "empowered", "open_wound", "stun"],
    
    events: {
        onBeforeAddStatus: function(context) {
            let chance = 1
            let extra = 0
            if(env.crittaMap) if(env.crittaMap.getModQty("global_megaglee")) {
                chance = 1.5;
                extra = (env.crittaMap.getModQty("global_megaglee") - 1)
            }

            if(Math.random() < chance) {

                sendFloater({
                    target: this.status.affecting,
                    type: "arbitrary",
                    arbitraryString: "GLEE!",
                    isGood: false
                })

                let newStatus = env.STATUS_EFFECTS[context.status]
                if(newStatus.opposite) context.status = newStatus.opposite
                if(extra) context.length += extra
            }
        },
    },

    help: `incoming status effect application has a 100% chance to become opposite status\nmay be altered by other effects`
}