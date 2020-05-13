 var sec = 0;   //Global variable
               var min=0;     //Global variable
               var hour=0;    //Global variable

               function stopWatch(){
                 document.getElementById("start").style.display="none";
                 document.getElementById("stop").style.display="inline";
                 document.getElementById("resume").style.display="none";

                 document.getElementById("stop").addEventListener("click",function(){
                     clearInterval(id);
                     document.getElementById("start").style.display="none";
                     document.getElementById("stop").style.display="none";
                     document.getElementById("resume").style.display="inline";
                 });

                 document.getElementById("reset").addEventListener("click",function(){
                      clearInterval(id);
                      sec=0;
                      min=0;
                      hour=0;
                      document.getElementById("sec").innerHTML=sec  +"&nbsp;"+ "sec";
                      document.getElementById("min").innerHTML=min  +"&nbsp;"+ "min" ;
                      document.getElementById("hour").innerHTML=hour +"&nbsp;"+ "hr";
                      document.getElementById("start").style.display="inline";
                      document.getElementById("stop").style.display="none";
                      document.getElementById("resume").style.display="none";
                 });

                 var id = setInterval(main, 1000);

                 function main(){
                     if(sec==60)
                         {
                             sec = 0;
                         }
                     if(min==60)
                         {
                             min=00;
                         }
                     else{
                         sec++;
                         min= Math.round(Math.abs(min+(sec/60-0.5)));
                         hour= Math.round(Math.abs(hour+(sec/3600-0.5)));
                         document.getElementById("sec").innerHTML= sec + "&nbsp;" + "sec";
                         document.getElementById("min").innerHTML= min + "&nbsp;" + "min";
                         document.getElementById("hour").innerHTML= hour + "&nbsp;" + "hr";
                        }
                     }
               }
            