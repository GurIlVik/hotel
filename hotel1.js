class Room {
	// 1. Функции в классе js пишутся сразу с названия,
	//    без слова function!
	constructor(n) {  // 1 параметр ДАЖЕ НЕ УКАЗЫВАЕМ! Он есть сразу сам
		this.row1 = 1;
		this.row2 = 2;
		// это я изобразила "схему" комнаты. Смысловой и синтаксической нагрузи нет
		this.num = n;
	}
	create_node_html() {
        let result = document.createElement('table');
        result.setAttribute('border', '10');
        let row = document.createElement('tr');
        result.appendChild(row)
        let r1 = document.createElement('td')
        r1.setAttribute('colspan', '2');
        // r1.innerHTML = '&nbsp';
        r1.appendChild(document.createTextNode(' '));
        row.appendChild(r1);
        // let row2 = document.createElement('tr');
        row = document.createElement('tr');
        // result.appendChild(row2);
        result.appendChild(row);
        // let r2 = document.createElement('td');
        // r2.appendChild(document.createTextNode(' '));
        // let r3 = document.createElement('td');
        // r3.appendChild(document.createTextNode(' '));
        // row2.appendChild(r2);
        // row2.appendChild(r3);
        for (let i = 2; i > 0; i -=1) {
            r1 = document.createElement('td');
            r1.setAttribute('colspan', '1');
            row.appendChild(r1)};
        // row.appendChild(r1);
        // r1 = document.createElement('td');
        // r1.setAttribute('colspan', '1');
        // row.appendChild(r1);
        return result;
    }


	create_html_code_txt() {
		let result = "<table border='1'>";
		result += "<tr>";
		result += "<td colspan='2'>&nbsp;</td>";
		result += "</tr>";
		result += "<tr>";
		result += "<td>&nbsp;</td>";
		result += "<td>&nbsp;</td>";
		result += "</tr>";
		result += "</table>";
		return result;
	}
    create_html_code_txt1() {
		let result = "<table border='5'><tr><td colspan='3'>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>";
		return result;
	}
}

window.onload = () => {
	var r = new Room(1);
    // let i = 3;
    // while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    // console.log( i );
    // i--;
    // }  // Для создания объекта необходимо ключевое слово new
	console.log(r.create_html_code_txt());
    for (var i = 0; i < 10; i ++) {
	    document.getElementById('hotel').innerHTML += r.create_html_code_txt();
        document.getElementById('hotel').appendChild(r.create_node_html());
        document.getElementById('hotel').innerHTML += r.create_html_code_txt1();
    }
};

// class Room  {
//     constructor(n) {
//         this.row1 = 1;
//         this.row2 = 2;
//         this.num = n;
//     }

//     create_html_code() {let result = "<table border='1'>";
//     result += "<tr>";
//     result += "<td colspan ='2'>&nbsp;</td>";
//     result += "</tr>";
//     result += "<tr>";
//     result += "<td>&nbsp;</td><td>&nbsp;</td>";
//     result += "</tr>";
//     result += "</table>";
// return result}
        
// }
// window.onload = () => {
// 	var r = new Room(1);  // Для создания объекта необходимо ключевое слово new
// 	console.log(r.create_html_code_txt());
// 	document.getElementById('hotel').innerHTML += r.create_html_code_txt();
// };