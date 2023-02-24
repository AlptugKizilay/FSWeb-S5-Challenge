# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

* [ ] Bu projenyi forklayarak bir kopyasını oluşturun.
* [ ] Reponun kendi versiyonunuzu klonlayın.
* [ ] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [ ] Komut satırınızla projenin kök dizinine gidin.
- [ ] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [ ] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [ ] Chrome'da `http://localhost:3000` konumuna gidin
- [ ] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [ ] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [ ] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [ ] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.


## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
2. Bir event nedir?
3. Bir event dinleyici(listener) nedir?
4. Neden bir NodeList'i Array'e dönüştürelim??
5. Bileşen nedir?

1-DOM Nedir?
DOM (Document Object Model), bir web sayfasının yapısını ve içeriğini temsil eden bir programlama arabirimidir. Web tarayıcısı, HTML, CSS ve JavaScript kodlarını okur ve DOM'u oluşturur. Bu nesneler hiyerarşik bir yapıdadır ve birbirleriyle ilişkilidir. JavaScript, DOM'u kullanarak web sayfası içeriğini, stilini ve yapısını değiştirebilir.

2-Bir Event Nedir?
Bir event, kullanıcının bir web sayfasındaki etkileşimini temsil eder. Örneğin, bir düğmeye tıklandığında, bir metin kutusuna yazı yazıldığında veya fare imleci bir öğenin üzerine geldiğinde bir olay gerçekleşir. JavaScript, belirli bir olayın gerçekleştiğinde belirli bir işlevi tetiklemek için kullanılabilir.

3-Bir Event Dinleyici (Listener) Nedir?
Bir event dinleyici, belirli bir olayın gerçekleştiğinde tetiklenecek bir işlevi tanımlayan bir JavaScript işlevidir. Bir event dinleyici, olaya dinleme ekleyerek, olay gerçekleştiğinde tetiklenecek işlevi belirler.

4-Neden bir NodeList'i Array'e dönüştürelim?
NodeList, DOM'da bir sorgunun sonucu olarak döndürülen bir öğeler listesidir. Bir NodeList, bir dizi gibi görünse de, aslında bir dizi değildir ve dizi yöntemleri kullanılamaz. Bu nedenle, NodeList'i bir diziye dönüştürerek, dizi yöntemlerini kullanarak NodeList üzerinde işlem yapmak daha kolay hale gelir.

6-Bileşen Nedir?
Bileşen, bir web sayfasında kullanılan yeniden kullanılabilir kod bloklarını ifade eder. Bileşenler, web geliştiricilerin daha hızlı ve daha tutarlı bir şekilde web sayfaları oluşturmalarına olanak tanır. Örneğin, bir menü bileşeni, birden çok sayfada aynı şekilde görüntülenmek üzere tasarlanabilir ve kod tekrarını önler. Bileşenler, modern web geliştirme çerçeveleri ve kütüphaneleri tarafından yaygın olarak kullanılır.
