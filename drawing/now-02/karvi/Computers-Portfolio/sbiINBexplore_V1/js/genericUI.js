$(document).ready(function() {
	$('[data-bs-toggle="popover"]').popover();
	$('[data-bs-toggle="tooltip"]').tooltip();
	//$(':checkbox:checked').prop('checked',false);
	//$(':radio:checked').prop('checked',false);
     $('input[type="radio"][name="mop"][value="Singly"]').prop('checked', true);
	  
	/*import html files*/
	function setPageTitleAndMenuItem( elt ) {
		$(elt).addClass('d-none');
		var currPagePath = $(location).attr('pathname');
		$(elt).each(function() {
			var currPagePrefix = $(this).data('page-prefix');
			if( currPagePath.lastIndexOf( currPagePrefix ) >= 0 ) {
				$(this).removeClass('d-none');
				if(elt == '.menu-section') {
					var $a = $(this).find('li a');
						$a.each(function() {
							var htmlName = $(this).attr('href').split('.html');
								htmlName = htmlName[0].split('/');
								htmlName = htmlName[htmlName.length - 1];
							if( currPagePath.lastIndexOf( htmlName ) >= 0 ) {
								$(this).closest('li').addClass('hovered');
								$(this).find('.navbarBorder').addClass('hovered');
							}
						});
				}
			}
		});
	}
	$('header').load('headerInner.html',  function(response, status) {
		if(status == "success") {
			setPageTitleAndMenuItem( '.menuTitle' );
			setPageTitleAndMenuItem( '.menu-section' );
		}
	});
	$('footer').load('footer.html');
    $('#headerLanding').load('headerLanding.html');
	//$('#footer').load('footer.html #footerContent');
	
	function cssCurrNavLink( $navLink ) {
		$( $navLink ).removeClass('active');
		var currPagePath = $(location).attr('pathname');
		$( $navLink ).each(function() {
			var htmlName = $(this).attr('href').split('.html');
				htmlName = htmlName[0].split('/');
				htmlName = htmlName[htmlName.length - 1];
			if( currPagePath.lastIndexOf( htmlName ) >= 0 ) {
				$(this).addClass('active');
			}
		});
	}
	$('#yonocarouselSection').load('all_template.html #yonocarousel');
	$('#personalcarouselSection').load('all_template.html #personalcarousel');
	$('#corporatecarouselSection').load('all_template.html #corporatecarousel');
	
	$('#yonoBusiness_LeftSideNav').load('all_template.html #yonoBusiness_LeftSideNav', function(response, status) {
		if(status == "success") cssCurrNavLink( '#yonoBusiness_LeftSideNav .nav-link' );
	});
    $('#personalBanking_LeftSideNav').load('all_template.html #personalBanking_LeftSideNav', function(response, status) {
		if(status == "success") cssCurrNavLink( '#personalBanking_LeftSideNav .nav-link' );
	});
	$('#corporateBanking_LeftSideNav').load('all_template.html #corporateBanking_LeftSideNav', function(response, status) {
		if(status == "success") cssCurrNavLink( '#corporateBanking_LeftSideNav .nav-link' );
	});
	$('#otherInformation_LeftSideNav').load('all_template.html #otherInformation_LeftSideNav', function(response, status) {
		if(status == "success") cssCurrNavLink( '#otherInformation_LeftSideNav .nav-link' );
	});
	
	
	/* Scroll Message starts here */
	setTimeout(function(){
		$.getJSON('js/scroll_data.json',function(v){
			if( v.scroll_message.scroll_value =='' || v.scroll_message.flag === 'false') {
				$('#marqueeScrollMessage p').hide();
			} 
			else {
				$('#marqueeScrollMessage').find('p').html(v.scroll_message.scroll_description);	
			}
		});
	}, 300);
	/* Scroll Message ends here */
});


$(document).ready(function() {
	/*Tooltip Trigger************************************************************/
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
	/************************************************************Tooltip Trigger*/
	
	/*Popover Trigger************************************************************/
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	});
	/************************************************************Popover Trigger*/
	
	/*Toast Trigger************************************************************/
	document.getElementById("toastSamplebtn").onclick = function() {
		var toastElList = [].slice.call(document.querySelectorAll('#toastSample'))
		var toastList = toastElList.map(function(toastEl) {
			return new bootstrap.Toast(toastEl)
		});
		toastList.forEach(toast => toast.show())
	};
	
	document.getElementById("liveToastBtn").onclick = function() {
		var toastElList = [].slice.call(document.querySelectorAll('#liveToast'))
		var toastList = toastElList.map(function(toastEl) {
			return new bootstrap.Toast(toastEl)
		});
		toastList.forEach(toast => toast.show())
	};
	/************************************************************Toast Trigger*/
});



