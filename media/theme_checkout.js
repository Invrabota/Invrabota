
$(document).ready(function(){
  
  
  
    var supervise = {};
$('.count-product span').each(function() {
    var txt = $(this).text();
 
    if (supervise[txt]){
       $(this).remove();
   console.log('I');
    }
       
    else
        supervise[txt] = true;
});
  
  
  jQuery('.count-product').html(supervise[1]);

  count_prod = jQuery('.count-product span').length;
  
  jQuery('#count-prod').text(count_prod);

  $('#regular_client h3').html('Для новых работодателей');
  $('#login').prev().html('Для участников СБВИ'); 
  $('#shipping_address').prev().html('Адрес организации (фактический) <p class="small">Если возможно собеседование через скайп, пожалуйста, впишите логин Skype в поле с адресом</p>');
  $('#delivery_variants').prev().html('Дополнительные услуги РУРЦ "Доступная среда"');
  $('#checkout_result_fields').prev().css('display','none');
  $('#payment_gateways').prev().css('display','none');
  $('#create_order').prev().html('Проверьте введённые данные и подтвердите запрос:');
  $('#registered_client > div:first-child').css('display','none');
  $('#register + label + div').html('Вы сможете видеть историю запросов, проще делать новые и первыми получать информацию о новых соискателях и событиях в РУРЦ "Доступная среда"');
  $('#register + label').html('<b>Стать постоянным участником СБВИ</b>');
  $('#checkout_buyer_fields + .field.fc .field-label').html('Комментарии к запросу');
  $('#create_order').html('Подтвердить запрос');
  $('#create_order').val('Подтвердить запрос');
  $('#delivery_variants').css('display','none');
  
  $(".set-sidebar a.set-title").html("<b>Ваш запрос</b>");
  $("div#payment_way_block").prev($('.fc')).css('display','none');
  
  $('.userbar.fc a[href$="/client_account/addresses"]').css('display','none');
  
  $('.userbar.fc a[href$="/client_account/orders"]').html('<span class="b">Запросы</span>');
  $('.set.wide_set .set-title:contains("История заказов")').html('История запросов');
  $('#top_info').css('display','none');
  $('.set-title:contains("Оплата")').css('display','none');
  $('.back_to_shop:contains("Вернуться в магазин")').html('Вернуться на портал');
  $('.set-title:contains("Доставка")').html('Информация о работодателе');  
  $('.set-title:contains("Состав заказа")').html('Список соискателей');   
  $('.field-label:contains("Способ оплаты:")').css('display','none');
  $('.field-label:contains("Статус оплаты:")').css('display','none'); 
  $('.field-content:contains("Наличным курьеру")').css('display','none');
  $('.field-content:contains("не оплачен")').css('display','none');  
  $('.field-label:contains("Получатель (ФИО):")').html('ФИО работодателя');   
  $('.field-label:contains("Телефон получателя:")').html('Телефон работодателя');  
  $('.field-label:contains("Телефон получателя:")').html('Телефон работодателя'); 
  $('.field-label:contains("Способ доставки:")').css('display','none'); 
  $('.field-content:contains("Дополнительные услуги")').css('display','none');  
  $('.field-label:contains("Комментарии к заказу:")').css('display','none'); 
  $('.field-content:contains("test discr")').css('display','none');  
  $('.message:contains("Спасибо за заказ!")').html('<p class="notice">Спасибо за ваш запрос!</p>');   
  $('.count').html(' ');
  $('.price-field:contains("Стоимость")').html('Ожидаемая зарплата');  
  $('th:contains("Наименование")').html('ФИО соискателя'); 
  $('.page-title:contains("Оформление запроса")').css('display','none');    
  $('.service_logins').css('display','none');  
  $('.field-content:contains("через")').html('<a href="/client_account/contacts/new">Зарегистрироваться</a>');  

  $('th:contains("Оплата")').html('<p> </p>'); 
  $('th:contains("Сумма заказа")').html('<p> </p>'); 
  $('th:contains("Номер заказа")').html('Номер запроса');   
  $('.red').css('display','none');
  $('.green').css('display','none');
  $('.order_amount').css('display','none');
  $('th:contains("Сумма выполненных заказов")').css('display','none');
   $('.highlited_row a[href$="*/orders/*"]').css('display','none');  
  $('#orders_history td:last-child > a > div').hide();
  $('div.content.wrapper.body.fc .set.wide_set div.field.fc small:contains("Ответ магазина")').text(function (index, value) {
  	return value.replace(/магазина/, 'портала');
  })
 $('#registered_client h3').text('Личный кабинет работодателя');
    $('#presence').css('display','none');
  

  $(' div#top_info+div >.set-block:nth-child(2) table tbody tr').each(function(){
   $(this).find('.price-field').text($(this).find('.price-field').text()+'. / в месяц');
  });
  
  
  $('#orders_history th:contains("Дата оформления")').html('Дата запроса');
  $('#orders_history th:contains("Статус")').html('Статус запроса');
 
 


});

		$(function() {

          var search_placeholder = $('#search').val();
          $('#search').focus(function(){
          	if ($(this).val() == search_placeholder) $(this).val('');
          });
          $('#search').blur(function(){
          	if ($(this).val() == '') $(this).val(search_placeholder);
          });
          $('#search_submit').click(function(e){
          	e.preventDefault();
            if ($('#search').val() == search_placeholder
                || $('#search').val() == '')
              $('#search').val('');
            else
              $(this).parent().submit();
          });
        });
