  //  var tpl = '{% block content %}{{ stuff }}{% endblock %}';
var indexPage =
  '<h3>Select yaml files</h3>' +
  '<input type="file" id="files" name="files[]" multiple />';

var selectedFiles =
  '<h3>Tables will be created:</h3>' +
  '<div id="tables"></div>' +
  '<p><button id="create_tables">Create models</button></p>';

var tables;

$(function() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var output = swig.render(indexPage); //, {locals: { stuff: 'awesome' }});
        $('#view').html(output);
        $('#files').change(handleFileSelect);
    } else {
      $('#view').html('The File APIs are not fully supported in this browser.');
    }
});

function handleFileSelect(evt) {
    tables = [];
    $('#view').html(swig.render(selectedFiles));
    $('#create_tables').click(postSchema);

    var files = evt.target.files;

    var onReaderLoad = function(event) {
        var fileString = event.target.result;
        var table = jsyaml.load(fileString);
        $('#tables').append('<pre>' + JSON.stringify(table, null, 4) + '</pre>');
        tables.push(table);
    }

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(file);
    }
}

function postSchema() {
  alert("Post!");
}