$('#directory a').on('click', function(event){
  var placeClicked = ($(event.target).attr('id'));
  console.log(placeClicked)

  function findObject(targetId) {
    for (var i = 0; i < lifeEvents.length; i++) {
        if (lifeEvents[i]['place'] == targetId) {
            return lifeEvents[i];
        }
    }
    return null;
  }

  var placeObject = findObject(placeClicked);

  console.log(placeObject)

  $('#descriptionDiv').html('<p>"' + placeObject.content + '"</p>');
  $('#photoDiv').html('<img src="' + placeObject.photo + '" alt="' + placeObject.place + '">');
  $('#mapDiv').html(placeObject.map);
}); //end on click
