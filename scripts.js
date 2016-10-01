$(document).ready(function() {
  $.getJSON("C:\Users\ashokf\Desktop\2017-hw2-yfichadia743\yash.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.nickNames, function(key, value){
      $("#nicknames").append("<li>" + value.nick + "</li>");
    });
  });
});
