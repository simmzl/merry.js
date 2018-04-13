import Merry from "../merry";

const log = console.log;
let my = new Merry({
    imgPrevent :true
});
log(Merry);
log(my.randomStr(500));
log(my.randomStr(500, "12345ABCD"));