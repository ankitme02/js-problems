const  convertformat=(time)=>{
let hour=time.substring(0,2)*1;
let minute=time.substring(3,5)*1;
let second=time.substring(6,8)*1;
let period=time.substring(8,10);
 if(period=="AM")
  {
    if(hour==12)
    {
     hour=0;
     }
    }
 else
  {
    if(hour!=12)
     {
       hour+=12;
     }
  }
    
second+=45;
minute+=Math.floor(second/60);
second%=60;
minute+=45;
hour+=Math.floor(minute/60);
minute%=60;
hour%=24;

return (hour<10?"0":"")+`${hour}:`+(minute<10?"0":"")+`${minute}:`+(second<10?"0":"")+`${second}`;
}

input="12:01:00PM";
const output=convertformat(input);
console.log(output);