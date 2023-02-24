const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerSection = document.createElement('div');
  headerSection.classList.add('header');
  const spanDate = document.createElement('span');
  spanDate.classList.add("date");
  spanDate.textContent = tarih;
  headerSection.append(spanDate)
  const h1Baslik = document.createElement('h1');
  h1Baslik.textContent = baslik;
  headerSection.append(h1Baslik);
  const spanTemp = document.createElement('span');
  spanTemp.classList.add("temp");
  spanTemp.textContent = yazi;
  headerSection.append(spanTemp);
  return headerSection;

}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 const headerMaker = Header("Teknoloji Zamanı","24.02.2023","Yazi yazi yaziyaziyazi yazi yazi yaziyazi");
 const headerCont = document.querySelector(secici);
 headerCont.append(headerMaker);
}

export { Header, headerEkleyici }
