document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.movie-item input[type="checkbox"]');
    const completedCountSpan = document.getElementById('completed-count');
    const totalCountSpan = document.getElementById('total-count');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Inicializa o contador total de filmes
    const totalMovies = checkboxes.length;
    totalCountSpan.textContent = totalMovies;

    // Carrega o estado salvo dos checkboxes
    function loadProgress() {
        let completedCount = 0;
        checkboxes.forEach(checkbox => {
            const movieId = checkbox
