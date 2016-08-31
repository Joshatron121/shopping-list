$(function(){
	var item;

	var template = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		item = $('input').val();
		if (item != "") {
			$('.shopping-list').append('<li><span class="shopping-item">' + item + template);
      $(this)[0].reset();
		} else {
			alert('Please enter an item.')
		}
	});

	$('ul').on('click', '.shopping-item-delete', function(){
		$(this).closest('li').remove();
	});

	$('ul').on('click', '.shopping-item-toggle', function(){
		$(this).closest('li').children('span.shopping-item').toggleClass('shopping-item__checked');
	});
});