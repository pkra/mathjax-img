import { Configuration } from "mathjax-full/js/input/tex/Configuration.js";
import { CommandMap } from "mathjax-full/js/input/tex/SymbolMap.js";
import TexError from "mathjax-full/js/input/tex/TexError.js";
let imgMethods = {};
const CheckDimen = function (dimen) {
    if (dimen === "")
        return "";
    if (dimen.match(/^\s*([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/)) {
        return dimen.replace(/ /g, "");
    }
    throw new TexError("BadImageDimen", "Bad dimension for image: %1", dimen);
};
imgMethods.Img = (parser, name) => {
    const arg = parser.GetBrackets(name, "");
    const def = {
        src: "",
        alt: "",
        valign: "",
        width: "",
        height: "",
    };
    if (arg.match(/[,=]/)) {
        for (const pair of arg.split(/\s*,\s*/)) {
            const [key, ...value] = pair.split(/\s*=\s*/);
            if (!def.hasOwnProperty(key))
                throw new TexError("UnknownKey", 'Unknown parameter "%1" in %2', key, name);
            def[key] = CheckDimen(value.join("="));
        }
    }
    else {
        def.valign = CheckDimen(arg);
        def.width = CheckDimen(parser.GetBrackets(name, ""));
        def.height = CheckDimen(parser.GetBrackets(name, ""));
    }
    def.alt = parser.GetBrackets(name, "");
    def.src = parser.GetArgument(name);
    if (!def.valign)
        delete def.valign;
    if (!def.width)
        delete def.width;
    if (!def.height)
        delete def.height;
    if (!def.alt)
        delete def.alt;
    parser.Push(parser.create("token", "mglyph", def));
};
new CommandMap("img", { img: "Img" }, imgMethods);
export const configuration = Configuration.create("img", {
    handler: { macro: ["img"] },
});
//# sourceMappingURL=img.js.map
