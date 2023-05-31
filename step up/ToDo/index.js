/*　今回のJavascriptのプログラムで学んだこと
１．HTMLのタグ領域は、document操作で行うので、IDと同一名で定数定義する。
２．同様にローカルストレージ操作はJSON形式で行い、ストレージ名と同一名で定数定義する。
３．イベント処理のプログラムは、初めに一度実行させておく。後はイベント待ちになる。
4.  const定義は、記述が後でも使える。todoはsaveDataで定義しているが、初めのローカルストージ読みだしにも使っている。
５．
６．
*/
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

//ローカルストレージtodosからデータを読出し
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos){
    todos.forEach(todo => {
        add(todo);
    });
}

//formにエンターキーが押されたら（submit）起動する
form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.log(input.value);
    add();
});

//Ul liでデータを追加するファンクション　add
function add(todo){
    let todoText = input.value

    if (todo){
        todoText = todo.text;
    }

    if(todoText){
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");

    if (todo && todo.completed){
        li.classList.add("text-decoration-line-through")
    }
    //　右クリックの反応　contextmenu 
    li.addEventListener("contextmenu",function(event) {
        event.preventDefault();
    // 動作確認用   console.log("実行確認");
        li.remove();
        saveData();
    });
    //　左クリックの反応　click
    li.addEventListener("click", function() {
       li.classList.toggle("text-decoration-line-through");
       saveData(); 
    });

    ul.appendChild(li);
    input.value = "";
    saveData();
    }
}

//ローカルストレージにデータを保管する　　saveData
function saveData(){
    const lists = document.querySelectorAll("li") ;
    let todos=[];
    lists.forEach(list => {
        let todo = {
            text: list.innerText, 
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    }) ;
    localStorage.setItem("todos",JSON.stringify(todos));
}
