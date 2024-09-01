// CSS
var css = `
#mod-select .button.glow {
    color: var(--dark-color);
    background: var(--friend-color);
}
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);


// HTML INJECTION
    // gets rid of the menu return button and gad temporarily
let menureturnholder = body.querySelector('#system-menu .menureturn')
let gadholder = body.querySelector('#system-menu .mindsci-status')

body.querySelectorAll('#system-menu .menureturn, .mindsci-status').forEach((el)=>{el.remove()})

var syshtml = `
<details class="sysblock center" id="mod-select">
    <summary>Mod Options</summary>
    <div class="systoggles">
        <div class="sysbox">
            <h3>Flashing</h3>
            <p class="sysinfo">Darkens bouts of neural static when navigating between internal thoughtspaces.</p>
            <div class="buttons">
                <span onclick="javascript:setFlashing(true)" class="button flashing_on">On</span>
                <span onclick="javascript:setFlashing(false)" class="button flashing_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>Harder Mode</h3>
            <p class="sysinfo">Doubles enemy count in BSTRD-ized combative memory streams.</p>
            <div class="buttons">
                <span onclick="javascript:setDoubledEnemies(true)" class="button double_on">On</span>
                <span onclick="javascript:setDoubledEnemies(false)" class="button double_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>Silent Masks</h3>
            <p class="sysinfo">Replaces mask selection sound effects with quieter alternative.</p>
            <div class="buttons">
                <span onclick="javascript:setSilentMask(true)" class="button silentmask_on">On</span>
                <span onclick="javascript:setSilentMask(false)" class="button silentmask_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>Velzie's Glee</h3>
            <p class="sysinfo">Sets Velzie's Glee status effect default percentage to 100%.</p>
            <div class="buttons">
                <span onclick="javascript:setVelzieGlee(true)" class="button velzieglee_on">On</span>
                <span onclick="javascript:setVelzieGlee(false)" class="button velzieglee_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>Nuh Uh</h3>
            <p class="sysinfo">Grants invulnerability to hostile thoughtforms contained in THE FUNNY LITTLE ROOM.</p>
            <div class="buttons">
                <span onclick="javascript:setNuhUh(true)" class="button nuhuh_on">On</span>
                <span onclick="javascript:setNuhUh(false)" class="button nuhuh_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>bitch</h3>
            <p class="sysinfo">Makes moth a little more normal.</p>
            <div class="buttons">
                <span onclick="javascript:setNormalMoth(true)" class="button normalmoth_on">On</span>
                <span onclick="javascript:setNormalMoth(false)" class="button normalmoth_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>noSpin</h3>
            <p class="sysinfo">Forces neural render to fixed position when talking to entity COUNCIL.</p>
            <div class="buttons">
                <span onclick="javascript:setNoSpin(true)" class="button nospin_on">On</span>
                <span onclick="javascript:setNoSpin(false)" class="button nospin_off">Off</span>
            </div>
        </div>

        <div class="sysbox">
            <h3>expanded ENT</h3>
            <p class="sysinfo">Sets EXM menu to expand locational examines by default.</p>
            <div class="buttons">
                <span onclick="javascript:setExpanded(true)" class="button expandedent_on">On</span>
                <span onclick="javascript:setExpanded(false)" class="button expandedent_off">Off</span>
            </div>
        </div>
    </div>
</details>
`

if(!body.querySelector('#system-menu').innerHTML.includes("<details class=\"sysblock center\" id=\"mod-select\">")) {
    body.querySelector('#system-menu').insertAdjacentHTML('afterbegin', syshtml)
}

    // the return button and gad returns
body.querySelector('#system-menu').insertAdjacentElement('afterbegin', menureturnholder)
body.querySelector('#system-menu').insertAdjacentElement('afterbegin', gadholder)


// FUNCTIONS
function setFlashing(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'bright flashes on';'refresh to apply'", readout: true})
        document.querySelector('.flashing_on').classList.add('glow')
        document.querySelector('.flashing_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'bright flashes off';'refresh to apply'", readout: true})
        document.querySelector('.flashing_on').classList.remove('glow')
        document.querySelector('.flashing_off').classList.add('glow')
    }

    change('setting_flashing', pref)
}

function setDoubledEnemies(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'hard mode enemy count set to doubled';'refresh to apply'", readout: true})
        document.querySelector('.double_on').classList.add('glow')
        document.querySelector('.double_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'hard mode enemy count set to default';'refresh to apply'", readout: true})
        document.querySelector('.double_on').classList.remove('glow')
        document.querySelector('.double_off').classList.add('glow')
    }

    change('setting_doubled', pref)
}

function setSilentMask(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'masks silenced';'refresh to apply'", readout: true})
        document.querySelector('.silentmask_on').classList.add('glow')
        document.querySelector('.silentmask_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'masks unsilenced';'refresh to apply'", readout: true})
        document.querySelector('.silentmask_on').classList.remove('glow')
        document.querySelector('.silentmask_off').classList.add('glow')
    }

    change('setting_silentmasks', pref)
}

function setVelzieGlee(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'velzie's glee chance boosted';'refresh to apply'", readout: true})
        document.querySelector('.velzieglee_on').classList.add('glow')
        document.querySelector('.velzieglee_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'velzie's glee chance reset';'refresh to apply'", readout: true})
        document.querySelector('.velzieglee_on').classList.remove('glow')
        document.querySelector('.velzieglee_off').classList.add('glow')
    }

    change('setting_velzieglee', pref)
}

function setNuhUh(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'thoughtform repellent applied';'refresh to apply'", readout: true})
        document.querySelector('.nuhuh_on').classList.add('glow')
        document.querySelector('.nuhuh_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'repellent deactivated';'refresh to apply'", readout: true})
        document.querySelector('.nuhuh_on').classList.remove('glow')
        document.querySelector('.nuhuh_off').classList.add('glow')
    }

    change('setting_nuhuh', pref)
}

function setNormalMoth(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.normalmoth_on').classList.add('glow')
        document.querySelector('.normalmoth_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.normalmoth_on').classList.remove('glow')
        document.querySelector('.normalmoth_off').classList.add('glow')
    }

    change('setting_normalmoth', pref)
}

function setNoSpin(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.nospin_on').classList.add('glow')
        document.querySelector('.nospin_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.nospin_on').classList.remove('glow')
        document.querySelector('.nospin_off').classList.add('glow')
    }

    change('setting_nospin', pref)
}

function setExpanded(pref) {
    if (pref) {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.expandedent_on').classList.add('glow')
        document.querySelector('.expandedent_off').classList.remove('glow')
    }
    else {
        chatter({actor: 'sys', text: "ATTENTION::'refresh to apply'", readout: true})
        document.querySelector('.expandedent_on').classList.remove('glow')
        document.querySelector('.expandedent_off').classList.add('glow')
    }

    change('setting_expandedent', pref)
}


// MOD LOAD
    // dark static
if (check('setting_flashing')) {
    document.querySelector('.flashing_on').classList.add('glow')
    document.querySelector('.flashing_off').classList.remove('glow')}
else {
    document.querySelector('.flashing_on').classList.remove('glow')
    document.querySelector('.flashing_off').classList.add('glow')}

    // harder hard mode
if (check('setting_doubled')) {
    document.querySelector('.double_on').classList.add('glow')
    document.querySelector('.double_off').classList.remove('glow')}
else {
    document.querySelector('.double_on').classList.remove('glow')
    document.querySelector('.double_off').classList.add('glow')}

    // silent masks
if (check('setting_silentmasks')) {
    document.querySelector('.silentmask_on').classList.add('glow')
    document.querySelector('.silentmask_off').classList.remove('glow')}
else {
    document.querySelector('.silentmask_on').classList.remove('glow')
    document.querySelector('.silentmask_off').classList.add('glow')}

    // velzie's glee
if (check('setting_velzieglee')) {
    document.querySelector('.velzieglee_on').classList.add('glow')
    document.querySelector('.velzieglee_off').classList.remove('glow')}
else {
    document.querySelector('.velzieglee_on').classList.remove('glow')
    document.querySelector('.velzieglee_off').classList.add('glow')}

    // nuh uh
if (check('setting_nuhuh')) {
    document.querySelector('.nuhuh_on').classList.add('glow')
    document.querySelector('.nuhuh_off').classList.remove('glow')}
else {
    document.querySelector('.nuhuh_on').classList.remove('glow')
    document.querySelector('.nuhuh_off').classList.add('glow')}

    // normalmoth
if (check('setting_normalmoth')) {
    document.querySelector('.normalmoth_on').classList.add('glow')
    document.querySelector('.normalmoth_off').classList.remove('glow')}
else {
    document.querySelector('.normalmoth_on').classList.remove('glow')
    document.querySelector('.normalmoth_off').classList.add('glow')}

    // nospin
if (check('setting_nospin')) {
    document.querySelector('.nospin_on').classList.add('glow')
    document.querySelector('.nospin_off').classList.remove('glow')}
else {
    document.querySelector('.nospin_on').classList.remove('glow')
    document.querySelector('.nospin_off').classList.add('glow')}

    // expandedent
if (check('setting_expandedent')) {
    document.querySelector('.expandedent_on').classList.add('glow')
    document.querySelector('.expandedent_off').classList.remove('glow')}
else {
    document.querySelector('.expandedent_on').classList.remove('glow')
    document.querySelector('.expandedent_off').classList.add('glow')}