class Blok {

	constructor() {  
	};

    create_node_html = (number, color) => {
        let result = document.createElement('h1');
        result.style.color = color;
        result.innerHTML += 'Номер цвета: ' + number + ' Название текста: ' + color
        return (result)
    };
}

window.onload = () => {
    let color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;
    var r = new Blok();
    while (i < color.length) {
        document.getElementById('blok').appendChild(r.create_node_html(i+1, color[i]));
        i ++;
    }
};
