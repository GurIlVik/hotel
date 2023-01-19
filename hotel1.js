class Room {
	// 1. Функции в классе js пишутся сразу с названия,
	//    без слова function!
	constructor(n) {  // 1 параметр ДАЖЕ НЕ УКАЗЫВАЕМ! Он есть сразу сам
		this.row1 = 1;
		this.row2 = 2;
		// это я изобразила "схему" комнаты. Смысловой и синтаксической нагрузи нет
		this.num = n;
	}
	// create_node_html() {
    //     let result = document.createElement('table');
    //     result.setAttribute('border', '10');
    //     let row = document.createElement('tr');
    //     result.appendChild(row)
    //     let r1 = document.createElement('td')
    //     r1.setAttribute('colspan', '2');
    //     // r1.innerHTML = '&nbsp';
    //     r1.appendChild(document.createTextNode(' '));
    //     row.appendChild(r1);
    //     // let row2 = document.createElement('tr');
    //     row = document.createElement('tr');
    //     // result.appendChild(row2);
    //     result.appendChild(row);
    //     // let r2 = document.createElement('td');
    //     // r2.appendChild(document.createTextNode(' '));
    //     // let r3 = document.createElement('td');
    //     // r3.appendChild(document.createTextNode(' '));
    //     // row2.appendChild(r2);
    //     // row2.appendChild(r3);
    //     for (let i = 2; i > 0; i -=1) {
    //         r1 = document.createElement('td');
    //         r1.setAttribute('colspan', '1');
    //         row.appendChild(r1)};
    //     // row.appendChild(r1);
    //     // r1 = document.createElement('td');
    //     // r1.setAttribute('colspan', '1');
    //     // row.appendChild(r1);
    //     return result;
    // }

	#the_table(rows) { // Передаём строки таблицы
		//let result = "<table border='1'>";
		let result = document.createElement('table');
		// Создали пустую таблицу. Её ещё нет на странице
		result.setAttribute('border', '1');
		for (let i = 0; i < rows.length; i++ ) {
			result.appendChild(rows[i]);
			// Прикрепили строку к таблице. Но в строке ничего нет, смотреть не на что
		}
		return result;
	}

    #the_tr(num) {
        let result = document.createElement('tr');
        let td;
        for(let i =0; i < num; i ++) {
            td = document.createElement('td');
            result.appendChild(td);
        }
		return result;
    }
	
	
	
	create_node_html() {
		/* 
		// Таблицы всё ещё нет, но у неё есть граница, когда таблица проявится, её будет видно
		let row = document.createElement('tr');
		// Создали ряд (строку) таблицы. Она "оторвана", не прикреплена к таблице
		let td = document.createElement('td');
		// Создали ячейку таблицы. Она "оторвана", не прикреплена к строке
		row.appendChild(td);
		// Прикрепили ячейку к строке. 
		td.setAttribute('colspan', '2');
		// Сделали ячейку размером с две колонки!
//		td.innerHTML = '&nbsp;';
		td.appendChild(document.createTextNode(' '));
		// Можно не сохранять в переменную, а сразу прикреплять объект
		row = document.createElement('tr');
		// Переменная уже есть
		td = document.createElement('td');
		row.appendChild(td);
		td = document.createElement('td');
		row.appendChild(td); */
		let rows = [];
        for (let i = 0; i < 2; i ++) {
            rows.push(this.#the_tr(2))
        }
		let result = this.#the_table(rows);
        console.log(result)

		return result;
	}

	// create_html_code_txt() {
	// 	let result = "<table border='1'>";
	// 	result += "<tr>";
	// 	result += "<td colspan='2'>&nbsp;</td>";
	// 	result += "</tr>";
	// 	result += "<tr>";
	// 	result += "<td>&nbsp;</td>";
	// 	result += "<td>&nbsp;</td>";
	// 	result += "</tr>";
	// 	result += "</table>";
	// 	return result;
	// }
    // create_html_code_txt1() {
	// 	let result = "<table border='5'><tr><td colspan='3'>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>";
	// 	return result;
	// }
}

window.onload = () => {
	var r = new Room(1);
    // let i = 3;
    // while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    // console.log( i );
    // i--;
    // }  // Для создания объекта необходимо ключевое слово new
	// console.log(r.create_html_code_txt());
    for (var i = 0; i < 1; i ++) {
	    // document.getElementById('hotel').innerHTML += r.create_html_code_txt();
        document.getElementById('hotel').appendChild(r.create_node_html());
        // document.getElementById('hotel').innerHTML += r.create_html_code_txt1();
    }
};
