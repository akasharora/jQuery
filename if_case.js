   $('#wpcf7-f400-p32-o1 input[name = "verify"]').attr("placeholder","captcha");
   $("#arrow_image").hide();
   $("#divisions").find("img").attr("data-select" , "0");
   $("#divisions").find("img").attr("id" , function(i){
   		return ("img"+i);
   });
   $(".config").find(".item").attr("id",function(j){
   		return ("item"+j);
   });
   /*-------creating a link to be appended when thumbnail is clicked upon----------*/
   $("#wpcf7-f400-p32-o1").css('display','none');
   var check = 0;
   $("#apply_here").on('click',function(){
   		if (check == 0) {
   			$("#wpcf7-f400-p32-o1").show(800);
   			$("body").scrollTo("#careers .entry",1000);
   			$("#cancel").show();
   			check = 1;
   			$("#careers .entry p a").html("Will apply later");
   		} else {
   			$("#wpcf7-f400-p32-o1").hide(800);
   			$("body").scrollTo("#hidden_page2 .entry",1000);
   			$("#wpcf7-f400-p32-o1 input").val('');
   			$('#wpcf7-f400-p32-o1 input[type="submit"]').val("Apply");
   			check = 0;
   			$("#careers .entry p a").html("Click here to apply");
   		} 
   });

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

		if($(this).children('img').attr("data-select")==0) {
			var wait = 200;
			// if($("#show_hide").css("height") == "0px")
			if ($("#show_hide").css("display")=="none") {
				wait = 0;
			}
			// $("#show_hide").css("height","0px");
			$("#show_hide").hide(800);
			// setTimeout(function(){
				$("#divisions .item").eq(place).append($("#arrow_image"));
				$("#divisions .item").eq(apendAfter).after($("#show_hide"));

				setTimeout(function(){
					// $("#content1").show();
					$("#content1").show(800);
					$("#content1").html(content);
					$("body").scrollTo("#divisions",1000);
					$("#content1").append('<br/><br/>');
					$("#arrow_image").show();
					$("#content1").append(aTag);
					// $("#show_hide").css("height","190px");
					$("#show_hide").show(800);
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
			// },wait);
			$("#divisions").find("img").attr("data-select" , "0");
			$(this).children('img').attr("data-select","1");
		}
		else{
			$(this).children('img').attr("data-select","0");
			// $("#show_hide").css("height","0px");
			$("show_hide").hide(800);
			$("#arrow_image").hide();
		}
	});
	$("#show_hide").find("img").on('click',function(){
		// $("#show_hide").css("height","0px");
		$("#show_hide").hide(800);
		$("#divisions").find("img").attr("data-select" , "0");
		$("#arrow_image").hide();
	});
