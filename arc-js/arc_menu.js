

$(document).ready(function(){

		$("#nav_menu li").addClass("inactive");
		$("#home_b").removeClass("inactive");
		$("#home_b").addClass("active");
		$("#arc_main").load("content/pages/home/index.html");

		$("#home_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#home_b").removeClass("inactive");
			$("#home_b").addClass("active");



		});

		$("#about_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#about_b").removeClass("inactive");
			$("#about_b").addClass("active");

			$("#arc_main").load("content/pages/about/index.html");

		});

		$("#cv_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#cv_b").removeClass("inactive");
			$("#cv_b").addClass("active");

			$("#arc_main").load("content/pages/cv/index.html");

		});

		$("#skills_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#skills_b").removeClass("inactive");
			$("#skills_b").addClass("active");

			$("#arc_main").load("content/pages/skills/index.html");

		});

		$("#future_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#future_b").removeClass("inactive");
			$("#future_b").addClass("active");

			$("#arc_main").load("content/pages/future/index.html");

		});

		$("#contact_b").click(function(){

			$("#nav_menu li").addClass("inactive");
			$("#contact_b").removeClass("inactive");
			$("#contact_b").addClass("active");

			$("#arc_main").load("content/pages/contact/index.html");

		});

		});
