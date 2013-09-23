/*----------------------------------edited gby Akash-----------------------------*/
$("#arrow_image").hide();
   $("#divisions").find("img").attr("data-select" , "0");
   $("#divisions").find("img").attr("id" , function(i){
   		return ("img"+i);
   });
   $(".config").find(".item").attr("id",function(j){
   		return ("item"+j);
   });
   /*-------creating a link to be appended when thumbnail is clicked upon----------*/
    var aTag = document.createElement('a');
	aTag.setAttribute('href',"javascript:void(0)");
	aTag.setAttribute('data-filter','');
	aTag.innerHTML = "click here to view showcase";
	aTag.setAttribute("id","click_here");

   	$("#arrow_image img").unbind("click");

    $("#divisions .thumbnail").on('click',function(){
		var content = $(this).parent().find("p").html();
		var divImgs = $("#divisions .thumbnail");
		var elementCnt = divImgs.length - 1;
		var place = $(this).index("#divisions .thumbnail");
		var apendAfter=(Math.floor(place/4) + 1)*4 - 1;
		if (apendAfter > elementCnt){ apendAfter = elementCnt};

		if($(this).children('img').attr("data-select")==0){
			var wait = 150;

			if($("#show_hide").css("height") == "0px") {
				wait = 0;
			}
			$("#show_hide").css("height","0px");
			setTimeout(function(){
				$("#divisions .item").eq(place).append($("#arrow_image"));
				$("#divisions .item").eq(apendAfter).after($("#show_hide"));

				setTimeout(function(){
					$("#content1").html(content);
					$("body").scrollTo("#divisions",1000);
					$("#content1").append('<br/>');
					$("#arrow_image").show();
					$("#content1").append(aTag);
					$("#show_hide").css("height","175px");
					var data_string = $(".thumbnail").eq(place).find('img').attr('alt');
					data_string = data_string.toLowerCase();
					data_string = '.' + data_string;
					data_string = data_string.replace(/\s+/g, '-');
					$("body").on('click',"#click_here",function(){
						$("body").scrollTo("#portfolio",1000);
						var data_filter = $(".item div:first-child").eq(place).attr('data-name');
						$("a[data-filter='"+data_string+"']").click();
						data_string = null;
 
					});
				},10);
			},wait);
			$("#divisions").find("img").attr("data-select" , "0");
			$(this).children('img').attr("data-select","1");
		}
		else{
			$(this).children('img').attr("data-select","0");
			//$("#content1").html('');
			$("#show_hide").css("height","0px");
			$("#arrow_image").hide();
		}
	});
	$("#show_hide").find("img").on('click',function(){
		$("#show_hide").css("height","0px");
		$("#divisions").find("img").attr("data-select" , "0");
		$("#arrow_image").hide();
	});
