var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=404988b2-d0b9-4a7f-ae04-30aee13f6025";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      console.log(data);
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}