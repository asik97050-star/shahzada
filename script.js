// 1. Студент туралы ақпарат
function task1() {
    const name = document.getElementById('t1-name').value;
    const age = Number(document.getElementById('t1-age').value);
    const spec = document.getElementById('t1-spec').value;

    const status = age >= 18 ? "Ересек студент" : "Кәмелетке толмаған студент";
    const resText = `Аты-жөні: ${name}\nЖасы: ${age}\nМамандығы: ${spec}\nМәртебесі: ${status}`;

    console.log("=== Тапсырма 1 ===");
    console.log(resText);
    document.getElementById('res1').innerText = resText;
}

// 2. Екі санмен жұмыс
function task2() {
    const a = Number(document.getElementById('t2-num1').value);
    const b = Number(document.getElementById('t2-num2').value);

    const sum = a + b;
    const diff = a - b;
    const prod = a * b;
    const div = b !== 0 ? (a / b).toFixed(2) : "0-ге бөлуге болмайды";

    let comp = "";
    if (a > b) comp = `${a} үлкен ${b}-ден`;
    else if (b > a) comp = `${b} үлкен ${a}-ден`;
    else comp = "Сандар тең";

    const resText = `Қосынды: ${sum} | Айырма: ${diff}\nКөбейтінді: ${prod} | Бөлінді: ${div}\nНәтиже: ${comp}`;

    console.log("=== Тапсырма 2 ===");
    console.log(resText);
    document.getElementById('res2').innerText = resText;
}

// 3. Сан анализаторы
function task3() {
    const num = Number(document.getElementById('t3-num').value);

    let sign = num > 0 ? "Оң сан" : (num < 0 ? "Теріс сан" : "Нөл");
    let parity = num % 2 === 0 ? "Жұп" : "Тақ";
    let div10 = num % 10 === 0 ? "10-ға бөлінеді" : "10-ға бөлінбейді";

    const resText = `Таңбасы: ${sign}\nТүрі: ${parity} сан\n10-ға бөлінуі: ${div10}`;

    console.log("=== Тапсырма 3 ===");
    console.log(resText);
    document.getElementById('res3').innerText = resText;
}

// 4. Студенттің қорытынды бағасы
function task4() {
    const g1 = Number(document.getElementById('t4-g1').value);
    const g2 = Number(document.getElementById('t4-g2').value);
    const g3 = Number(document.getElementById('t4-g3').value);
    const att = Number(document.getElementById('t4-att').value);

    const avg = (g1 + g2 + g3) / 3;
    let mark = "";

    if (avg >= 90) mark = "Өте жақсы";
    else if (avg >= 75) mark = "Жақсы";
    else if (avg >= 50) mark = "Қанағаттанарлық";
    else mark = "Қанағаттанарлықсыз";

    let examStatus = (avg > 50 && att > 75) ? "Емтиханға жіберілді" : "Емтиханға жіберілмеді";

    const resText = `Орташа балл: ${avg.toFixed(1)} (${mark})\nРұқсат: ${examStatus}`;

    console.log("=== Тапсырма 4 ===");
    console.log(resText);
    document.getElementById('res4').innerText = resText;
}

// 5. Интернет-дүкен
function task5() {
    const price = Number(document.getElementById('t5-price').value);
    const count = Number(document.getElementById('t5-count').value);

    const total = price * count;
    let discount = 0;

    if (total > 50000) discount = 0.15;
    else if (total > 30000) discount = 0.10;

    const finalTotal = total - (total * discount);

    const resText = `Жалпы: ${total} тг (Жеңілдік: ${discount * 100}%)\nСоңғы төлем: ${finalTotal} тг`;

    console.log("=== Тапсырма 5 ===");
    console.log(resText);
    document.getElementById('res5').innerText = resText;
}

// 6. Уақытты анықтау
function task6() {
    const hour = Number(document.getElementById('t6-hour').value);
    let msg = "";

    if (hour < 0 || hour > 23 || isNaN(hour)) {
        msg = "Қате уақыт";
    } else if (hour >= 6 && hour <= 11) {
        msg = "Қайырлы таң";
    } else if (hour >= 12 && hour <= 17) {
        msg = "Қайырлы күн";
    } else if (hour >= 18 && hour <= 22) {
        msg = "Қайырлы кеш";
    } else {
        msg = "Қайырлы түн";
    }

    console.log("=== Тапсырма 6 ===");
    console.log(msg);
    document.getElementById('res6').innerText = msg;
}

// 7. Үш санды талдау (Math-сыз)
function task7() {
    const a = Number(document.getElementById('t7-n1').value);
    const b = Number(document.getElementById('t7-n2').value);
    const c = Number(document.getElementById('t7-n3').value);

    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;

    const avg = (a + b + c) / 3;

    let evenCount = 0;
    if (a % 2 === 0) evenCount++;
    if (b % 2 === 0) evenCount++;
    if (c % 2 === 0) evenCount++;

    const resText = `Max: ${max} | Min: ${min}\nОрташа мән: ${avg.toFixed(2)}\nЖұп сандар саны: ${evenCount}`;

    console.log("=== Тапсырма 7 ===");
    console.log(resText);
    document.getElementById('res7').innerText = resText;
}

// 8. Банк несие жүйесі
function task8() {
    const age = Number(document.getElementById('t8-age').value);
    const income = Number(document.getElementById('t8-income').value);
    const exp = Number(document.getElementById('t8-exp').value);

    let msg = (age >= 21 && income >= 250000 && exp >= 1) 
        ? "Несие мақұлданды" 
        : "Несие берілмейді";

    console.log("=== Тапсырма 8 ===");
    console.log(msg);
    document.getElementById('res8').innerText = msg;
}

// 9. Емтихан нәтижесі (90 балл жағдайы да дұрыс қамтылды)
function task9() {
    const exam = Number(document.getElementById('t9-exam').value);
    const prac = Number(document.getElementById('t9-prac').value);

    let status = (exam > 50 && prac > 60) ? "Студент өтті" : "Студент өтпеді";
    let grade = "";

    if (exam >= 90) grade = "Өте жақсы нәтиже";
    else if (exam >= 75) grade = "Жақсы нәтиже";
    else if (exam >= 50) grade = "Өтті";
    else grade = "Өтпеді";

    const resText = `Мәртебесі: ${status}\nБағалау: ${grade}`;

    console.log("=== Тапсырма 9 ===");
    console.log(resText);
    document.getElementById('res9').innerText = resText;
}

// 10. Кешенді жүйе
function task10() {
    const name = document.getElementById('t10-name').value;
    const age = Number(document.getElementById('t10-age').value);
    const g1 = Number(document.getElementById('t10-g1').value);
    const g2 = Number(document.getElementById('t10-g2').value);
    const g3 = Number(document.getElementById('t10-g3').value);
    const att = Number(document.getElementById('t10-att').value);
    const hasCard = document.getElementById('t10-card').value === "true";

    const avg = (g1 + g2 + g3) / 3;

    let maxGrade = g1;
    if (g2 > maxGrade) maxGrade = g2;
    if (g3 > maxGrade) maxGrade = g3;

    let minGrade = g1;
    if (g2 < minGrade) minGrade = g2;
    if (g3 < minGrade) minGrade = g3;

    let resultText = "";
    if (avg >= 90) resultText = "Өте жақсы";
    else if (avg >= 75) resultText = "Жақсы";
    else if (avg >= 50) resultText = "Қанағаттанарлық";
    else resultText = "Қанағаттанарлықсыз";

    let examAllowed = (avg >= 50 && att >= 75) ? "Жіберілді" : "Жіберілмеді";
    let isTopStudent = (avg > 90 || att > 90) ? "Иә (Үздік студент)" : "Жоқ";

    const resText = `Студент: ${name} (${age} жас, Билет: ${hasCard ? 'Бар' : 'Жоқ'})
Орташа балл: ${avg.toFixed(1)} (Max: ${maxGrade}, Min: ${minGrade})
Оқу нәтижесі: ${resultText} | Рұқсат: ${examAllowed}
Үздік студент: ${isTopStudent}`;

    console.log("=== Тапсырма 10 ===");
    console.log(resText);
    document.getElementById('res10').innerText = resText;
}