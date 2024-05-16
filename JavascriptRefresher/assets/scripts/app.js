// named import
// import { apiKey, abc } from "./util";

// named import using "as"
// import { apiKey as localKey } from "./util";

// default import - can give any name you want if defautl export doesn't have a name
// import apiKey from "./util";


// import everything from a file
import * as util from "./util";

console.log(util.default);
console.log(util.abc);
console.log(util.test);