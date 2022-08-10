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

                document.write("Возможных путей доставки " + product_name + ": " + result + "<br />");
            };
            break;
        case "3":
            {
                document.write("<H3>Задание 3</H3>" + "<br />");
                // Пробел - &nbsp
                document.write("Прямоугольник:" + "<br />");
                for (var i = 0; i < 6; i++)
                {
                    if (i < 1 || i > 4)
                    {
                        document.write("##########" + "<br />");
                    }
                    else
                    {
                        document.write("#&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp#" + "<br />");
                    };
                };
                
                document.write("Прямоугольный треугольник" + "<br />");
                for (var i = 0; i < 16; i++)
                {
                    var space = '&nbsp&nbsp';
                    if (i == 0)
                    {
                        document.write("#" + "<br />");
                    }
                    else if (i == 15)
                    {
                        document.write("################" + "<br />");
                    }
                    else
                    {
                        var mySpace = new Array(i).join(space);
                        document.write("#" + mySpace + "#<br />");
                    };
                }
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