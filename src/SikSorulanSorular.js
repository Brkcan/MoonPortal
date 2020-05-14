import React from 'react';
import HomePage from './HomePage';
import Table from 'react-bootstrap/Table'

let soru = [{
  id:1,
  soru:'1-  Moon Nedir ?',
  soru1:'2-  Moonda mağazaların satışlarını görebilir miyim ?',
  soru2:'3- Sipariş atayabilir miyim ? Atadığım siparişleri excel formatında alabilir miyim ?',
  soru3:'4- Moonda siparişleri toplu bir şekilde yönetebilir miyim ?',
  text:'Moon platformu e-ticaret satış kanallarının ortak bir yerden yönetimini sağlayan ve bu bağlamda e-ticaret, depo ve mağaza koordinasyonunu sağlayan sistemdir.',
  text1:'Evet, greyder.com, trendyol-greyder, jeephoe.com, trendyol-jeep, n11-greyder, n11-jeep mağazalarında satılan ürünlerin adetini ve toplam ciroyu görebilirsiniz.',
  text2:'Tüm mağazalarımız için sipariş atayabilirsiniz ve excel formatında çıktısını alabilirsiniz.',
  text3:'Greyder.com ve Trendyol-Greyder mağazaları için toplu bir şekilde siparişlerinizi yönetebilirsiniz.',
}]
let soru2 = [{
  id:1,
  soru:'5- Moonda el terminalini temizleyebilir miyim ?',
  soru1:'6- Moonda sipariş oluşturabilir miyiz?',
  soru2:'7- Siparişlerin kargo takibini yapabilir miyiz ?',
  text:'Evet el terminalini mağazalar için ayrı ayrı temizleyebilirsiniz.',
  text1:'Moon arayüzlerinden dilerseniz sipariş oluşturabilir, siparişlerinizi oluşturmadan evvel sipariş detaylarını inceleyebilirsiniz.',
  text2:'Kargo takibi yapabilir ve kargo hareket listesini görüntüleyebilirsiniz, ayrıca bu işlemleri toplu kod girişi ile toplu halde yönetebilirsiniz.',
}]
let soru3 = [{
  id:1,
  soru:'8- E-ticaret sipariş raporu nerden çekebilirim?',
  soru1:'9- E-ticaret için Moon da işleme alınmış sipariş listesine nerden ulaşabilirim?',
  soru2:'10- Smarttan çekilen raporların içindeki alanlar bize ne ifade etmektedir?',
  text:'Smart altında “Moon Sales 2” raporunda iki tarih aralığında tüm e-ticaret satışlarını çekebilirsiniz.',
  text1:'Smart altında “Moon Sales” raporunda iki tarih aralığında e-ticaret tarafından işleme alınan siparişlere ulaşabilirsiniz.',
  text2:'Çekmiş olduğunuz raporun içeriğinde yapılan her işleme karşılık veri içeren alanlar bulunmaktadır. Bu alanlar, alanları dolduran işlemler ve alanın içindeki verinin karşılıklarını aşağıdaki tabloda bulabilirsiniz:',
}]
let soru4 = [{
  id:1,
  soru:'11- Moon’a sipariş atama excel i neden yüklenmektedir?',
  soru1:'12- Moon’a sipariş atama excel i yüklediğimizde tekrar sipariş oluşur mu?',
  soru2:'13- Moon’a sipariş atama excel i ile daha önce işlem yapılan siparişi, sipariş depo kodu veya toplanacağı departmentNumber alanını değişmeden tekrar yüklersek ne olur?',
  text:'Sipariş atama excel i yüklenmiş olduğu tarihte işlem yapılacak siparişleri belirlemek için yüklenmektedir. Excel yüklemenin amacı öncelikle bugün yönetilmek istenen siparişlerin takip edilebilmesidir. Bu liste e-ticaretin her gün hazırladığı ve toplanacağını ifade ettiği, depoya ve mağazalara dağıttığı excel in birebir aynısıdır. Liste 24 saat kuralı ile çalışmaktadır. Ertesi gün işlem yapılmak istenen veya işlemine en son kalınan yerden devam etmek istenen siparişlerin listeye eklenerek tekrar moon a atılması gerekmektedir.',
  text1:'Excel yüklemenin amacı siparişi işleme almaktır. Yüklenilen excel sipariş oluşturmaz. Siparişi yüklendiği gün için gündeme alınıp en son işlem yapıldığı hali ile moon ekranına getirilmesini sağlar.',
  text2:'Daha önce işlem yapmış olduğunuz siparişi listeye ekleyerek tekrar içeri yüklemek siparişin işleme alındığını ifade eder. Sipariş en son kalmış olduğu işlem adımında tekrar gündeme gelir. Daha önce yapılan işlemler sıfırlanmaz, değişmez güncellenmez.',
}]
let soru5 = [{
  id:1,
  soru:'14- Bir siparişi bir mağazadan alıp başka bir mağazanın toplamasını istersem, veya mağazadan depoya, depodan mağazaya çevirmek istersem ne yapmalıyım?',
  soru1:'15- Hangi durumlarda siparişin istendiği depoyu değişemeyiz?',
  soru2:'16- Eğer sipariş listesinde sipariş kalemi ile ilgili bir değişiklik yapmadan içeri listeyi atarsam ne olur?',
  text:'Bir siparişin toplanacağı lokasyonu değişmek için siparişi içeriye ilk attığınız depo kodundan farklı bir depo kodu yazarak tekrar içeri atarsanız siparişi eski depodan alıp yeni depoya yönlendirecektir. Eğer mağazadan depoya sipariş yönlendirmesi yapılması isteniyorsa departman numarasının değiştirilmesi ve depo kodunun deponun kendi depo kodu olarak güncellenip excel in içeri atılması gerekmektedir. Aynı işlem depodan mağazaya sipariş yönlendirmesi için yapılabilir.',
  text1:'Eğer sipariş istenen lokasyon tarafından toplanmış ise veya faturası oluşturulmuş ise sipariş lokasyon değişikliği yapılamaz.',
  text2:'Sadece siparişi gündeme almış olursunuz. Sipariş ile ilgili herhangi bir işlem yapılmamış olur.',
}]
let soru6 = [{
  id:1,
  soru:'17- Siparişi güncellemek için bugün toplanacak tüm siparişleri, güncellenecek sipariş bilgisiyle beraber mi içeriye atmak gerekmektedir?',
  soru1:'18- Günün listesi için gündeme alınıp ekrana getirilen bir siparişi ekrandan silebilir miyiz?',
  soru2:'19- Siparişi veya faturası oluşan bir müşteri siparişi tekrar faturalandırılabilir mi veya siparişi tekrar oluşturulabilir mi?',
  text:' İsterseniz güncelleme yapacağınız siparişi tek başın, isterseniz tüm listeyi beraber gönderebilirsiniz. Sadece değişiklik yaptığınız siparişler işlem görecektir. Diğerleri için bir işlem yapılmayacaktır.',
  text1:'Hayır silemezsiniz. Gün döndüğünde sistem sizden yeni bir liste beklediği için yeni listeye siparişi dahil etmemeniz yeterlidir.',
  text2:'Eğer müşteri siparişinin moon dan siparişi oluşturulmuşsa veya faturalandırıldıysa, bu numaralar Moon raporlarına yansımız ise tekrar kesilmesi veya siparişleştirilmesi mümkün değildir.',
}]
let soru7 = [{
  id:1,
  soru:'20- Siparişler akmıyor. Aktarımda bir problem mi var?',
  soru1:'21- El terminaline düşen sevk sayısı ile sipariş sayısı birbirini tutmuyor ?',
  soru2:'22- Kargo adresi yanlış çıkıyor ?',
  text:'Şuan Netsis sürümünden kaynaklı hata alıyoruz. Bir job yazdım Netsis’de sipariş tipi onaysız olan siparişleri onaylıya çekiyorum. Connector kaynaklı hatalar gelmemeye başladı son 15 gündür diyebilirim. Sipariş oluşmamış ise Gökhan a yönlendiriyorum.',
  text1:'Siparişleri kontrol ediyorum. %90 sipariş oluşmamış oluyor.',
  text2:'Netsis’e kargo adresi akıyor ancak Trendyol’da sipariş adresinde güncelleme olduğu için Netsis’de bu adres güncellenmiyor.(Trendyol tarafından güncelleştirmeleri aldığımızda Netsis aktarımında edit yapacağım.)',
}]
let soru8 = [{
  id:1,
  soru:'23- Sevkler el terminaline düşmedi, kontrol eder misiniz?',
  soru1:'24- Umo yazdırmıyor, yazdırırken hata veriyor?',
  soru2:'25- Yapılan DAT işleminin bakiye Divaposta gözükmüyor ?',
  text:'Ekte ilettiğiniz Divaordernumber ın, Tblsipatra tablosundan siparişi bulunur ve sevk tablosundan hatasına bakılarak iptal edilir. Bunun üzerine tekrar sevk ekranına düşürülür. ',
  text1:'Ups sisteminde genel bir arıza vardır. Veya UPS o lokasyona destek vermiyordur.',
  text2:'Divaposa aktarımda sıkıntı olmuştur. Connector kontrol edilmeli. ',
}]
let soru9 = [{
  id:1,
  soru:'26- Kampanya birleştirilebilir mi ? ',
  text:'Kısıtlar doğru verilirse, Kampanya üzerine Avantaj kodu ve ikinci kampanya belgeye uygulanabilir. ',
}]
class SikSorulanSorular extends React.Component{
  constructor(){
    super();

    this.state = {
      filterText: '',
    }
  }

  onChangeFilterText = (e) => {
    this.setState({
      filterText: e.target.value,
    })
  }
  render(){
    const filtered = soru.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.text3.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0 ||
        item.soru3.toLowerCase().indexOf(query) >= 0
      )
    })
    const filtered2 = soru2.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered3 = soru3.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered4 = soru4.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered5 = soru5.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered6 = soru6.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered7 = soru7.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered8 = soru8.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.text1.toLowerCase().indexOf(query) >= 0 ||
        item.text2.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0 ||
        item.soru1.toLowerCase().indexOf(query) >= 0 ||
        item.soru2.toLowerCase().indexOf(query) >= 0
        )
    })
    const filtered9 = soru9.filter(item =>{
      const query = this.state.filterText.toLowerCase();

      return(
        item.text.toLowerCase().indexOf(query) >= 0 ||
        item.soru.toLowerCase().indexOf(query) >= 0
        )
    })
    return(
      <div>
        <HomePage />
        <input
          type="text"
          className="form-control form-control-lg "
          placeholder="Search"
          name="filterText"
          style={{width: "500px",marginLeft:500,marginTop:40}}
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
        />
          <section id="body">
            <div id="overlay"></div>
              <div class="padding highlightable">
                <div id="body-inner">
                <h1>Sık Sorulan Sorular</h1>
                {
                  filtered.map(don => {
                    return (
                    <section>
                      <div>
                        <p>
                        {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                        {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <div>
                        <p>
                        {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                        {don.soru3}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text3}</p>
                        </div>
                      </div>
                    </section>
                    )
                  })
                }
                {
                  filtered2.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered3.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Alan Adı</th>
                                <th>Dolduran İşlem</th>
                                <th>Verinin Anlamı</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>ordernumber</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Sipariş Numarası</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>shipmentpackageid</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Sipariş Kalemine Özel Id</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>OrderStatus</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Siparişin e-ticaret platformundaki mevcut durumu</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>orderdate</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Siparişin e-ticaret platformunda oluştuğu tarihtir</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>fullname</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Siparişi veren müşterinin adıdır</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>ShipmentAddress</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Teslimat adresi</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>InvoiceAddress</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Siparişin e-ticaret platformundaki mevcut durumu</td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>divaOrderNumber</td>
                                <td>Moon 15 dakikalık sistem kontrol servisi</td>
                                <td>Diva tarafında oluşan müşteri siparişinin numarasıdır. Numara sipariş oluştuktan sonra divadan moon a aktarılmaktadır</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>divaInvoiceNumber</td>
                                <td>Moon 15 dakikalık sistem kontrol servisi</td>
                                <td>Diva tarafında oluşan müşteri fatura numarasıdır. Numara fatura oluştuktan sonra divadan moon a aktarılmaktadır</td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>waybillNumber</td>
                                <td>Moon 15 dakikalık sistem kontrol servisi</td>
                                <td>Sipariş depo veya mağaza tarafından el terminali ile toplandıktan sonra Netsis tarafından moon a yansıyan irsaliye numarasıdır. İrsaliye numarasının yansıması siparişin terminalle toplanmış olduğunu ifade eder.</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>datNumber</td>
                                <td>Moon 15 dakikalık sistem kontrol servisi</td>
                                <td>Sipariş eğer faturanın kesileceği e-ticaret mağazasının kendi deposunda yok ise moon tarafından farklı depoya açılan siparişin el terminali ile toplanmış olması neticesinde ürünün otomatik olarak faturanın kesileceği e-ticaret mağazasına aktarıldığı Depolar Arası Transfer numarasıdır. datNumber mevcut ise ürün talep edilen depo tarafından toplanmış ve ürün stoğu e-ticaret mağazasının deposuna aktarılmış demektir. Numara Netsis den moon a doğru beslenmektedir</td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>cargoNumber</td>
                                <td>Moon 15 dakikalık sistem kontrol servisi</td>
                                <td>Ürünün el terminali ile toplanıp irsaliye ve uzosunun basılmasına istinaden oluşmuş olan kargo takip kodudur.</td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>cargoNumSendDate</td>
                                <td>Moon kargo numarası gönderi servisi. 30 dk</td>
                                <td>Kargo numarasının ilgili e-ticaret platformuna gönderildiği tarihi belirtir.</td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>cargoNumSendStatus</td>
                                <td>Moon kargo numarası gönderi servisi. 30 dk</td>
                                <td>Kargo numarasının e-ticaret platformuna gönderilmesi neticesinde platform servisinin dönmüş olduğu statüdür. 200 veya Başarılı yazması durumunda kargo numarası gönderimi başarı ile sağlanmış, aksi kodlarda ise kodun beslenmesinde sorun olduğu anlamına gelmektedir</td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>Store</td>
                                <td>Moon Sipariş Çağırma Servisi</td>
                                <td>Siparişin Hangi e-ticaret platformuna ait olduğu bilgisidir.</td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>depotcode</td>
                                <td>Sipariş Atama Excel i</td>
                                <td>E-ticaret departmanının sipariş atama excel i ile iletmiş olduğu ürünün toplanacak olduğu deponun kodudur.</td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>Departmentnumber</td>
                                <td>Sipariş Atama Excel i</td>
                                <td>E-ticaret tarafından yüklenen excel ile siparişin depodan mı mağazadan mı toplanacağı ayrımıdır. 1 olması depodan 2 olması mağazadan toplanacağını ifade eder.</td>
                              </tr>
                              <tr>
                                <td>18</td>
                                <td>Explanation</td>
                                <td>Sipariş Atama Excel i</td>
                                <td>E-ticaret tarafından yüklenen excel ile sipariş kalemi bazında gönderilmek istenen açıklama alanıdır.</td>
                              </tr>

                              <tr>
                                <td>19</td>
                                <td>transferDate</td>
                                <td>Sipariş Atama Excel i</td>
                                <td>Görevin işleme alınmış olduğu son tarihi ifade eder</td>
                              </tr>
                              <tr>
                                <td>20</td>
                                <td>netsisSendedOrderNumber</td>
                                <td>Moon Toplu Sipariş</td>
                                <td>Mağaza kanadında yapılan yeni sistem ile oluşturulan e-ticaret siparişinin mağazanın el terminaline düşmesi için oluşturulan Netsis sipariş numarasıdır.Numaranın mevcut olması siparişin mağazanın el terminaline düştüğü anlamını taşımaktadır. Şu an sadece Trendyol mağaza bacağı için çalışmaktadır.</td>
                              </tr>
                            </tbody>
                          </Table>
                            <p>NOT: depotcode alanının 0 gönderilmesi, siparişin artık toplanamayacağı, tedarik edilemeyeceği veya iptal edildiği anlamı taşımaktadır. Bu alanı 0 göndererek siparişin en son talep edilen depodan silinmesini sağlamakta ve siparişi iptale düşürmektedir.</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered4.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered5.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered6.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered7.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered8.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru1}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text1}</p>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <p>
                          {don.soru2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text2}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                {
                  filtered9.map(don => {
                    return (
                      <section>
                      <div>
                        <p>
                          {don.soru}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>Cevap : </p>
                        <div>
                          <p>{don.text}</p>
                        </div>
                      </div>
                      </section>
                    )
                  })
                }
                  </div>
                </div>
              </section>
      <hr />
      </div>
    );
  }
}

export default SikSorulanSorular;
