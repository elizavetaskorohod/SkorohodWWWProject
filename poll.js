function getVote(int) {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("poll").innerHTML=this.responseText;
      }
    }
    xmlhttp.open("GET","pollvote.php?vote="+int,true);
    xmlhttp.send();
  }