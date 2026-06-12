// Sayfa yüklendiğinde çalışacak ana kodlar
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elementlerini Yakalama
    const routesContainer = document.getElementById("routesContainer");
    const detailPanel = document.getElementById("detailPanel");
    const closeDetailBtn = document.querySelector(".close-detail-btn");
    const detailImage = document.getElementById("detailImage");
    const detailTitle = document.getElementById("detailTitle");
    const detailRegion = document.getElementById("detailRegion");
    const detailDescription = document.getElementById("detailDescription");
    const searchInput = document.getElementById("searchInput");
    const regionFilter = document.getElementById("regionFilter");
    const loader = document.getElementById("loader");

    // ZENGİNLEŞTİRİLMİŞ ROTA VERİ HAVUZU
    const routeDataPool = [
        { 
            id: 1, 
            name: 'KAPADOKYA', 
            region: 'İç Anadolu', 
            image: 'kapadokya.jpg.jpeg', 
            description: `
                <h3>Eşsiz Peri Bacaları ve Doğa Tarihi</h3>
                <p>Milyonlarca yıl önce Erciyes ve Hasandağı'nın püskürttüğü lavların rüzgar ve yağmurla aşınması sonucu oluşan Kapadokya, insanı tamamen farklı bir gezegendeymiş gibi hissettiren büyüleyici bir coğrafyaya sahiptir. Göreme, Ürgüp ve Avanos üçgeninde yayılan bu bölge, sadece yer üstündeki kaya oluşumlarıyla değil, binlerce yıllık yeraltı şehirleriyle de dünya tarihinin en gizemli duraklarından biridir.</p>
                
                <h3>Gökyüzünde Bir Sabah Ritüeli</h3>
                <p>Kapadokya denince akla ilk gelen şey şüphesiz gün doğumunda gökyüzünü kaplayan rengarenk sıcak hava balonlarıdır. Sabahın ilk ışıklarıyla vadilerin arasından süzülen bu balonlar, masalsı coğrafyayı yukarıdan izlemek için eşsiz bir fırsat sunar. Gün batımında ise Kızılçukur Vadisi'nde kayaların aldığı kızıl tonları seyretmek seyahatin en unutulmaz anlarından birine dönüşür.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Avanos'ta geleneksel çömlek atölyelerine katılıp kendi çömleğinizi yapmayı deneyebilir, Göreme Açık Hava Müzesi'ndeki kayalara oyulmuş antik kiliseleri ziyaret edebilirsiniz. Derinkuyu veya Kaymaklı yeraltı şehirlerinin dar tünellerinde yürürken ise tarihin derinliklerine heyecan dolu bir yolculuk yapacaksınız.</p>
            `
        },
        { 
            id: 2, 
            name: 'PAMUKKALE TRAVERTENLERİ', 
            region: 'Ege', 
            image: 'pamukkale.jpg.jpeg', 
            description: `
                <h3>Beyaz Cennet ve Şifalı Termal Sular</h3>
                <p>Denizli sınırlarında yer alan Pamukkale, kalsiyum karbonat zengini termal suların binlerce yıl boyunca akmasıyla oluşan kartpostal güzelliğinde beyaz traverten teraslarına sahiptir. Kar beyazı rengindeki bu doğal yapılar, mineral zengini suların oksijenle teması sonucu çökelmesiyle meydana gelir. Hem görsel bir şölen sunan hem de şifalı kabul edilen bu sular, her mevsim binlerce ziyaretçiyi ağırlar.</p>
                
                <h3>Hierapolis ve Kleopatra Havuzu</h3>
                <p>Travertenlerin hemen arkasında yükselen Hierapolis Antik Kenti, Roma ve Bizans dönemlerinde büyük bir şifa merkezi olarak kullanılmıştır. Depremler sonucu yıkılan sütunların suyun içinde kalmasıyla oluşan antik havuz (Kleopatra Havuzu), bugün hala ziyaretçilere 36 derece sıcaklıktaki şifalı sularda tarihi kalıntıların arasında yüzme deneyimi sunmaktadır.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Pamukkale'yi özellikle gün batımına yakın bir saatte ziyaret etmenizi öneririz. Güneş batarken beyaz terasların üzerinde oluşan altın sarısı ve kızıl yansımalar, fotoğrafçılar için muazzam kareler oluşturur. Ayrıca Hierapolis Tiyatrosu'nun zirvesine çıkıp tüm ovayı yukarıdan izlemeyi unutmayın.</p>
            `
        },
        { 
            id: 3, 
            name: 'EFES ANTİK KENTİ', 
            region: 'Ege', 
            image: 'efes.jpg.jpeg', 
            description: `
                <h3>Antik Dünyanın Kültür ve Ticaret Metropolü</h3>
                <p>İzmir'in Selçuk ilçesinde yer alan Efes Antik Kenti, Helenistik ve Roma dönemlerinin en görkemli liman kentlerinden biridir. Döneminin kültür, sanat ve bilim merkezi olan Efes, mermer caddeleri, anıtsal yapıları ve binlerce kişilik nüfusuyla antik çağın metropol yapısını günümüze en iyi aktaran açık hava müzelerinin başında gelir.</p>
                
                <h3>Celsus Kütüphanesi ve Büyük Tiyatro</h3>
                <p>Kentin en ikonik yapısı olan Celsus Kütüphanesi, dönemin en zengin kütüphanelerinden biri olmasının yanı sıra mimari estetiğiyle de insanı büyüler. Kütüphanenin hemen ilerisinde yer alan 25 bin kişilik devasa antik tiyatro ise harika akustiğiyle hala zamana meydan okumaktadır. Yamaç Evler bölümü ise dönemin zenginlerinin lüks yaşamını mozaiklerle gözler önüne serer.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Efes çok geniş bir alana yayıldığı ve tamamen açık havada olduğu için yaz aylarında sabahın erken saatlerinde gezilmesi tavsiye edilir. Kentin mermer zeminleri üzerinde yürürken rahat bir ayakkabı tercih etmek konforunuz için oldukça önemlidir. Efes seyahatinizi yakınlardaki Meryem Ana Evi ile taçlandırabilirsiniz.</p>
            `
        },
        { 
            id: 4, 
            name: 'UZUNGÖL - KARADENİZ', 
            region: 'Karadeniz', 
            image: 'uzungol.jpg.jpeg', 
            description: `
                <h3>Sisin ve Yeşilin Muazzam Uyumu</h3>
                <p>Trabzon'un Çaykara ilçesinde, dik yamaçların arasından akan Haldizen deresinin önünün kapanmasıyla oluşan Uzungöl, dik vadileri, sık ormanları ve yılın büyük bölümünü kaplayan mistik sisiyle Karadeniz coğrafyasının en ünlü sembollerinden biridir. Çevresini saran ladin ormanlarının göle yansıyan yeşil tonları, doğaseverler için eşsiz bir huzur alanı sunar.</p>
                
                <h3>Yayla Kültürü ve Ahşap Mimari</h3>
                <p>Uzungöl ve çevresi, geleneksel Karadeniz ahşap mimarisini ve sıcak kanlı yayla kültürünü yakından tanımak için harika bir merkezdir. Göl etrafındaki yürüyüş parkurları, temiz dağ havasını içinize çekerek doğayla baş başa kalmanızı sağlar. Bölgenin dik yamaçlarına kurulan seyir terasları ise gölü kuş bakışı izleme imkanı verir.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Uzungöl merkezindeki yoğunluktan uzaklaşmak isterseniz, yukarı tarafta yer alan Karester veya Şekersu yaylalarına doğru küçük bir yolculuğa çıkabilirsiniz. Buralarda doğanın tamamen el değmemiş haline tanıklık edebilir ve yerel Karadeniz lezzetlerinin (özellikle sıcak bir mıhlamanın) tadına varabilirsiniz.</p>
            `
        },
        { 
            id: 5, 
            name: 'BARTIN - AMASRA', 
            region: 'Karadeniz', 
            image: 'amasraa.jpg.jpeg', 
            description: `
                <h3>Fatih Sultan Mehmet'in Dünyanın Gözü Dediği Kent</h3>
                <p>Karadeniz'in hırçın dalgalarından korunan korunaklı bir yarımada üzerine kurulan Amasra, 3000 yıllık köklü tarihi, balıkçı kasabası sıcaklığı ve yeşille mavinin birleştiği sahilleriyle saklı bir cennettir. Fatih Sultan Mehmet'in kenti tepeden gördüğünde yanındakilere "Lala, çeşm-i cihan bu mu ola?" (Dünyanın gözü burası mı?) diyerek hayranlığını gizleyemediği rivayet edilir.</p>
                
                <h3>Amasra Kalesi ve Kemere Köprüsü</h3>
                <p>Cenevizlilerden Osmanlıya kadar pek çok medeniyetin izini taşıyan Amasra Kalesi, tarihi sokakları ve eski taş evleriyle kentin kalbidir. Yarımadayı Boztepe Adası'na bağlayan tarihi Kemere Köprüsü ise fotoğraf çekilmek ve hırçın Karadeniz'i izlemek için en popüler noktadır. Kale içindeki Çekiciler Çarşısı'nda ise el emeği ahşap işçilikleri sergilenir.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Amasra'ya geldiğinizde limandaki salaş balıkçılarda taze mevsim balıklarının ve buraya özgü en az 20 çeşit malzemeyle hazırlanan ünlü Amasra Salatası'nın tadına mutlaka bakmalısınız. Akşamüstü Boztepe Adası'na yürüyerek fenerin yanında güneşi batırmak buranın en güzel ritüelidir.</p>
            `
        },
        { 
            id: 6, 
            name: 'İSTANBUL TOPKAPI SARAYI', 
            region: 'Marmara', 
            image: 'ayasofya.jpg.jpeg', 
            description: `
                <h3>Yüzyıllar Boyunca İmparatorluğun İhtişam Merkezi</h3>
                <p>İstanbul Tarihi Yarımada'nın en hakim noktalarından biri olan Sarayburnu'nda yer alan Topkapı Sarayı, Fatih Sultan Mehmet'ten itibaren yaklaşık 400 yıl boyunca Osmanlı İmparatorluğu'nun hem idare merkezi hem de padişahların resmi ikameti olmuştur. Muazzam mimarisi, geniş avluları ve boğaza nazır bahçeleriyle dünya saray mimarisinin en özgün örneklerinden biridir.</p>
                
                <h3>Kutsal Emanetler, Harem ve Hazine</h3>
                <p>Sarayın içerisinde yer alan Mukaddes Emanetler dairesi, Kaşıkçı Elması ve Topkapı Hançeri gibi paha biçilemez eserlerin sergilendiği Hazine Bölümü dünyanın dört bir yanından ziyaretçi çeker. Saray yaşamının en gizemli ve merak edilen kısmı olan Harem Dairesi ise çinilerle süslü odaları ve büyüleyici mimari detaylarıyla Osmanlı estetiğinin zirvesini gösterir.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Saray çok büyük bir alanı kapsadığı için tam anlamıyla gezmek en az 3-4 saatinizi alacaktır. Dördüncü avluda yer alan Mecidiye Köşkü'nün terasından Kız Kulesi'ni ve Boğaz'ı izlemek, saray gezisinin en keyifli dinlenme anıdır. Müzekartınızı yanınıza almayı kesinlikle unutmayın.</p>
            `
        },
        { 
            id: 7, 
            name: 'NEMRUT DAĞI', 
            region: 'Güneydoğu Anadolu', 
            image: 'nemrut.jpg.jpeg', 
            description: `
                <h3>2150 Metrede Tanrıların Görkemli Tahtı</h3>
                <p>Adıyaman'ın Kahta ilçesinde yer alan ve 2150 metre yüksekliğe sahip olan Nemrut Dağı, Kommagene Kralı I. Antiochos'un tanrılara ve atalarına minnetini göstermek için yaptırdığı devasa heykelleri ve tümülüsü barındırır. Helenistik dönemin en hırslı ve estetik mimari projelerinden biri olan bu alan, dev heykelleriyle UNESCO Dünya Miras Listesi'nde yer almaktadır.</p>
                
                <h3>Doğu ve Batı Teraslarının Gizemi</h3>
                <p>Dağın zirvesinde, kireçtaşı bloklarından oyulmuş 8-10 metre yüksekliğindeki devasa tanrı başları, kartal ve aslan heykelleri yer alır. Antiochos, kendi heykelini de tanrıların yanına koydurarak ölümsüzleşmeyi amaçlamıştır. Doğu terası tanrıların güneşi karşıladığı, batı terası ise güneşi uğurladığı simetrik bir düzenle inşa edilmiştir.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Nemrut Dağı'nda gün doğumu veya gün batımını izlemek kelimenin tam anlamıyla büyüleyicidir. Ancak zirve, yüksekliği nedeniyle yaz aylarında bile geceleri ve sabahın erken saatlerinde oldukça soğuk ve rüzgarlı olur. Bu yüzden yanınıza mutlaka kalın bir mont veya hırka almalısınız.</p>
            `
        },
        { 
            id: 8, 
            name: 'GÖBEKLİTEPE', 
            region: 'Güneydoğu Anadolu', 
            image: 'gobeklitepe.jpg.jpeg', 
            description: `
                <h3>İnsanlık Tarihinin Bilinen Sıfır Noktası</h3>
                <p>Şanlıurfa yakınlarında yer alan Göbeklitepe, arkeoloji dünyasının tüm ezberlerini bozan, günümüzden tam 12.000 yıl önce inşa edilmiş dünyanın bilinen en eski anıtsal tapınak kompleksidir. Tarım devriminden, hatta yerleşik hayata geçilmesinden bile önce avcı-toplayıcı insanlar tarafından inşa edilen bu yapı, insanlığın inanç tarihine yepyeni bir ışık tutmuştur.</p>
                
                <h3>T Biçimli Dikilitaşlar ve Gizemli Hayvan Figürleri</h3>
                <p>Göbeklitepe'deki kazılarda ortaya çıkarılan en dikkat çekici unsurlar, boyları 6 metreyi, ağırlıkları ise 40 tonu bulan "T" biçimli devasa kireçtaşı dikilitaşlardır. Bu taşların üzerinde aslan, yılan, turna ve akrep gibi vahşi hayvanların son derece stilize ve sanatsal kabartmaları yer alır. Bu taşların o dönemde ilkel aletlerle nasıl taşındığı hala bir gizem konusudur.</p>
                
                <h3>Keşif İpuçları & Rota Notları</h3>
                <p>Göbeklitepe alanını gezdikten sonra, kazılardan çıkan orijinal eserlerin sergilendiği Şanlıurfa Arkeoloji Müzesi'ni de mutlaka ziyaret etmelisiniz. Bölgeyi gezerken etkileyici animasyonların yer aldığı simülasyon merkezini ziyaret etmek, tapınakların 12.000 yıl önce nasıl göründüğünü anlamanızı kolaylaştıracaktır.</p>
            `
        }
    ];

    // Rotaları Ekrana Basma Fonksiyonu
    function renderRoutes(data) {
        routesContainer.innerHTML = "";
        if (data.length === 0) {
            routesContainer.innerHTML = "<p class='no-result'>Aranan kriterlere uygun rota bulunamadı.</p>";
            return;
        }

        data.forEach((route, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            const row = document.createElement("div");
            row.className = "route-row";
            row.innerHTML = `
                <div class="route-left">
                    <h3>${route.name}</h3>
                </div>
                <div class="route-right">
                    <span class="route-region">${route.region} — No. ${formattedIndex}</span>
                </div>
            `;

            // Satıra tıklanınca Büyük Detay Panelini Aç
            row.addEventListener("click", () => {
                detailImage.src = route.image;
                detailImage.alt = route.name;
                detailTitle.textContent = route.name;
                detailRegion.textContent = route.region;
                detailDescription.innerHTML = route.description; // HTML etiketlerini (<p>, <h3>) okuması için innerHTML

                detailPanel.style.display = "block";
                document.body.style.overflow = "hidden"; // Arka plan kaymasın
            });

            routesContainer.appendChild(row);
        });
    }

    // Arama ve Filtreleme Fonksiyonu
    function filterRoutes() {
        const searchText = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;

        const filtered = routeDataPool.filter(route => {
            const matchesSearch = route.name.toLowerCase().includes(searchText);
            const matchesRegion = selectedRegion === "" || route.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });

        renderRoutes(filtered);
    }

    // Detay Panelini Kapatma
    closeDetailBtn.addEventListener("click", () => {
        detailPanel.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Event Listener Tanımlamaları
    searchInput.addEventListener("input", filterRoutes);
    regionFilter.addEventListener("change", filterRoutes);

    // Sayfa Açılış Animasyonu (Loader)
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 300);
        }
    }, 600);

    // İlk Açılışta Tüm Listeyi Göster
    renderRoutes(routeDataPool);
});