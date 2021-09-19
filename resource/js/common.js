
$(document).on('click', '.qa__question', function(){
  const $target = $(this).parent('.qa__item').find('.qa__answer');
  if($target.css('display') === 'none'){
    $target.slideDown();
  } else {
    $target.css('display', 'flex');
    $target.slideUp();
  }
});

$(document).on('click', '#goConsulting', function(){
  const $target = $('.main__section.s03 .main__textbox.box__green');
  const height = $target.offset().top;
  
  $('html').animate({
    scrollTop: height
  });
});

$(document).on('click', '#send1', function(){
  const name = $('#name1').val();
  const tel = `${$('tel11').val()}${$('tel12').val()}`;
  if(!$('#agree1').is(':checked')) {
    alert('정보 수집, 이용에 동의해주세요.');
    return false;
  }
});

$(document).on('click', '#send2', function(){
  const name = $('#name2').val();
  const tel = $('#tel2').val();
  if(!$('#agree2').is(':checked')) {
    alert('정보 수집, 이용에 동의해주세요.');
    return false;
  }
});

$(document).on('click', '#send3', function(){
  const name = $('#name3').val();
  const tel = $('#tel3').val();
  if(!$('#agree2').is(':checked')) {
    alert('정보 수집, 이용에 동의해주세요.');
    return false;
  }
});