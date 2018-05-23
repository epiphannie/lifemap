var lifeEvents = {
  stCloud: {
    place: 'stCloud',
    longName: 'St. Cloud, Minnesota',
    photo: 'http://via.placeholder.com/350x350',
    content: 'St. Cloud content!',
    background: 'https://goo.gl/maps/ixerY8gzntA2',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14154.41917408678!2d-94.17942127368622!3d45.574334014220256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b45e2465f37957%3A0x16591e2b392e0d16!2sSt+Cloud+Hospital%2C+1406+6th+Ave+N%2C+St+Cloud%2C+MN+56303!5e1!3m2!1sen!2sus!4v1526933397184" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  foley: {
    place: 'foley',
    longName: 'Foley, Minnesota',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Foley content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8787.613341611363!2d-93.9153525938386!3d45.66500921112836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3882a5c41b305%3A0xb3cf70ddecbdaa6d!2sFoley%2C+MN+56329!5e1!3m2!1sen!2sus!4v1526933473032" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  glastonbury: {
    place: 'glastonbury',
    longName: 'Gastonbury, Connecticut',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Glastonbury content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21835.782968907355!2d-72.55404349760217!3d41.68385632246769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e64fea14edbac7%3A0x8dec27bd093ca8eb!2sGlastonbury%2C+CT!5e1!3m2!1sen!2sus!4v1526933651464" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  cairo: {
    place: 'cairo',
    longName: 'Cairo, Egypt',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Cairo content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8905.945462341715!2d31.231545184038364!3d30.044773883276775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C+Cairo+Governorate%2C+Egypt!5e1!3m2!1sen!2sus!4v1526933835288" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  khartoum: {
    place: 'khartoum',
    longName: 'Khartoum, Sudan',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Khartoum content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804772.0063645828!2d32.302892815372964!3d15.83870442647434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168eda5747c187e9%3A0xc559b1b2fd3142c1!2sKhartoum+Bahri%2C+Sudan!5e1!3m2!1sen!2sus!4v1526930010638" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  addisAbaba: {
    place: 'addisAbaba',
    longName: 'Addis Ababa Ethiopia',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Addis Ababa content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91848.09160657316!2d38.730302876375944!3d9.003437668074602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis+Ababa%2C+Ethiopia!5e1!3m2!1sen!2sus!4v1526934379070" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  louisvilleFirst: {
    place: 'louisvilleFirst',
    longName: 'Louisville, Kentucky',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Louisville 1 content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7429.809320671481!2d-85.68897077271613!3d38.25491993082842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886974a11dbc75a7%3A0x7bdb1944db35301a!2sCrescent+Hill%2C+Louisville%2C+KY!5e1!3m2!1sen!2sus!4v1526934430954" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  paris: {
    place: 'paris',
    longName: 'Paris, France',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Paris content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.089321254899!2d2.340977812563787!3d48.89749925586316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef5a29b45b1%3A0xf8d7310302a9d3b3!2sPorte+de+Clignancourt!5e1!3m2!1sen!2sus!4v1526934921822" wwidth="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  dijon: {
    place:'dijon',
    longName: 'Dijon, France',
    photo:'http://via.placeholder.com/350x350',
    content: 'Dijon content!',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63885.6188926399!2d4.993757553562506!3d47.33148295806829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d8ceffd9675%3A0x409ce34b31458d0!2s21000+Dijon%2C+France!5e1!3m2!1sen!2sus!4v1526934815216" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'

  },
  montreux: {
    place: 'montreux',
    longName: 'Montreux, Switzerland',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Montreux content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22962.319048941114!2d6.8965880100082115!3d46.42640485505407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e9b20cdb650cd%3A0xccc07a7fc46d1847!2sMontreux%2C+Switzerland!5e1!3m2!1sen!2sus!4v1526935065098" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  florence: {
    place: 'florence',
    longName: 'Florence, Italy',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Florence content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21579.823326572507!2d11.24735763357379!3d43.768617264211294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af8a078bd7663%3A0x3082c90e3e48060!2sMetropolitan+City+of+Florence%2C+Italy!5e1!3m2!1sen!2sus!4v1526935119766" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  rome: {
    place: 'rome',
    longName: 'Rome, Italy',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Rome content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248072.43558602984!2d12.341256401249925!3d41.89073736298336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sMetropolitan+City+of+Rome%2C+Italy!5e1!3m2!1sen!2sus!4v1526935163012" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  nice: {
    place: 'nice',
    longName: 'Nice, France',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Nice content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28579.78878797483!2d7.230885591330555!3d43.6978467987241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C+France!5e1!3m2!1sen!2sus!4v1526935202352" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  montpellier: {
    place: 'montpellier',
    longName: 'Montpellier, France',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Montpellier content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5401.2775212026245!2d3.8576096265244137!3d43.612670816490606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aeff19e35c3f%3A0x21d9545ae2762722!2sLes+Arceaux%2C+Montpellier%2C+France!5e1!3m2!1sen!2sus!4v1526935263102" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  gainesville: {
    place: 'gainesville',
    longName: 'Gainesville, Florida',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Gainesville content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11502.829127129135!2d-82.35247737058518!3d29.64968106973057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6202169bf2c2b%3A0x80e7795d28108d96!2sGainesville%2C+FL!5e1!3m2!1sen!2sus!4v1526935340902" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  louisvilleSecond: {
    place: 'louisvilleSecond',
    longName: 'Louisville, Kentucky',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Louisville2 content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11719.034344892043!2d-85.72412716651887!3d38.23819202484157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869732d9cd81517%3A0xf6c8be6fb8b8d4fc!2sCherokee+Triangle%2C+Louisville%2C+KY+40204!5e1!3m2!1sen!2sus!4v1526935388870" wwidth="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  tokyo: {
    place: 'tokyo',
    longName: 'Tokyo, Japan',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Tokyo content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11538.130769539634!2d139.697237334123!3d35.69370152755518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2059b7fd4b%3A0xec61c68fe232efd2!2sShinjuku%2C+Tokyo%2C+Japan!5e1!3m2!1sen!2sus!4v1526935448350" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  southwest: {
    place: 'southwest',
    longName: 'the Great American Southwest',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Southest content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44734.04389852142!2d-111.82671786421734!3d34.855051810136764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2sSedona%2C+AZ+86336!5e1!3m2!1sen!2sus!4v1526935480682" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  provo:{
    place: 'provo',
    longName: 'Providenciales, Turks and Caicos',
    photo: 'http://via.placeholder.com/350x350',
    content: 'Provo content',
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56184.71996980678!2d-72.2773815937727!3d21.777715762800675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894b48c96c46ef03%3A0x48a97037692b9bc!2sProvidenciales%2C+TKCA+1ZZ%2C+Turks+and+Caicos+Islands!5e1!3m2!1sen!2sus!4v1526935557156" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'
  }
};



var childhoodEvents = [
 lifeEvents['stCloud'], lifeEvents['foley'],lifeEvents['glastonbury']
];

var overseasEvents = [
  lifeEvents['cairo'], lifeEvents['khartoum'], lifeEvents['addisAbaba']
];

var highschoolEvents = [
  lifeEvents['louisvilleFirst'], lifeEvents['paris'], lifeEvents['dijon']
];

var studyAbroadEvents = [
  lifeEvents['montreux'], lifeEvents['florence'], lifeEvents['rome'], lifeEvents['nice'],lifeEvents['montpellier']
];

var gradEvents= [
  lifeEvents['gainesville']
];

var homebaseEvents = [
  lifeEvents['louisvilleSecond'], lifeEvents['tokyo'], lifeEvents['southwest'],lifeEvents['provo']
];
