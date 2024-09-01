/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : dark static
BY : max :ᶅ (@the_dem on discord)

*/

// CSS INJECTION
    // quick note the neat thing about this injector is that it persists on page swaps! so it's real neat
    // not between page refreshes tho
var css = `
#static:after {
    background-image: url('/img/textures/badstatic.gif') !important;
}

#content[page='localhost'] .bg::after {
    background-image: url('/img/textures/badstatic.gif') !important;
}

.portal figure::after {
    background-image: url(/img/sprites/misc/sphereframewhite.gif) !important;
}
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);