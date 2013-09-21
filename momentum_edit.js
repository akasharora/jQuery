<script type = "text/javascript>"
   $("#arrow_image").hide();
   $("#divisions").find("img").attr("data-select" , "0");
   $("#divisions").find("img").attr("id" , function(i){
   		return ("img"+i);
   });
   $(".config").find(".item").attr("id",function(j){
   		return ("item"+j);
   });
   	$("#arrow_image img").unbind("click");
    $("#divisions .thumbnail").on('click',function(){
		var content = $(this).parent().find("p").html();
		var divImgs = $("#divisions .thumbnail");
		var elementCnt = divImgs.length - 1;
		var place = $(this).index("#divisions .thumbnail");
		var apendAfter=(Math.floor(place/4) + 1)*4 - 1;
		if (apendAfter > elementCnt){ apendAfter = elementCnt};


		if($(this).children('img').attr("data-select")==0){
			var wait = 200;
			if($("#show_hide").css("height") == "0px") {
				wait = 0;
			} 
			$("#show_hide").css("height","0px");
			setTimeout(function(){
				//$("#divisions .item").eq(place).append($("#arrow"));
				$("#divisions .item").eq(place).append($("#arrow_image"));
				$("#divisions .item").eq(apendAfter).after($("#show_hide"));
				setTimeout(function(){
					$("#content1").html(content);
					$("#content1").append('/<br/>');
					$("#arrow_image").show();
					var element = document.createElement("input");
					element.setAttribute("id","click_here_to_view");
					element.setAttribute("type","button");
					element.setAttribute("value","click here to view showcase");
					$("#content1").append(element);
					$("#show_hide").css("height","165px");
					$("body").on("click","#click_here_to_view",function()
						{
							$("body").scrollTo("#portfolio",1500);
						});
				},10);
			},wait);
			$("#divisions").find("img").attr("data-select" , "0");
			$(this).children('img').attr("data-select","1");
		}
		else{
			$(this).children('img').attr("data-select","0");
			$("#content1").html('');
			$("#show_hide").css("height","0px");
			$("#arrow_image").hide();
		}
	});
	$("#show_hide").find("img").on('click',function(){
		$("#show_hide").css("height","0px");
		$('body').scrollTo("#wrapper");
		$("#divisions").find("img").attr("data-select" , "0");
		$("#arrow_image").hide();
	});
</script>
/*------------------------------------edit complete-------------------------------*/