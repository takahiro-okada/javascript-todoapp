// 追加ボタン
const addButton = document.getElementById("add-button");

// ToDoリストにタスクを追加する
addButton.addEventListener("click", (e) => {
  const input = document.getElementById("add-todo");
  const text = input.value;

  if( text !== ""){
    // タスク行
    const li = document.createElement("li");
    li.className = "todo__item";
    li.innerText = text;

    // 完了ボタン
    const competeButton = document.createElement("button");
    competeButton.className = "todo__incomplete"
    competeButton.innerText = "完了"

    // 削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.className = "todo__delete"
    deleteButton.innerText = "削除"

    // タスクを追加する
    const ul = document.getElementById("incomplete-list")
    let newTodo = ul.appendChild(li);
    let comp = li.appendChild(competeButton);
    let compButton = li.appendChild(comp)
    localStorage.setItem("mylist", JSON.stringify(compButton));

    let saved = localStorage.getItem("mylist");

    compButton.addEventListener("click",(e)=> {
      const ul = document.getElementById("complete-list");
      ul.appendChild(newTodo);
      competeButton.remove();
      newTodo.appendChild(deleteButton);
    })

    deleteButton.addEventListener("click",(e)=>{
      localStorage.clear();
      newTodo.remove();
    })
  } else {
    alert("ToDoを追加してください")
  }
  });
