/**
 * I Fought The LOL, the Campfire "enhancer"
 * v0.99a - July 10, 2012
 * Aaron Draczynski
 * ================================================
 * This file goes into your /Users/youraccount/Library/Application Support/Propane/unsupported/ folder
 * Restart Propane after installing or removing this script
 * ================================================
 */

Campfire.IFoughtTheLOL = Class.create({
  bringTheLulz: function(q) {
    if (!q.pending() && q.kind === 'text') {
      var b = q.bodyElement(),
          t = b.innerText,
          e = t.substring(0,7),
          m = t.substring(0,5),
          u = false,
          r = v[0],
          x = v[2],
          c = v[7];
      if (e == '/sound ' && z == true) {
        b.setAttribute('data-iftl', 'true');
        var s = t.substring(7,t.length).replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
            fs = '"<strong>' + s + '</strong>"';
        if (t.substring(7,9) == '-u') {
          r = b.querySelector('a').getAttribute('href');
          x = '';
          s = '';
          fs = 'external';
          u = true;
        }
        var f = document.createElement(v[3]);
        if (s.indexOf('|') != -1) {
          s = s.substring(0, s.indexOf('|'));
          fs = '"<strong>' + s + '</strong>"';
        }
        f.addEventListener('loadstart', function() {
          b.innerHTML = c + '#888"><em>Loading sound...</em></span>';
        }, true);
        f.addEventListener('waiting', function(e) {
          b.innerHTML = c + '#888"><em>Loading sound...</em></span>';
        }, true);
        f.addEventListener('canplay', function() {
          b.innerHTML = c + '#4f9707"><em>Playing ' + fs + ' sound... <a class="pause">Pause?</a></em></span>';
          var bp = b.querySelector('.pause');
          bp.addEventListener('click', function() {
            if (bp.getAttribute('data-paused') == 'true') {
              bp.innerHTML = 'Pause?';
              bp.setAttribute('data-paused', 'false');
              f.play();
            } else {
              bp.innerHTML = 'Resume?';
              bp.setAttribute('data-paused', 'true');
              f.pause();
            }
          }, false);
        }, true);
        f.addEventListener('canplaythrough', function() {
          b.innerHTML = c + '#4f9707"><em>Playing ' + fs + ' sound... <a class="pause">Pause?</a></em></span>';
          var bp = b.querySelector('.pause');
          bp.addEventListener('click', function() {
            if (bp.getAttribute('data-paused') == 'true') {
              bp.innerHTML = 'Pause?';
              bp.setAttribute('data-paused', 'false');
              f.play();
            } else {
              bp.innerHTML = 'Resume?';
              bp.setAttribute('data-paused', 'true');
              f.pause();
            }
          }, false);
        }, true);
        f.addEventListener('empty', function(e) {
          b.innerHTML = c + '#d5312b"><em>Why are you closed?!?</em></span>';
        }, true);
        f.addEventListener('error', function(e) {
          b.innerHTML = c + '#d5312b"><em>' + fs + ' isn\'t a valid sound.</em></span>';
        }, true);
        f.addEventListener('suspend', function(e) {
          b.innerHTML = c + '#d5312b"><em>Consequences will never be the same.</em></span>';
        }, true);
        f.addEventListener('dataunavailable', function(e) {
          b.innerHTML = c + '#d5312b"><em>Not my chair, not my problem.</em></span>';
        }, true);
        f.addEventListener('ended', function() {
          b.innerHTML = c + '#888"><em>Played ' + fs + ' sound. <a class="replay">Replay?</a></em></span>';
          var br = b.querySelector('.replay');
          br.addEventListener('click', function() {
            br.innerHTML = 'Pause?';
            br.setAttribute('class', 'pause');
            var bp = b.querySelector('.pause');
            bp.addEventListener('click', function() {
              if (bp.getAttribute('data-paused') == 'true') {
                bp.innerHTML = 'Pause?';
                bp.setAttribute('data-paused', 'false');
                f.play();
              } else {
                bp.innerHTML = 'Resume?';
                bp.setAttribute('data-paused', 'true');
                f.pause();
              }
            }, false);
            f.currentTime = 0;
            f.play();
          }, false);
          f.pause();
          f.currentTime = 0;
          f.src = '';
          var pn = f.parentNode;
          pn.removeChild(f);
        }, true);
        f.src = r + s;
        if (u === false) {
          f.src += x;
        }
        f.play();
        // if (s.indexOf('|') != -1) {
        //   f.currentTime = f.duration;
        //   f.playbackRate = -1; 
        // }
      } else if (e == '/sound ' && z == false) {
        b.innerHTML = c + '#888">Played a sound. If you turned off <strong>/mute</strong>, you would\'ve heard it.</span>';
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
        b.setAttribute('data-iftl', 'true');
        var l = b.querySelector('a'),
            s = l.getAttribute('href'),
            f = document.createElement(v[4]),
            msg = document.createElement('div');
        msg.style.padding = '6px 0 3px';
        f.style.margin = '0 0 3px';
        f.style.background = 'black';
        f.setAttribute('controls', 'controls');
        f.addEventListener('waiting', function(e) {
          msg.innerHTML = c + '#888"><em>Loading clip...</em></span>';
        }, true);
        f.addEventListener('canplay', function() {
          msg.innerHTML = c + '#4f9707"><em>Playing clip...</em></span>';
        }, true);
        f.addEventListener('canplaythrough', function() {
          msg.innerHTML = c + '#4f9707"><em>Playing clip...</em></span>';
        }, true);
        f.addEventListener('error', function(e) {
          msg.innerHTML = c + '#d5312b"><em>You dun goofed.</em> [' + f.error.code + ']</span>';
        }, true);
        f.addEventListener('ended', function() {
          msg.innerHTML = c + '#888"><em><a class="collapse">Collapse from view</a>.</em></span>';
          var lc = msg.querySelector('.collapse');
          lc.addEventListener('click', function() {
            f.parentNode.innerHTML = c + '#888"><em>Clip removed.</em></span>';
            b.removeChild(f);
            msg.style.padding = '2px 0 1px';
          }, false);
        }, true);
        f.setAttribute('width', 480);
        f.setAttribute('height', 320);
        b.innerHTML = '';
        b.appendChild(f, b.firstChild);
        b.appendChild(msg);
        f.src = s;
        f.preload = 'preload';
        f.load();
        f.play();
        window.scrollTo(0, document.body.scrollHeight);
      } else if (m == '/clip' && z == false) {
        b.innerHTML = c + '#888"><em>Played a clip. If you turned off <strong>/mute</strong>, you would\'ve seen it.</em></span>';
      }
      if (e == '/combo ' && z == true) {
        b.setAttribute('data-iftl', 'true');
        var l = b.querySelector('a'),
            s = l.getAttribute('href'),
            f = document.createElement(v[5]),
            g = document.createElement(v[5]),
            j = document.createElement(v[3]),
            msg = document.createElement('div'),
            k = t.substr(t.lastIndexOf(' ') + 1),
            dl = 500;
        if (t.indexOf('|') != -1) {
          k = t.substring(t.lastIndexOf(' ') + 1, t.indexOf('|'));
          dl = parseInt(t.substr(t.indexOf('|') + 1)) * 1000;
          if (dl > 10000) {
            dl = 10000;
          }
        }
        f.style.width = 0;
        f.style.height = 0;
        f.style.display = 'none';
        f.src = s;
        g.style.height = '90px';
        g.src = r + 'r-pre.gif';
        b.innerHTML = '';
        b.appendChild(f, b.firstChild);
        b.appendChild(g, b.firstChild);
        b.appendChild(msg);
        j.addEventListener('canplay', function() {
          j.pause();
          j.currentTime = 0;
        }, true);
        j.addEventListener('canplaythrough', function() {
          j.pause();
          j.currentTime = 0;
          msg.setAttribute('data-sound-ready', 1);
          if (msg.hasAttribute('data-image-ready')) {
            msg.style.padding = '6px 0 3px';
            g.style.height = 'auto';
            g.style.margin = '0 0 3px';
            g.src = f.src;
            b.removeChild(f);
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(function() {
              j.play();
              window.scrollTo(0, document.body.scrollHeight);
            }, dl);
            msg.innerHTML = c + '#4f9707"><em>Playing combo... <a class="pause">Pause sound?</a></em></em></span>';
            var gp = msg.querySelector('.pause');
            gp.addEventListener('click', function() {
              if (gp.getAttribute('data-paused') == 'true') {
                gp.innerHTML = 'Pause sound?';
                gp.setAttribute('data-paused', 'false');
                j.play();
              } else {
                gp.innerHTML = 'Resume sound?';
                gp.setAttribute('data-paused', 'true');
                j.pause();
              }
            }, false);
          }
        }, true);
        j.addEventListener('empty', function(e) {
          msg.innerHTML = c + '#d5312b"><em>Why are you closed?!?</em></span>';
        }, true);
        j.addEventListener('error', function(e) {
          msg.style.padding = '6px 0 3px';
          g.src = r + 'f-pre.gif';
          msg.innerHTML = c + '#d5312b"><em>"<strong>' + k + '</strong>" isn\'t a valid sound.</em></span>';
        }, true);
        j.addEventListener('suspend', function(e) {
          msg.innerHTML = c + '#d5312b"><em>Consequences will never be the same.</em></span>';
        }, true);
        j.addEventListener('dataunavailable', function(e) {
          msg.innerHTML = c + '#d5312b"><em>Not my chair, not my problem.</em></span>';
        }, true);
        j.addEventListener('ended', function() {
          msg.innerHTML = c + '#888"><em>Played "<strong>' + k + '</strong>" combo. <a class="replay">Replay</a> or <a class="combo_breaker">collapse from view</a>?</a></em></span>';
          var br = b.querySelector('.replay'),
            cr = b.querySelector('.combo_breaker');
          br.addEventListener('click', function() {
            j.currentTime = 0;
            j.play();
          }, false);
          cr.addEventListener('click', function() {
            j.pause();
            j.src = '';
            g.parentNode.innerHTML = c + '#888"><em>Combo removed.</em></span>';
            b.removeChild(f);
            msg.style.padding = '2px 0 1px';
          });
          j.pause();
          j.currentTime = 0;
          j.src = '';
          var pn = j.parentNode;
          pn.removeChild(j);
        }, true);
        j.src = r + k + x;
        f.addEventListener('load', function(e) {
          msg.setAttribute('data-image-ready', 1);
          if (msg.hasAttribute('data-sound-ready')) {
            msg.style.padding = '6px 0 3px';
            g.style.height = 'auto';
            g.style.margin = '0 0 3px';
            g.src = f.src;
            b.removeChild(f);
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(function() {
              j.play();
              window.scrollTo(0, document.body.scrollHeight);
            }, dl);
            msg.innerHTML = c + '#4f9707"><em>Playing combo... <a class="pause">Pause sound?</a></em></em></span>';
            var gp = msg.querySelector('.pause');
            gp.addEventListener('click', function() {
              if (gp.getAttribute('data-paused') == 'true') {
                gp.innerHTML = 'Pause sound?';
                gp.setAttribute('data-paused', 'false');
                j.play();
              } else {
                gp.innerHTML = 'Resume sound?';
                gp.setAttribute('data-paused', 'true');
                j.pause();
              }
            }, false);
          }
        }, false);
        window.scrollTo(0, document.body.scrollHeight);
      } else if (e == '/combo ' && z == false) {
        b.innerHTML = c + '#888"><em>Played a combo. If you turned off <strong>/mute</strong>, you would\'ve seen it.</em></span>';
      }
      if (m == '/mute') {
        b.setAttribute('data-iftl', 'true');
        if (Element.hasClassName(q.element, 'you')) {
          if (z === false) {
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

  onMessagesInserted: function(q) {
    for (var i = 0; i < q.length; i++) {
      this.bringTheLulz(q[i]);
    }
    var si = document.querySelector('#' + v[8]),
        d = document.createElement(v[6]);
    if (si !== null) {
      si.parentNode.removeChild(si);
    }
    d.setAttribute('src', v[0] + v[8] + '.js?' + Math.floor(Math.random() * 1E10));
    d.setAttribute('id', v[8]);
    document.body.appendChild(d);
  },

  onMessageAccepted: function(q, r) {
    this.bringTheLulz(q);
    var si = document.querySelector('#' + v[8]),
        d = document.createElement(v[6]);
    if (si !== null) {
      si.parentNode.removeChild(si);
    }
    d.setAttribute('src', v[0] + v[8] + '.js?' + Math.floor(Math.random() * 1E10));
    d.setAttribute('id', v[8]);
    document.body.appendChild(d);
  }
});

var z = true,
    v = ['http://papermodelplane.com/box/sounds/', 'http://www.papermodelplane.com/box/achievement_', '.mp3', 'audio', 'video', 'img', 'script', '<span style="color:', 'iftl-init'];
Campfire.Responders.push('IFoughtTheLOL');
window.chat.installPropaneResponder('IFoughtTheLOL', 'andTheLOLWon');