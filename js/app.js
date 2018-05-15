$('#directory').on('click', function(event){
  var placeClicked = ($(event.target).attr('id'));
  var placeArray = lifeEvents.filter(object => object.place == placeClicked);
  console.log(placeArray);
  $('#descriptionDiv').html('<p>"' + placeArray.content + '"</p>');
}); //end on click
