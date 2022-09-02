$(function(){
  $("#allChk").change(function(){
    $("#cust_list input[type=checkbox]").prop('checked', this.checked);
  });
});
