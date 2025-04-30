const solutions = [
	{
		"url": "https://taradesk.github.io/code-in-practice/stats-preview-card-component-main/index.html",
		"name": "Stats Preview Card",
		"category": "Newbie",
		"date": "12 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/3-column-preview-card-component-main/index.html",
		"name": "Three Column Preview Card",
		"category": "Newbie",
		"date": "14 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/order-summary-component-main/index.html",
		"name": "Order Summary Component",
		"category": "Newbie",
		"date": "15 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/qr-code-component-main/index.html",
		"name": "QR Code Component",
		"category": "Newbie",
		"date": "15 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/nft-preview-card-component-main/index.html",
		"name": "NFT Preview Card",
		"category": "Newbie",
		"date": "18 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/product-preview-card-component-main/index.html",
		"name": "Product Preview Card",
		"category": "Newbie",
		"date": "19 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/single-price-grid-component-master/index.html",
		"name": "Single Price Grid Component",
		"category": "Newbie",
		"date": "21 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/profile-card-component-main/index.html",
		"name": "Profile Card",
		"category": "Newbie",
		"date": "22 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/intro-component-with-signup-form-master/index.html",
		"name": "Intro Component with Signup Form",
		"category": "Newbie",
		"date": "23 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/four-card-feature-section-master/index.html",
		"name": "Four Card Feature Section",
		"category": "Newbie",
		"date": "24 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/base-apparel-coming-soon-master/index.html",
		"name": "Base Apparel Section",
		"category": "Newbie",
		"date": "25 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/interactive-rating-component-main/index.html",
		"name": "Interactive Rating Component",
		"category": "Newbie",
		"date": "26 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/blog-preview-card-main/index.html",
		"name": "Blog Preview Card",
		"category": "Newbie",
		"date": "28 January 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/recipe-page-main/index.html",
		"name": "Recipe Page",
		"category": "Newbie",
		"date": "2 February 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/results-summary-component-main/index.html",
		"name": "Result Summary Component",
		"category": "Newbie",
		"date": "2 February 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice/social-links-profile-main/index.html",
		"name": "Social Links Profile",
		"category": "Newbie",
		"date": "2 February 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-jr/tip-calculator-app-main/index.html",
		"name": "Tip Calculator App",
		"category": "Junior",
		"date": "27 February 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-jr/notifications-page-main/index.html",
		"name": "Notifications Page",
		"category": "Junior",
		"date": "28 February 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-jr/contact-form-main/index.html",
		"name": "Contact Form",
		"category": "Junior",
		"date": "4 March 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-jr/news-homepage-main/index.html",
		"name": "News Homepage",
		"category": "Junior",
		"date": "5 March 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-md/todo-app/index.html",
		"name": "Todo App",
		"category": "Intermediate",
		"date": "25 April 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-md/countdown-timer/index.html",
		"name": "Launch Countdown Time",
		"category": "Intermediate",
		"date": "28 April 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-md/landing-page/index.html",
		"name": "Easybank Landing Page",
		"category": "Intermediate",
		"date": "29 April 2025"
	},
	{
		"url": "https://taradesk.github.io/code-in-practice-md/calculator-app/index.html",
		"name": "Calculator App",
		"category": "Intermediate",
		"date": "30 April 2025"
	},
];

// Elements
const toggleButton = document.getElementById('theme-toggle');
const iconButton = document.getElementById('theme-icon');
const totalSolution = document.getElementById('count');
const solutionContainer = document.getElementById('solutions');
const switchContainer = document.getElementById("switch");

// Class Name
const containerClass = [
	"p-4", "rounded-lg", "border", "border-gray-200", "dark:border-gray-600",
	"bg-gray-50", "dark:bg-gray-800", "flex", "flex-col"
];

const badgeClass = [
	"w-1/2", "block", "mx-auto", "text-center", "py-2", "border", "border-gray-200", "dark:border-gray-600",
	"rounded-lg", "text-sm", "mb-4"
];

const titleClass = [
	"text-xl", "font-semibold", "text-green-600", "dark:text-green-400", "mb-2"
];

const descClass = [
	"text-gray-700", "dark:text-gray-300", "text-sm", "mb-4"
];

const urlClass = [
	"w-[40%]", "block", "bg-gray-200", "dark:bg-gray-700", "self-end", "text-center", "py-2", "rounded-lg", "hover:bg-gray-300", "dark:hover:bg-gray-600"
];

const renderElement = (arrSolution) => {
	solutionContainer.innerHTML = "";

	arrSolution.forEach( (solution) => {
		const container = document.createElement("div");
		container.classList.add(...containerClass);

		const badge = document.createElement("span");
		badge.classList.add(...badgeClass);
		badge.textContent = solution.category;

		const title = document.createElement("h2");
		title.classList.add(...titleClass);
		title.textContent = solution.name;

		const desc = document.createElement("p");
		desc.classList.add(...descClass);
		desc.textContent = `Date Accomplished: ${solution.date}`;

		const url = document.createElement("a");
		url.classList.add(...urlClass);
		url.href = solution.url;
		url.textContent = "View";
		url.target = "_blank";

		container.appendChild(badge);
		container.appendChild(title);
		container.appendChild(desc);
		container.appendChild(url);
		solutionContainer.appendChild(container);
	});
}

const emptyElement = () => {
	solutionContainer.innerHTML = "";

	const container = document.createElement("div");
	container.classList.add("col-span-3", "p-6", "text-center");

	const desc = document.createElement("p");
	desc.classList.add("text-gray-600", "dark:text-gray-100");
	desc.textContent = "Empty at the moment...";

	container.appendChild(desc);
	solutionContainer.appendChild(container);
}

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')) {
    	iconButton.classList.remove("bi-sun");
    	iconButton.classList.add("bi-moon");
    } else {
    	iconButton.classList.remove("bi-moon");
    	iconButton.classList.add("bi-sun");
    }
});

switchContainer.addEventListener('click', (e) => {
	if (e.target.tagName === "BUTTON") {

		switchContainer.querySelectorAll("button").forEach((btn) => {
			btn.classList.remove("bg-gray-300");
		});

		e.target.classList.add("bg-gray-300");

		if (e.target.textContent == "All") {
			renderElement(solutions);

			totalSolution.textContent = solutions.length;
		} else {
			let filteredSolution = solutions.filter( (solution) => solution.category == e.target.textContent);

			if(filteredSolution.length == 0) {
				emptyElement();
				totalSolution.textContent = "0";
			} else {
				renderElement(filteredSolution);
				totalSolution.textContent = filteredSolution.length;
			}
		}
	}
})

renderElement(solutions);
totalSolution.textContent = solutions.length;