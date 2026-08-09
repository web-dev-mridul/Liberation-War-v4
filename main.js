// gallery image filter
const buttons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active button
        buttons.forEach(btn => {
            btn.classList.remove("btn-primary");
            btn.classList.remove("active");
            btn.classList.add("btn-outline-primary");
        });

        // Active button
        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary");
        this.classList.add("active");

        const filter = this.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});
// gallery image zoom and download
let zoom = 1;

const image = document.getElementById("modalImage");

function showImage(src) {

    image.src = src;

    document.getElementById("downloadBtn").href = src;

    zoom = 1;

    image.style.transform = "scale(1)";

}

function zoomIn() {

    zoom += 0.2;

    image.style.transform = `scale(${zoom})`;

}

function zoomOut() {

    if (zoom > 1) {

        zoom -= 0.2;

        image.style.transform = `scale(${zoom})`;

    }

}

// Document search
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const tableRows = document.querySelectorAll("#documentTable tbody tr");

function filterTable() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    tableRows.forEach(row => {

        const title = row.cells[1].textContent.toLowerCase();
        const category = row.cells[2].dataset.category;

        const matchTitle = title.includes(searchText);

        const matchCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchTitle && matchCategory) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}
searchInput.addEventListener("keyup", filterTable);
categoryFilter.addEventListener("change", filterTable);

// document modal
const viewButtons = document.querySelectorAll(".viewBtn");

viewButtons.forEach(button => {

    button.addEventListener("click", function () {

        document.getElementById("modalTitle").textContent =
            this.dataset.title;

        document.getElementById("modalCategory").textContent =
            this.dataset.category;

        document.getElementById("modalDate").textContent =
            this.dataset.date;

        document.getElementById("modalSource").textContent =
            this.dataset.source;

        document.getElementById("modalDescription").textContent =
            this.dataset.description;
    });

});