var latitude = 37.51502221911601;
var longitude = 127.04490039225892;

var map;
function initMap(){
  var myCenter = new google.maps.LatLng(latitude, longitude);
  var option = {
      center : myCenter,
      zoom : 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("gmap"), option);

  var marker = new google.maps.Marker({
			position : myCenter, // 마커를 표시할 위치
			map : map, // 마커로 표시될 지도
			icon : "img/location_pin.png", // 마커 표시하기
			title : "모델하우스"
		});

		marker.setMap(map);

  myCity.setMap(map);
}
