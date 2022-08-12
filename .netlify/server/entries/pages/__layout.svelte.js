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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
const Footer = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `<center><h5>Pie de p\xE1gina ${(0, import_index_78531ddc.e)(new Date().getFullYear())}</h5></center>`;
});
const Navbar = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">Home</a>
    <a href="${"/about"}">About</a>
    <a href="${"/suport"}">Suport</a></nav>`;
});
const _layout = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_78531ddc.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}


${slots.default ? slots.default({}) : ``}

${(0, import_index_78531ddc.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
