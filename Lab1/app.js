
function createToDo(){
    // get the text
    var text2 = $("#txtText").val();
    
    // create an li
    var li = '<li>'+ text2 +' <button id="btnDone" >Done!</button> </li>';

    // add the li to the ul
    $("#pending").append(li);

    // clear the input field
    $("#txtText").val("");

    // set the focus to the field
    $("#txtText").focus();
}

// this is the fn
function init(){
    // get the text fromtheinput field
    //var text = document.getElementById("txtText").value;
    //console.log("TS way", text);
   
    // hook events
    // ENG: when a click happens on elem btnSave, exec createToDo fn
    $("#btnSave").click( createToDo );
    $("#txtText").keypress( function(e){
        // console.log(e);

        if(e.key == "Enter" ){
            createToDo();
        }
    });
};


// when the browser finish rendering all HTML elements
//will execute a function called init
window.onload = init;