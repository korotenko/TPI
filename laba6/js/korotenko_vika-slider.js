var playing = true;
var pauseButton = document.getElementById('pause');

var width = 1098;												//Ширина видимой области (366*3) 
var height = 206;												//Высота видимой области
var pause = 2000;												//Пауза 2 сек
var ssid = 'slider';											//Slider ID

var ss = document.getElementById(ssid);							//получаем корневой слой слайдшоу
var imgcount=ss.children[0].getElementsByTagName('img').length;	//подсчитываем количество изображений

ss.style.width=width+'px';										//устанавливаем ширину и высоту для дисплея и слоя с изображениями
ss.style.height=height+'px';
ss.children[0].style.width=(imgcount*width)+'px';
ss.children[0].style.height=height+'px';
ss.children[0].style.left='-3294px';							//устанавливаем координату в 0  (366 * 9)

var slideInterval = setInterval(goToSlide,pause);

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
	pauseSlideshow();
	nextSlide();
};

previous.onclick = function() {
	pauseSlideshow();
	previousSlide();
};

function nextSlide() {
	goToSlide('next');
}
 
function previousSlide() {
	goToSlide('previous');
}

function goToSlide(direction)
{
	if(direction == 'next')
	{
		var minleft=-1*(width*(imgcount-4));						//вычисляем максимальное смещение
		if(minleft>=parseInt(ss.children[0].style.left))			//проверяем не пора ли перемотать в начало
		{
			ss.children[0].style.left='-3294px';					//если пора - перематываем (366 * 9)
		}else														//либо сдвигаем слой на ширину 3-х изображений
		{
			ss.children[0].style.left=(parseInt(ss.children[0].style.left)-366*3)+'px';
		}
		pauseSlideshow();
	}else
	{
		if(direction == 'previous')
		{
			var minleft=-1*(width*(imgcount-4));						//вычисляем максимальное смещение
			console.log(minleft);			
			if(parseInt(ss.children[0].style.left)>=-3294)				//проверяем не пора ли перемотать в начало
			{
				ss.children[0].style.left='-5490px';					//если пора - перематываем (366 * 9)
			}else														//либо сдвигаем слой на ширину 3-х изображений
			{
				ss.children[0].style.left=(parseInt(ss.children[0].style.left)+366*3)+'px';
			}
			console.log(ss.children[0].style.left);
			pauseSlideshow();
		}else
		{
				var minleft=-1*(width*(imgcount-4));						//вычисляем максимальное смещение
				if(minleft>=parseInt(ss.children[0].style.left))			//проверяем не пора ли перемотать в начало
				{
					ss.children[0].style.left='-3294px';					//если пора - перематываем (366 * 9)
				}else														//либо сдвигаем слой на ширину 3-х изображений
				{
					ss.children[0].style.left=(parseInt(ss.children[0].style.left)-366*3)+'px';
				}
		}
	}
}

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}
 
function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(goToSlide,2000);
}

pauseButton.onclick = function() {
	if(playing) {
		pauseSlideshow();
	} else {
		playSlideshow();
	}
};