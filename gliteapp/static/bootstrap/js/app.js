//  $(document).ready(function(){
//    $("#itemSearch").on("keyup", function() {    
//      var value = $(this).val().toLowerCase();
//      $("#searchList li").filter(function() {
//        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//      });
//    }),

//    $('.search-panel .dropdown-menu').find('a').click(function(e) {
//  		e.preventDefault();
//  		var param = $(this).attr("href").replace("#","");
//  		var concept = $(this).text();
//  		$('.search-panel span#search_concept').text(concept);
//  		$('.input-group #search_param').val(param);
//  	});
//  });


// // $(document).ready(function(e){
// //     $('.search-panel .dropdown-menu').find('a').click(function(e) {
// // 		e.preventDefault();
// // 		var param = $(this).attr("href").replace("#","");
// // 		var concept = $(this).text();
// // 		$('.search-panel span#search_concept').text(concept);
// // 		$('.input-group #search_param').val(param);
// // 	});
// // });


$(document).ready(function(){
 $('#framework').multiselect({
  nonSelectedText: 'Select Search Type',
  enableFiltering: true,
  enableCaseInsensitiveFiltering: true,
  buttonWidth:'400px'
 });
 
 $('#framework_form').on('submit', function(event){
  event.preventDefault();
  var form_data = $(this).serialize();
  $.ajax({
   url:"insert.php",
   method:"POST",
   data:form_data,
   success:function(data)
   {
    $('#framework option:selected').each(function(){
     $(this).prop('selected', false);
    });
    $('#framework').multiselect('refresh');
    alert(data);
   }
  });
 });
 
 
});