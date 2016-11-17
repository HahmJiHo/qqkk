$("#loginBtn").click(function(event) {
   location.href = "../index.html"
});

$("#logoutBtn").click(function(event) {
   location.href = "../index.html"
});

$("a#viewSc").click(function(event) {
	console.log("click")
	loacation.href = "detailInfo.html?no=" + $("#viewSc").attr('data-no')
})


function loadBxSlider(num) {
	var bx = "#bxslider" + num;
	
	console.log(bx)
	$(bx).bxSlider({
//		nextSelector: '#slider-next'+num,
//		prevSelector: '#slider-prev'+num,
		mode:'horizontal',
		speed:1000,
		slideMargin:100,
		captions: true
		/*$("#viewSc").click(function(event) {
			location.href= "detailInfo.html?no=" + ($("#viewSc").attr('data-no'))
		})*/
		
	})
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
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

/*
 * Object배열에서 key을 기반으로 중복을 제거하는 함수  
 */
function removeDuplicate(inArray) {
   console.log(inArray)
   var arr = {};

   for ( var i=0, len=inArray.length; i < len; i++ )
      arr[inArray[i]['groupNo']] = inArray[i];

   inArray = new Array();

   for ( var key in arr )
      inArray.push(arr[key]);   

   return inArray;
}



function ajaxMygroupList() {
	/*$('.wrapper').css({"display" : "none"})
	$('.wrap').removeClass('display-none');*/
   $.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
      var result = obj.jsonResult
      if (result.state != "success") {
         alert("서버에서 데이터를 가져오는데 실패했습니다. -ajaxMygroupList")
         return
      }

      var arr = result.data.list
      //var upcomCount = [];
      var arrGrp = [];
      var arrGrp2 = [];
      var dday = [];
      var mygroupName = new Object();
      var arrGroupName = [];
      var arrGroupName2 = [];

      for (var i in arr) {
         //dday[i] = computeDday(arr[i].start)
         //if (dday[i] > 0) 
         //upcomCount += 1;      
         //console.log(upcomArrGrpNo[i])
         arrGrp[i] = arr[i].groupNo
      }

      arrGrp = arrGrp.sort();
      arrGrp2 = arrGrp
      arrGroupName = arrGroupName.sort();
      arrGroupName2 = arrGroupName

      var count = new Object();

      for (var i in arrGrp) {
         count[arrGrp[i]] = 0;

      }


      for (var i = 0; i < arrGrp2.length; i++) {
         while(1) {
            //console.log(arrGrp2[i])
            var tmp = arrGrp.indexOf(arrGrp2[i]);
            //console.log(tmp);

            var tmpVal = arrGrp[tmp];
            //console.log(tmpVal)
            if (tmp == -1) {
               break;
            }

            count[tmpVal] += 1;
            arrGrp.splice(tmp,1);
         }
      }


      /* 2016.11.01 내일부터 아래 코딩하기*/
      var contents = "";
      var contents2 = "";

      var tempContents = new Array();
      var template = Handlebars.compile($('#divTemplateText').html())
      var template2 = Handlebars.compile($('#div2TemplateText').html())
 
      var mygroupArr = [];

      for (var i in arr) {
         $("#group-Info").attr('data-value', arr[i].groupNo)
         //console.log( $("#viewSc").attr('data-value'))

         arr[i].dday = computeDday(arr[i].start)
         if (arr[i].dday > 0 
               && $("#user").attr('data-value') == arr[i].no
               && $("#group-Info").attr('data-value') == arr[i].groupNo
               && arr[i].myScheduleStatus == 1) {
            //&& $("#group-Info").attr('data-value') == count(arr[i].groupNo)) {(

        	 $("#viewSc").attr('data-no', arr[i].groupscNo)
        	
            arr[i].count = count[arr[i].groupNo]
            mygroupArr.push(arr[i]);
         }
      }   
      
      
      var newArr = removeDuplicate(mygroupArr) 
      
      
      
      
      for (var i in newArr) {
    	  contents += template(newArr[i])
    	  
         $("#group-Info").html(contents)
       
         //console.log(i)
         //console.log(contents)
         for (var j in mygroupArr) {
            if (newArr[i].groupNo == mygroupArr[j].groupNo) {
            	console.log(mygroupArr[j]);
//            	var tempP = "slider-prev" + i;
//            	var tempN = "slider-next" + i;
//            	$("#slider-prev").attr("id", tempP);
//            	$("#slider-next").attr("id", tempN);
               tempContents[i] += template2(mygroupArr[j])
            } 
         }
      }
      
      console.log(tempContents);
      for(var i in tempContents) {
		/*var button = '<button id="btn-left" type="button" class="btn btn-default">'
		+ '<span id="slider-prev'+ i + '"class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
		+ '</button>'
		+ '<button id="btn-right" type="button" class="btn btn-default">'
		+ '<span id="slider-next'+ i + '"class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
		+ '</button>';*/
    	  contents2 += "<ul class='caption'  style='z-index:11' id='bxslider" + i + "'>" + tempContents[i] + "</ul>";
    	 
      }
      
      $("#schedule-Info").html(contents2);
      
      for(var i in tempContents) {
    	  loadBxSlider(i);
      }

      



      function btnClickAction() {
         $("#btn-left").click(function() {
            btnLength--;
            btnAnimate(btnLength)
         })

         $("#btn-right").click(function() {
            btnLength++;
            btnAnimate(btnLength)
         })

         function btnAnimate(num) {
            $("#schedule-Info")

            if (num >= btnLength -1) {
               $("#btn-right").hide();
            } else {
               $("#btn-right").show();
            }
            if (num >= 1) {
               $("#btn-left").show();
            } else {
               $("#btn-left").hide();
            }
         }
      }
    /*  $('.wrap').addClass('display-none');	
	$('.wrapper').css({"display" : "block"})*/
   })
}

function btnAction() {

}

/*
function ajaxMyScheduleList() {
   $.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
      var result = obj.jsonResult
      if (result.state != "success") {
         alert("서버에서 데이터를 가져오는데 실패했습니다.")
         return
      }
      $("#group-Info").attr('data-value', result.data.groupNo)

      var contents = ""
         var contents2 = ""
            var arr = result.data.list
            console.log(arr)
            console.log($("#user").text())
            var template = Handlebars.compile($('#divTemplateText').html())
            //var ddayTemplate = Handlebars.compile($('#spanTemplateText').html())
            //console.log("template" + template)
            var template2 = Handlebars.compile($('#div2TemplateText').html())
            //console.log("template2" + template2)
            for (var i in arr) {
               if ($("#user").attr('data-value') == arr[i].no){

                  if ($("#group-Info").attr('data-value') == arr[i].groupNo) {
                     arr[i].dday = computeDday(arr[i].start)             
                     console.log(arr[i].dday)
                     if (arr[i].dday > 0) {
                        contents += template(arr[i].groupName)
                        contents2 += template2(arr[i])
                     }
                  }
               }
            }
      $("#group-Info").html(contents)
      $("#schedule-Info").html(contents2)
   })
}
 */
$('body').on('click', 'viewSc', function() {
	console.log("111")
})
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
      $("#profilePhoto").attr('src', '../upload/' + result.data.filename)
      
   })
}