$("#totop").fadeOut(0);

$('a[href^="#"]').click(function () {
  // если в href начинается с #, то обрабатываем клик
  var scroll_el = $(this).attr("href"); // возьмем содержимое атрибута href
  if ($(scroll_el).length != 0) {
    // проверим существование элемента чтобы избежать ошибки
    $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
  }
  return false; // выключаем стандартное действие
});
$(window).scroll(function () {
  if ($(this).scrollTop() > offset) {
    $("#totop").css("opacity", "0.8"); // возвращаем прозрачность
    $("#totop").fadeIn(duration); // элемент плавно исчезает
  } else {
    $("#totop").fadeOut(duration); // элемент плавно появляется
  }
});
