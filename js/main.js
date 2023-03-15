document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};

// Данный скрипт отвечает за проверку и сравнение значений паролей, введенных пользователем в поля ввода с id "password1" и "password2".
//  Скрипт выполняется при нажатии на элемент с классом "form__auth-btn".

// Первым шагом скрипт получает значения обоих полей ввода и сохраняет их в переменные userPassFirst и userPassSecond соответственно,
//  используя метод document.querySelector().

// Затем, если значение первого поля пустое, скрипт изменяет стили элементов с id "password1" и "password2",
//  устанавливая красную рамку с помощью свойства style объекта элемента.

// Если значение первого поля не пустое, то скрипт проверяет, равны ли значения обоих полей.
//  Если значения не равны, скрипт опять же изменяет стили элементов, устанавливая красную рамку, и возвращает false, чтобы предотвратить отправку формы.

// Если значения обоих полей равны, скрипт изменяет стили элементов на зеленую рамку, также используя свойство style объекта элемента.

// Наконец, скрипт возвращает true, чтобы разрешить отправку формы, если пароли совпадают.
