class Merry{
    constructor (props){
        this.imgPrevent = props.imgPrevent;

        this.imgPrevent && this.isImgPrevent();
        !document.getElementsByClassName && this.getClassName();
    }
    isImgPrevent(){
        let body = document.getElementsByTagName('body');
        body[0].onmousedown = e => {
            e = e || window.event;
            let el = e.target ? e.target : e.srcElement;
            el.nodeName.toLowerCase() === 'img' && e.preventDefault();
        }
    }
    getClassName(){
        document.getElementsByClassName =  cls => {
            let res = [];
            let all = document.getElementsByTagName('*');
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
    randomStr(len) {
        const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM=+1234567890!@#$%^&*()";
        let res = "";
        for(let i = 0; i < len; i++){
            // Math.floor() 向左取整
            const index = Math.floor(Math.random() * 74);
            res += str.charAt(index);
        }
        return res;
    }
}