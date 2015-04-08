$(document).ready(function(){
	console.log("Document ready...");
    $("#Morse").hover(function(){
        
        $(this).text("WELCOME TO THE ELECTRONICS HOBBY CLUB, DA-IICT")
        })

    $("#Morse").mouseleave(function(){
      $(this).text(". .-.. . -.-. - .-. --- -. .. -.-. ... / .... --- -... -... -.-- / -.-. .-.. ..- -...");
    });

    $('.wiggle').hover(function(){
    	$(this).ClassyWiggle('start');
    }, function(){
    	$(this).ClassyWiggle('stop');
    });
});

