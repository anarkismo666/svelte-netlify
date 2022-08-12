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
  default: () => _error
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
var import_stores_3367c908 = require("../../_app/immutable/chunks/stores-3367c908.js");
const _error = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_78531ddc.a)(import_stores_3367c908.p, (value) => $page = value);
  $$unsubscribe_page();
  return `${$page.error ? `<div class="${"your-error-layout"}"><h4>Ocurrio un error:</h4>
    <h2>error:
        ${(0, import_index_78531ddc.e)($page.error.message)}<br>
        causa:
        ${(0, import_index_78531ddc.e)($page.error.cause)}<br>
        nombre:
        ${(0, import_index_78531ddc.e)($page.error.name)}<br></h2></div>` : `<h1>Sin evaluaci\xF3n de error</h1>`}

<a href="${"/"}">Regresar</a>`;
});
