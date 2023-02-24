import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardSection = document.createElement("div");
  cardSection.classList.add("card");
  const headlineCard = document.createElement("div");
  headlineCard.classList.add("headline");
  headlineCard.textContent = makale.anabaslik;
  cardSection.append(headlineCard);
  const authorCard = document.createElement("div");
  authorCard.classList.add("author");
  cardSection.append(authorCard);
  const imgPart = document.createElement("div");
  imgPart.classList.add("img-container");
  authorCard.append(imgPart);
  const image = document.createElement("img");
  image.setAttribute("src", makale.yazarFoto); //
  imgPart.append(image);
  const spanAuthor = document.createElement("span");
  spanAuthor.textContent = makale.yazarAdi + " tarafından"
  imgPart.append(spanAuthor);
  return cardSection;

}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios
    .get("http://localhost:5001/api/makaleler")
    .then((res) => {
      console.log(res.data.makaleler);
      const cardContainer = document.querySelector(secici);
     
      const keys = Object.keys(res.data.makaleler);
      console.log(keys);
      for(const key of keys){
        const journals = res.data.makaleler[key];
        console.log(journals);
        for(let journal of journals){
          
          cardContainer.append(Card(journal));
        }
      }
      
    })
}

export { Card, cardEkleyici }
