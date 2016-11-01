var detailResult;
var eventLocation;
var mySchedulList;
var startDay;
var endDay;
var gpno;

$("#loginBtn").click(function(event) {
	location.href = "../index.html"
});
$("#logoutBtn").click(function(event) {
	location.href = "../index.html"
});

/*
function ajaxgetAreaCode() {
	$.getJSON(areaCodeAddr, function(obj) {
		var result = obj.response.body.items
		var arr = result.item
		console.log(arr)
	})
}
 */

function computeDday(start) {
	var now = new Date();
	var then = new Date(start);
	gap = now.getTime() - then.getTime();
	gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	if (gap < 0) {
		return "이미 지난 스케줄입니다."
	} else {
		return gap
	}
}

function ajaxMyScheduleLoad(no) {
	$.getJSON(serverAddr + "/myschedule/detail.json?groupscNo=" + no, function(obj) {
		detailResult = obj.jsonResult

		startDay = detailResult.data.start;
		endDay = detailResult.data.end;
		gpno = detailResult.data.gpno;
		

		if (detailResult.state != "success") {
			alert("조회 실패입니다.")
			return
		}

		var contents = "";
		var template = Handlebars.compile($('#divTemplateText').html())

		detailResult.data.dday = computeDday(detailResult.data.start)
		contents = template(detailResult.data)
		$("#detail").html(contents)

		var template2 = Handlebars.compile($('#groupTemplateText').html())
		var contents2 = template2(detailResult.data.groupName)
		console.log(detailResult.data.groupName)
		console.log(contents2)
		$("#groupName").html(contents2)
		ajaxMidTermWeather(startDay, gpno);
	})
}

/*
 * 2016.11.1 수정사항 : 중기예보를 불러오는 ajaxMidTermWeather 추가
 * gpno : 그룹 번호, date : 날짜 (형식 : YYYY-MM-DD)
 */
function ajaxMidTermWeather(date, gpno) {
	date = date.substring(0,10);
	console.log(date);
	console.log(gpno);
	$.getJSON(serverAddr + '/myschedule/midTermWeather.json?gpno='
			+gpno+'&date='+date, function(obj) {
		midTermResult = obj.jsonResult;
		console.log(midTermResult);
		if(midTermResult.state != "success") {
			alert("조회 실패입니다.");
			return;
		}
		
		$(".weather-city").html(midTermResult.data.city);
		$(".weather-temperature-mx").html(midTermResult.data.maxTemp + "°C");
		$(".weather-temperature-mn").html(midTermResult.data.minTemp + "°C");
		$(".weather-state").html(midTermResult.data.state);
	});
}
function ajaxWeather(lat, lon) {
	console.log(lat, lon);
	$.getJSON(skPlanetWeather, {
		"lat": lat,
		"lon": lon,
		"version": "1",
		"appKey": "6e62a500-8f2f-36d6-ac6d-2fcc4b4a5a23"
	}, function(data) {
		var arr = data.result
		if (arr.message != "성공") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return

		}
		var calendarWeather = data.weather
		console.log(calendarWeather.minutely[0])
		$(".weather-humidity").html(calendarWeather.minutely[0].humidity)
		$(".weather-windspeed").html(calendarWeather.minutely[0].wind.wspd)
		$(".weather-sky").html(calendarWeather.minutely[0].sky.name)
		$(".weather-temperature-tc").html(calendarWeather.minutely[0].temperature.tc)
		//$(".temperature-tmax").html(calendarWeather.minutely[0].temperature.tmax)
		//$(".temperature-tmin").html(calendarWeather.minutely[0].temperature.tmin)
		$(".timeObservation").html(calendarWeather.minutely[0].timeObservation)

		/*
		for (var i in arr) {
			if (arr[i].weather)
				contents += arr[i]
		}*/
	})
}

function ajaxEventLocationList() {
	$.getJSON(serverAddr + '/myschedule/listWeather.json', function(obj){
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}

		var arr = result.data 
		console.log(detailResult.data.placeName)
		for (var i in arr) {
			if (detailResult.data.placeName == arr[i].placeName) {
				eventLocation = arr[i]

			}
		}

		console.log(eventLocation)

	})
}


function ajaxLoginUser() {
	$.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			$(".my-login").css("display", "none")
			return
		}    
		//$("#userEmail").text(result.data.email);
		$(".my-logout").css("display", "none")
		$("#user").text(result.data.name)
		$("#user").attr('data-value', result.data.no)
		$("#userSc").attr('data-value', result.data.no)
	})
}

