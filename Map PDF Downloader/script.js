  var zoom = document.querySelector('#zoomLevel');
  var layer = document.querySelector('#layerName');
  var tileList = document.querySelector('.tile-links');
//identify button...
var download = document.querySelector('#pdf');
  
  //programmatically identify the canvas
  var d_canvas = document.getElementById('canvas');
  var context = d_canvas.getContext('2d');

  drawTilesToCanvas();
  
    $('#pdf').click(function() {       
	var pdf = new jsPDF('p','pt', 'a4');
	pdf.addHTML(document.body, function() {
		pdf.output('datauri');
	});
    });
  
    function drawTilesToCanvas(){
		
var img = new Image();
img.onload = function() {
    context.drawImage(img, 0, 0);
	
};
img.src = 'https://public-tiles.dronedeploy.com/1488056887_JLAZZARIOPENPIPELINE_ortho_jlp/17/30310/51503.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wdWJsaWMtdGlsZXMuZHJvbmVkZXBsb3kuY29tLzE0ODgwNTY4ODdfSkxBWlpBUklPUEVOUElQRUxJTkVfb3J0aG9famxwLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0OTA2NzU4Mzh9fX1dfQ__&Signature=Greb-tuVhtUJlAdk6ZbfZiwDbDoIJAHJkaGANcI36XZjQwl-kjc2JPz9JNx4aOuvNHdDRw1idEePIHw79I7dhJUQ5CmRyAWoy3KwTbKQ9W8e63v6d1TQ2aTOUA~N0grPJRuybsbAptFIGaw0QR0KDN1dGGE2eUuYBeyipcllIJ9oeCBGhn9bKcZWgn1AK~~8pweqLEiW2K8d0p6X-BBNTqMA81XqI4pBSq0ssEWVOIRPacxo4OfPuiXzgunlE5eRkNFPn0LvAi8pznkOQuWY35CNMhfMU6jOJbEnnMSikso2DOK8PcTKJdAtWrjal2QeaPnKlL2uYoGLc2~S24hyBw__&Key-Pair-Id=APKAJXGC45PGQXCMCXSA';
	
  }
  
  function getListItemFromLink(linkUrl){
    var last = function(array) { return array.slice(-1)[0]};
    //es6 template string
    return `<li><a href="${linkUrl}" target="_blank">${last(linkUrl.split('/'))}</a></li>`
  }
  
  function drawTileLinksToScreen(links){
    tileList.innerHTML = links.map(getListItemFromLink).join('');
  }
  

  function fetchTileDataFromPlan(api, plan){
    return api.Tiles.get({planId: plan.id, layerName: layer.value, zoom: parseInt(zoom.value)});
  }

  function getTilesFromResponse(tileResponse){
    return tileResponse.tiles;
  }

  function updateTileLinks(){
    new DroneDeploy({version: 1}).then(function(dronedeployApi){
       return dronedeployApi.Plans.getCurrentlyViewed().then(function(plan){
          return fetchTileDataFromPlan(dronedeployApi, plan);
       });
    })
    .then(getTilesFromResponse)
    .then(drawTileLinksToScreen);
  }

  zoom.addEventListener('change', updateTileLinks);
  layer.addEventListener('change', updateTileLinks);
  updateTileLinks();