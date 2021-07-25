;(function(){
    var forms = document.querySelectorAll('.form-send'); 
    var body = document.querySelector('body');
    if(forms.length === 0) return;

    var serialize = function(form){
        var items = form.querySelectorAll('input,checkbox');
        var str = '';
        for(var i = 0; i < items.length; i++){
            
            var item = items[i];
            if(item.type === 'checkbox'){
                if(item.checked){
                    item.setAttribute('value', 'on');
                    var value = item.value;
                    var name = item.name;
                }
            }  else{
                var value = item.value;
                var name = item.name;
            }
            var separator = i===0 ? '' : '&';
            if(name) str+= separator + name + '=' + value;
        }
        return str;
    }; 

    var formSend = function(form){
        var data = serialize(form);
        //console.log(data);
        var xhr = new XMLHttpRequest();
        var url = 'assets/mail/mail.php';

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function(){
            //закрыть попап формы
            var activePopup = document.querySelector('.popup.is-active');
            if(activePopup)
                activePopup.classList.remove('is-active');
            else    
                body.classList.toggle('no-scroll');

            //в зависимости от ответа откроеся попап с успешным\ошибочным уведомлением
            if(xhr.response === 'success'){
                document.querySelector('.popup-thanks').classList.add('is-active');
                setTimeout(function(){
                    document.querySelector('.popup-thanks').classList.remove('is-active');
                    body.classList.toggle('no-scroll');
                }, 2000);
                
            }else{
                document.querySelector('.popup-error').classList.add('is-active');
                setTimeout(function(){
                    document.querySelector('.popup-error').classList.remove('is-active');
                }, 2000);
               body.classList.toggle('no-scroll');
            }

            form.reset();//сбросить заполненные поля
        };
        xhr.send(data); //попадет в $message (mail.php)
    };

    for( var i = 0; i<forms.length; i++){
        forms[i].addEventListener('submit', function(e){
            e.preventDefault();
            var form = e.currentTarget;
            formSend(form);
        });
    }

})();
