const html = document.querySelector("html");
const dynamic_list = document.getElementById("dynamic_list");


html.onclick = () => {
    const listItem = document.createElement("li");
    const listContent = prompt("What content do you want the list item to \
have?").trim();
    listItem.textContent = listContent;
    if (listItem.textContent) {
        dynamic_list.append(listItem)
    }
    

    listItem.onclick = function(e) {
        e.stopPropagation();
        const listContent = prompt("Enter new content for your list item").trim();
        if (listContent) {
            this.textContent = listContent;
        }
    }
}


