function 安和昴函数(n){
    if(n<0)return "-"+安和昴函数(-n);
    switch(n){
        case 486: return "486";
        case 0: return "486-486";
        case 1: return "486/486";
        case 2: return "(486+486)/486";
        case 3: return "(486+486+486)/486";
        case 4: return "(486+486+486+486)/486";
    }
    if(n>4){
        if(n%486==0) {
            if(n/486<5){
                let t="486";
                for(let i=0;i<=n/486-2;i++)t+="+486";
                return t;
            }
            return "486"+"*"+安和昴函数(n/486);
        }
        if(486%n==0&&(486/n)<=4) {
            return 486+"/"+安和昴函数(486/n);
        }
        if(n%2==0)return 安和昴函数(2)+"*"+安和昴函数(n/2);
        
        if(n%3==0)return 安和昴函数(3)+"*"+安和昴函数(n/3);
        
        if(n%5==0) {
            return "("+安和昴函数(3)+"+"+安和昴函数(2)+")*"+安和昴函数(n/5);
        }
        if(n%7==0) {
            return 安和昴函数(3)+"+"+安和昴函数(4)+"*"+安和昴函数(n/7);
        }
        if(n%9==0) {
            return "("+安和昴函数(5)+"+"+安和昴函数(4)+")*"+安和昴函数(n/9);
        }
        if(n%1==0) {
            let a = Math.round(n/2),
                b = n-Math.round(n/2);
            return "("+安和昴函数(a)+"+"+安和昴函数(b)+")";
        }
    }
    return "滚木";
}

function c() {
    let text=document.getElementById("IN").value;
    console.log(text);
    if(text==""){
        console.log("无");
    }else if(!isNaN(text)){
        console.log(parseInt(text));
        let num = parseInt(text);
        console.log(安和昴函数(num));
        document.getElementById("r").innerHTML="结果："+安和昴函数(num);
        navigator.clipboard.writeText(安和昴函数(num));
        alert("结果已经复制到剪切板！");
    }else if(text="我爱你"){
        alert("（害羞）哎哎哎？你说什么？那个……我也爱你！");
    }else if(text="你好"){
        alert("你好~");
    }else if(text="sb"){
        alert("baka!");
    }else if(text="baka"){
        alert("baka!");
    }else if(text="mua"){
        alert("(嫌弃)咦……");
    }
}