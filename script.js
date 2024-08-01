//your code here
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.grid-item');

    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', drop);
        item.addEventListener('dragend', dragEnd);
    });

    let draggedItem = null;

    function dragStart() {
        draggedItem = this;
        setTimeout(() => this.style.opacity = '0.5', 0);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.style.border = '2px dashed #000';
    }

    function dragLeave() {
        this.style.border = 'none';
    }

    function drop() {
        this.style.border = 'none';
        swapItems(draggedItem, this);
    }

    function dragEnd() {
        this.style.opacity = '1';
    }

    function swapItems(item1, item2) {
        const tempBackground = item1.style.backgroundImage;
        item1.style.backgroundImage = item2.style.backgroundImage;
        item2.style.backgroundImage = tempBackground;
    }
});