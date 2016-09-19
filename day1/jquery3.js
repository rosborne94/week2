function myButton_Click() {
    alert("Clicked!");
}
$(function(){
    //Wire up the lick event handlers.
    $("#myButton").on("click", myButton_Click);

    $("li:contains('mad')").on("click", function(){
        $(this).hide();
    });
});