$(document).ready(function () {

    //addListItem("waitinglist", "test 1")
});



function addListItem(parentId, text) {
    console.log("code ran")
    var parentItem = $("#" + parentId);
    newItem = $("<li>");
    newItem.addClass("list-group-item list-group-item-primary");
    newItem.text(text);
    parentItem.append(newItem);
}

var queryString = ""

function getTables() {

    $.ajax({
        url: queryString,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < response.length; i++) {
            addListItem("tablelist", response[i].name)
            
        }
    });

}

function getWaitList() {
    queryString = "localhost:8080/api/waitlist"
    $.ajax({
        url: queryString,
        method: "GET"
    }).then(function (response) {
        var startCount = currentGifCount;
        var pullCeiling = currentGifCount + pullPerQuery;
        for (var i = startCount; i < pullCeiling; i++) {
            addGif(response.data[i].images.fixed_width_still.url, response.data[i].images.fixed_width.url, response.data[i].rating);
            currentGifCount++;
        }

    })
}
