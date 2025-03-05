// Elements
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");

// Functions
const closeSidebar = () => {
	if(!sidebar.classList.contains("hidden")) {
		sidebar.classList.add("hidden");
		sidebar.classList.remove("active");
	}
};

// Event Listener
hamburgerMenu.addEventListener("click", () => {
	if(sidebar.classList.contains("hidden")) {
		sidebar.classList.remove("hidden");
		sidebar.classList.add("active");
	}
});

overlay.addEventListener("click", closeSidebar);
closeBtn.addEventListener("click", closeSidebar);