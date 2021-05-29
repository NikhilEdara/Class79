Attendance=[];
function Submit(){
    var N1=document.getElementById("name1").value;
    var N2=document.getElementById("name2").value;
    var N3=document.getElementById("name3").value;
    var N4=document.getElementById("name4").value;
    Attendance.push(N1);
    Attendance.push(N2);
    Attendance.push(N3);
    Attendance.push(N4);
    console.log(Attendance);
    document.getElementById("N1").innerHTML=Attendance;
    document.getElementById("S1").style.display="none";
    document.getElementById("S2").style.display="inline-block";
}
function Sort(){
    Attendance.sort();
    console.log(Attendance);
    document.getElementById("N1").innerHTML=Attendance;
}
