trying =[];
type ='';
diagram ="";
$('#document').ready(function(){
  addInterface();
  var solution = $('#lock_solution').val();
  var arraySolution = solution.split(',');
  type = $('#lock_type').val();
  switch(type){
    case 'password':
      $('#password').val(arraySolution[0]);
      break;
    case 'login':
      $('#login').val(arraySolution[0]);
      $('#mdp').val(arraySolution[1]);
      break;
    case 'color':
        $('#actualCode').html("");
        $.each(arraySolution, function(index,color){
          $("#actualCode").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="'+color+'" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg>');
        });
        trying = arraySolution;
      break;
    case 'diagram':
        var actualPattern = arraySolution.join('');
        diagram.setPattern(actualPattern);
        trying = arraySolution;
        break;
    case 'directional':
        $('#actualCode').html("");
        $.each(arraySolution, function(index,value){
          trying = arraySolution;
          switch(value){
            case 'n':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>'+
                  '<path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>'+
                '</svg>'
              );
              break;
            case 's':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>'+
                  '<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>'+
                '</svg>'
              );
              break;
            case 'o':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>'+
                  '<path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>'+
                '</svg>'
              );
              break;
            case 'e':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>'+
                  '<path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>'+
                '</svg>'
              );
              break;
            case 'no':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M5.5 5h4a.5.5 0 0 1 0 1H6.707l4.147 4.146a.5.5 0 0 1-.708.708L6 6.707V9.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/>'+
                '</svg>'
              );
              break;
            case 'ne':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"/>'+
                '</svg>'
              );
              break;
            case 'se':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M10.5 11h-4a.5.5 0 0 1 0-1h2.793L5.146 5.854a.5.5 0 1 1 .708-.708L10 9.293V6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"/>'+
                '</svg>'
              );
              break;
            case 'so':
              $("#actualCode").append(
                '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                  '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path fill-rule="evenodd" d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"/>'+
                '</svg>'
              );
              break;
          }
        });
        break;
      case 'digicode':
          $('#numberCode').val(arraySolution[0]);
        break;
      case 'piano':
      trying = arraySolution;
        break;
      case 'switch':
        var solution = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        $.each(arraySolution, function(index,bool){
          if(bool == "true"){
            solution[index]=true
          }
          else if (bool == "false") {
            solution[index]=false
          }
        });
        $.each(solution, function(index,bool){
          if(bool){
            $('#switch'+index).html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
            '<path fill-rule="evenodd" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>'+
            '</svg>');
            $('#switch'+index).data('check',true);
          }
        });
        break;
        case 'date':
          $('#date').val(arraySolution[0]);
          break;
  }
  addAction();
})
$('#lock_type').change(function(){
  trying=[];
  addInterface();
  addAction();
})

function addInterface(){
  type = $('#lock_type').val();
  switch(type){
    case 'password':
      var codeInstance = '<div>Mot de passe souhaitez.</div><input type="text" id="password" class="form-control"   aria-describedby="button-addon4">'
      break;
    case 'login':
      var codeInstance = '<div>Login et mot de passe souhaité.</div><input type="text" id="login" placeholder="login" class="form-control"   aria-describedby="button-addon4">'+
        '</br><input type="text" placeholder="Mot de passe" id="mdp" class="form-control"   aria-describedby="button-addon4">'
      break;
    case 'color':
      var codeInstance ='</br><div id="digit" class="container"><div class="row justify-content-center">'+
        '<div class="col oneDigit"><button id="violetDigit" data-color="violet" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="violet" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="blueDigit" data-color="blue" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="blue" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="greenDigit" data-color="green" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="green" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="yellowDigit" data-color="yellow" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="yellow" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="orangeDigit" data-color="orange" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="orange" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="redDigit" data-color="red" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="blackDigit" data-color="black" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button button id="resetColor" type="button" class="btn digit btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/></svg></button></div>'+
        '</div><div>Votre code : <span id="actualCode"></span></div>'
      break;
      case 'diagram':
        var codeInstance = '</br><div id="lock"></div>'
        break;
      case 'directional':
        var codeInstance = '<div id="digit" class="container"><div class="row justify-content-center">'+
        '<div class="col oneDigit"><button data-orientation="no" id="noDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M5.5 5h4a.5.5 0 0 1 0 1H6.707l4.147 4.146a.5.5 0 0 1-.708.708L6 6.707V9.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="n" id="nDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/><path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="ne" id="neDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="o" id="oDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/><path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="e" id="eDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/><path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="so" id="soDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="s" id="sDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button data-orientation="se" id="seDigit" type="button" class="btn digit btn-primary orientationButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M10.5 11h-4a.5.5 0 0 1 0-1h2.793L5.146 5.854a.5.5 0 1 1 .708-.708L10 9.293V6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button button id="resetDirectionnal" type="button" class="btn digit btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/></svg></button></div></div></div>'+
        '</div><div>Votre code : <span id="actualCode"></span></div>'
        break;
      case 'digicode':
        var codeInstance = '<div>Code souhaitez.</div><input type="number" id="numberCode" class="form-control"   aria-describedby="button-addon4">'
        break;
      case 'piano':
        var codeInstance = '<div class="piano-container">'+
        '<div class="piano-keys"><div class="oneKey piano-white piano-C" data-value="C"></div><div class=" piano-black"><div data-value="Db" class=" oneKey piano-black-raised piano-Db"></div></div><div class="oneKey piano-white piano-D" data-value="D"></div><div class="oneKey piano-black"><div class="oneKey piano-black-raised piano-Eb" data-value="Eb"></div></div><div class="oneKey piano-white piano-E" data-value="E"></div><div class="oneKey piano-white piano-F" data-value="F"></div><div class="oneKey piano-black"><div class="oneKey piano-black-raised piano-Gb" data-value="Gb"></div></div><div class="oneKey piano-white piano-G" data-value="G"></div><div class="oneKey piano-black"><div class="oneKey piano-black-raised piano-Ab" data-value="Ab"></div></div><div class="oneKey piano-white piano-A" data-value="A"></div><div class="oneKey piano-black"><div class="oneKey piano-black-raised piano-Bb" data-value="Bb"></div></div><div class="oneKey piano-white piano-B" data-value="B"></div></div></div></div>'+
        '<div class="row justify-content-center"><div class="col oneDigit"><button button id="resetPiano" type="button" class="btn btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/></svg></button></div><div class="col oneDigit"><button button id="listen" type="button" class="btn btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/><path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/></svg></button></div></div>'
        break;
      case 'switch':
        var codeInstance = '<div id="digit" class="container"><div class="row justify-content-center">'+
        '<div class="col oneDigit"><button id="switch0" data-index=0 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch1" data-index=1 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch2" data-index=2 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button  id="switch3" data-index=3 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div></div>'+
        '<div class="row justify-content-center"><div class="col oneDigit"><button id="switch4" data-index=4 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch5" data-index=5 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div><div class="col oneDigit"><button id="switch6" data-index=6 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch7" data-index=7 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div></div>'+
        '<div class="row justify-content-center"><div class="col oneDigit"><button id="switch8" data-index=8 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch9" data-index=9 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch10" data-index=10 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div><div class="col oneDigit"><button id="switch11" data-index=11 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div></div>'+
        '<div class="row justify-content-center"><div class="col oneDigit"><button id="switch12" data-index=12 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div><div class="col oneDigit"><button id="switch13" data-index=13 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="switch14"  data-index=14 data-check="false" type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div><div class="col oneDigit"><button id="switch15" data-index=15 data-check="false"  type="button" class="btn digit switch btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-off" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></button></div></div>'+
        '<div class="row justify-content-center"><div class="col oneDigit"><button button id="resetSwitch" type="button" class="btn digit btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/></svg></button></div></div> </div>'
        var solution = $('#lock_solution').val();
        var arraySolution = solution.split(',');
        if (solution == ''){
          trying = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
        }
        else{
          trying = arraySolution;
        }
        break;
        case 'date':
          var codeInstance = '<div>Choisissez une date.</div><div id="datepicker" value="02-16-2020"></div><input type="hidden" id="date">'
        break;
  }
  $('#codeZone').html(codeInstance);
  diagram= new PatternLock('#lock',{
    lineOnMove:false,
    enableSetPattern : true,
    onDraw:function(data){
      trying = data.split("");
 }
  });
}
function addAction(){
  //fonctions pour l'interface color
  $('.colorButton').click(function(){
    var color = $(this).data('color');
    trying.push(color);
    $("#actualCode").html("");
    displayColors();
  });
  function displayColors(){
    $('#actualCode').html("");
    $.each(trying, function(index,color){
      $("#actualCode").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="'+color+'" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg>');
    });
  }
  $('#resetColor').click(function() {
    $("#actualCode").html("Entrer code");
    trying = [];
  })
  //fonctions pour l'interface directionnelle
  $('#resetDirectionnal').click(function() {
    $("#actualCode").html("Entrer code");
    trying = [];
  })
  $('.orientationButton').click(function(){
    var value = $(this).data('orientation');
    trying.push(value);
    $("#actualCode").html("");
    displayOrientation();
  });
  function displayOrientation(){
    $('#actualCode').html("");
    $.each(trying, function(index,value){
      switch(value){
        case 'n':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>'+
              '<path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>'+
            '</svg>'
          );
          break;
        case 's':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>'+
              '<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>'+
            '</svg>'
          );
          break;
        case 'o':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>'+
              '<path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>'+
            '</svg>'
          );
          break;
        case 'e':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>'+
              '<path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>'+
            '</svg>'
          );
          break;
        case 'no':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M5.5 5h4a.5.5 0 0 1 0 1H6.707l4.147 4.146a.5.5 0 0 1-.708.708L6 6.707V9.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/>'+
            '</svg>'
          );
          break;
        case 'ne':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"/>'+
            '</svg>'
          );
          break;
        case 'se':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M10.5 11h-4a.5.5 0 0 1 0-1h2.793L5.146 5.854a.5.5 0 1 1 .708-.708L10 9.293V6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"/>'+
            '</svg>'
          );
          break;
        case 'so':
          $("#actualCode").append(
            '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
              '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
              '<path fill-rule="evenodd" d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"/>'+
            '</svg>'
          );
          break;
      }
    });
  }
  //fonctions pour l'interface switch
  $('.switch').click(function() {
    var position = $(this).data('index');
    var value = $(this).data('check');
    if (value){
      $(this).html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
      '<path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>'+
      '</svg>')
    }
    else{
      $(this).html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
      '<path fill-rule="evenodd" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>'+
      '</svg>')
    }
    trying[position]=!value;
    $(this).data('check',!value);
  })
  $('#resetSwitch').click(function() {
    trying = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    $('.switch').data('check',false);
    $('.switch').html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-toggle-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
    '<path fill-rule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>'+
    '</svg>')
  })
  //fonctions pour l'interface piano
  $('.oneKey').click(function(){
  var clickedKey = $(this).data('value');
  createSound(clickedKey);
  trying.push(clickedKey);
  $(this).addClass("blueKey");
  setTimeout(function () {
      $('.blueKey').removeClass("blueKey");
  }, 200);
  })
  $('#resetPiano').click(function(){
  trying = [];
  })
  $('#listen').click(function(){
  trying.forEach((item, i) => {
  setTimeout(function () {
    createSound(item);
    $('.piano-'+item).addClass("blueKey")
    setTimeout(function () {
        $('.blueKey').removeClass("blueKey");
    }, 200);
  }, 500 * i);
  });
  })
  //fonctions pour l'interface date
      $.fn.datepicker.dates['fr'] = {
      days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
      daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
      months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
      monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
      today: "Aujourd'hui",
      monthsTitle: "Mois",
      clear: "Effacer",
      weekStart: 1,
      format: "dd/mm/yyyy"
      };
    $('#datepicker').datepicker({
      language:'fr',
    });
    $('#datepicker').on('changeDate', function() {
      $('#date').val(
          $('#datepicker').datepicker('getFormattedDate')
      );
  });
  $('#datepicker').datepicker('setDate',$('#lock_solution').val());
  //Insertion du code dans le formulaire au click sur le bouton sauver
  $('#lock_save').click(function(e){
    var test = $('#lock_solution').val()
    switch(type){
      case 'password':
        var finalSolution = $('#password').val();
        $('#lock_solution').val(finalSolution);
        break;
        case 'date':
          var finalSolution = $('#date').val();
          $('#lock_solution').val(finalSolution);
          break;
      case 'login':
        var login = $('#login').val();
        var mdp = $('#mdp').val();
        var finalSolution = login+','+mdp
        $('#lock_solution').val(finalSolution);
        break;
      case 'digicode':
        var finalSolution = $('#numberCode').val();
        $('#lock_solution').val(finalSolution);
        break;
      default:
      if(trying != ''){
        var finalSolution = trying.join(',');
        $('#lock_solution').val(finalSolution);
      }
      else{
        e.preventDefault()
        $('#error').html('<div class="alert alert-danger" role="alert">Vous devez définir une solution !</div>')
      }
    }
  })

}
