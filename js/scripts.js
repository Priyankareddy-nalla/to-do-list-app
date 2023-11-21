
//  Adding a new item to the list using jQuery:
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
        $('#input').val("");
    }

    // Crossing an item 
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // Adding a delete button
    let closeButton = $('<closeButton></closeButton>');
    closeButton.append(document.createTextNode('X'));
    li.append(closeButton);

    closeButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    }
    $('#list').sortable();
}


