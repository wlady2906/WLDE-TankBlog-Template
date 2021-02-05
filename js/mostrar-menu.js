jQuery('document').ready(function($)
        {
            var btn = $('.fa-bars'),
            menu = $('.navbar ul');

            btn.click(function(){
                if(menu.hasClass('mostrar')){
                    menu.removeClass('mostrar');
                }
                else{
                    menu.addClass('mostrar');
                }
            });
        });
