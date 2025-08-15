function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function loadInlineSVG(url, targetSelector) {
  const res = await fetch(url);
  const svgText = await res.text();
  document.querySelector(targetSelector).innerHTML = svgText;
}

var random_int = getRandomInt(3);
const brains = ["images/fishbrain.svg", "images/flybrain.svg", "images/mybrain.svg"]

loadInlineSVG(brains[random_int], '#svg-background');
