var time=document.querySelector("#display");//it select the time of index.html
var min=00;//value of minute are stroe in this variable
var sec=00;//value of second are store in this variable
var run=false;//this variable is say you that the stopwatch is run now or not .first time the stopwatch is stop so we set the value false
var timer;//this variable is store the interval 
var tit=document.getElementById('tit');
function running()//when a user start the stopwatch this function is increment the value of second and minute  
{
  sec++;//increase the value of second   
  if(sec==60)//checking the the value of second that is second is 60
  {
    sec=00;//if second = 60 just make it 00
    min++;//and increase the value of minute.
  }
  
  time.textContent=min+':'+sec;//change the the default value of time in html
}
function start()//when user click on start this function are call and start the stopwatch
{
  
    if(run==false)//check that if this stopwatch already not start 
    {
    run=true;//and already not start just start this stopwatch and now it is run so run=true.
    timer=setInterval(running,1000);//call the running function after 1 second or 1000 milisecond
    }
    tit.style.color='green';
}
function pause()//when user click on pause this function are call and pause the stopwatch
{
  if(run==true)//check that if this stopwatch already not paused
  {
    run=false;//and already not paused just pause this stopwatch and now it is not run so run=flase.
    clearInterval(timer);//clear the interval of timer
  }
  tit.style.color='orange';
}
function reset()//for reset the stopwatch.
{
  
    run=false;//if user reset this it also not run so run=false 
    sec = 00;//and make second 00
    min = 00;//and make minute 00. 
    time.textContent="00:00";//display the time as 00
    clearInterval(timer);//and also stop this.
    tit.style.color='black'
}
