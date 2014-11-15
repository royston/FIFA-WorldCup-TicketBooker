var i = 1;   
var delay = 3;
var polls = 999;
var matches = '44|61|64';
function myLoop () {           
   setTimeout(function () {    
      $.ajax({
  url: "https://fwctickets.fifa.com/TopsAkaCalls/Calls.aspx/getRefreshChartAvaDem?l=en&c=OTH",
  context: document.body
}).done(function(data) {
  var d = new Date();
    console.log(d);
  dataObj = data;
    var prodArr = jQuery.parseJSON(dataObj.d.data);
    jQuery.each(prodArr.BasicCodes.PRODUCTPRICES, function(index, value){
    if(value.PRPProductId.match("IMT\(" + matches + "\)") && value.PRPCategoryId.match("\^[123]\$")){
        var status = '-';
        if(value.Quantity > 0){status = 'YES'; alert('ALERT' + value.PRPProductId + ' | ' + value.PRPCategoryId + ' | ' + value.Quantity)};
        console.log(value.PRPProductId + ' | ' + value.PRPCategoryId + ' | ' + value.Quantity);
    }});
});          
      i++;                     
      if (i < polls) {            
         myLoop();             
      }                        
   }, delay*1000)
}
