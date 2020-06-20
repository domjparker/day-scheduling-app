// grabbing each hourblock textarea id for use with the time forloop below.
var hourBlocks = [$("#nineText"),$("#tenText"),$("#elevenText"),$("#twelveText"),$("#oneText"),$("#twoText"),$("#threeText"),$("#fourText"),$("#fiveText")]

// for loop comparing current time with index of hourblock hours to get color differentiation
for (let i = 0; i < hourBlocks.length; i++) {
    var hour = i + 9 
    if (hour < moment().get("hour")) {
        hourBlocks[i].addClass("past")
    } else if (hour > moment().get("hour")) {
        hourBlocks[i].addClass("future")
    } else if(hour === moment().get("hour")) {
        hourBlocks[i].addClass("present")
    }    
}

// function to retrieve text values save to localStorage from prior saves
function retrieveSavedText() {
    $("#nineText").text(localStorage.getItem("nineAM"));
    $("#tenText").text(localStorage.getItem("tenAM"));
    $("#elevenText").text(localStorage.getItem("elevenAM"));
    $("#twelveText").text(localStorage.getItem("twelveAM"));
    $("#oneText").text(localStorage.getItem("oneAM"));
    $("#twoText").text(localStorage.getItem("twoAM"));
    $("#threeText").text(localStorage.getItem("threeAM"));
    $("#fourText").text(localStorage.getItem("fourAM"));
    $("#fiveText").text(localStorage.getItem("fiveAM"));
}

// save to localStorage upon save button clicks
$("#nineSave").click(function() {
    nineToSave = $("#nineText").val()
    localStorage.setItem("nineAM", nineToSave)
})

$("#tenSave").click(function() {
    tenToSave = $("#tenText").val()
    localStorage.setItem("tenAM", tenToSave)
})

$("#elevenSave").click(function() {
    elevenToSave = $("#elevenText").val()
    localStorage.setItem("elevenAM", elevenToSave)
})

$("#twelveSave").click(function() {
    twelveToSave = $("#twelveText").val()
    localStorage.setItem("twelveAM", twelveToSave)
})

$("#oneSave").click(function() {
    oneToSave = $("#oneText").val()
    localStorage.setItem("oneAM", oneToSave)
})

$("#twoSave").click(function() {
    twoToSave = $("#twoText").val()
    localStorage.setItem("twoAM", twoToSave)
})

$("#threeSave").click(function() {
    threeToSave = $("#threeText").val()
    localStorage.setItem("threeAM", threeToSave)
})

$("#fourSave").click(function() {
    fourToSave = $("#fourText").val()
    localStorage.setItem("fourAM", fourToSave)
})

$("#fiveSave").click(function() {
    fiveToSave = $("#fiveText").val()
    localStorage.setItem("fiveAM", fiveToSave)
})

// call on function to retrieve hourblock text values from localStorage
retrieveSavedText()