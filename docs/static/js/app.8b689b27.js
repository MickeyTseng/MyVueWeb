(function(t) {
  function e(e) {
    for (
      var i, r, o = e[0], A = e[1], c = e[2], u = 0, v = [];
      u < o.length;
      u++
    )
      (r = o[u]), s[r] && v.push(s[r][0]), (s[r] = 0);
    for (i in A) Object.prototype.hasOwnProperty.call(A, i) && (t[i] = A[i]);
    l && l(e);
    while (v.length) v.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], i = !0, o = 1; o < n.length; o++) {
        var A = n[o];
        0 !== s[A] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    a = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = i),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    A = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var l = A;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "0012": function(t, e, n) {},
  "0245": function(t, e, n) {
    "use strict";
    var i = n("a52b"),
      s = n.n(i);
    s.a;
  },
  "034f": function(t, e, n) {
    "use strict";
    var i = n("64a9"),
      s = n.n(i);
    s.a;
  },
  "0fa2": function(t, e, n) {},
  "1b31": function(t, e, n) {
    "use strict";
    var i = n("dc4b"),
      s = n.n(i);
    s.a;
  },
  "20cb": function(t, e, n) {},
  "21c0": function(t, e, n) {
    t.exports = n.p + "static/img/createProject_07.1bf8c936.png";
  },
  2702: function(t, e, n) {
    t.exports = n.p + "static/img/Vue_icon.82b9c7a5.png";
  },
  "2a63": function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_03.8b43d95b.png";
  },
  "2d5c": function(t, e, n) {
    "use strict";
    var i = n("d8a4"),
      s = n.n(i);
    s.a;
  },
  3429: function(t, e, n) {
    "use strict";
    var i = n("5acc"),
      s = n.n(i);
    s.a;
  },
  "3d8d": function(t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "45b5": function(t, e, n) {},
  "49dc": function(t, e, n) {
    t.exports = n.p + "static/img/createProject_01.53bd5e46.png";
  },
  "4a91": function(t, e, n) {
    "use strict";
    var i = n("20cb"),
      s = n.n(i);
    s.a;
  },
  "4f78": function(t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "509b": function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_07.29ed7f48.png";
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var i = n("2b0e"),
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { attrs: { id: "app" } }, [
          n(
            "div",
            { attrs: { id: "header" } },
            [
              n("router-link", { attrs: { to: "/" } }, [
                n("img", {
                  staticStyle: { height: "30vh", width: "30vh" },
                  attrs: { src: t.vueIconimgUrl }
                })
              ])
            ],
            1
          ),
          n("div", { attrs: { id: "sidebar_left" } }),
          n("div", { attrs: { id: "sidebar_right" } }),
          n("div", { attrs: { id: "content" } }, [n("router-view")], 1),
          n("div", { attrs: { id: "footer" } })
        ]);
      },
      a = [],
      r = {
        name: "Des",
        data: function() {
          return { vueIconimgUrl: n("2702") };
        }
      },
      o = r,
      A = (n("034f"), n("2877")),
      c = Object(A["a"])(o, s, a, !1, null, null, null),
      l = c.exports,
      u = n("8c4f"),
      v = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "home" },
          [
            n("h1", [t._v('這是一個從"0"開始學習Vue的過程')]),
            t._l(t.itemList, function(e) {
              return n("ul", { key: e.index }, [
                n(
                  "li",
                  [
                    n("router-link", { attrs: { to: e.path } }, [
                      n("h2", [t._v(t._s(e.text))])
                    ])
                  ],
                  1
                )
              ]);
            })
          ],
          2
        );
      },
      h = [],
      d = {
        data: function() {
          return {
            itemList: [
              { text: "軟體清單", path: "/softwareList" },
              { text: "學習項目", path: "/lesson/lessonList" },
              { text: "參考網頁", path: "/referenceMaterial" }
            ]
          };
        },
        methods: {
          test: function() {
            console.log(
              Object({ NODE_ENV: "production", BASE_URL: "" }).VUE_APP_MODE
            );
          }
        }
      },
      p = d,
      g = (n("e850"), Object(A["a"])(p, v, h, !1, null, "b8e4a444", null)),
      f = g.exports,
      m = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("h1", [t._v("軟體清單")]),
            n("h2", [t._v("必要類 :")]),
            t._l(t.necessaryList, function(e) {
              return n("ul", { key: e.index }, [
                n("li", [
                  n("img", { attrs: { src: e.logo } }),
                  t._v(" \n      "),
                  n("a", { attrs: { href: e.path, target: "_blank" } }, [
                    t._v("\n        " + t._s(e.text) + "\n      ")
                  ])
                ])
              ]);
            }),
            n("h2", [t._v("插件類 :")]),
            t._l(t.pluginList, function(e) {
              return n("ul", { key: e.index }, [
                n("li", [
                  n("img", { attrs: { src: e.logo } }),
                  t._v(
                    " " +
                      t._s(e.text) +
                      " :\n      " +
                      t._s(e.depiction) +
                      "\n    "
                  )
                ])
              ]);
            })
          ],
          2
        );
      },
      _ = [],
      E = {
        data: function() {
          return {
            necessaryList: [
              {
                logo: n("f81f"),
                text: "Visual Studio Code",
                path: "https://code.visualstudio.com/Download"
              },
              {
                logo: n("c664"),
                text: "Node.js",
                path: "https://nodejs.org/en/"
              }
            ],
            pluginList: [
              {
                logo: n("f81f"),
                text: "ESLint",
                depiction: "VSCode代碼中提示錯誤。"
              },
              {
                logo: n("f81f"),
                text: "Vuetur",
                depiction: "Vue開發的神器，格式化、代碼段等。"
              },
              {
                logo: n("f81f"),
                text: "Prettier",
                depiction:
                  "Code formatter，代碼格式化插件，可以自定義格式化的配置。"
              },
              {
                logo: n("f81f"),
                text: "Auto Close Tag",
                depiction:
                  "在打開標簽並且鍵入 </ 的時候，能自動補全要閉合的標簽。"
              },
              {
                logo: n("f81f"),
                text: "Auto Rename Tag",
                depiction: "在修改開始（結束）標籤的時候修改對應的標籤。"
              },
              {
                logo: n("f81f"),
                text: "IntelliSense for CSS class names ",
                depiction: "CSS 類名補全。"
              },
              {
                logo: n("dedc"),
                text: "Vue.js devtools",
                path:
                  "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",
                depiction:
                  "Chrome開發vue的套件，可以檢查組件的資料及事件與資料變化。"
              }
            ]
          };
        }
      },
      b = E,
      x = (n("2d5c"), Object(A["a"])(b, m, _, !1, null, "0db95bfd", null)),
      C = x.exports,
      j = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "text" } },
          [
            n("router-link", { attrs: { to: "/lesson/lessonList" } }, [
              n("h1", [t._v("學習項目")])
            ]),
            n("router-view")
          ],
          1
        );
      },
      B = [],
      k = (n("cd39"), {}),
      S = Object(A["a"])(k, j, B, !1, null, "62f4a104", null),
      M = S.exports,
      w = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n("h1", [t._v("參考網頁")]),
          n("h2", [t._v("官方網站：")]),
          n("ul", [
            n("li", [
              n("img", { attrs: { src: t.vueIcon } }),
              n("a", { attrs: { href: t.vueWebUrl, target: "_blank" } }, [
                t._v("\n        Vue.js\n      ")
              ])
            ])
          ]),
          n("h2", [t._v("部落格：")]),
          t._m(0)
        ]);
      },
      P = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("ul", [
            n("li", [
              t._v("\n      包學會之淺入淺出Vue.js：\n      "),
              n(
                "a",
                {
                  attrs: {
                    href: "https://cloud.tencent.com/developer/article/1020337",
                    target: "_blank"
                  }
                },
                [t._v("\n        開學篇\n      ")]
              ),
              n(
                "a",
                {
                  attrs: {
                    href: "https://cloud.tencent.com/developer/article/1020338",
                    target: "_blank"
                  }
                },
                [t._v("\n        升學篇\n      ")]
              ),
              n(
                "a",
                {
                  attrs: {
                    href: "https://cloud.tencent.com/developer/article/1020416",
                    target: "_blank"
                  }
                },
                [t._v("\n        結業篇\n      ")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href:
                      "https://ithelp.ithome.com.tw/users/20103396/ironman/1030",
                    target: "_blank"
                  }
                },
                [t._v("\n        30天學會Vue.js 系列\n      ")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href:
                      "https://blog.csdn.net/qq_24147051/article/details/76997838",
                    target: "_blank"
                  }
                },
                [t._v("\n        使用vue-router設置每個頁面的title\n      ")]
              )
            ]),
            n("h2", [t._v("插件使用教學：")]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://www.jianshu.com/p/5df4ea081fcc",
                    target: "_blank"
                  }
                },
                [t._v("\n        VSCode配合ESLint自動修復格式化\n      ")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://www.jianshu.com/p/b5febde4b823",
                    target: "_blank"
                  }
                },
                [t._v("\n        配置eslint提升代碼質量\n      ")]
              )
            ])
          ]);
        }
      ],
      Q = {
        data: function() {
          return { vueIcon: n("2702"), vueWebUrl: "https://cn.vuejs.org/" };
        }
      },
      I = Q,
      V = (n("7ab7"), Object(A["a"])(I, w, P, !1, null, "09d31142", null)),
      G = V.exports,
      O = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("viewer", [
              n("h1", [t._v("建立第一個Vue專案")]),
              n("h2", [t._v("搭建環境")]),
              n(
                "ul",
                [
                  n("li", [
                    t._v("\n        請先安裝\n        "),
                    n("a", { attrs: { href: t.NodeJsUrl, target: "_blank" } }, [
                      t._v(" Node.js ")
                    ]),
                    t._v("（建議下載最多人使用版本）\n      ")
                  ]),
                  n("li", [
                    t._v("\n        打開終端機輸入命令安裝\n        "),
                    n("a", { attrs: { href: t.vueCliUrl, target: "_blank" } }, [
                      t._v("\n          Vue CLI\n        ")
                    ])
                  ]),
                  n("highlight-code", { attrs: { lang: "shell" } }, [
                    t._v("\n        npm install -g @vue/cli\n      ")
                  ])
                ],
                1
              ),
              n("h2", [t._v("建立專案")]),
              n(
                "ul",
                [
                  n("li", [t._v("在終端機輸入命令")]),
                  n("highlight-code", { attrs: { lang: "vue" } }, [
                    t._v("\n        vue ui\n      ")
                  ]),
                  n("li", [
                    t._v("\n        此時"),
                    n("a", { attrs: { href: t.vueCliUrl } }, [
                      t._v(" Vue CLI ")
                    ]),
                    t._v("將會在瀏覽器開啟Vue項目管理器\n      ")
                  ]),
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.createProject_01 }
                  }),
                  n("li", [t._v("點選創建並選擇要建立專案的資料夾")]),
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.createProject_02 }
                  }),
                  n("li", [t._v("接著就是設定一些專案的基本資訊")]),
                  n("li", [
                    n("img", {
                      staticClass: "screenShot",
                      attrs: { src: t.createProject_03 }
                    })
                  ]),
                  n("li", [
                    n("img", {
                      staticClass: "screenShot",
                      attrs: { src: t.createProject_04 }
                    })
                  ]),
                  n("li", [t._v("完成後等待專案建立")]),
                  n("li", [
                    n("img", {
                      staticClass: "screenShot",
                      attrs: { src: t.createProject_05 }
                    })
                  ]),
                  n("li", [t._v("專案管理介面")]),
                  n("li", [
                    n("img", {
                      staticClass: "screenShot",
                      attrs: { src: t.createProject_06 }
                    })
                  ]),
                  n("li", [t._v("也可以在@vue/cli-ui選擇多個項目")]),
                  n("li", [
                    n("img", {
                      staticClass: "screenShot",
                      attrs: { src: t.createProject_07 }
                    })
                  ])
                ],
                1
              ),
              n("h2", [t._v("運行專案")]),
              n("ul", [
                n("li", [t._v("在Vue cli service serve 頁面中 點擊運行")]),
                n("li", [t._v("Service起成功後即可啟動app")]),
                n("li", [
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.createProject_08 }
                  })
                ]),
                n("li", [
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.createProject_09 }
                  })
                ])
              ])
            ])
          ],
          1
        );
      },
      J = [],
      U = {
        data: function() {
          return {
            NodeJsUrl: "https://nodejs.org/en/",
            vueCliUrl:
              "https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6",
            createProject_01: n("49dc"),
            createProject_02: n("57da"),
            createProject_03: n("8101"),
            createProject_04: n("d0df"),
            createProject_05: n("b414"),
            createProject_06: n("dc7f"),
            createProject_07: n("21c0"),
            createProject_08: n("a663"),
            createProject_09: n("d2d4")
          };
        }
      },
      D = U,
      q = (n("8069"), Object(A["a"])(D, O, J, !1, null, "6d312211", null)),
      N = q.exports,
      y = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n(
              "ul",
              t._l(t.lessonList, function(e) {
                return n(
                  "li",
                  { key: e.index },
                  [
                    n("router-link", { attrs: { to: e.path } }, [
                      n("h2", [t._v(t._s(e.text))])
                    ])
                  ],
                  1
                );
              }),
              0
            ),
            n("router-view")
          ],
          1
        );
      },
      R = [],
      Y = {
        data: function() {
          return {
            lessonList: [
              { text: "建立第一個Vue專案", path: "/lesson/createProject" },
              { text: "組件練習", path: "/lesson/componentTest" },
              { text: "Axios", path: "/lesson/AxiosTest" },
              {
                text: "環境變數與專案打包",
                path: "/lesson/EnvironmentalVariable"
              },
              { text: "Jenkins自動佈署Vue", path: "/lesson/Jenkins" }
            ]
          };
        }
      },
      H = Y,
      L = (n("3429"), Object(A["a"])(H, y, R, !1, null, "26c63c10", null)),
      T = L.exports,
      z = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n("h1", [t._v("組件練習")]),
          n(
            "ul",
            [
              n("h2", [t._v("建立一個按鈕")]),
              n("li", [t._v("一般將需要使用的到組件都放於components內")]),
              n("li", [t._v("以quiButton.vue為範例")]),
              n("li", [
                t._v('class="qui-btn" 表示之後在調用建立這個按鈕時所需的標籤名')
              ]),
              n("li", [
                t._v(
                  "當按鈕組件被初始化的時候，text自定義屬性會被綁定到span標籤中"
                )
              ]),
              n("highlight-code", { attrs: { lang: "vue" } }, [
                t._v(
                  '\n      <template> \n        <button>\n          <span> { {text}}</span> \n        </button>\n    </template> \n    \n    <script>\n    export default { \n      props: { \n        text: { \n          default:"預設文字" \n        }\n      } \n    };\n    </script>\n    '
                )
              ])
            ],
            1
          ),
          n(
            "ul",
            [
              n("h2", [t._v("如何調用?")]),
              n("li", [t._v("首先我們必須在頁面中import組件")]),
              n("highlight-code", { attrs: { lang: "vue" } }, [
                t._v(
                  " \n    <script>\n    import quiBtn from '@/components/quiButton.vue'\n    export default { \n      components: { \n        'qui-btn': quiBtn\n      } \n    };\n    </script>\n    "
                )
              ]),
              n("li", [
                t._v("之後只要在頁面上使用註冊的自定義標籤就可以得到一個")
              ]),
              n("qui-btn1"),
              n("li", [t._v("透過覆寫text的值改變顯示的文字")]),
              n("highlight-code", { attrs: { lang: "html" } }, [
                t._v(
                  '\n      <qui-btn text="打什麼就顯示什麼"></qui-btn>\n    '
                )
              ]),
              n("qui-btn1", { attrs: { text: "打什麼就顯示什麼" } }),
              n("h2", [t._v("按鈕事件")]),
              n("li", [t._v("先在按鈕組件設定預設事件")]),
              n("highlight-code", { attrs: { lang: "vue" } }, [
                t._v(
                  '\n      <script>\n      export default { \n        props: {\n           text: {\n              default: "預設文字" \n            },\n            msg: { \n              default: "預設彈出文字" \n            }\n        }, \n        methods: {\n          // 绑定事件的關鍵代碼\n          btnClickEvent: function() {\n            alert(this.msg); \n          } \n        } \n      };\n      </script>\n    '
                )
              ]),
              n("li", [t._v("之後在建立一個按鈕時就會預設自帶一個彈出的事件")]),
              n("qui-btn1"),
              n("li", [t._v("同樣的可以透過覆寫來客製出需要的按鈕以及文字")]),
              n("highlight-code", { attrs: { lang: "html" } }, [
                t._v(
                  '\n      <qui-btn1 text="我可以彈出別的字" msg="msg=什麼我就彈出什麼"></qui-btn>\n    '
                )
              ]),
              n(
                "li",
                [
                  n("qui-btn1", {
                    attrs: {
                      text: "我可以彈出別的字",
                      msg: "msg=什麼我就彈出什麼"
                    }
                  })
                ],
                1
              ),
              n("li", [
                t._v("也可以在頁面創建一個自定義的方法來讓按鈕進行綁定")
              ]),
              n("li", [
                t._v(
                  "此時若需要觸發父組件的自定義事件則須寫上this.$emit ('方法名稱')"
                )
              ]),
              n("highlight-code", { attrs: { lang: "javascript" } }, [
                t._v(
                  '\n        methods: {\n          // 绑定事件的關鍵代碼\n          btnClickEvent: function() {\n            this.$emit("btnClickEvent"); //關鍵代碼父組件觸發自定義事件\n          } \n        } \n      };\n    '
                )
              ]),
              n("qui-btn2", {
                attrs: { text: "父組件自定義方法1" },
                on: { btnClickEvent: t.doSth1 }
              }),
              n("qui-btn2", {
                attrs: { text: "父組件自定義方法2" },
                on: { btnClickEvent: t.doSth2 }
              }),
              n("li", [t._v("也可以給按鈕加圖標")]),
              n("qui-btn2", { attrs: { text: "我有圖標" } }, [
                n("img", {
                  staticClass: "ico",
                  attrs: { slot: "icon", src: t.demoico },
                  slot: "icon"
                })
              ])
            ],
            1
          )
        ]);
      },
      W = [],
      K = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("button", { on: { click: t.btnClickEvent } }, [
          n("span", [t._v(t._s(t.text))])
        ]);
      },
      X = [],
      Z = {
        props: {
          text: { default: "預設文字" },
          msg: { default: "預設彈出文字" }
        },
        methods: {
          btnClickEvent: function() {
            alert(this.msg);
          }
        }
      },
      F = Z,
      $ = Object(A["a"])(F, K, X, !1, null, null, null),
      tt = $.exports,
      et = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "button",
          { on: { click: t.btnClickEvent } },
          [t._t("icon"), n("span", [t._v(t._s(t.text))])],
          2
        );
      },
      nt = [],
      it = {
        props: {
          text: { default: "預設文字" },
          msg: { default: "預設彈出文字" }
        },
        methods: {
          btnClickEvent: function() {
            this.$emit("btnClickEvent");
          }
        }
      },
      st = it,
      at = Object(A["a"])(st, et, nt, !1, null, null, null),
      rt = at.exports,
      ot = {
        data: function() {
          return {
            demoico:
              "http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png"
          };
        },
        components: { "qui-btn1": tt, "qui-btn2": rt },
        methods: {
          doSth1: function() {
            alert("自定義方法1");
          },
          doSth2: function() {
            alert("自定義方法2");
          }
        }
      },
      At = ot,
      ct = (n("4a91"), Object(A["a"])(At, z, W, !1, null, "1490601d", null)),
      lt = ct.exports,
      ut = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n("h1", [t._v("Axios")]),
          n("div", { attrs: { id: "text" } }, [
            t._m(0),
            t._m(1),
            n(
              "ul",
              [
                n("h2", [t._v("安裝")]),
                n("li", [t._v("開啟終端機輸入")]),
                n("highlight-code", { attrs: { lang: "shell" } }, [
                  t._v("\n        npm install axios\n      ")
                ]),
                n("li", [
                  t._v("安裝 axios 之後，需要在 main.js 檔案中引用 package")
                ]),
                n("highlight-code", { attrs: { lang: "javascript" } }, [
                  t._v(
                    '\n        import axios from "axios"; //載入 axios\n        import vueAxios from "vue-axios"; //載入 vue-axios\n        '
                  )
                ])
              ],
              1
            ),
            n(
              "ul",
              [
                n("h2", [t._v("使用")]),
                n("li", [
                  t._v("完成之後便可以在需要用到的vue檔案中使用，使用axios")
                ]),
                n("li", [t._v("以GET來說可以這麼寫")]),
                n("highlight-code", { attrs: { lang: "javascript" } }, [
                  t._v(
                    "\n        this.axios.get('/user?ID=12345')\n        .then(response=>{\n        console.log(response);\n        })\n        .catch(function (error) {\n        console.log(error);\n        });\n        "
                  )
                ]),
                n("li", [t._v("或者是")]),
                n("highlight-code", { attrs: { lang: "javascript" } }, [
                  t._v(
                    "\n        this.axios.get('/user', {\n        params: {\n        ID: 12345\n        }\n        })\n        .then(response=>{\n        console.log(response);\n        })\n        .catch(function (error) {\n        console.log(error);\n        });\n        "
                  )
                ]),
                n("li", [t._v("POST請求")]),
                n("highlight-code", { attrs: { lang: "javascript" } }, [
                  t._v(
                    "\n        this.axios.post('/user', {\n        firstName: 'Fred',\n        lastName: 'Flintstone'\n        })\n        .then(response=>{\n        console.log(response);\n        })\n        .catch(function (error) {\n        console.log(error);\n        });\n        "
                  )
                ]),
                n("li", [t._v("執行多個發送請求")]),
                n(
                  "li",
                  [
                    n("highlight-code", { attrs: { lang: "javascript" } }, [
                      t._v(
                        "\n          function getUserAccount() {\n          return this.axios.get('/user/12345');\n          }\n          function getUserPermissions() {\n          return this.axios.get('/user/12345/permissions');\n          }\n          this.axios.all([getUserAccount(), getUserPermissions()])\n          .then(axios.spread(function (acct, perms) {\n          }));\n          "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            t._m(2)
          ]),
          n("div", { attrs: { id: "sidebar_left" } }),
          n("div", { attrs: { id: "sidebar_right" } }),
          n(
            "div",
            { attrs: { id: "content" } },
            [
              n("btn", {
                staticStyle: { "margin-bottom": "4vh" },
                attrs: { text: "取得使用者資料" },
                on: { btnClickEvent: t.getUserData }
              }),
              n("img", {
                staticClass: "circular--squareP",
                staticStyle: { display: "block", margin: "auto" },
                attrs: { src: t.userData.picture }
              }),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.showDetail,
                      expression: "showDetail"
                    }
                  ]
                },
                [
                  n("h6", [t._v("Hi, My name is")]),
                  n("h3", [t._v(t._s(t.userData.name))]),
                  n("h6", [t._v("My email address is")]),
                  n("h3", [t._v(t._s(t.userData.email))]),
                  n("h6", [t._v("My birthday is")]),
                  n("h3", [t._v(t._s(t.userData.dob))]),
                  n("h6", [t._v("My address is")]),
                  n("h3", [t._v(t._s(t.userData.add))]),
                  n("h6", [t._v("My phone number is")]),
                  n("h3", [t._v(t._s(t.userData.phone))])
                ]
              )
            ],
            1
          )
        ]);
      },
      vt = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("ul", [
            n("h2", [t._v("介紹")]),
            n("li", [
              t._v("\n        Axios 是一個基於 Promise 的 HTTP 客戶端\n      ")
            ]),
            n("li", [
              t._v(
                "\n        專門為瀏覽器和 node.js 服務 Vue 2.0 官方推薦使用 axios 來代替原來的\n        Vue request\n      "
              )
            ])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("ul", [
            n("h2", [t._v("功能")]),
            n("li", [
              t._v(
                "\n        1.在瀏覽器中傳送 XMLHttpRequests 請求 在 node.js 中傳送 http 請求\n      "
              )
            ]),
            n("li", [t._v("2.支援 Promise API")]),
            n("li", [t._v("3.攔截請求和響應")]),
            n("li", [t._v("4.轉換請求")]),
            n("li", [t._v("5.和響應資料")]),
            n("li", [t._v("6.取消請求")]),
            n("li", [t._v("7.自動轉換 JSON 資料格式")]),
            n("li", [t._v("8.客戶端支援防範 XSRF 攻擊")])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("ul", [n("h2", [t._v("實例")])]);
        }
      ],
      ht = (n("7f7f"),
      n("6b54"),
      n("06db"),
      function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "button",
          { staticClass: "myButton", on: { click: t.btnClickEvent } },
          [t._t("icon"), n("span", [t._v(t._s(t.text))])],
          2
        );
      }),
      dt = [],
      pt = {
        props: { text: { default: "預設文字" } },
        methods: {
          btnClickEvent: function() {
            this.$emit("btnClickEvent");
          }
        }
      },
      gt = pt,
      ft = (n("1b31"), Object(A["a"])(gt, ht, dt, !1, null, null, null)),
      mt = ft.exports,
      _t = {
        data: function() {
          return {
            showDetail: !1,
            userData: {
              gender: null,
              name: null,
              add: null,
              email: null,
              dob: null,
              phone: null,
              picture: n("a181")
            }
          };
        },
        components: { btn: mt },
        methods: {
          getUserData: function() {
            var t = this;
            this.axios
              .get("https://randomuser.me/api/")
              .then(function(e) {
                t.dataMerge(e), (t.showDetail = !0);
              })
              .catch(function(t) {
                alert(t.toString());
              });
          },
          dataMerge: function(t) {
            var e = t.data.results[0];
            (this.userData.name = e.name.first + " " + e.name.last),
              (this.userData.email = e.email),
              (this.userData.dob = e.dob.date.substring(0, 10)),
              (this.userData.add = e.location.city + " " + e.location.street),
              (this.userData.phone = e.phone),
              (this.userData.picture = e.picture.large);
          }
        }
      },
      Et = _t,
      bt = (n("8900"), Object(A["a"])(Et, ut, vt, !1, null, "39560957", null)),
      xt = bt.exports,
      Ct = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("viewer", [
              n("h1", [t._v("環境變數與專案打包")]),
              n("h2", [t._v("環境變數設置")]),
              n(
                "ul",
                [
                  n("h3", [t._v("Modes")]),
                  n("li", [t._v("Vue CLI 內建 3 種 mode：")]),
                  n("li", [t._v("development、test、production")]),
                  n("li", [t._v('可於Vue ui 介面的"變量"選項內做選擇')]),
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.environmentalBuild_01 }
                  }),
                  n("li", [
                    t._v("若要使用自定義模式時(預設之外)則選擇(unset)")
                  ]),
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.environmentalBuild_02 }
                  }),
                  n("h3", [t._v("建立.env檔案")]),
                  n("li", [t._v(".env：所有 mode 都會載入")]),
                  n("li", [t._v(".env.local：所有 mode 都會載入，不會進 Git")]),
                  n("li", [t._v(".env.[mode]：特定 mode 會載入")]),
                  n("li", [
                    t._v(".env.[mode].local：特定 mode 會載入，不會進 Git")
                  ]),
                  n("h3", [t._v("優先級")]),
                  n("li", [
                    t._v(
                      '若 key 同時存在 ".env"、".env.[mode]" 與 "env.[mode].local" 時'
                    )
                  ]),
                  n("li", [t._v("則其載入順序為：")]),
                  n("li", [t._v(".env → env.[mode] → env.[mode].local")]),
                  n("li", [t._v("也就是其優先權為：")]),
                  n("li", [t._v("env.[mode].local > env.[mode] > .env")]),
                  n("h3", [t._v("調用參數")]),
                  n("li", [t._v(".env.development")]),
                  n("highlight-code", { attrs: { lang: "xml" } }, [
                    t._v(
                      "\n        NODE_ENV=development\n        VUE_APP_MODE='開發模式'\n      "
                    )
                  ]),
                  n("li", [
                    t._v("NODE_ENV：指定使用 Vue CLI 內建的 3 個 mode 之一")
                  ]),
                  n("li", [t._v("VUE_APP_API：所有變數以 VUE_APP_ 為開頭")]),
                  n("li", [
                    t._v(
                      "\n        設定的變數可使用 process.env.VUE_APP_xxx 讀取。\n      "
                    )
                  ]),
                  n("highlight-code", { attrs: { lang: "javascript" } }, [
                    t._v(
                      "\n        export default {\n          data() {\n            return {\n              appMode: process.env.VUE_APP_MODE\n            };\n          }\n        }\n      "
                    )
                  ])
                ],
                1
              ),
              n("h2", [t._v("專案打包")]),
              n(
                "ul",
                [
                  n("li", [t._v("若需要將專案打包生成dist時")]),
                  n("li", [t._v("請先於src同級目錄新增vue.config.js設定檔案")]),
                  n("li", [t._v("以下為vue.config.js的基本配置")]),
                  n(
                    "li",
                    [
                      n("highlight-code", { attrs: { lang: "javascript" } }, [
                        t._v(
                          '\n          module.exports = {\n            publicPath: "./",\n            devServer: {\n            port: 9000,\n            open: true,\n            https: false\n             }\n          };\n        '
                        )
                      ])
                    ],
                    1
                  ),
                  n("li", [t._v("接著可於Vue ui介面進行打包")]),
                  n("img", {
                    staticClass: "screenShot",
                    attrs: { src: t.environmentalBuild_03 }
                  }),
                  n("li", [t._v("也可以直接於終端機下指令")]),
                  n("highlight-code", { attrs: { lang: "shell" } }, [
                    t._v("\n       npm run build --[mode]\n      ")
                  ])
                ],
                1
              )
            ])
          ],
          1
        );
      },
      jt = [],
      Bt = {
        data: function() {
          return {
            environmentalBuild_01: n("3d8d"),
            environmentalBuild_02: n("65bf"),
            environmentalBuild_03: n("63b5"),
            appMode: Object({ NODE_ENV: "production", BASE_URL: "" })
              .VUE_APP_MODE
          };
        },
        components: {},
        methods: {}
      },
      kt = Bt,
      St = (n("ed4b"), Object(A["a"])(kt, Ct, jt, !1, null, "20d865c0", null)),
      Mt = St.exports,
      wt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("viewer", [
              n("h1", [t._v("Jenkins自動佈署Vue")]),
              n("h2", [t._v("安裝 NodeJS Plugin")]),
              n("ul", [
                n("h3", [t._v("在主選單選擇”管理 Jenkins”")]),
                n("img", { attrs: { src: t.Jenkins_01 } }),
                n("h3", [t._v("進入後選擇”管理外掛程式”")]),
                n("img", {
                  staticClass: "screenShot",
                  attrs: { src: t.Jenkins_02 }
                }),
                n("h3", [t._v("在子標籤”可用的”選取”NodeJS Plugin” 並安裝")]),
                n("img", {
                  staticClass: "screenShot",
                  attrs: { src: t.Jenkins_03 }
                })
              ]),
              n("h2", [t._v("設定可用 Node.JS 版本")]),
              n("ul", [
                n("h3", [t._v("進入 Global Tool Configuration")]),
                n("img", {
                  staticClass: "screenShot",
                  attrs: { src: t.Jenkins_04 }
                }),
                n("h3", [t._v("點擊”NodeJS 安裝…”")]),
                n("img", {
                  staticClass: "screenShot",
                  attrs: { src: t.Jenkins_05 }
                }),
                n("h3", [t._v("設定所需 Node.js 版本")]),
                n("img", {
                  staticClass: "screen",
                  attrs: { src: t.Jenkins_06 }
                })
              ]),
              n("h2", [t._v("新增 Jenkins 作業")]),
              n("ul", [
                n("h3", [t._v("新增作業")]),
                n("img", { attrs: { src: t.Jenkins_07 } }),
                n("h3", [t._v("相關參考配置")]),
                n("li", [
                  n("img", {
                    staticClass: "screen",
                    attrs: { src: t.Jenkins_08 }
                  })
                ]),
                n("li", [
                  n("img", {
                    staticClass: "webScreen",
                    attrs: { src: t.Jenkins_09 }
                  })
                ])
              ])
            ])
          ],
          1
        );
      },
      Pt = [],
      Qt = {
        data: function() {
          return {
            Jenkins_01: n("7fd4"),
            Jenkins_02: n("5885"),
            Jenkins_03: n("2a63"),
            Jenkins_04: n("cbec"),
            Jenkins_05: n("4f78"),
            Jenkins_06: n("a48a"),
            Jenkins_07: n("509b"),
            Jenkins_08: n("778e"),
            Jenkins_09: n("7676"),
            appMode: Object({ NODE_ENV: "production", BASE_URL: "" })
              .VUE_APP_MODE
          };
        },
        components: {},
        methods: {}
      },
      It = Qt,
      Vt = (n("0245"), Object(A["a"])(It, wt, Pt, !1, null, "071b48c6", null)),
      Gt = Vt.exports;
    i["a"].use(u["a"]);
    var Ot = new u["a"]({
        routes: [
          {
            path: "/",
            name: "home",
            component: f,
            meta: { title: '這是一個從"0"開始學習Vue的過程' }
          },
          {
            path: "/softwareList",
            name: "softwareList",
            component: C,
            meta: { title: "軟體清單" }
          },
          {
            path: "/lesson",
            name: "lesson",
            component: M,
            children: [
              { path: "lessonList", component: T, meta: { title: "學習項目" } },
              {
                path: "createProject",
                component: N,
                meta: { title: "建立第一個Vue專案" }
              },
              {
                path: "componentTest",
                component: lt,
                meta: { title: "組件練習" }
              },
              { path: "AxiosTest", component: xt, meta: { title: "Axios" } },
              {
                path: "EnvironmentalVariable",
                component: Mt,
                meta: { title: "環境變數與專案打包" }
              },
              {
                path: "Jenkins",
                component: Gt,
                meta: { title: "Jenkins自動佈署Vue" }
              }
            ]
          },
          {
            path: "/referenceMaterial",
            name: "referenceMaterial",
            component: G,
            meta: { title: "參考網站" }
          }
        ]
      }),
      Jt = n("2f62");
    i["a"].use(Jt["a"]);
    var Ut = new Jt["a"].Store({ state: {}, mutations: {}, actions: {} }),
      Dt = n("bc3a"),
      qt = n.n(Dt),
      Nt = n("a7fe"),
      yt = n.n(Nt),
      Rt = n("6944"),
      Yt = n.n(Rt),
      Ht = (n("0808"), n("c964")),
      Lt = n("8dcb"),
      Tt = n.n(Lt),
      zt = n("ee8c"),
      Wt = n.n(zt),
      Kt = n("4dd1"),
      Xt = n.n(Kt),
      Zt = n("b65b"),
      Ft = n.n(Zt),
      $t = n("8ed1"),
      te = n.n($t);
    n("cf12");
    (i["a"].config.productionTip = !1),
      i["a"].use(yt.a, qt.a),
      new i["a"]({
        router: Ot,
        store: Ut,
        render: function(t) {
          return t(l);
        }
      }).$mount("#app"),
      i["a"].use(Yt.a, { defaultOptions: { zIndex: 9999 } }),
      i["a"].use(Ht["a"], {
        languages: {
          html: Tt.a,
          css: Wt.a,
          javascript: Xt.a,
          vue: te.a,
          shell: Ft.a
        }
      }),
      Ot.beforeEach(function(t, e, n) {
        t.meta.title && (document.title = t.meta.title), n();
      });
  },
  "57da": function(t, e, n) {
    t.exports = n.p + "static/img/createProject_02.12556ee0.png";
  },
  5885: function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_02.a58a1eed.png";
  },
  "5acc": function(t, e, n) {},
  "63b5": function(t, e, n) {
    t.exports = n.p + "static/img/environmentalBuild_03.69e3b6be.png";
  },
  "64a9": function(t, e, n) {},
  "65bf": function(t, e, n) {
    t.exports = n.p + "static/img/environmentalBuild_02.0d771037.png";
  },
  7676: function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_09.3ca7a2f1.png";
  },
  "778e": function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_08.f716f6e0.png";
  },
  "7ab7": function(t, e, n) {
    "use strict";
    var i = n("7d4b"),
      s = n.n(i);
    s.a;
  },
  "7d4b": function(t, e, n) {},
  "7fd4": function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_01.77067127.png";
  },
  8069: function(t, e, n) {
    "use strict";
    var i = n("a026"),
      s = n.n(i);
    s.a;
  },
  8101: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_03.b316d8ed.png";
  },
  "880a": function(t, e, n) {},
  8900: function(t, e, n) {
    "use strict";
    var i = n("0fa2"),
      s = n.n(i);
    s.a;
  },
  a026: function(t, e, n) {},
  a181: function(t, e) {
    t.exports =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADIAMgDASIAAhEBAxEB/8QAGwABAAMAAwEAAAAAAAAAAAAAAAQFBgECAwf/xAAwEAEAAgEBBwMCAwkAAAAAAAAAAgMEEgEFEyIyQlIUI2JyghE0ogYVITEzQ1GSsv/EABkBAQEBAQEBAAAAAAAAAAAAAAACAwEEBf/EABoRAQEBAQADAAAAAAAAAAAAAAACEgMTIlL/2gAMAwEAAhEDEQA/APvQD6TygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0x6Lbpaaq5SSt24EsmXEs5av+l3XXXVDTCMYxZ10yuZVVO55f3rdPx2RSI7oxo91kvuWAjVO5Qf3Zi+Mv8AZ0s3TRt6J2RWInVGVDlbrvpjKVfuR+PUgtYg5m7arpSlH25tJ6fTmVCJGVh340uePL5R6UdaABQAAAAAAAAAAAAJG76PU5Ea+3qkjrvcuNwquPLqn0pqvV2VhXCMK4xj0xcgxaACQAAABxKMZR0yjqiot7YfppxnCPJL9K+eOdTxsWdcvtXNZcpmQls/CWkbswAAAAAAAAAAAHfHhxb4V+Umojs0xjGPazu6dmrNh8WjZdFyAMlAAAAAAAEtumKhmc7TszLdPTqeLvdt13zl8nRsyAFAAAAAAAAAACXunbpzYNCzODPhZlU5dMZNLGUZc0WXRcuQGSgAAAAAAlzRHTI2y2UTlHq0yUMvdHTbOPycOJdTl6GQAAAAAAAAAAADmv8Aqx+pq49PxZNod05PqMaOrrhyyZdFylgMlAAAAAADxzpxqxbbJeL2Vf7QXfhCFEe6WqTsinAelkAAAAAAAAAAAAJe6cjg5kfGfLJEP5JoawVO58y2y/hW2auXlWzCpy1AHAAAAB45WTVRp4s9Opn87I9RlSsjHTHtSN+Wa83T2wjpQW3OU1QA0QAAAAAAAAAAAAAA9MW3g5ELPGTTx26oxlHuZRcblytWz005fx7WfSVytAGKgAA7RzLpUMrkSltyZyl5SdHfI/MWx+cnRsyAFAAAAAAAAAAAAADmuE7JxrhHVIHD33b+eq+pNr3PLbH3L9Mv8RilYu7ase2NnElKUelnVSvKcAxUAAAKGZztmjMuj8ni1EqKts5WSqjKUu7Sp97YUq7eJVDkl49rSaTUq8BogAAAAAAAAHMdkpy0xjKUlhi7qtnzW+3Hx7k1Qrneui23oqlL7WgpwManpr1S8pJMYxj0xR5F5U2Pui3bzXyjXHxj1LPHxqqI6a4vYZ1WlADgAAAAAAAAjZGDjXdVemXlFW5m6ra+aqXEj49y7FzWXMsnKMoy0yjpkNNlYlGRH3I83kp8zdttOqUPcguemkZQQGjgAA9sOizJt4df3SdKapXWxrr6pNHh48MaiNcful5M6rLsuuHiVY0NMI83dJIBlpoAOAAAAAAAAAAAAAAAAoRM7AqyY6o8s/KKiyKLKJ8OyLUI+djRyapQl1dsvF2aTUs2Obq7K5yhZHTKI3Quty4kq4Stsjzy5fpWIPNVNQBwAAAAAAAAAAAAAAAAAAAAV+9sP1EddfXH9QsBenMgCHQAAAAAAAAAAAAAAAAAAAAAABQ//9k=";
  },
  a48a: function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_06.d10e1302.png";
  },
  a52b: function(t, e, n) {},
  a663: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_08.e1047341.png";
  },
  b414: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_05.bc39cebc.png";
  },
  c664: function(t, e, n) {
    t.exports = n.p + "static/img/Node.js_icon.521444a2.png";
  },
  cbec: function(t, e, n) {
    t.exports = n.p + "static/img/Jenkins_04.3e03d424.png";
  },
  cd39: function(t, e, n) {
    "use strict";
    var i = n("0012"),
      s = n.n(i);
    s.a;
  },
  cf12: function(t, e, n) {},
  d0df: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_04.faa0cfcd.png";
  },
  d2d4: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_09.e8b38598.png";
  },
  d8a4: function(t, e, n) {},
  dc4b: function(t, e, n) {},
  dc7f: function(t, e, n) {
    t.exports = n.p + "static/img/createProject_06.0697cb6f.png";
  },
  dedc: function(t, e, n) {
    t.exports = n.p + "static/img/Google_Chrome_icon.7c35f3cb.png";
  },
  e850: function(t, e, n) {
    "use strict";
    var i = n("880a"),
      s = n.n(i);
    s.a;
  },
  ed4b: function(t, e, n) {
    "use strict";
    var i = n("45b5"),
      s = n.n(i);
    s.a;
  },
  f81f: function(t, e, n) {
    t.exports = n.p + "static/img/Visual_Studio _Code_icon.00f40564.png";
  }
});
//# sourceMappingURL=app.8b689b27.js.map
