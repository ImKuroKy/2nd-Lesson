var running = true;
var counter = 0;
while (running == true)
{
    var userChoice = prompt("Введите номер задания. Введите любой другой символ для выхода.","сюда");
    switch (userChoice)
    {
        case "1":
            {
                document.write("<H3>Задание 1</H3>")
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
                document.write("<H3>Задание 2</H3>")
                var product_name = prompt("Введите название товара для доставки", "сюда");
                var delivery_breaks = parseInt(prompt("Введите количество промежуточных остановок для доставки", "сюда"));

                
                document.write("Название товара: " + product_name + "<br />");
                document.write("Количество промежуточных точек: " + delivery_breaks + "<br />");

                var result = 1;
                do
                {
                    if (delivery_breaks > 1)
                    {
                        result *= delivery_breaks--
                    }
                }
                while (delivery_breaks > 1)

                document.write("Возможных путей доставки " + product_name + ": " + result);
            };
            break;
        case "3":
            {
                
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