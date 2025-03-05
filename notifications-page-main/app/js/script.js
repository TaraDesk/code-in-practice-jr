const markBtn = document.querySelector(".mark-button");
const countNotification = document.querySelector(".count-unread");
const unreadNotifications = document.querySelectorAll(".not-read");

markBtn.addEventListener('click', () => {
	unreadNotifications.forEach((e) => {
		e.classList.remove("not-read");
	})

	countNotification.textContent = "0";
})