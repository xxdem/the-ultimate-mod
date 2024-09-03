/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : normal moth
BY : sawlf (@sawlferton on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

// !!!!! NOTE :: 'deprecated component' ; 'supersceded by updated official version from original author' !!!!! //

*/


// MOTHCOMMENT REPLACER
function bitchMoth() {
	env.pageHasMothComment = function() {
		if(typeof page.mothComment == "function") {
			return processStringTranslation(makeBitchy(page.mothComment()))
		} else if(typeof page.mothComment == "string") {
			return processStringTranslation(makeBitchy(page.mothComment))
		} else {
			if(env.currentDialogue.justChanged) return processStringTranslation("anything else?")
			return processStringTranslation("what's up bitch")
		}
	}
	env.dialogues["++moth"].whatnext.body[0].texec = ()=>{return makeBitchy(env.dialogues.mthglobalresp.whatnext())};

    // listener delete
    document.removeEventListener('corru_entered', bitchMoth, true)
}

function makeBitchy(str) {
	return str.replaceAll("buddy","bitch").replaceAll("dude","bitch");
}


// READOUT
if(typeof origReadout === 'undefined') {
	var origReadout = readoutAdd;
}

readoutAdd = function({message, type = "", name, displayName, image = false, show = true, forceMini = false, sfx = true, actor = false, noStore = false}) {
	let m = message;
	if(displayName == "moth") {
		m = makeBitchy(m);
	}
	if(typeof sayBitch != 'undefined') {
		sayBitch(m);
	}
	origReadout({"message":m,"type":type,"name":name,"displayName":displayName,"image":image,"show":show,"forceMini":forceMini,"sfx":sfx,"actor":actor,"noStore":noStore});
};


// CHATTER
if(typeof origChatter === 'undefined') {
	var origChatter = chatter;
}
chatter = function ({actor, text, duration = 6000, sfx = true, delay = 0, log = true, readout = false, customEl}) {
	let t = text;
	if(actor == "moth") {
		t = makeBitchy(t);
	}
	origChatter({"actor":actor,"text":t,"duration":duration,"sfx":sfx,"delay":delay,"log":log,"readout":readout,"customEl":customEl});
}


// SEND DIALOGUE
if(typeof origSendDialogue === 'undefined') {
	origSendDialogue = sendDialogue;
}
sendDialogue = function(dialogue, i = 0) {
	if(typeof dialogue === 'object') {
		let body = dialogue.body;
		if(Array.isArray(body)) {
			for(let k = 0; k < body.length; k++) {
				let line = body[k];
				if(line.actor == "moth") {
					if(typeof line.text === 'string') {
						line.text = makeBitchy(line.text);
					}
				}
			}
		}
	}
	origSendDialogue(dialogue,i);
}


// MOD LOAD
document.addEventListener('corru_entered', bitchMoth, true)