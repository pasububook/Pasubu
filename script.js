//グローバル変数定義
var start_number = 0;
var finish_number = 0;
var memory = 0;

var element = document.getElementById( "input_file" ) ;
        var resultElement = document.getElementById( "data" ) ;
        //読み込まれ後の処理
        element.onchange = function () {
            var fileReader = new FileReader() ;
            fileReader.onload = function () {
                //データー検索
                const link_data = fileReader.result ;    //ファイルででた内容を代入
                const search = ',';
                var count = [...link_data].filter(x => x === search).length / 2;

                //データーを挿入
                var number = 1
                console.log(number)
                for(let i = 1; i <= count; i++){
                    // aタグ
                    textbox_element = document.getElementById('data');
                    var new_element = document.createElement('a');
                    new_element.id = "link" + number;
                    new_element.className = "link";
                    finish_number = link_data.indexOf(",", start_number) - start_number;
                    new_element.href = link_data.substr( start_number, finish_number);
                    new_element.target = "_blank"
                    textbox_element.appendChild(new_element);
                    // ボタン
                    textbox_element = document.getElementById('link' + number);
                    var new_element = document.createElement('div');
                    new_element.id = "bookmark" + number;
                    new_element.className = "bookmark";
                    textbox_element.appendChild(new_element);
                    // アイコン
                    textbox_element = document.getElementById('bookmark' + number);
                    var new_element = document.createElement('p');
                    new_element.id = "link_box" + number;
                    new_element.className = "link_box";
                    textbox_element.appendChild(new_element);
                    start_number = link_data.indexOf(",", start_number) + 2;
                    new_element.textContent = link_data.substr( start_number, 1);
                    // 改行タグ
                    textbox_element = document.getElementById('bookmark' + number);
                    var new_element = document.createElement('br');
                    textbox_element.appendChild(new_element);
                    // HP名
                    textbox_element = document.getElementById('bookmark' + number);
                    var new_element = document.createElement('p');
                    new_element.id = "link_name" + number;
                    new_element.className = "link_name";
                    textbox_element.appendChild(new_element);
                    finish_number = link_data.indexOf(",", start_number) - start_number;
                    new_element.textContent = link_data.substr( start_number, finish_number);

                    var number = number + 1
                    console.log(number)
                    start_number = link_data.indexOf(",", start_number) + 2;
                }
            }
            var file = element.files[0] ;
            fileReader.readAsText( file ) ;
}