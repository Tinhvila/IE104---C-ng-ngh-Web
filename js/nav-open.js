// //Display Hover Navigation Item (JQuery)
$(document).ready(function(){
    //List Section
    let navItemCount = $(".nav-item-content").length;
    for(let i = 0; i < navItemCount; i++){
        $($(".nav-item-content")[i]).hover(function(){
            $($(".nav-item-list")[i]).slideToggle(150);
        });
    }
    //List Section End
});