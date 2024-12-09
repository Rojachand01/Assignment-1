const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const filter = document.getElementById("filter");
const resultsContainer = document.getElementById("results");

const data = [
  { id: 1, text: "JavaScript Basics", category: "category1" },
  { id: 2, text: "CSS Grid Tutorial", category: "category2" },
  { id: 3, text: "Responsive Design Principles", category: "category1" },
  { id: 4, text: "Mastering UI/UX Design", category: "category2" },
];

function searchContent() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedFilter = filter.value;

  const filteredResults = data.filter(item => {
    const matchesQuery = item.text.toLowerCase().includes(query);
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    return matchesQuery && matchesFilter;
  });

  resultsContainer.innerHTML = "";

  if (filteredResults.length > 0) {
    filteredResults.forEach(item => {
      const resultDiv = document.createElement("div");
      resultDiv.className = "result-item";
      resultDiv.textContent = item.text;
      resultsContainer.appendChild(resultDiv);
    });
  } else {
    resultsContainer.innerHTML = "<p class='placeholder'>No results found. Try another search!</p>";
  }
}

searchBtn.addEventListener("click", searchContent);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchContent();
});
