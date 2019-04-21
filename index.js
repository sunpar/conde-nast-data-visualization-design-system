import * as src from "./src/index";

import pk from "./package.json";

const baseObj = {
    version: pk.version,
}

const CondeDesign = Object.assign(baseObj, src);

export default CondeDesign;
