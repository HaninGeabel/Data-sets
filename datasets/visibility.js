
function makeVisible() {
	document.getElementById('choices').style.visibility='visible';
	//function adddata();

}





 function getTraffic(){
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById("result").innerHTML = xhr.responseText;
		 setTimeout(adddata,1000);
	  }
	};
	xhr.open("GET", "FirstFile.html", true);
	xhr.send();

}


function getCameras(){
    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
			 setTimeout(SecondFile,1000);
          }
        };
        xhr.open("GET", "secound.html", true);
        xhr.send();
    
    }


    function getCrime(){
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById("result").innerHTML = xhr.responseText;
		setTimeout(thirdFile,1000);
	  }
	};
	xhr.open("GET", "third.html", true);
	xhr.send();

}
function getBuilding(){
    var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
            setTimeout(forthFile,1000);
          }
        };
        xhr.open("GET", "forth.html", true);
        xhr.send();
    
    }


