function startProcessBar() {
  var progressBar = document.getElementById("progressBar");
  var width = 1;
  var button = document.querySelector('#btnStartProgress');
  var loadProcess = setInterval(progress, 60);

  progressBar.classList.remove("hideProgressBar");
  button.disabled = true;
  button.textContent = 'Aguarde o processo finalizar...';

  function progress() {
    if (width >= 100) {
      clearInterval(loadProcess);
      button.disabled = false;
      button.textContent = "Iniciar um novo processo";
    } else {
      width++;
      progressBar.style.width = width + '%';
      progressBar.innerHTML = width * 1 + '%';
    }
  }
}