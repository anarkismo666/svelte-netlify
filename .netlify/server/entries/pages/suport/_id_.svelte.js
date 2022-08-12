var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../../_app/immutable/chunks/index-78531ddc.js");
var import_stores_3367c908 = require("../../../_app/immutable/chunks/stores-3367c908.js");
const U5Bidu5D = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_78531ddc.a)(import_stores_3367c908.p, (value) => $page = value);
  let params = $page.params;
  console.log($page);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>
        Resultado para ${(0, import_index_78531ddc.e)(params.id)}
    </title>`, ""}`, ""}
<center><h2>El id de la petici\xF3n es ${(0, import_index_78531ddc.e)(params.id)};
    </h2></center>`;
});
