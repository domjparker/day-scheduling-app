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


nineSave.click(function() {
    var textToSave = nineText.val()
    console.log(textToSave)
   
    localStorage.setItem("nineAM",textToSave)
})


console.log(moment().format("hA"));
