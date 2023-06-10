var items = document.querySelectorAll('.item');
        var successMessage = document.querySelector('.success-message');
        var resetButton = document.querySelector('.reset-button');
        var draggedItem = null;

        // Add event listeners to draggable items
        items.forEach(function(item) {
            item.addEventListener('dragstart', function(e) {
                draggedItem = item;
                item.classList.add('dragging');
            });

            item.addEventListener('dragend', function(e) {
                draggedItem.classList.remove('dragging');
                draggedItem = null;
            });
        });

        // Add event listeners to drop container
        var dropContainer = document.querySelectorAll('.container')[1];
        dropContainer.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        dropContainer.addEventListener('drop', function(e) {
            e.preventDefault();
            dropContainer.appendChild(draggedItem);
            alert('Item dropped successfully!');
            successMessage.innerText = 'Item dropped successfully!';
            
        });

        // Add event listener to reset button
        resetButton.addEventListener('click', function() {
            var originalContainer = document.querySelectorAll('.container')[0];
            originalContainer.innerHTML = '';
            successMessage.innerText = '';
            items.forEach(function(item) {
                originalContainer.appendChild(item);
                

            });

            


        });
    