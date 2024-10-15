document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let opinion = document.getElementById('opinion').value;

    if (name === '' || email === '' || age === '' || gender === '' || opinion === '') {
        document.getElementById('message').innerHTML = '<p style="color: red;">Заповніть усі поля.</p>';
        return;
    }

    document.getElementById('message').innerHTML = `<p style="color: green;">Дякуємо за вашу відповідь, ${name}!</p>`;

    // Чистка форми
    document.getElementById('surveyForm').reset();
});
