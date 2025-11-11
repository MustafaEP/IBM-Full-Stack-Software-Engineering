import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Etkinlik Planlayıcısına Hoş Geldiniz</h1>
            </header>
            {/* Uygulamanın amacı ve genel Görünüm */}
            <section className="description">
                <p>
                    Etkinlik planlayıcısı ile planlarınızı zahmetsizce planlayın ve düzenli planların tadını çıkarın.
                </p>
                <button className="get-started-button">Başlayın</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Sosyal Etkinlikler:</h2>
                    <li>Doğum günü partileri</li>
                    <li>Yıldönümü kutlamaları</li>
                    <li>Düğün resepsiyonları</li>
                    <li>Bebek partileri</li>
                    <li>Mezuniyet partileri</li>
                    <li>Aile buluşmaları</li>
                </ul>
                <ul>
                    <h2>Eğlence Etkinlikleri:</h2>
                    <li>Konserler</li>
                    <li>Müzik Festivalleri</li>
                    <li>Film</li>
                    <li>Komedi Gösterileri</li>
                    <li>Sanat Galerisi</li>
                    <li>Kültürel Etkinlikler</li>
                </ul>
                <ul>
                    <h2>Topluluk Etkinlikleri:</h2>
                    <li>Bağış Etkinlikleri</li>
                    <li>Galalar</li>
                    <li>Aday Sürücüler</li>
                    <li>Mahalle Partileri</li>
                    <li>Topluluk Festivali</li>
                    <li>Kültürel Kutlamalar</li>
                </ul>
            </section>
            <section className="features">
                <h2>Özellikler</h2>
                <ul>
                    <li>Kolay etkinlik oluşturma ve yönetimi</li>
                    <li>Özelleştirilebilir etkinlik şablonları</li>
                    <li>Misafir listesi yönetimi</li>
                    <li>Gerçek zamanlı işbirliği</li>
                    <li>Hatırlatmalar ve bildirimle</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Görüşler</h2>
                <div className="testimonial">
                    <p>"Etkinlik Planlayıcı düğünümü organize etmeyi çok kolaylaştırdı. Kesinlikle tavsiye ederim!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"Tüm kurumsal etkinliklerim için Etkinlik Planlayıcıyı kullanıyorum. Bana çok fazla zaman ve emek kazandırıyor!"</p>
                    <p className="author">- Harry Potter</p>
                </div>
            </section>
            <section className="contact">
                <h2>Bizimle İletişime Geçin</h2>
                <form>
                    <input type="text" placeholder="İsim" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Mesaj"></textarea>
                    <button className="submit-button">Gönder</button>
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default EventPlanner;
