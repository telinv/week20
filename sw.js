function fetchData() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';
    const entityId =document.querySelector('.numberOfSmth').value;
    const entityType = document.querySelector('.form-select').value;
    const apiUrl = `https://swapi.nomoreparties.co/${entityType}/${entityId}`;
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      resultElement.textContent = `Информация: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      errorElement.textContent = `Ошибка запроса: ${error.message}`;
      console.error('Ошибка запроса:', error);
    });
}
document.querySelector('.bForSearch').addEventListener('click', fetchData);