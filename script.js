$(document).ready(init);

function init() {
  getAllConfigurazioni();
  $('#config_form').submit(putNewConfigurazione);
}

function getAllConfigurazioni() {
  $.ajax({
    url: 'getAllConfigurazioni.php',
    method: 'GET',
    success: function(data) {
      printConfigurazioni(data);
    },
    error: function(error) {
      console.log('errore', error);
    }
  });
}

function putNewConfigurazione() {
  var me = $(this);

  $.ajax({
    url: 'putNewConfigurazione.php',
    method: 'POST',
    data: me.serialize(),
    success: function(data) {
      if (data) {
        getAllConfigurazioni();
      }
    },
    error: function(error) {
      console.log('errore', error);
    }
  });

  return false;
}

function printConfigurazioni(data) {
  var target = $('#container');
  target.html('');
  var template = $('#config_template').html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < data.length; i++) {
    var config = data[i];
    var configHTML = compiled(config);
    target.append(configHTML);
  }
}