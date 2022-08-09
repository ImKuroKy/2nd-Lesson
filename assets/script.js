var running = true;
var counter = 0;
while (running == true)
{
    var userChoice = prompt("Введите номер задания. Введите любой другой символ для выхода.","сюда");
    switch (userChoice)
    {
        case "1":
            {
                counter++

                var A = parseInt(prompt("Введите нижнюю границу промежутка","сюда"));
                var B = parseInt(prompt("Введите верхнюю границу промежутка","сюда"));

                document.write("Нижняя граница: " + A + "<br />");
                document.write("Верхняя граница:" + B + "<br />");
                
                var point = A;
                var sum = 0;
                var negative = "";
                

                while (point < (B + 1))
                {
                    sum += point;
                    if (point % 2 == 1)
                    {
                        negative += " " + point + ",";
                    };
                    point++;
                };
                negative = negative.slice(0, -1) + ".";

                document.write("Сума всех чисел расположенных в числовом промежутке от А до В: " + sum + "<br />");
                document.write("Все нечетные значения, расположенные в числовом промежутке от А до В: "+ negative + "<br />");
            };
            break;
        case "2":
            {
                document.write("В разработке");
            };
            break;
        default:
            {
                counter = 0;
                running = false;
            }
            break;          
    };
};