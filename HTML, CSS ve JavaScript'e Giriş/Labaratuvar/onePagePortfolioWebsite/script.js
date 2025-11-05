// Tavsiye ekleme fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recommendation-form');
    const recommendationsContainer = document.getElementById('recommendations-container');
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form verilerini al
        const recommendationText = document.getElementById('recommendation-text').value;
        const recommenderName = document.getElementById('recommender-name').value;
        const recommenderTitle = document.getElementById('recommender-title').value;

        // Yeni tavsiye kartı oluştur
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'col-md-4';
        newRecommendation.innerHTML = `
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                    <blockquote class="blockquote mb-0 text-center">
                        <p class="fs-5 fst-italic">${recommendationText}</p>
                        <footer class="blockquote-footer mt-2">${recommenderName}, <cite title="${recommenderTitle}">${recommenderTitle}</cite></footer>
                    </blockquote>
                </div>
            </div>
        `;

        // Tavsiyeyi container'a ekle
        recommendationsContainer.appendChild(newRecommendation);

        // Formu temizle
        form.reset();

        // Onay modalını göster
        confirmationModal.show();
    });
});

