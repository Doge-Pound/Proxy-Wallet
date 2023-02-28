
! function() {
    "use strict";
    var e = "gn-reply",
        t = "data-gmtype",
        n = function(e, n, a, o, i) {
            if (!a.querySelector(".".concat(n))) {
                var c = o.cloneNode(!0);
                c.classList.add(n), c.setAttribute(t, n);
                var l = c.querySelector("span");
                if (l) {
                    var d = l.parentNode;
                    d.parentNode.removeChild(d)
                }
                var u = document.createElement("span");
                u.innerText = e, u.style.width = "110%", u.style.textAlign = "center", u.style.backgroundColor = "#E96EC3", u.style.color = "white", u.style.borderRadius = "15px", u.style.padding = "3px", c.querySelector("svg").replaceWith(u), r(c, i), a.appendChild(c)
            }
        },
        r = function(e, n) {
            e.addEventListener("click", (function(r) {
                n.click(), setTimeout((function() {
                    var n = document.querySelector("[aria-labelledby='modal-header']");
                    chrome.storage.local.get(["GmReplyWithName"]).then((function(r) {
                        var a = null;
                        if (void 0 !== r.GmReplyWithName && !0 === r.GmReplyWithName) {
                            var o = (a = n.querySelector("[data-testid='User-Names']").querySelector("span").querySelector("span").innerText).match(/^[^. ]+/gi);
                            o[0] && (a = o[0])
                        }
                        var i = g(e.getAttribute(t), a);
                        if (n) {
                            var c = n.querySelector("[contenteditable='true']");
                            c.setAttribute(t, e.getAttribute(t)), c && c.dispatchEvent(new InputEvent("textInput", {
                                data: "".concat(i),
                                bubbles: !0
                            }))
                        }
                    }))
                }), 500)
            }))
        },
        a = ["", "fam", "gang", "everyone", "y'all", "frens", "degens", "Web3", "Legends", "World", "Twitter", "Kings & Queens", "people", "folks", "to the gm gang", "to the GMers", "to absolutely everyone", "Web3 Legends", "Web3 OGs"],
        o = ["and happy day"],
        i = ["and good dreams"],
        c = ["", "fam", "fren", "degen", "gang", "bro", "brother", "to you", "king", "Legend", "homie", "my friend", "dude", "mate", "buddy", "OG"],
        l = ["and happy day"],
        d = ["and good dreams"],
        u = ["\u2600", "\ud83c\udf1e", "\u2615", "\ud83c\udf08", "\ud83c\udf89", "\ud83e\udd73", "\ud83d\udca5", "\ud83d\udd25", "\ud83d\ude80", "\ud83d\ude0e"],
        s = ["\ud83c\udf15", "\ud83c\udf1b", "\ud83c\udf11", "\ud83c\udf19", "\u2b50", "\u2728", "\ud83d\ude34", "\ud83d\udecf", "\u2728", "\ud83d\udca4"],
        m = ["", "\ud83d\udc4b", "\u2764", "\ud83e\udee1", "\ud83d\udcc8", "\ud83e\udde1", "\ud83d\udc9a", "\ud83e\udd0d", "\ud83d\udc99", "\ud83d\udc9c", "\ud83d\ude03", "\ud83e\udef6", "\ud83e\udd1d", "\ud83e\udec2", "\ud83d\udc4a", "\ud83d\udc8e", "\ud83e\udd29"],
        f = function(e) {
            return m.concat(e)
        },
        g = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return t === e ? b(n) : h(n)
        },
        v = function() {
            var e = [0, 1];
            return 1 === e[Math.floor(Math.random() * e.length)] ? "gm" : "GM"
        },
        p = function() {
            var e = [0, 1];
            return 1 === e[Math.floor(Math.random() * e.length)] ? "gn" : "GN"
        },
        y = function(e) {
            return e[Math.floor(Math.random() * e.length)]
        },
        h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = null !== e ? e : y(c.concat(l));
            return w(v(), t, y(m))
        },
        b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = null !== e ? e : y(c.concat(d));
            return w(p(), t, y(m))
        },
        w = function(e, t, n) {
            var r = "" === t ? t : " ".concat(t),
                a = "" === n ? n : " ".concat(n);
            return "".concat(e).concat(r).concat(a)
        },
        S = function e(t) {
            var n = t.firstChild;
            return 1 === n.nodeType ? e(n) : t
        },
        x = function(e, t, n) {
            var r = document.getElementById(n);
            if (!r) {
                var a, o, i = null === (a = document.querySelector("header[role='banner']")) || void 0 === a || null === (o = a.querySelector("a[href='/compose/tweet']")) || void 0 === o ? void 0 : o.parentElement;
                if (i) {
                    (r = i.cloneNode(!0)).id = n;
                    var c = r.querySelector("a[href='/compose/tweet']");
                    c.href = "/compose/tweet?text=".concat(t), c.setAttribute("aria-label", n), c.setAttribute("data-testid", n), S(r).innerText = e, i.parentNode.appendChild(r)
                }
            }
        },
        q = function() {
            x("GM \ud83c\udf1e", w(v(), y(a.concat(o)), y(f(u))), "new_gm")
        },
        T = function() {
            x("GN \ud83c\udf1b", w(p(), y(a.concat(i)), y(f(s))), "new_gn")
        },
        M = function(e, t) {
            var n = document.querySelector("[aria-labelledby='modal-header']");
            if (n && !n.querySelector("#".concat(e))) {
                var r = n.querySelector("[data-testid='geoButton']");
                if (r) {
                    var a = document.createElement("div");
                    return a.id = e, a.innerText = t, a.style.width = "150%", a.style.textAlign = "center", a.style.backgroundColor = "#E96EC3", a.style.color = "white", a.style.borderRadius = "15px", a.style.padding = "5px 7px 5px 7px", a.style.marginRight = "5px", a.style.cursor = "pointer", a.style.fontSize = ".9em", a.setAttribute("role", "button"), r.parentNode.appendChild(a), a
                }
            }
            return null
        },
        E = function() {
            return document.querySelector("[aria-labelledby='modal-header']")
        };
    chrome.runtime.onMessage.addListener((function(e, t, n) {
        e.status && "complete" === e.status && setTimeout((function() {
            q(), T()
        }), 500)
    }));
    var N = document.body;
    new MutationObserver((function(r, a) {
        ! function() {
            var t = document.querySelectorAll("div[role='button'][data-testid='reply']");
            t && t.forEach((function(t) {
                var r = t.parentNode,
                    a = r.closest("[role='group']");
                r = a.firstChild, n("GM", "gm-reply", a, r, t), n("GN", e, a, r, t)
            }))
        }(),
        function() {
            var e = M("gmeme", "Add");
            var d = M("gmeme", "GN");
          
            if (e) {
              var t = E();
              var dogeNumbers;
              
              chrome.storage.local.get("DogeNumbers", function(result) {
                if (result.DogeNumbers) {
                  dogeNumbers = result.DogeNumbers;
                } else {
                  dogeNumbers = [];
                }
                
                e.addEventListener("click", function() {
                  var dogeNumber = prompt("Please enter your Doge#:");
                  if (dogeNumber && !dogeNumbers.includes(dogeNumber)) { // check if the Doge# is not already in the list
                    dogeNumbers.push(dogeNumber);
                    chrome.storage.local.set({
                      "DogeNumbers": dogeNumbers
                    });
                  }
                });
                
                var select = document.createElement("select");
                select.style.marginLeft = "10px";
                select.style.marginRight = "5px";
                select.style.width="170%";
                select.style.fontSize = "16px";
                select.style.borderRadius = "10px";
                select.style.padding = "5px 7px";
                select.style.backgroundColor = "rgb(233, 110, 195)";
                select.style.display="inline-block";
                select.style.textAlign="center";
                select.style.textDecoration="none";
                select.style.color="white";
                select.style.fontSize="0.9em";
                var gmOption = document.createElement("option");
                gmOption.text = " Doge#";
                select.add(gmOption);
                
                for (var i = 0; i < dogeNumbers.length; i++) {
                  var option = document.createElement("option");
                  option.value = "gm" + dogeNumbers[i];
                  option.text = "Doge#" + dogeNumbers[i] + " (GM)";
                  gmOption.insertAdjacentElement('afterend', option);
                }
                var gnOption = document.createElement("option");
                gnOption.text = "Select GNDoge#";
                select.add(gnOption);
                
                for (var i = 0; i < dogeNumbers.length; i++) {
                  var option = document.createElement("option");
                  option.value = "gn" + dogeNumbers[i];
                  option.text = "Doge#" + dogeNumbers[i] + " (GN)";
                  gnOption.insertAdjacentElement('afterend', option);
                }
                   
                select.addEventListener("change", function() {
                  if (select.value != "Select Doge#") {
                    var prefix = select.value.substring(0, 2);
                    var dogeNumber = select.value.substring(2);
                    var url;
                    if (prefix === "gm") {
                      url = "" + dogeNumber + ".png";
                    } else {
                      url = "https://tubercular-milligra.000webhostapp.com/Dogen/" + dogeNumber + ".png";
                    }
                    var i = t.querySelector("[data-testid='tweetTextarea_0']");
                    fetch(url).then(function(e) {
                      return e.blob();
                    }).then(function(e) {
                      var t = new DataTransfer();
                   t.items.add(new File([e], "image.png", {
              type: "image/png"
          }));
          
          var n = new ClipboardEvent("paste", {
              clipboardData: t,
              bubbles: !0,
          });
          
          i.dispatchEvent(n);
          
                            });
                        }
                    });
                    
                    e.parentNode.insertBefore(select, e.nextSibling);
                    
                    select.addEventListener("change", function() {
                        if (select.value != "Select Doge#") {
                            var dogeNumber = select.value;
                            var url = "https://tubercular-milligra.000webhostapp.com/Doge/" + dogeNumber + ".png";
                            var i = t.querySelector("[data-testid='tweetTextarea_0']");
                            fetch(url).then(function(e) {
                                return e.blob();
                            }).then(function(e) {
                                var t = new DataTransfer();
                                t.items.add(new File([e], "image.png", {
                                    type: "image/png"
                                }));
                                var n = new ClipboardEvent("paste", {
                                    clipboardData: t,
                                    bubbles: !0,
                                });
                                i.dispatchEvent(n);
                            });
                        }
                    });
            
                    e.parentNode.insertBefore(select, e.nextSibling);
                });
            }
            
                     
                     
    
  var e2 = M("gmeme2", "Others");
  if (e2) {
    var t2 = E();
    e2.addEventListener("click", (function() {
      var inputNumber = Math.floor(Math.random() * 33) + 1;
      var url = "" + inputNumber + ".png";
      var i = t2.querySelector("[data-testid='tweetTextarea_0']");
      fetch(url).then((function(e) {
        return e.blob()
      })).then((function(e) {
        var t = new DataTransfer;
        t.items.add(new File([e], "image.png", {
          type: "image/png"
        }));
        var n = new ClipboardEvent("paste", {
          clipboardData: t,
          bubbles: !0
        });
        i.dispatchEvent(n)
      }));
    }))
  }
        }(),
        function() {
            var e = M("reload-content", "Refresh");
            if (e) {
                var n = E();
                e.addEventListener("click", (function(e) {
                    var r = n.querySelector("[data-testid='tweetTextarea_0']");
                    r.focus(), window.setTimeout((function() {
                        var e, t;
                        window.getSelection && document.createRange ? ((t = document.createRange()).selectNodeContents(r), (e = window.getSelection()).removeAllRanges(), e.addRange(t)) : document.body.createTextRange && ((t = document.body.createTextRange()).moveToElementText(r), t.select())
                    }), 1), window.setTimeout((function() {
                        var e = new DataTransfer;
                        e.setData("text/plain", g(r.getAttribute(t)));
                        var n = new ClipboardEvent("paste", {
                            clipboardData: e,
                            bubbles: !0
                        });
                        r.dispatchEvent(n)
                    }), 50)
                }))
            }
        }()
    })).observe(N, {
        attributes: !1,
        childList: !0,
        subtree: !0
    })
}();
//# sourceMappingURL=master.js.map
