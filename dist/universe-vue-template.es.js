import { defineComponent as d, createElementBlock as i, openBlock as l, renderSlot as a } from "vue";
const r = ["type", "disabled"], p = /* @__PURE__ */ d({
  __name: "MyButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const e = t, n = o;
    function c(s) {
      e.disabled || n("click", s);
    }
    return (s, f) => (l(), i("button", {
      type: t.type,
      disabled: t.disabled,
      onClick: c
    }, [
      a(s.$slots, "default", {}, void 0, !0)
    ], 8, r));
  }
}), u = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, y = /* @__PURE__ */ u(p, [["__scopeId", "data-v-1f161746"]]);
export {
  y as MyButton
};
