function buildNav(list) {
  var navHTML='';
  for (i=0; i < list.length; i++) {
    navHTML += '<div id="';
    navHTML += list[i]['place']
    navHTML += '" class="event">';
    navHTML += list[i]['longName'];
    navHTML += '</div>';
  }//end for loop
  return navHTML;
}

// function insertNav(list){
//   return "$(" + "'#" + list + "').append((buildNav(" + list + ")));"
// }
// insertNav(childhoodEvents);
$('#childhoodEvents').append((buildNav(childhoodEvents)));
$('#overseasEvents').append((buildNav(overseasEvents)));
$('#highschoolEvents').append((buildNav(highschoolEvents)));
$('#studyAbroadEvents').append((buildNav(studyAbroadEvents)));
$('#gradEvents').append((buildNav(gradEvents)));
$('#homebaseEvents').append((buildNav(homebaseEvents)));

$('.event').on('click', function(event){
  var placeClicked = ($(event.target).attr('id'));
  var placeObject = lifeEvents[placeClicked];
  // console.log(placeObject['background']);
  $('#contentDisplay').css("background-image", "url(" + placeObject['background'] +")");
  $('#descriptionDiv').html('<p>' + placeObject.content + '</p>');
  $('#photoDiv').html('<img src="' + placeObject.photo + '" alt="' + placeObject.place + '">');
  $('#mapDiv').html(placeObject.map);
}); //end on click
