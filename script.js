$(document).ready(init);

function init() {
  getAllConfigurazioni();
  $('#config_form').submit(putNewConfigurazione);
  $(this).on('click', '.delete_conf', deleteConfigurazione);
  $(this).on('click', '.update_conf', updateConfigurazione);
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

function deleteConfigurazione() {
  var me = $(this);
  var id = me.data('id');

  $.ajax({
    url: 'deleteConfigurazione.php',
    method: 'POST',
    data: {id: id},
    success: function(data) {
      if (data) {
        getAllConfigurazioni();
      }
    },
    error: function(error) {
      console.log('errore', error);
    }
  });
}

function updateConfigurazione() {
  var me = $(this);
  var id = me.data('id');
  
  var newTitle = prompt('New Title');
  var newDescription = prompt('New Description')

  $.ajax({
    url: 'updateConfigurazione.php',
    method: 'POST',
    data: {
      id: id,
      title: newTitle,
      description: newDescription
    },
    success: function(data) {
      if (data) {
        getAllConfigurazioni();
      }
    },
    error: function(error) {
      console.log('error', error);
    }
  });
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