

$(document).ready(function(){

		$("#arc_topbar").animate({"height":"82px"})

		$("#home_b").animate({"opacity":"1"}, 2000);
		$("#about_b").animate({"opacity":"1"}, 2000);
		$("#cv_b").animate({"opacity":"1"}, 2000);
		$("#skills_b").animate({"opacity":"1"}, 2000);
		$("#future_b").animate({"opacity":"1"}, 2000);
		$("#contact_b").animate({"opacity":"1"}, 2000);

		$("#nav_menu li").addClass("inactive");
		$("#nav_menu li").removeClass("active");
		$("#home_b").removeClass("inactive");
		$("#home_b").addClass("active");
		$("#arc_main").load("content/pages/home/index.html");

		$("#home_b").animate({"margin-left": '10px',"margin-right": '10px'});

		$("#home_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#home_b").removeClass("inactive");
			$("#home_b").addClass("active");

			$("#arc_main").load("content/pages/home/index.html");

			$("#home_b").animate({"margin-left": '10px',"margin-right": '10px'});

			$("#about_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#cv_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#skills_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#future_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#contact_b").animate({"margin-left": '0px',"margin-right": '0px'});



		});

		$("#about_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#about_b").removeClass("inactive");
			$("#about_b").addClass("active");

			$("#arc_main").load("content/pages/about/index.html");

			$("#home_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#about_b").animate({"margin-left": '10px',"margin-right": '10px'});

			$("#cv_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#skills_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#future_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#contact_b").animate({"margin-left": '0px',"margin-right": '0px'});

		});

		$("#cv_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#cv_b").removeClass("inactive");
			$("#cv_b").addClass("active");

			$("#arc_main").load("content/pages/cv/index.html");

			$("#home_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#about_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#cv_b").animate({"margin-left": '10px',"margin-right": '10px'});

			$("#skills_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#future_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#contact_b").animate({"margin-left": '0px',"margin-right": '0px'});

		});

		$("#skills_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#skills_b").removeClass("inactive");
			$("#skills_b").addClass("active");

			$("#arc_main").load("content/pages/skills/index.html");

			$("#home_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#about_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#cv_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#skills_b").animate({"margin-left": '10px',"margin-right": '10px'});


			$("#future_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#contact_b").animate({"margin-left": '0px',"margin-right": '0px'});

		});

		$("#future_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#future_b").removeClass("inactive");
			$("#future_b").addClass("active");

			$("#arc_main").load("content/pages/future/index.html");

			$("#home_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#about_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#cv_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#skills_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#future_b").animate({"margin-left": '10px',"margin-right": '10px'});


			$("#contact_b").animate({"margin-left": '0px',"margin-right": '0px'});

		});

		$("#contact_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#nav_menu li").removeClass("active");
			$("#contact_b").removeClass("inactive");
			$("#contact_b").addClass("active");

			$("#arc_main").load("content/pages/contact/index.html");

			$("#home_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#about_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#cv_b").animate({"margin-left": '0px',"margin-right": '0px'});

			$("#skills_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#future_b").animate({"margin-left": '0px',"margin-right": '0px'});


			$("#contact_b").animate({"margin-left": '10px',"margin-right": '10px'});

		});

		});
