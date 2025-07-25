/*
                                        .--:.....:--.                                                   
                                   ::.         :--                                                  
                                   :             -.                                                 
                                  ..                                                                
                       ..:::::::::..:::::::::..                                                     
                   .::---::::------:------::-----:.                                                 
                .:----:::--------:::::-:....:::::---:.                                              
             .:----:::--------::.:::::--:-------::::---:.                                           
           .-----::----------:.::------------------::-----:                                         
         .------:-----------..------------------------:----=:                                       
        -=-----------------.:-------------==-----------::---==.                                     
      .==-----=-----------.:----=======--=--=--===-=-:-=::-==++.                                    
     -+=----==----------=::-=-============-.:==-----==.:=-:=+===.                                   
    -+---=--=--------=-=-.-==============-=:..-+=====+=.:=-.----=.                                  
   -*--++=:+===-==-=--==::-====--=====--==+-.::-+===--=:.:--.-----                                  
  .*=:++=--*+===+-=*=+*-.:=-=+=-:==+==-:====:%%::=----=:..:-::=--=:                                 
  =+:-==-:=======-====+.:--:=+=:.=====::=--=:+@#::=-----:.::-.:---=.                                
 .+-:===-:=============.:--:=-=:.---==::=--=::@@#::=----:..-::.-----                                
 :+::===::========-===-..--:==-:..-:==:.-::--.*@@*.---::::.-...:-----.                              
 -=:-===-:=======-:=-=-..:-:-=-:.::::=:.:::--.=@@@+.:::....:-. .:---:*                              
 -=:-===-.=====-=-:--=:.:.::-=-:.=-::::..::::.:@@@@= ....:=*-::.:---:%+                             
 :=:-===-.:=-=--=-:--=:.:..::--:.-*.:::.......:%@@@@+=+#%#+:-+*:.---:%=                             
 :=:-====:.==---=-:---:.::.::::::.#*.::.-=-=+*#@@@@@%%%*=-:-:.-:.:--:.                              
 .-.-=--=-.-=-----::---.:::.-:::. -*- .-+%@@@@@@@@@@@#-  #%%@+...:--::                              
 .-.:-----:.------::---..::..:.::---==+++*%@@@@@@@@@@=.. . +@#::.:--:+-                             
  :.:-----:.------:::--:....=+*%@@@@@%%#%@@@@@@@@@@@@-  : =+@%%:.---::#.                =*.         
  ..:-----:.:-----:::---.-+#@@@@@@@@@@@%@@@@@@@@@@@@@@=+-++%@%@-.---:-**              =%@#          
  ..:------:.------:::--:*@@@@@@%%#****#%@@@@@@@@@@@@@%#**#@%%@=.---.++@-          :+%@%-           
   .:------: .-----:::--:-@@%%#=::.::---+@@@@@@@@@@@@@@@##@%%%@*:---.:*#%       :+#@@#-             
    :-:--=-:.-:----::::--:##:.. -+#%@@@@@@@@@@@@@@@@@@%@@@@@@@@%----. *+#:    =#@@@%+:.::::::--=+-  
    :-:--=-::#:-----:::--:-+=--*%@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@:---  =+    =%@@##%%@@@%%%%%##*=:   
    :::--=::-#+.----::::--:%@%@@%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@=:--:       *@@@@@@@##*#**:          
    :.--=-::=##=:----::::-:=@%%%%%@@@@@@@@@@@@@@%%@%*@@@@@@@@%-:---.     .#@@@%##***+=@@%*          
   ...--=:-.:*##-:---:.:.:-:#@@@@@@@@@@@@@@@@@@#**#*=#@@@@@@*::--::      #@@@@@%#######*+%-         
   . :--::-...-+*:----:::.::=@@@@@@@@@@@@@@@@@+*%%%#*%@@@@*- :--:-      +@@@@@@@%%%%%#**=#-         
     :--.-:... ....----:::.:.#@@@@@@@@@@@@@@@@**#**+%@@%+....--:-:    :=@@@@@@@#+**+= .+:           
     :-.:-.....::. .----:::...**#%%%@@@@@@@@@@@@@%@@@#=.  ...-:::     ++*%@@@@%*+++=                
     -::-:.....--...:----::::.+#***==********###***=-...  ..:::-.     -##%%#*+=+*##:                
    .-:--.....:-:....:----:::..#%%@%*++***++**##= ....... ..::-:     .::=#%@@@@@%*:                 
    .---. ...:-- .... :----::-.-@@@@@%*+**##**@@%:.:........:-:      .==-:-====-::-.                
   .=--:....:--. .......----::-.=@@@@@@@*==+=:*@@-:-::....::--.     .-============:                 
  -=--.....:--. .. ......:----:-:=%@@@@*-==+-:**@+.===-...:--......:=============.                  
:==-:. ...---  .. ...::-:..:-----:-*@@+==-.+*-@%*=:====: ---:.....:============-.                   
=--:  ..:-:.  ::. ::-----:...:-----:==*@%%--=-@@@=:====: =--......-=-=========--.                   
--:  .::.    ::..---------:....:-----:=*@@*:##*@%-:====..=-.......:=----------=:                    
-:. ...    .:: .----------:......::------#+*@*=@*.===== :=:........:=----------                     
-.        :-: .----------:.....:....:::---:***-+::====. .=::........:-------=-                      
:.       -=: .--------::......:--:....=::=-.*#: :====.   -::.        .::----:                       
:.      :=-.:---------:.......-----:.:%#:.=-.-.-===-     .::-                                       
..      =-.----------:.......:------.+#%=.:=: -==-:       .:-:                                      
*/

function 安和昴函数(n){
    if(n<0)return "-"+安和昴函数(-n);
    switch(n){
        case 486: return "486";
        case 0: return "486-486";
        case 1: return "486/486";
        case 3: return "(486+486+486)/486";
        case 12: return "4+8+6";
        case 26: return "4*8-6";
        case 38: return "4*8+6";
        case 2: return "4-8+6";
        case 52: return "4+8*6"; 
        case 6: return "4+8-6";
        case 192:return "4*8*6";
    }
    {
        if(n%486==0) {
            if(n/486<5){
                let t="486";
                for(let i=0;i<=n/486-2;i++)t+="+486";
                return t;
            }
            return "486"+"*"+安和昴函数(n/486);
        }
        if(486%n==0&&(486/n)<=4) return "486/"+安和昴函数(486/n);
        
        if(n%192==0)return "("+安和昴函数(192)+")*("+安和昴函数(n/192)+")";

        if(n%38==0)return "("+安和昴函数(38)+")*("+安和昴函数(n/38)+")";

        if(n%26==0)return "("+安和昴函数(26)+")*("+安和昴函数(n/26)+")";

        if(n%12==0)return "("+安和昴函数(12)+")*("+安和昴函数(n/12)+")";

        if(n%6==0)return "("+安和昴函数(6)+")*("+安和昴函数(n/6)+")";

        if(n%2==0)return "("+安和昴函数(2)+")*("+安和昴函数(n/2)+")";
        
        if(n%3==0)return "("+安和昴函数(3)+")*("+安和昴函数(n/3)+")";
        
        if(n%5==0) {
            return "("+安和昴函数(3)+"+"+安和昴函数(2)+")*("+安和昴函数(n/5)+")";
        }
        if(n%7==0) {
            return "("+安和昴函数(3)+"+"+安和昴函数(4)+")*("+安和昴函数(n/7)+")";
        }
        if(n%9==0) {
            return "("+安和昴函数(5)+"+"+安和昴函数(4)+")*("+安和昴函数(n/9)+")";
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
        if(num!=Math.round(num)){
            alert("486请的程序员太懒了，没有做支持小数转换的呢……");
        }
        console.log(安和昴函数(num));
        document.getElementById("r").innerHTML="结果："+安和昴函数(num);
        navigator.clipboard.writeText(安和昴函数(num));
        alert("结果已经复制到剪切板！");
    }else if(text=="我爱你"){
        alert("（害羞）哎哎哎？你说什么？那个……我也爱你！");
    }else if(text=="你好"){
        alert("你好~");
    }else if(text=="sb"){
        alert("baka!");
    }else if(text=="baka"){
        alert("baka!");
    }else if(text=="mua"){
        alert("(嫌弃)咦……");
    }else{
        alert("请输入整数！（输入一些特殊的文本可能有彩蛋？）");
    }
}
var a=false;
setInterval(()=>{
    document.getElementById("title").innerHTML=
        a?"&nbsp;&nbsp;&nbsp;&nbsp;486神人程序plus":"&nbsp;&nbsp;&nbsp;&nbsp;By Bilibili 昴昂昴昂昴";
    a=!a;
},4486);