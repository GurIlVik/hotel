class Room {
	#scheme = [];
	// 1. Функции в классе js пишутся сразу с названия,
	//    без слова function!
	constructor(row_scheme) {  // 1 параметр ДАЖЕ НЕ УКАЗЫВАЕМ! Он есть сразу сам
		this.#scheme = row_scheme;
		//  [4, 2, 1]
		// заменить на копирование, если хотим массив "спасти"
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
	
	// # - показатель скрытости (приватности) поля или метода
	#the_table(rows) { // Передаём строки таблицы
		//let result = "<table border='1'>";
		let result = document.createElement('table');
		// Создали пустую таблицу. Её ещё нет на странице
		result.setAttribute('border', '1');
		// Таблицы всё ещё нет, но у неё есть граница, когда таблица проявится, её будет видно
		for (let i = 0; i < rows.length; i++ ) {
			result.appendChild(rows[i]);
			// Прикрепили строку к таблице. Но в строке ничего нет, смотреть не на что
		}
		return result;
	}
	
	#the_row(td_count) {
		// Ожидается передача количества td-шек в ряду
		let row = document.createElement('tr');
		// Создали ряд (строку) таблицы. Она "оторвана", не прикреплена к таблице
		let td;
		for (let i = 0; i < td_count; i++) {
		    td = document.createElement('td');
			// Создали ячейку таблицы. Она "оторвана", не прикреплена к строке
			row.appendChild(td);
    		// Прикрепили ячейку к строке.
			td.innerHTML = '&nbsp;';
		}
		return row;
	}
	
	create_node_html() {
		/* 
		td.setAttribute('colspan', '2');
		// Сделали ячейку размером с две колонки!
		*/
		let rows = [];
		// this.#scheme = row_scheme;
		//  [4, 2, 1]
		for(let r = 0; r < this.#scheme.length; r++) {
			rows.push(this.#the_row(this.#scheme[r]));
		}
		let result = this.#the_table(rows);
		return result;
	}
}

window.onload = () => {
	var r = new Room([4, 2, 1]);  // Для создания объекта необходимо ключевое слово new
	console.log(r.create_html_code_txt());
	// console.log(r.#scheme);
	//document.getElementById('hotel').innerHTML += r.create_html_code_txt();
	document.getElementById('hotel').appendChild(
		r.create_node_html()
		// Возвращают элемент, мы его "удочеряем"
	);
};