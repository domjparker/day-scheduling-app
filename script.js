var nineSave = $("#nineSave");
var nineText = $("#nineText");
var tenSave = $("#tenSave");
var tenText = $("#tenText");
var elevenSave = $("#elevenSave");
var elevenText = $("#elevenText");
var twelveSave = $("#twelveSave");
var twelveText = $("#twelveText");
var oneText = $("#oneText");
var oneSave = $("#oneSave");
var twoText = $("#twoText");
var twoSave = $("#twoSave");
var threeText = $("#threeText");
var threeSave = $("#threeSave");
var fourText = $("#fourText");
var fourSave = $("#fourSave");
var fiveSave = $("#fiveSave");
var fiveText = $("#fiveText");


hourBlocks = [nineText,tenText,elevenText,twelveText,oneText,twoText,threeText,fourText,fiveText]

hourBlocks.forEach(hourBox, i)=> {
    var hour = hour + 9
    console.log(hour)
};

// var localStorageKey = ["tenAM","nineAM"];
// var timeBlockTextID = [$("#tenText"),$("#nineText")]


// function retrieved() {
//     localStorageKey.forEach(element => {
        
//     });
// }
// (lSK,tBTID) {
//     var retrievedText = (localStorage.getItem((lSK)));
//     tBTID.text(retrievedText)
// }


// var nineRetrieved = (localStorage.getItem("nineAM"));
// $("#nineText").text(nineRetrieved)

// $("#nineSave").click(function() {
//     nineToSave = $("#nineText").val()
//     localStorage.setItem("nineAM", nineToSave)
// })

// console.log(moment().get('hour'));

