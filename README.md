# 🗺️ Rota Atlas - Seyahat Rota Planlayıcısı

Rota Atlas, Türkiye'nin en popüler ve tarihi seyahat rotalarını modern, estetik ve kullanıcı dostu bir arayüzle sunan bir web tasarımı projesidir. Kullanıcıların keşif süreçlerini kolaylaştırmak ve interaktif bir deneyim sunmak amacıyla geliştirilmiştir.

## 🌟 Proje Özellikleri

* **Dinamik Rota Listesi:** JavaScript veri havuzu (Array) kullanılarak listelenen popüler seyahat rotaları.
* **Arama ve Filtreleme (CRUD Altyapısı):** Kullanıcıların gitmek istedikleri rotaları isme göre aramasına veya coğrafi bölgelere (Ege, Karadeniz, İç Anadolu vb.) göre anlık filtrelemesine olanak tanıyan sistem.
* **Gelişmiş Detay Paneli:** Herhangi bir rotaya tıklandığında açılan; sol tarafta rotanın görselini, sağ tarafta ise alt başlıklar, paragraflar ve keşif ipuçları içeren zengin rehber içerikleri.
* **Estetik Manifesto Alanı:** "Yolculuk, Varış Noktasından Daha Fazlasıdır" felsefesiyle tasarlanmış, arka planda akıcı bir şekilde dönen yerel video entegrasyonu ve estetik görsel yerleşimi.
* **Tam Responsive (Mobil Uyumlu) Tasarım:** CSS Flexbox, Grid ve Media Queries kullanılarak masaüstü, tablet ve mobil ekranlara kusursuz uyum sağlayan arayüz.

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Sayfa iskeleti, semantik etiketler ve video/görsel yönetimi.
* **CSS3:** Özgün tipografi (Playfair Display & Poppins), sayfa içi yumuşak kayma efektleri (`scroll-behavior: smooth`), modern renk paletleri ve gölge tasarımları.
* **JavaScript (ES6+):** DOM manipülasyonu, dinamik veri basımı, filtreleme algoritmaları ve modal/panel açılış-kapanış yönetimleri.

## 📂 Proje Klasör Yapısı

```text
WEBPROOJE/
│
├── index.html          # Projenin ana HTML iskeleti
├── style.css           # Tüm sayfanın estetik CSS kodları
├── app.js              # Arama, filtreleme ve detay paneli JavaScript kodları
├── yol.mp4             # Manifesto alanındaki estetik yol videosu
└── [resimler].jpg      # Rotalara ait yerel seyahat görselleri
