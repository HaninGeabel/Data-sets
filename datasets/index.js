
var	xhr = new XMLHttpRequest();
var parsedrecord= parsedrecord || [];
// var parsedrecord;
//window.onload =adddata;

function adddata() {
    document.getElementById("IncidentInformation").addEventListener("keyup", function(){IncidentInfo(this.value);},false);
    document.getElementById("Discription1").addEventListener("keyup", function(){Discription1(this.value);},false);
    document.getElementById("Sector").addEventListener("keyup", function(){Sectorf(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
              parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.calgary.ca/resource/35ra-9556.json", true);
  xhr.send();
}
function IncidentInfo(IncidentInformation){
    document.getElementById("searchvalue").innerHTML = "Search by Incident Information<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;
    var table="<tr><th>Incident Information</th><th>Sector</th><th>Discription</th><th>Modified Date</th><th>Location</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
     
        var obj = parsedrecord[i];
        // let position = obj.longitude +","+ obj.latitude;  
        Searchbinfo=obj.incident_info;
        var varinle = " "+IncidentInformation;
        Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(varinle.toUpperCase()))
        {
           var loc =  "<a href=http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Go to Map</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.incident_info;
            table+="</td><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.description;
            table+="</td><td>";
            table+=obj.modified_dt;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
        
    // }
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}
}
function Discription1(Discription1){
    document.getElementById("searchvalue").innerHTML = "Search by Incident Discription<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;
    var table="<tr><th>Incident Information</th><th>Sector</th><th>Discription</th><th>Modified Date</th><th>Location</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
     
        var obj = parsedrecord[i];
        // let position = obj.longitude +","+ obj.latitude;  
        Searchbinfo=obj.description;
        var varinle = Discription1;
        Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(varinle.toUpperCase()))
        {
           var loc =  "<a href=http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Go to Map</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.incident_info;
            table+="</td><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.description;
            table+="</td><td>";
            table+=obj.modified_dt;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
        
    // }
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

}

function Sectorf(Sector){
    document.getElementById("searchvalue").innerHTML = "Search by Incident Modified Date<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;
    var table="<tr><th>Incident Information</th><th>Sector</th><th>Discription</th><th>Modified Date</th><th>Location</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
     
        var obj = parsedrecord[i];
        // obj.latitude + "," + obj.longitude 
        let position = obj.latitude + "," + obj.longitude ;  
        Searchbinfo=obj.quadrant;
        // var varinle = ModifiedDate;
        // Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(Sector.toUpperCase()))
        {
            var loc =  "<a href=http://maps.google.com/?q=" + position + " target=_blank>Go to Map</a>";
        //    var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.incident_info;
            table+="</td><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.description;
            table+="</td><td>";
            table+=obj.modified_dt;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
        
    // }
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

}



function SecondFile() {
    document.getElementById("quadrant").addEventListener("keyup", function(){QuadrantF(this.value);},false);
    document.getElementById("Discription2").addEventListener("keyup", function(){Discription2F(this.value);},false);
     document.getElementById("CameraLocation").addEventListener("keyup", function(){CameraLocation(this.value);},false);
    // document.getElementById("").addEventListener("keyup", function(){QuadrantF(this.value);},false);
    //  document.getElementById("Discription2").addEventListener("keyup", function(){Discription2F(this.value);},false);
    //  document.getElementById("CameraLocation").addEventListener("keyup", function(){CameraLocation(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.calgary.ca/resource/k7p9-kppz.json", true);
  xhr.send();
}

function QuadrantF(quadrant){
    document.getElementById("searchvalue").innerHTML = "Search by Quadrant<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;
    
    var possition1;
 
    var possition2;
    var table="<tr><th>Quadrant</th><th>Camera loaction</th><th>Discription</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.point.coordinates[1] ;
            // }else{
                possition2=   obj.point.coordinates[0] ;
            // }     }
          
        
         Searchbinfo=obj.quadrant;
        
        let position =  possition1 + "," + possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(quadrant.toUpperCase())){
        
           var loc ="<a href= http://maps.google.com/?q="+ position + " target=_blank>Go to Map</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.camera_location;
            table+="</td><td>";
            table+=obj.camera_url.description;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}


function Discription2F(Discription2){
    document.getElementById("searchvalue").innerHTML = "Search by Description<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Quadrant</th><th>Camera loaction</th><th>Discription</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.point.coordinates[0] ;
            // }else{
                possition2=   obj.point.coordinates[1] ;
            // }     }
          
        
         Searchbinfo=obj.camera_url.description;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(Discription2.toUpperCase())){
        
           var loc = "<a href=http://maps.google.com/?q=" +position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.camera_location;
            table+="</td><td>";
            table+=obj.camera_url.description;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function CameraLocation(CameraLocation){
    document.getElementById("searchvalue").innerHTML = "Search by Description<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Quadrant</th><th>Camera loaction</th><th>Discription</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.point.coordinates[0] ;
            // }else{
                possition2=   obj.point.coordinates[1] ;
            // }     }
          
        
         Searchbinfo=obj.camera_location;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(CameraLocation.toUpperCase())){
        
           var loc = "<a href=http://maps.google.com/?q=" +position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.quadrant;
            table+="</td><td>";
            table+=obj.camera_location;
            table+="</td><td>";
            table+=obj.camera_url.description;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}





function thirdFile() {
    document.getElementById("Year").addEventListener("keyup", function(){YearF(this.value);},false);
    document.getElementById("Category").addEventListener("keyup", function(){Categoryf(this.value);},false);
    document.getElementById("Comunity1").addEventListener("keyup", function(){Comunity1F(this.value);},false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.calgary.ca/resource/848s-4m4z.json", true);
  xhr.send();
}
function YearF(Year){
    document.getElementById("searchvalue").innerHTML = "Search by Year<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Community Name</th><th>Year</th><th>Category</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.geocoded_column.latitude ;
            // }else{
                possition2=   obj.geocoded_column.longitude ;
            // }     }
          
        
         Searchbinfo=obj.year;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
        //  Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(Year)){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.community_name;
            table+="</td><td>";
            table+=obj.year;
            table+="</td><td>";
            table+=obj.group_category;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function Categoryf(Category){
    document.getElementById("searchvalue").innerHTML = "Search by Category<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Community Name</th><th>Year</th><th>Category</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.geocoded_column.latitude ;
            // }else{
                possition2=   obj.geocoded_column.longitude ;
            // }     }
          
        
         Searchbinfo=obj.category;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith((Category).toUpperCase())){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.community_name;
            table+="</td><td>";
            table+=obj.year;
            table+="</td><td>";
            table+=obj.category;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}


function Comunity1F(Comunity1){
    document.getElementById("searchvalue").innerHTML = "Search by Comunity<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Community Name</th><th>Year</th><th>Category</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.geocoded_column.latitude ;
            // }else{
                possition2=   obj.geocoded_column.longitude ;
            // }     }
          
        
         Searchbinfo=obj.community_name;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith((Comunity1).toUpperCase())){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.community_name;
            table+="</td><td>";
            table+=obj.year;
            table+="</td><td>";
            table+=obj.category;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function forthFile() {
    document.getElementById("Statuse").addEventListener("keyup", function(){Statusef(this.value);},false);
//   document.getElementById("cost").addEventListener("keyup", function(){costf(this.value);},false);
     document.getElementById("Comunity").addEventListener("keyup", function(){Comunityf(this.value);},false);
     document.getElementById("Permit").addEventListener("keyup", function(){Permitf(this.value);},false);
     document.getElementById("cost").addEventListener("keyup", function(){costf(this.value);},false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.calgary.ca/resource/c2es-76ed.json", true);
  xhr.send();
}
function Statusef(Statuse){
    document.getElementById("searchvalue").innerHTML = "Search by Comunity<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Status</th><th>Cost</th><th>Community Code</th><th>Permit Type</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.latitude ;
            // }else{
                possition2=   obj.longitude ;
            // }     }
          
        
         Searchbinfo=obj.statuscurrent;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith((Statuse).toUpperCase())){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.statuscurrent;
            table+="</td><td>";
            table+=obj.estprojectcost;
            table+="</td><td>";
            table+=obj.communitycode;
            table+="</td><td>";
            table+=obj.permittype;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function Comunityf(Comunity){
    document.getElementById("searchvalue").innerHTML = "Search by comunity<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Status</th><th>Cost</th><th>Community Code</th><th>Permit Type</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.latitude ;
            // }else{
                possition2=   obj.longitude ;
            // }     }
          
        
         Searchbinfo=obj.communitycode;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(Comunity.toUpperCase())){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.statuscurrent;
            table+="</td><td>";
            table+=obj.estprojectcost;
            table+="</td><td>";
            table+=obj.communitycode;
            table+="</td><td>";
            table+=obj.permittype;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}


function Permitf(Permit){
    document.getElementById("searchvalue").innerHTML = "Search by Permit Type<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Status</th><th>Cost</th><th>Community Code</th><th>Permit Type</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.latitude ;
            // }else{
                possition2=   obj.longitude ;
            // }     }
          
        
         Searchbinfo=obj.permittype;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
         Searchbinfo = Searchbinfo.toUpperCase();
        if (Searchbinfo && Searchbinfo.startsWith(Permit.toUpperCase())){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.statuscurrent;
            table+="</td><td>";
            table+=obj.estprojectcost;
            table+="</td><td>";
            table+=obj.communitycode;
            table+="</td><td>";
            table+=obj.permittype;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function costf(cost){
    document.getElementById("searchvalue").innerHTML = "Search by cost<br>";
    var Searchbinfo;
    //var exist= "false";
    var i;

    var possition1;
   
    var possition2;
    var table="<tr><th>Status</th><th>Cost</th><th>Community Code</th><th>Permit Type</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
   
        var obj = parsedrecord[i];
        
        // for(j=0; j <obj.coordinates.length;j++){
            // if(j==0){
            //    var possition11= obj.point.coordinates;
                possition1=  obj.latitude ;
            // }else{
                possition2=   obj.longitude ;
            // }     }
          
        
         Searchbinfo=obj.estprojectcost;
        let position = possition1+","+ possition2;  
        
        // var varinle = ModifiedDate;
        //  Searchbinfo = Searchbinfo.toUpperCase();
        if ((Searchbinfo && Searchbinfo.startsWith(cost))&&(obj.estprojectcost >= 3000)){
        
           var loc = "<a href ='https://www.google.com/maps/search/?api=1&query="+position+"' target='_blank'>Location</a>";
             //exist= "true";
            table+="<tr><td>";
            table+=obj.statuscurrent;
            table+="</td><td>";
            table+=obj.estprojectcost;
            table+="</td><td>";
            table+=obj.communitycode;
            table+="</td><td>";
            table+=obj.permittype;
            table+="</td><td>";
            table+=loc;
            table+="</td></tr>";
            
        }
    }
    
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}