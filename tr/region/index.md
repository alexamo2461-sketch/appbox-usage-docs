# Uygulama Bölgeleri Nasıl Kullanılır
**Uygulama Bölgesi**, AppBox’ın App Store’dan **uygulama açıklamaları, simgeler ve benzeri bilgileri sorgularken** kullandığı **ülke veya bölge mağazasını** ifade eder.

Bu özellik sayesinde:
**belirli bölgelerde yayınlanan uygulamaları bulabilir**, **uygulama adlarını ve simgelerini ilgili bölgeye göre görüntüleyebilir** ve **birden fazla uygulama için bölge sorgularını toplu şekilde gerçekleştirebilirsiniz**.

:::info
**Not:** Uygulamaların kullanılabilirliği, çevrilmiş isimleri ve benzeri bilgiler tamamen seçilen bölgedeki App Store’a bağlıdır. Bir uygulamanın belirli bir bölgede mevcut olmadığı gösteriliyorsa, bu sonuç doğrudan mağaza tarafından döndürülmektedir; koleksiyonunuzun kaybolduğu anlamına gelmez.
:::

## Bu özellik hangi durumlarda kullanılır?
+ **Uygulama adına göre arama yapılamıyorsa** → Bölgeyi değiştirip tekrar arayabilirsiniz (bazı uygulamalar yalnızca belirli mağazalarda yayınlanır).  
+ **Aynı isimde birden fazla uygulama varsa** → Bölge bilgisi sayesinde uygulamaları ayırt edebilirsiniz.  
+ **Bağlantı zaten bölge içeriyorsa** → AppBox, bölgeyi **öncelikli olarak bağlantı üzerinden tanımlar** (aşağıdaki açıklamaya bakın).  
+ **Birden fazla ülkeye ait uygulama listeleri** → Bunları **Filtre · Bölge** üzerinden görüntüleyebilir veya önce **toplu bölge değişikliği** yapıp ardından yenileyebilirsiniz.

## “Ayarlar” İçinden Uygulama Bölgelerini Yönetme
**Ayarlar → Uygulamalar → Uygulama Bölgesi**

<!-- Bu bir görseldir, OCR içeriği: -->
![](../../assets/region/region-settings.png)

Burası **“Bölge Sorgu Listesi”** ekranıdır: etkinleştirilen ülke veya bölgeleri gösterir. Liste sırası **yukarıdan aşağıya doğru** öncelik anlamına gelir (üstteki bölgeler önce sorgulanır; birden fazla bölge denendiğinde de bu sıra kullanılır).

| İşlem | Açıklama |
| --- | --- |
| **Bölge Ekle** | “Bölge Ekle” seçeneğine dokunup listeden seçim yapın. **En fazla 10 bölge** eklenebilir; sınıra ulaşıldığında bir uyarı görüntülenir. |
| **Sil** | Bir satırı **sola kaydırarak** silebilirsiniz. En az **1 bölge korunmalıdır**. |
| **Sırala** | Sağ üstteki **Sırala** seçeneğine dokunup öğeleri sürükleyin, ardından **Onayla** ile kaydedin. Genellikle **en üstteki bölge**, varsayılan öncelik olarak kullanılır (özellikle bağlantıdan bölge belirlenemediğinde). |
| **Liste Boşsa** | Sayfa, “Bölge Ekle” üzerinden bölge seçmeniz gerektiğini gösterir. |

### “Bölge Seç” Listesinden Farkı
**Uygulama Ekle** veya **Uygulama Detayları** gibi ekranlarda açılan **“Bölge Seç”** listesi genellikle yalnızca Ayarlar’dan etkinleştirdiğiniz bölgeleri gösterir (yani yukarıdaki “Bölge Sorgu Listesi”). Böylece bölgeler arasında hızlı geçiş yapılabilir.

Ayarlar’daki **Bölge Ekle** özelliği ise etkin bölge listesini genişletmek için **tam bölge dizininden** seçim yapmanıza olanak tanır.

## App Store Bağlantıları ve Bölgeler: Tanıma Kuralları
Bir **App Store uygulama bağlantısı** yapıştırdığınızda veya paylaştığınızda, AppBox mümkün olduğunca bağlantının içinden **ülke veya bölge bilgisini** algılamaya çalışır. Örneğin:

+ Bağlantıda `…/cn/app/…` veya `…/us/app/…` gibi genellikle küçük harfli **iki karakterli bir kod** bulunuyorsa, sistem bunu ilgili bölge olarak algılar (ör. cn → Çin Anakarası mağazası, us → ABD mağazası).

| Durum | Sistem Davranışı |
| --- | --- |
| **Bağlantıdan bölge algılanabiliyorsa** | **Uygulama Ekle → Uygulama Bağlantısı** ekranında “Ülke veya Bölge” alanı genellikle **gösterilmez**, çünkü bölge bağlantıdan belirlenmiştir. Ayarlar’daki bölge sırasını değiştirmeniz bu davranışı **etkilemez**. |
| **Bağlantıdan bölge algılanamıyorsa** | Sistem **“Ülke veya Bölge”** seçeneğini gösterir (ör. “Çin Anakarası (cn)”) ve Ayarlar’daki mevcut bölge seçimini kullanır. |
| **Birden fazla bağlantı aynı anda yapıştırılırsa** | İçeriğin tamamı **tek bir bölgeye ait bağlantı** olarak yorumlanamazsa, “Ülke veya Bölge” seçeneği genellikle **gösterilir**. Tüm bağlantılar aynı bölge stratejisini paylaşır. |

**Kısacası:** Bağlantı açıkça bir bölge belirtiyorsa AppBox bağlantıyı esas alır. Aksi durumda Ayarlar’da seçtiğiniz bölge kullanılır.

## Uygulama Eklerken Bölge Belirleme
<!-- Bu bir görseldir, OCR içeriği: -->
![](../../assets/region/add-app-region.png)

## Uygulama Detay Sayfasında Bölgeyi Görüntüleme ve Değiştirme
<!-- Bu bir görseldir, OCR içeriği: -->
![](../../assets/region/app-detail-region.png)

### Bölgeyi Görüntüleme
Uygulama detay sayfasında **“Daha Fazla Bilgi”** bölümünü açın. Buradaki **“Bölge”** satırı, kayıtlı uygulamanın mevcut mağaza koduna karşılık gelen bölge adını gösterir.

### Bölgeyi Değiştirme (Yalnızca Mağaza Tabanlı Uygulamalar)
1. Uygulama detay sayfasının sağ üst köşesindeki **“⋯”** menüsünden **“Bölgeyi Değiştir”** seçeneğine dokunun.  
2. **“Bölge Seç”** ekranından bir bölge seçip onaylayın.  
3. AppBox, uygulamanın yeni bölgede mevcut olup olmadığını kontrol etmek için App Store’u yeniden sorgular.  
    - **Başarılı:** Uygulama adı, simgesi ve diğer bilgiler güncellenir (mağaza tarafından sağlanıyorsa) ve ardından **“Değişiklik Başarılı”** mesajı gösterilir.  
    - **Başarısız:** Örneğin **“Bu uygulama seçilen bölgedeki App Store’da mevcut değil”** mesajı görünürse, hatalı durum oluşmaması için bölge otomatik olarak önceki değerine geri döndürülür.

> **Özel Uygulamalar** için şu anda **“Bölgeyi Değiştir”** seçeneği gösterilmez; çünkü bu uygulamaların bilgileri manuel olarak girilir.
>

## Uygulama Koleksiyonlarında Bölge Yönetimi
<!-- Bu bir görseldir, OCR içeriği: -->
![](../../assets/region/collection-region.png)

### Bölgeleri Toplu Olarak Değiştirme
Aynı **uygulama koleksiyonu** içinde birden fazla mağaza tabanlı uygulama seçildiğinde, bunları aynı bölgeye geçirip görüntü bilgilerini topluca güncelleyebilirsiniz.

#### Adımlar
1. Bir **uygulama koleksiyonu** açın.  
2. Sağ üstteki **“⋯”** → **“Uygulamaları Seç”** seçeneğine dokunun.  
3. Birden fazla uygulama seçin.  
4. Alt araç çubuğundaki **“Bölge”** (küre simgesi) seçeneğine dokunun.  
5. **“Bölge Seç”** ekranından hedef bölgeyi belirleyin; AppBox mağaza bilgilerini sırayla yeniden alacaktır.  
6. İşlem tamamlandıktan sonra **“Toplu Bölge Değişikliği Sonuçları”** ekranında başarılı, başarısız veya atlanan uygulamaları ayrı ayrı görüntüleyebilirsiniz.

### Filtreleme (Yalnızca Belirli Bölgeleri Göster)
Uygulama koleksiyonu detay sayfasında sağ üstteki **Filtre** simgesine dokunun → **“Bölge”** alanı → birden fazla bölge seçerek yalnızca eşleşen uygulamaları görüntüleyin. Seçilebilir bölgeler yalnızca mevcut koleksiyonda gerçekten bulunan bölgelerle sınırlıdır.

## Veri İçe Aktarmadaki “Apple Data”

**Ayarlar → Veri İçe Aktarma → Apple Data** bölümünde, içe aktarma başlamadan önce 1–10 bölge seçebilirsiniz. Uygulama bilgileri, listedeki sıraya göre otomatik olarak alınır; eşleşme bulunana veya tüm stratejiler tükenene kadar işlem devam eder.

Not: Çok fazla bölge seçmek içe aktarma hızını belirgin şekilde yavaşlatır. Genellikle yalnızca 1–3 bölge seçilmesi önerilir.