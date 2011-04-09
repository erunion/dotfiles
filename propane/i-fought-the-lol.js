/**
 * I Fought The LOL, the Campfire "enhancer"
 * v0.6b - February 28, 2011
 * Aaron Draczynski
 * This file goes into your /Users/youraccount/Library/Application Support/Propane/unsupported/ folder
 * Restart Propane after installing or removing this script
 */

Campfire.IFoughtTheLOL = Class.create({
  initialize: function (q) {
    this.chat = q;
  },

  bringTheLulz: function (q) {
    if (!q.pending() && q.kind === 'text') {
      var b = q.bodyElement(),
          t = b.innerText,
          e = t.substring(0,7),
          m = t.substring(0,5),
          u = false,
          r = v[0],
          x = v[2],
          c = v[5];
      if (e == '/sound ' && z == true) {
        var s = t.substring(7,t.length).replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
            fs = '"<strong>' + s + '</strong>"';
        if (t.substring(7,9) == '-u') {
          r = t.substring(10,t.length);
          x = '';
          s = '';
          fs = 'external';
          u = true;
        }
        var f = document.createElement(v[3]);
        f.addEventListener('loadstart', function() {
          b.innerHTML = c + '#888"><em>Loading sound...</em></span>';
        }, true);
        f.addEventListener('waiting', function(e) {
          b.innerHTML = c + '#888"><em>Loading sound...</em></span>';
        }, true);
        f.addEventListener('canplay', function() {
          b.innerHTML = c + '#4f9707"><em>Playing sound...</em></span>';
        }, true);
        f.addEventListener('canplaythrough', function() {
          b.innerHTML = c + '#4f9707"><em>Playing sound...</em></span>';
        }, true);
        f.addEventListener('empty', function(e) {
          b.innerHTML = c + '#d5312b"><em>Why are you closed?!?</em></span>';
        }, true);
        f.addEventListener('error', function(e) {
          b.innerHTML = c + '#d5312b"><em>You dun goofed.</em> [' + f.error.code + ']</span>';
        }, true);
        f.addEventListener('stalled', function(e) {
          b.innerHTML = c + '#d5312b"><em>The audio player stalled while buffering ' + fs + ' &mdash; try the <a href="' + r + s + x + '" target="_blank" style="color:#d5312b">direct link</a>.</em></span>';
        }, true);
        f.addEventListener('suspend', function(e) {
          b.innerHTML = c + '#d5312b"><em>Consequences will never be the same.</em></span>';
        }, true);
        f.addEventListener('dataunavailable', function(e) {
          b.innerHTML = c + '#d5312b"><em>Not my chair, not my problem.</em></span>';
        }, true);
        f.addEventListener('ended', function() {
          b.innerHTML = c + '#888"><em>Played ' + fs + ' sound.</em></span>';
          f.pause();
          f.currentTime = 0;
          f.src = '';
          var pn = f.parentNode;
          pn.removeChild(f);
        }, true);
        f.src = r + s;
        if (u == false) {
          f.src += x;
        }
        f.play();
      } else if (e == '/sound ' && z == false) {
        b.innerHTML = c + '#888">Played a sound. If you turned off <strong>/mute</strong>, you would have heard it.</span>';
      }
      var p = b.querySelector('img');
      if (p != null) {
        if (p.src.substring(0,47) == v[1]) {
          var a = document.createElement(v[3]);
          a.src = r + 'achievement.mp3';
          a.addEventListener('ended', function() {
            a.pause();
            a.currentTime = 0;
            a.src = '';
          }, true);
          a.play();
        }
      }
      if (m == '/clip' && z == true) {
        var l = b.querySelector('a');
            s = l.getAttribute('href'),
            f = document.createElement(v[4]);
            msg = document.createElement('div');
        msg.style.padding = '6px 0 3px';
        f.addEventListener('waiting', function(e) {
          msg.innerHTML = c + '#888"><em>Loading clip...</em></span>';
        }, true);
        f.addEventListener('canplay', function() {
          msg.innerHTML = c + '#4f9707"><em>Playing clip...</em></span>';
        }, true);
        f.addEventListener('canplaythrough', function() {
          msg.innerHTML = c + '#4f9707"><em>Playing clip...</em></span>';
        }, true);
        f.addEventListener('canplay', function() {
          f.addEventListener('click', function() {
            b.removeChild(f);
            msg.innerHTML = c + '#888"><em>Clip removed.</em></span>';
          }, false);
        }, true);
        f.addEventListener('error', function(e) {
          msg.innerHTML = c + '#d5312b"><em>You dun goofed.</em> [' + f.error.code + ']</span>';
        }, true);
        f.addEventListener('ended', function() {
          msg.innerHTML = c + '#888"><em>Played clip. Click frame to collapse.</em></span>';
        }, true);
        f.setAttribute('width', 480);
        f.setAttribute('height', 320);
        b.innerHTML = '';
        b.appendChild(f, b.firstChild);
        b.appendChild(msg);
        f.src = s;
        f.load();
        f.play();
        window.scrollTo(0, document.body.scrollHeight);
      } else if (m == '/clip' && z == false) {
        b.innerHTML = c + '#888"><em>Played a clip. If you turned off <strong>/mute</strong>, you would have seen it.</em></span>';
      }
      if (m == '/mute') {
        if (Element.hasClassName(q.element, 'you')) {
          if (z == false) {
            z = true;
            b.innerHTML = c + '#4b49bc"><em>You just turned mute <strong>on</strong>.</em></span>';
          } else {
            z = false;
            b.innerHTML = c + '#4b49bc"><em>You just turned mute <strong>off</strong>.</em></span>';
          }
        } else {
          b.innerHTML = c + '#4b49bc"><em>Just toggled their mute setting.</em></span>';
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

var z = true,
    v = ['http://papermodelplane.com/box/sounds/', 'http://www.papermodelplane.com/box/achievement_', '.mp3', 'audio', 'video', '<span style="color:'];
Campfire.Responders.push('IFoughtTheLOL');
window.chat.installPropaneResponder('IFoughtTheLOL', 'andTheLOLWon');