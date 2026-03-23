$(document).ready(function(){
    $("#xbox").hide()
    $("#xbox360").hide()
    $("#ps1").hide()
    $("#ps2").hide()
    $("#ps3").hide()

    $("#xbox_btn").click(function() {
        $("#xbox").show()
        $("#xbox360").hide()
        $("#ps1").hide()
        $("#ps2").hide()
        $("#ps3").hide()
    })


    $("#xbox360_btn").click(function() {
        $("#xbox360").show() 
        $("#xbox").hide()
        $("#ps1").hide()
        $("#ps2").hide()
        $("#ps3").hide()
    })


    $("#ps1_btn").click(function() {
        $("#ps1").show()
        $("#xbox").hide()
        $("#xbox360").hide()
        $("#ps2").hide()
        $("#ps3").hide()
    })


    $("#ps2_btn").click(function() {
        $("#ps2").show()
        $("#xbox").hide()
        $("#xbox360").hide()
        $("#ps1").hide()
        $("#ps3").hide()
    })


    $("#ps3_btn").click(function() {
        $("#ps3").show()
        $("#xbox").hide()
        $("#xbox360").hide()
        $("#ps2").hide()
        $("#ps1").hide() 
    })

})
