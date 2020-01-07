<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- JQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <!-- Handlebars -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.5.3/handlebars.min.js"></script>
  <!-- JS -->
  <script src="script.js"></script>

  <!-- Handlebars Template -->
  <script id="config_template" type="text/x-handlebars-template">
    <div class="box">
      <p>Configurazione {{id}}:</p>
      <p>{{title}}</p>
      <p>{{description}}</p>
    </div>
  </script>


  <title>Document</title>
</head>
<body>
  
  <form id="config_form">
    <label for="title">Title:</label>
    <input type="text" name="title" value="new title"><br>
    <label for="description">Description:</label>
    <input type="text" name="description" value="new description"><br>
    <input type="submit" value="Nuova Configurazione">
  </form>

  <div id="container"></div>

</body>
</html>