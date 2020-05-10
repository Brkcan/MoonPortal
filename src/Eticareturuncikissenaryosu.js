import React from 'react';
import HomePage from './HomePage';

let baslik = [{
  id:1,
  name: 'Mağaza E-ticaret Ürün Çıkış Senaryosu',
  text1:'E-ticaretten talep edilen ürünlerin çıkışı için işlemekte olan sistem aşağıdaki gibi çalışmaktadır:',
  text2:'(Kullanıcı tarafından yapılacak işlemler)',
  text3:'1-  E-ticaret tarafından siparişin çıkılacağı mağazanın el terminaline müşteri siparişi düşürülür.',
  text4:'2- Mağaza terminaline düşen ürünü terminal ile okutur.',
  text5:'(Otomatik olarak gerçekleşecek işlemler)',
  text6:'3- 3’er kolon halinde önlü arkalı olarak umo ve irsaliye çıktısı yazıcıdan A4 olarak alınır.Bir görev yöneticisi umo ve irsaliye numarasını e-ticaret sistemine otomatik olarak kaydeder ve ilgili platformlara dağıtır.',
  text7:'4- 10 dakika aralıklarla kontrol yapan bir görev yöneticisi siparişin el terminali ile okutulup okutulmadığını kontrol eder.',
  text8:'5- Okutulduğu tespit edilen siparişe istinaden otomatik olarak dat işlemi oluşur. Yani ürünün stoğu mağazaya -1, e-ticarete +1 olarak yansır.',
  text9:'6- Dat işleminin tamamlandığını kontrol eden bir görev yöneticisi oluşan dat a istinaden diva da müşteri siparişini oluşturur.',
  text10:'7- Müşteri siparişinin oluşup oluşmadığını kontrol eden bir görev yönetici siparişin oluştuğunu gördüğünde siparişi otomatik olarak faturalaştırır.',
  text11:'Oluşabilecek sorunlar:',
  text12:'Diva tarafında sipariş oluşturulamaması: E-ticaret divada siparişi oluşturulamayan müşteri siparişini moon da siparişleştirme ekranında görünecektir.Diva tarafında siparişi oluşup faturası oluşturulamayan müşteri siparişi: Faturalaştırılamayan sipariş moon da fatura ekranında görünecektir.',
}]

class Eticareturuncikissenaryosu extends React.Component{
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
    const filtered = baslik.filter(item => {
    const query = this.state.filterText.toLowerCase();

  return (
    item.name.toLowerCase().indexOf(query) >= 0 ||
    item.text1.toLowerCase().indexOf(query) >= 0 ||
    item.text2.toLowerCase().indexOf(query) >= 0 ||
    item.text3.toLowerCase().indexOf(query) >= 0 ||
    item.text4.toLowerCase().indexOf(query) >= 0 ||
    item.text5.toLowerCase().indexOf(query) >= 0 ||
    item.text6.toLowerCase().indexOf(query) >= 0 ||
    item.text7.toLowerCase().indexOf(query) >= 0 ||
    item.text8.toLowerCase().indexOf(query) >= 0 ||
    item.text9.toLowerCase().indexOf(query) >= 0 ||
    item.text10.toLowerCase().indexOf(query) >= 0 ||
    item.text11.toLowerCase().indexOf(query) >= 0 ||
    item.text12.toLowerCase().indexOf(query) >= 0
  )
});
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
        {
        filtered.map(don => {
          return (
            <div>
            <section id="body">
              <div id="overlay"></div>
                <div class="padding highlightable">
                  <div id="body-inner">
                    <h1>{don.name}</h1>
                      <div>
                        <p>{don.text1}</p>
                      </div>
                      <div>
                        <p>
                          {don.text2}
                        </p>
                      </div>
                      <div class="notices red">
                        <p>
                          {don.text3}
                        </p>
                        </div>
                        <div class="notices red">
                          <p>{don.text4}</p>
                        </div>
                          <hr />
                        <div>
                          <p>{don.text5}</p>
                        </div>
                        <div class="notices red">
                          <p>{don.text6}</p>
                        </div>
                        <div class="notices red">
                          <p>{don.text7}</p>
                        </div>
                        <div class="notices red">
                          <p>{don.text8}</p>
                        </div>
                        <div class="notices red">
                          <p>{don.text9}</p>
                        </div>
                        <div class="notices red">
                          <p>{don.text10}</p>
                        </div>
                        <div><p>{don.text11}</p></div>
                        <div class="notices red">
                          <p>{don.text12}</p>
                        </div>
                  </div>
                </div>
              </section>
              </div>
          )
        }
      )
          }
      </div>
    );
  }
}

export default Eticareturuncikissenaryosu;
