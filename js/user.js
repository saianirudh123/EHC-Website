$(document).ready(function(){
	console.log("Document ready...");
    $("#Morse").hover(function(){
        
        $(this).text("Welcome  to  Electronics "),
        $(this).append("Hobby  Club,  DA-IICT    ")
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

