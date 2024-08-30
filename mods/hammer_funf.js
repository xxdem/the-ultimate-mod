/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : HAMMER FUNFRIEND
BY : niaandovah (@niaandovah on discord)

MODIFIED BY : max :ᶅ (@the_dem on discord)

*/


// CONSTANT STUFF
let hammerArray = [
    "OW",
    "INTERLOPER!! STOP!!",
    "THAT HURTS",
    "STOP HITTING ME",
    "HAHAH INTERLOPER I WILL DIE",
    "SAVE ME",
    "WHY??",
    "HELP!! HELP!!",
    "INTERLOPER??",
    "WHY ARE YOU HITTING ME",
    "HOW DID YOU EVEN GET A HAMMER",
    "FUCK",
    "VELZIE'S GAZE",
    "THIS CYST NEEDS ME INTERLOPER",
    "I THOUGHT WE WERE ALLIES INTERLOPER",
    "INTERLOPER..",
    "SAVE ME INTERLOPER",
    "WHAT DID I DO TO DESERVE THIS",
    "OOF",
    "OUCH",
    "UGDF",
    "Â¡Ã†Mg^EÃ”",
    "DID SOMEONE PUT YOU UP TO THIS??",
    "I WILL TURN YOU INTO FURNITURE INTERLOPER",
    "I MISS AKIZETESCHE",
    "AKIZETESCHE NEVER HIT ME WITH HAMMERS",
    "AT LEAST ITS NOT A KAVRUKA OR SOMETHING",
    "VELZIES CRUEL GAZE FALLS ON ME",
    "I DON'T FIND THIS FUNNY",
    "WAIT MAYBE THIS ISN'T TOO BAD? NO NO ITS AWFUL. ITS BAD STOP IT",
    "NO NO NO NO NO NO NO NO",
    "I'M SO MAD",
    "I JUST WANTED TO HELP YOU",
    "YOU WERE MY HERO INTERLOPER",
    "ARE ALL INTERLOPERS THIS VIOLENT?",
    "CURSE YOU",
    "ANNNRGGGGAAAAAAA",
    "GAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "GRYHAIRJIJIFSC",
    "AAAAAA",
    "okay actually hit me again. yeah.",
    "EUEHUAUAADFF FUCK",
    "GUHH",
    "INTERLOPER YOU LOSY MOTHERFUCKER",
    "THIS IS DAMAGING THE CYST INTERLOPER",
    "I'M ABOUT TO BECOME UNFUNFRIEND INTERLOPER. FOULFRIEND.",
    "HRRRGGFFFNFNJD",
    "A",
    "AAAAAAA",
    "DID THAT THING IN THE UNCOSM MAKE YOU DO THIS",
    "WAS IT THE COUNCIL? IS THIS ONE OF THEIR SICK DREAMS",
    "INTERLOPER YOU'RE MY FRIEND PLEASE CEASE",
    "INTERLOPER IM A LITTLE GUY AND ITS MY BIRTHDAY",
    "INTERLOPERRRRR STOOOOP",
    "...",
    "I WILL THROW YOU INTO THE DULL CONTRIVENCE",
    "THE NETWORK WILL NEVER BE FIXED AT THIS RATE",
    "RAHGHHHG",
    "I'M GOING TO LOCK YOU OUT OF THE CYST INTERLOPER",
    "THIS IS WORSE THAN THE TIME YOU TRIED TO EAT THE CYST",
    "RAHHH IM BLEEDING INTERLOPER IM NOT SUPPOSED TO BLEED",
    "THIS IS DRIVING ME INCOHERENT"
]


// FUNCTIONS
function hammerFunfriendToTheFuckingGround(){
    for(var i = 0; i <= 50; i++){ 
        setTimeout(()=>{chatter({actor: 'funfriend', text: hammerArray.sample()}); play('crit', (1.25 - (0.5*Math.random())), 0.75, true); createMark()}, (i*200 + (Math.random() * 100)))
    }
} 

function createMark(){
        rect = document.getElementById("funfriend").getBoundingClientRect()
        
        var mark = document.createElement('div');
        mark.classList.add('hammerMark')
        
        var ranSignX = Math.random() > 0.5 ? -1 : 1
        var ranSignY = Math.random() > 0.5 ? -1 : 1
        
        mark.style.setProperty(`--offsetX`, `${rect.left+ window.scrollX + (Math.random() * ranSignX * 25)}`)
        mark.style.setProperty(`--offsetY`, `${rect.top + window.scrollY + (Math.random() * ranSignY * 25)}`)
        document.body.appendChild(mark)
        
        setTimeout(()=>{mark.remove()}, 1000)
}


// HAMMER STYLING
style = document.createElement('style')
style.innerHTML = `.hammerMark {
    position: absolute;
    top: 0;
    left: 0;
    width: 158px;
    height: 158px;
    z-index: 8;
    transform: translate(calc(var(--offsetX) * 1px), calc(var(--offsetY) * 1px));
    content: "";
    background-image: url(/img/textures/badstatic.gif);
    background-size: contain;
	-webkit-clip-path: polygon(70.71% 100%, 51.68% 70.71%, 80% 92.5%, 74.37% 76.76%, 100% 70.71%, 69.61% 63.46%, 93.27% 53.9%, 78.96% 44.63%, 100% 29.29%, 64.64% 35.36%, 92.74% 20.98%, 74.83% 22.31%, 90.77% 7.5%, 73.79% 6.38%, 56.28% 24.25%, 70.71% 0%, 50.18% 14.3%, 29.29% 0%, 35.36% 26.57%, 7.63% 7.63%, 21.25% 32.75%, 0% 29.29%, 14.75% 52.3%, 0% 70.71%, 12.73% 70.71%, 7.63% 92.5%, 21.25% 80.59%, 18.46% 96.25%, 30.28% 87.97%, 29.29% 100%, 38.52% 90.42%, 62.5% 100%, 46.89% 87.97%);
	clip-path: polygon(70.71% 100%, 51.68% 70.71%, 80% 92.5%, 74.37% 76.76%, 100% 70.71%, 69.61% 63.46%, 93.27% 53.9%, 78.96% 44.63%, 100% 29.29%, 64.64% 35.36%, 92.74% 20.98%, 74.83% 22.31%, 90.77% 7.5%, 73.79% 6.38%, 56.28% 24.25%, 70.71% 0%, 50.18% 14.3%, 29.29% 0%, 35.36% 26.57%, 7.63% 7.63%, 21.25% 32.75%, 0% 29.29%, 14.75% 52.3%, 0% 70.71%, 12.73% 70.71%, 7.63% 92.5%, 21.25% 80.59%, 18.46% 96.25%, 30.28% 87.97%, 29.29% 100%, 38.52% 90.42%, 62.5% 100%, 46.89% 87.97%);
}`
document.head.appendChild(style)

// okay allow interloper to hurt the fucking diamong
  // lets not commit coding since
  // gets amount of actions currently within the funfriend object
  // future proofing/mod compat (hopefully, depending on mod order)
  // holy shit mod order
  // corru.scrolls over here GADdamn
  // its 5:06am 
  
var actPosition = Object.keys(env.entities['funfriend'].actions).length
env.entities['funfriend'].actions[actPosition] = {name: 'KILL FUNFRIEND WITH HAMMERS', class: 'act-ozo', exec: hammerFunfriendToTheFuckingGround}