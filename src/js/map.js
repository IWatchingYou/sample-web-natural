jQuery(document).ready(function () {
  jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: '#0C1519',
    color: '#1B4246',
    selectedColor: '#1B4246',
    hoverColor: '#069e43',
    enableZoom: true,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#000000', '#1B4246'],
    normalizeFunction: 'polynomial',
    onRegionClick: function (event, code, region) {
      var a = document.getElementById('model');
      var coutry = document.getElementById('namecountry');
      var pic = document.getElementById('list');

      a.style.display = 'block';
      coutry.innerHTML = region;

      while (pic.hasChildNodes()) {
        pic.removeChild(pic.lastChild);
      }
    }
  });
});