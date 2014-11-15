var i = 1;   

//Delay between polls
var delay = 3;
//A sufficiently large number. The number of times the script wiill poll
var polls = 999;
//variable that specifies which match numbers to watch out for.(match 64 is the final)
var matches = '44|61|64';
function myLoop () {           
   setTimeout(function () {    
      $.ajax({
         //The XHR request that the FIFA website uses to refresh results.
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
