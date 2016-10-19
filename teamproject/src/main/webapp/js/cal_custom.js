
function showCalendar(arr) {
   $('#calendar').fullCalendar({      
      header: {
         left: 'prev,next today myCustomButton',
         center: 'title',
         right: 'month' // agendaWeek,agendaDay
      },
      lang : "ko",
      navLinks: true, // can click day/week names to navigate views
      selectable: false,
      selectHelper: true,
      disableDragging : true,


      eventClick: function(event, start, end) {
         var moment11 = $('#calendar').fullCalendar('getDate')
         start = moment(event.start).format('YYYY-MM-DD HH:mm')
         end = moment(event.end).format('YYYY-MM-DD HH:mm')

         //alert("Event title: " + event.title + " Start Date: " + start + " End Date: " + end );
         $('#calendarModal').modal()
         $('#modalTitle').html(event.title)
         $('.modal-groupName').html(event.groupName)
         $('.modal-start-date').html(start)
         $('.modal-end-date').html(end)
         $(".modal-place").html(event.placeName)
         $('#modalBody').html(event.description)
         $('#eventUrl').attr('href',event.url)
         //console.log('eventcount=' + event.count)

         function google_map(mapid, addr) {
            var geocoder =  new google.maps.Geocoder();
            geocoder.geocode( {'address': addr }, function(results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                  var map = new google.maps.Map(document.getElementById(mapid), {
                     zoom: 16,
                     center: results[0].geometry.location,
                     mapTypeId: google.maps.MapTypeId.ROADMAP
                  });

                  var markerTitle    = "";  // 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
                  var markerMaxWidth = 260;  // 마커를 클릭했을때 나타나는 말풍선의 최대 크기
                  var contentString = '<table><tr><td width=90><img src="" width="80" style="border-radius:5px;"></td><td><div>' + 
                  '<span style="padding-bottom:10px"><b>'+markerTitle+'</b></span><br />'+ 
                  '<div class="map_Content">'+ 
                  //'TEL: <a href=tel:031-398-0902>031-398-0902</a><br />'+ 
                  //'진료시간: 00:00~24:00 연중무휴<br />' + 
                  '주소: '+ event.loaction + 
                  '</div>'+ 
                  '</div></td></tr></table>'; 

                  var marker = new google.maps.Marker({ 
                     position: map.getCenter(), 
                     map: map, 
                     draggable:false,
                     animation: google.maps.Animation.DROP,  
                     title: markerTitle 
                  }); 

                  var infowindow = new google.maps.InfoWindow({ 
                     content: contentString,
                     maxWidth: markerMaxWidth
                  }); 
                  infowindow.open(map, marker); 

                  google.maps.event.addListener(marker, 'click', function() { 
                     infowindow.open(map, marker); 
                  }); 
               }
            });


         }

         $('#calendarModal').on('shown.bs.modal', function(){
            google_map("google_map", event.location);
            //console.log(event);      
            google.maps.event.trigger(map,'resize',{});

         });

      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events               
      events: arr
   });
   $('#calendar').fullCalendar( 'addEventSource',        
         function(startDate, endDate, callback, event) {

   }
   );
}


function ajaxMyScheduleList() {
   $.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
      var result = obj.jsonResult
      if (result.state != "success") {
         alert("서버에서 데이터를 가져오는데 실패했습니다.")
         return
      }

      var contents = ""
       var arr = result.data
      var arrTest=[]
      var template = Handlebars.compile($('#divTemplateText').html())
      
      for (var i in arr) {
         if ($("#user").attr('data-value') == arr[i].no){
            contents += template(arr[i])
            
            arrTest.push(arr[i]);
         }
      }
      console.log(arrTest);
      console.log(contents);
      showCalendar(arrTest);

      
      $("#groupName").html(contents)
      $(".titleLink").click(function(event) {
         window.location.href = "checkMySchedule.html?no=" + $(this).attr("data-no")
      })
   })
}