// строковая переменная, которая нам поможет обратиться к скрытым элементам с шаблонами
var s;

// обработчик клика, который следит сразу за всеми нужными разделами с шаблонами

$('#sel02_div, #sel01_div, #sel03_div, #sel04_div, #sel05_div').on('click',function(){

 
 	// получаем имя элемента, на который кликнули 

	s = this.id;

 
 	// берём первые 5 символов, чтобы по ним обратиться к скрытым элементам

 	s = s.slice(0,5);

	 // создаём временный новый элемент textarea, из которого буфер обмена заберёт текст шаблона

 	var aux = document.createElement("textarea");

 
 	// отправляем в этот элемент текст из нужного шаблона

 	aux.value = document.getElementById(s).value;

 
 	// виртуально добавляем этот элемент на страницу

 	document.body.appendChild(aux);

 
 	// выбираем весь текст в виртуальном элементе

 	aux.select();

 
 	// копируем выделенный текст в буфер обмена

 	document.execCommand("copy");

 
 	// дело сделано — удаляем виртуальный элемент со страницы

	 document.body.removeChild(aux);
	 
	 // выводим алерт для пользователя
	 alert("Шаблон скопировал");

});
