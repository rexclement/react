(this["webpackJsonpkeeper-part-3-completed"] =
  this["webpackJsonpkeeper-part-3-completed"] || []).push([
  [0],
  {
    10: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        l = n.n(a),
        r = n(2),
        c = n.n(r);
      var o = function () {
        return l.a.createElement(
          "header",
          null,
          l.a.createElement("h1", null, "Keeper")
        );
      };
      var u = function () {
        const e = new Date().getFullYear();
        return l.a.createElement(
          "footer",
          null,
          l.a.createElement("p", null, "Copyright \u24d2 ", e)
        );
      };
      var i = function (e) {
        return l.a.createElement(
          "div",
          { className: "note" },
          l.a.createElement("h1", null, e.title),
          l.a.createElement("p", null, e.content),
          l.a.createElement(
            "button",
            {
              onClick: function () {
                e.onDelete(e.id);
              },
            },
            "Delete"
          )
        );
      };
      var m = function (e) {
        const [t, n] = Object(a.useState)({ title: "", content: "" });
        function r(e) {
          const { name: t, value: a } = e.target;
          n((e) => ({ ...e, [t]: a }));
        }
        return l.a.createElement(
          "div",
          null,
          l.a.createElement(
            "form",
            null,
            l.a.createElement("input", {
              name: "title",
              onChange: r,
              value: t.title,
              placeholder: "Title",
            }),
            l.a.createElement("textarea", {
              name: "content",
              onChange: r,
              value: t.content,
              placeholder: "Take a note...",
              rows: "3",
            }),
            l.a.createElement(
              "button",
              {
                onClick: function (a) {
                  e.onAdd(t), n({ title: "", content: "" }), a.preventDefault();
                },
              },
              "Add"
            )
          )
        );
      };
      var p = function () {
        const [e, t] = Object(a.useState)([]);
        function n(e) {
          t((t) => t.filter((t, n) => n !== e));
        }
        return l.a.createElement(
          "div",
          null,
          l.a.createElement(o, null),
          l.a.createElement(m, {
            onAdd: function (e) {
              t((t) => [...t, e]);
            },
          }),
          e.map((e, t) =>
            l.a.createElement(i, {
              key: t,
              id: t,
              title: e.title,
              content: e.content,
              onDelete: n,
            })
          ),
          l.a.createElement(u, null)
        );
      };
      n(9);
      c.a.render(l.a.createElement(p, null), document.getElementById("root"));
    },
    3: function (e, t, n) {
      e.exports = n(10);
    },
    9: function (e, t, n) {},
  },
  [[3, 1, 2]],
]);
//# sourceMappingURL=main.3c7180ed.chunk.js.map
