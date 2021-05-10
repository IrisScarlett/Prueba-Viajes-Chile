$(function (){
    $("a").click(function(event){
        event.preventDefault()

        var gato = this.hash;

        $("html").animate({
            scrollTop: $(gato).offset().top -50,
        },
        800
        );
    })
    
    $('[data-toggle="tooltip"]').tooltip()

    $('[data-toggle="popover"]').popover()
})