/*
в разметке у button задаем data-popup="popup-name" и при создании модальных окон даем им соответствующий класс "popup-name". 
Таким образом, кнопка быдет активировать элементы с этим классом.
*/
;(function(){
    var body = document.querySelector('body');
    
    //ф-ция возвращает либо null, либо эл-т, содержаший className (проходится по родителям)
    var closestItemByClass = function(item, className){
        var node = item;
        
        while(node){
            if(node.classList.contains(className)){
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };
    
    
    //ф-ция возвращает либо null, либо эл-т, содержаший attr (проходится по родителям)
    var closestAttr = function(item, attr){
        var node = item;
        
        while(node){
            var attrValue = node.getAttribute(attr);
            if(attrValue){
                return attrValue;
            }
            node = node.parentElement;
        }
        return null;
    };
    
    
    var showPopup = function(target){
        target.classList.add('is-active');
    };
    var closePopup = function(target){
        target.classList.remove('is-active');
    };
    var toggleScroll = function(){
        body.classList.toggle('no-scroll');
    }
    var closeHamburger = function(){
        var btn_hamburger = document.querySelector('.hamburger');
        btn_hamburger.style.display = 'none';
    }
    
   

    body.addEventListener('click', function(e){
        var target = e.target; //эл-т по которому был клик
        var popupClass = closestAttr(target, 'data-popup'); 
      
        if(popupClass === null) {
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass); 
        if(popup){
            showPopup(popup); 
            toggleScroll();
            closeHamburger();
        }
    });
    
    
    body.addEventListener('click', function(e){
        var target = e.target;
        
        //закрыть попап при нажатии на крестик или вне попапа
        if(target.classList.contains('popup__btn-close') ||
           target.classList.contains('popup__inner')){
            var popup = closestItemByClass(target, 'popup');  
            
            closePopup(popup);
            toggleScroll();
        }
        
    })
    
    
    //закрыть попап, если нажали esc
    body.addEventListener('keydown', function(e){ //событие при нажатии клавиши
        if(e.keyCode !==27){ //27 - esc
            return;
        }
        var popup = document.querySelector('.popup.is-active');
        
        if(popup){
            closePopup(popup);
            toggleScroll();
        }
    })
})();

