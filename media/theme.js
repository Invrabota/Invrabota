//var cv_currency_format = "{{money_with_currency_format}}";

$(document).ready(function(){
   $('span:contains("В категории нет товаров")').text('В категории нет соискателей');
  
  $('#filter_form .filter #sort_by option:contains("возрастанию цены")').text('возрастанию стоимости');
  $('#filter_form .filter #sort_by option:contains("убыванию цены")').text('убыванию стоимости');
  $('#filter_form .filter #sort_by option:contains("названию А-Я")').text('фамилии А-Я');
  $('#filter_form .filter #sort_by option:contains("названию Я-А")').text('фамилии Я-А');
  
  $('div.results > label:contains("Товаров на странице:")').html('Соискателей на странице:'); 
  $('div.price').text( function(item, value) {
    return value + '/в месяц';
  }); 
  
  $('.content .product-page .price:contains("Цена:")').text(function(item, value) {
  	return value.replace(/Цена/, 'Зарплатные ожидания');
  });
  
 // $('a[href="https://yadi.sk/i/o5Xolhm-3HLKj4"]').attr('href', 'https://invrabota.ru/page/information');
  //$('a[href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Fyadi.sk%2Fi%2Fo5Xolhm-3HLKj4"]').attr('href', 'https://invrabota.ru/page/information');
  // $('a[href="https://invrabota.ru/page/information"]').attr('target', '_blank');
  //https://yadi.sk/i/o5Xolhm-3HLKj4
  //https://invrabota.ru/page/information
  
  
  
  $('input#quantity').prop("hidden", true);
  
  
  $('a.cart div.text').text(function(i, v) {
  return v.replace(/ на сумм.+/, '');
  });
  
 $('.title:contains("список")').html('Список');
  var  a = $('.cart .text').html();
   a = a.replace("списке","списке");
  var summ = 0;
    var i =0;
  var count_prod = 209;
  $('.cart .text').html(a);
setTimeout(function() {
  
  $(".cart .text:contains('соискателя')").text($(".cart .text:contains('соискателя')").text().replace('соискателя', 'соискателя'));
    $('table.params tr:nth-child(5)').css('display','none');
  
}, 200);


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

 
  
});
      	function set_products_count(count, amount) {
          	$("#cart_items").html(count);
            var product = 'соискателей';
            if (count == 1) {
            	product = 'соискатель';
            } else if (count == 2 || count == 3 || count == 4) {
            	product = 'соискателя';
            }
          	$("#word_product").html(product);
            $("#cart_amount").html(InSales.formatMoney(amount, cv_currency_format));
		}

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

          if (window.PIE) {
              /*$('.content-wrapper, .cart, .menu, .main-menu > li:hover, input.addtocart:hover, input.addtocart, input.openproduct:hover, input.openproduct, .category-title, .page-title, .blog-title, .front-title, .aside .categories ul li, .aside .categories .title, .menu, .header .menu .main > a.active, .header .menu .main > a:hover, .header .menu .main span > a:hover, .menu-decor-wrap, .menu-decor, .search, .aside .categories ul li > a .marker, .special, .slider-wrapper, .jcarousel-wrapper, .footer, .product-page, .cart-page, a.readmore, table.cart input.quantity, .cart-page a.checkout, .main-submenu, .header-checkout .menu .main > a.active, .header-checkout .menu .main > a:hover, .header-checkout .menu .main span > a:hover, .header-checkout .main-menu > li, .header-checkout .main-menu > li:hover, .header-checkout .main-menu > li, .header-checkout .main-menu > li:hover, .theme_button').each(function() {
                  PIE.attach(this);
              });                                    */
              $('[class!="query"]').each(function() {
                  PIE.attach(this);
              });
          }
          var timerId = 0;

          $('.main-menu-item').mouseover(function(){
                //if (timerId > 0) clearTimeout(timerId);
          		$(this).find('.main-submenu').show();

          });
          $('.main-menu-item').mouseout(function(){
              /*var el = this;
              timerId = setTimeout(function(){
              	$(el).find('.main-submenu').hide();
              }, 200);*/
              $(this).find('.main-submenu').hide();
          });


          $('.jcarousel').jcarousel({
              visible:2
          });
          $('.jcarousel-prev').click(function() {
              $('.jcarousel').jcarousel('scroll', '-=1');
          });
          $('.jcarousel-next').click(function() {
              $('.jcarousel').jcarousel('scroll', '+=1');
          });

          function updateCartInformer() {

              var cart = null;
              try {
                cart = $.parseJSON($.cookie('cart'));
              } catch (e) {
                //var cart = null;
                $.ajax({
                  url: '/cart_items.json',
                  dataType: 'json',
                  async: false,
                  success: function(response){
                    cart = response;
                  }
                });
              }

              var price  = 0;
              var count = 0;
              if (cart) {
                  price = cart.total_price;
                  $.each(cart.order_lines, function(index, order_line) {
                      count += order_line.quantity;
                  });
              }

              //$("#cart_total_price").html(InSales.formatMoney(price, "{{money_with_currency_format}}"));
              set_products_count(count, price);
          }

          var updateCart = function(response) {
              set_products_count(response.items_count);

              set_preloaders_message('<div id="add_product_notification"><h3>Соискатель добавлен в список отобранных</h3><a onclick="hide_preloader();" class="closeCartMsg theme_button big">Продолжить подбор</a><a href="/cart_items/" class="theme_button big">Перейти в список</a></div>');

              //set_preloaders_message('<div id="add_product_notification" >Соискатель добавлен в список отобранных</div>');
              //window.setTimeout( hide_preloader, 10000);
              updateCartInformer();
          }

          $('.closeCartMsg').click(function(){
              //hide_preloader();
              //$('#add_product_notification').hide();
          });

          initAjaxAddToCartButton('input.addtocart', updateCart);
          updateCartInformer();
       
    	});
