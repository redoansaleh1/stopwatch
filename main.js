
var s=00,m=00;
var display=document.getElementById("display");
var timer;
function start()
{
  
  
  timer=setInterval(run,1000);
  
}
function run()
{
  
  display.textContent=m+':'+s;
  s++;
  if(s==60)
  {
    s=00;
    m++;
  }
  if(m==60)
  {
    
    m=00;
  }
  
  
}
function pause()
{
    clearInterval(timer);
    display.textContent=m+':'+s;
}
function restart()
{
  clearInterval(timer);
  display.textContent=00+":"+00;
  s=00;
  m=00;
}
