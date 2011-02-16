/**
 * I Fought The LOL, the Campfire "enhancer"
 * v0.3b
 * Aaron Draczynski
 * This file goes into your /Users/youraccount/Library/Application Support/Propane/unsupported/ folder
 * Restart Propane after installing or removing this script
 */

var u = true;
Campfire.IFoughtTheLOL = Class.create({
  initialize: function (q) {
    this.chat = q;
  },

  bringTheLulz: function (q) {
    if (!q.pending() && q.kind === 'text') {
      var b = q.bodyElement();
      var t = b.innerText;
      var e = t.substring(0,7);
      var m = t.substring(0,5);
      var r = 'http://papermodelplane.com/box/sounds/';
      var c = '<span style="font-style:italic;color:';
      if (e == '/sound ' && u == true) {
        var s = t.substring(7,t.length).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var f = document.createElement('audio');
        f.addEventListener('loadstart', function() {
          b.innerHTML = c + '#888">Loading sound...</span>';
        }, true);
        f.addEventListener('waiting', function(e) {
          b.innerHTML = c + '#888">Loading sound...</span>';
        }, true);
        f.addEventListener('canplay', function() {
          b.innerHTML = c + '#4f9707">Playing sound...</span>';
        }, true);
        f.addEventListener('canplaythrough', function() {
          b.innerHTML = c + '#4f9707">Playing sound...</span>';
        }, true);
        f.addEventListener('empty', function(e) {
          b.innerHTML = c + '#d5312b">Oops, you broke it. [0xe1]</span>';
        }, true);
        f.addEventListener('error', function(e) {
          b.innerHTML = c + '#d5312b">Oops, you broke it. [0xe2]</span>';
        }, true);
        f.addEventListener('stalled', function(e) {
          b.innerHTML = c + '#d5312b">Congratulations, you broke it. [0xe3]</span>';
        }, true);
        f.addEventListener('suspend', function(e) {
          b.innerHTML = c + '#d5312b">Oops, you broke it. [0xe4]</span>';
        }, true);
        f.addEventListener('dataunavailable', function(e) {
          b.innerHTML = c + '#d5312b">Oops, you broke it. [0xe5]</span>';
        }, true);
        f.addEventListener('ended', function() {
          b.innerHTML = c + '#888">Played "' + s + '" sound.</span>';
          f.pause();
          f.currentTime = 0;
          f.src = '';
        }, true);
        f.src = r + s + '.mp3';
        f.load();
        f.play();
      } else if (u == false) {
        b.innerHTML = c + '#888">Played a sound. If you turned off <strong>/mute</strong>, you would have heard it.</span>';
      }
      var i = b.querySelector('img');
      if (i != null) {
        if (i.src.substring(0,47) == 'http://www.papermodelplane.com/box/achievement_') {
          var a = document.createElement('audio');
          a.src = r + 'achievement.mp3';
          a.addEventListener('ended', function() {
            a.pause();
            a.currentTime = 0;
            a.src = '';
          }, true);
          a.play();
        }
      }
      if (m == '/mute') {
        if (Element.hasClassName(q.element, 'you')) {
          if (u == false) {
            u = true;
            b.innerHTML = c + '#4b49bc">You just turned sound <strong>on</strong>.</span>';
          } else {
            u = false;
            b.innerHTML = c + '#4b49bc">You just turned sound <strong>off</strong>.</span>';
          }
        } else {
          b.innerHTML = c + '#4b49bc">Just toggled their mute setting.</span>';
        }
      }
    }
  },

  onMessagesInserted: function (q) {
    for (var i = 0; i < q.length; i++) {
      this.bringTheLulz(q[i]);
    }
  },

  onMessageAccepted: function (q, r) {
    this.bringTheLulz(q);
  }
});

Campfire.Responders.push("IFoughtTheLOL");
window.chat.installPropaneResponder("IFoughtTheLOL", "andTheLOLWon");
