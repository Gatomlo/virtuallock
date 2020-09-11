$('#lock_type').change(function(){
  var type = $('#lock_type').val();
  console.log(type);
  switch(type){
    case 'password':
      var codeInstance = '<div>Mot de passe souhaitez.</div><input type="text" id="password" class="form-control"   aria-describedby="button-addon4">'
      break;
    case 'login':
      var codeInstance = '<div>Login et mot de passe souhaitez.</div><input type="text" id="login" placeholder="login" class="form-control"   aria-describedby="button-addon4">'+
        '</br><input type="text" placeholder="Mot de passe" id="password" class="form-control"   aria-describedby="button-addon4">'
      break;
    case 'color':
      var codeInstance ='</br><div id="digit" class="container"><div class="row justify-content-center">'+
        '<div class="col oneDigit"><button id="violetDigit" data-color="violet" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="violet" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="blueDigit" data-color="blue" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="blue" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="greenDigit" data-color="green" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="lightgreen" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="yellowDigit" data-color="yellow" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="yellow" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="orangeDigit" data-color="orange" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="orange" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="redDigit" data-color="red" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button id="blackDigit" data-color="black" type="button" class="btn digit btn-primary colorButton"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg></button></div>'+
        '<div class="col oneDigit"><button button id="reset" type="button" class="btn digit btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap-reboot" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/></svg></button></div>'+
        '</div><div>Votre code : <span id="actualCode"></span></div>'
      break;
      case 'diagram':
        var codeInstance = '<div id="lock"></div>'
        setTimeout(function () {
          $('#lock').patternLock({
          centerCircle: false,
          timeout: 4000,
          centerCircleSize: 20,
          patternLineColor: '#0069d9',
          drawEnd: function(data) {
              }
          });
        }, 20);

        break;
      case 'directional':
        var codeInstance = ''
        break;
  }
  $('#codeZone').html(codeInstance);
})
