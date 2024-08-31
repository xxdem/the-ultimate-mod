/*

*****   COMPONENT OF :: 'the ultimate modpack'   *****
MOD : noSpin
BY : max :ᶅ (@the_dem on discord)

*/


// CSS INJECTION
var css = `
.councilfocus #realgrid {
    --baseTransform: rotateX(90deg) rotateZ(180deg) translateZ(calc(var(--gridTileSize) * -2)) !important;
    transform: var(--baseTransform);
    animation: unset !important; }
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);