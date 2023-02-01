(function (global) {
    var dc = {};
    datapath = "../data/data.json";
    weekdayHtml = "../weekday.html";
    document.addEventListener("DOMContentLoaded", function (event) {
        // On first load, show home view
        $ajaxUtils.sendGetRequest(
          datapath,
          function (response) {
            $ajaxUtils.sendGetRequest(
                weekdayHtml, 
                function(responseText){
                    var tmp = "";
                    const maxValue = Math.max(...response.map(x => x.amount));

                    for (var i=0; i < response.length; i++){
                        var height = Math.round((response[i].amount / maxValue ) * 150);
                        console.log(height);
                        tmp += responseText.replace("height:0px", "height:" + height + "px");
                        tmp += "<span>" + response[i].day + "</span>";
                        tmp += "</div>";
                    }
                    document.querySelector(".barchart").innerHTML = tmp; 
                },
                false
            );
          }
        );
      });

    global.$dc = dc;
})(window);