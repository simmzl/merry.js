export default class Merry{
    constructor (props){
        this.imgPrevent = props.imgPrevent;

        this.imgPrevent && this.isImgPrevent();
        !document.getElementsByClassName && this.getClassName();
    }
    // 禁止页面图片拖动
    isImgPrevent(){
        let body = document.getElementsByTagName("body");
        body[0].onmousedown = e => {
            e = e || window.event;
            let el = e.target ? e.target : e.srcElement;
            el.nodeName.toLowerCase() === "img" && e.preventDefault();
        }
    }
    getClassName(){
        document.getElementsByClassName =  cls => {
            let res = [];
            let all = document.getElementsByTagName("*");
            for (let i = 0; i < all.length; i++) {
                if (all[i].className === cls
                    || all[i].className.indexOf(cls + " ") === 0
                    || all[i].className.indexOf(" " + cls + " ") > -1
                    || all[i].className.indexOf(cls + " ") === (all[i].className.length - cls.length - 1)) {
                    res.push(all[i]);
                }
            }
            return res;
        }
    }
    // 生成随机字符串
    randomStr(length, dictionary = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM=+1234567890") {
        let res = "", lenDictionary;
        if (typeof dictionary === "string") {
            lenDictionary = dictionary.length;
        } else {
            throw "Second parameter must be a string or empty";
        }
        for(let i = 0; i < length; i++){
            // Math.floor() 向左取整
            const index = Math.floor(Math.random() * lenDictionary);
            res += dictionary.charAt(index);
        }
        return res;
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}