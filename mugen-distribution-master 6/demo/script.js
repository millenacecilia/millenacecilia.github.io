document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 50, timeBetweenNPCs: 3000, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 250, npcSpeed: 500, removeNPCAfterInteractedDelay: 1000, removeNPCAfterInteracted: true});
});