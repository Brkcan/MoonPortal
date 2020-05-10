import  React from 'react';
import HomePage from './HomePage';
import TrendyolGreyderStatus from './TrendyolGreyderPic/trendyol-greyder-status.png';
import TrendyolGreyderElTerminali from './TrendyolGreyderPic/Trendyol-greyder_El_Terminali.png';
import TrendyolGreyderElTerminaliOK from './TrendyolGreyderPic/Trendyol-Greyder_ElTeminaliOK.png';
import TrendyolGreyderKargoTakip from './TrendyolGreyderPic/Trendyol-greyder-KargoTakip.png';
import TrendyolSatisListesi from './TrendyolGreyderPic/Trandyol-greyder-satis-listesi.png';
import TrednyolGreyderIslemler from './TrendyolGreyderPic/Trandyol-greyder-islemler.png';
import TrendyolGreyderTopluSiparisler from './TrendyolGreyderPic/trendyol-greyder-topluSiparis.png';
import TrendyolGreyderTopluSiparisMagaza from './TrendyolGreyderPic/Trendyol-Greyder-TopluSiparisMagaza.png';

let baslik = [{
  id:1,
  name:'Statüs',
  text1:'NOT: Paket Statüslerine tıklayarak ürünlerin durumlarını inceleyebilirsiniz.',
  text2:'Tum Statuler: Tüm durumları inceleyebilirsiniz.',
  text3:'ReadyToShip: Gönderilmeye hazır ürünlerin durumlarını gösterir.',
  text4:'Created: Oluşturulan ürünleri görebilirsiniz.',
  text5:'Picking: ???????????????????????',
  text6:'Shipped: Gönderilen ürünleri görebilirsiniz.',
  text7:'Canceled: İptal edilen ürünleri görebilirsiniz.',
  text8:'Delivered: Teslim edilen ürünleri inceleyebilirsiniz.',
  text9:'UnDelivered: Teslim edilemeyen ürünleri görebilirisiniz.',
  text10:'Returned: Geri gönderilen ürünleri inceleyebilirsiniz.',
  text11:'Repack: Yeniden paketlenen ürünleri gösterir.',
  text12:'UnSupplied: Tedarik edilemeyen ürünleri gösterir.',
}]

let baslik2 = [{
  id:1,
  name1:'El Terminali',
  text13:'NOT: El Terminalinin içindeki ürünleri silebilmek için «El Terminali Boşalt» butonuna tıklayarak yapabilirsiniz.',
  text14:'NOT: Trednyol Greyder Mağazası için el terminalindeki ürünleri silebilirsiniz.',
}]

let baslik3 = [{
  id:1,
  name2:'Kargo Takip',
  text15:'NOT: UPS kodunuzu buradan girebilirsiniz.',
  text16:'NOT: Kargonuzu anlık takip edebilirsiniz.',
  text17:'NOT: Toplu halde UPS kodlarınızı girebilirisiniz.',
}]

let baslik4 = [{
  id:1,
  name3:'Satış Listesi',
  text18:'NOT:Satış listesindeki ürünlerinizi kontrol edebilirsiniz.',
  text19:'NOT:Sipariş durumunu anlık kontrol edebilirsiniz.',
}]
let baslik5 = [{
  id:1,
  name4:'İşlemler',
  text20:'NOT: El terminalindeki ürünleri silebilirsiniz.',
  text21:'NOT: Trendyol-Greyder için Stok ve fiyatlarınızı güncelleyebilirsiniz.',
  text22:'NOT: Yeni ürünler oluşturabilirsiniz.',
  text23:'NOT: Ürünlerinizi toplu bir şekilde siparişini oluşturabilirsiniz.',
}]

let baslik6 = [{
  id:1,
  name5:'Toplu Siparişler',
  text24:'NOT: Toplu siparişleriniz buradan yönetebilirsiniz.',
  text25:'NOT: Çıktılarınızı excel ya da PDF formatında alabilirsiniz.',
  text26:'NOT: Siparişlerinizin detaylarını inceleyebilirsiniz.',
}]
let baslik7 = [{
  id:1,
  name6:'Toplu Sipariş Mağaza',
  text27:'NOT: Çıktılarınızı excel ya da PDF formatında alabilirsiniz.',
  text28:'NOT: Sipariş detaylarını inceleyebilirsiniz.',
}]

class TrendyolGreyder extends React.Component{
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
    const filtered2 = baslik2.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name1.toLowerCase().indexOf(query) >= 0 ||
    item.text13.toLowerCase().indexOf(query) >= 0 ||
    item.text14.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered3 = baslik3.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name2.toLowerCase().indexOf(query) >= 0 ||
    item.text15.toLowerCase().indexOf(query) >= 0 ||
    item.text16.toLowerCase().indexOf(query) >= 0 ||
    item.text17.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered4 = baslik4.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name3.toLowerCase().indexOf(query) >= 0 ||
    item.text18.toLowerCase().indexOf(query) >= 0 ||
    item.text19.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered5 = baslik5.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name4.toLowerCase().indexOf(query) >= 0 ||
    item.text20.toLowerCase().indexOf(query) >= 0 ||
    item.text21.toLowerCase().indexOf(query) >= 0 ||
    item.text22.toLowerCase().indexOf(query) >= 0 ||
    item.text23.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered6 = baslik6.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name5.toLowerCase().indexOf(query) >= 0 ||
    item.text24.toLowerCase().indexOf(query) >= 0 ||
    item.text25.toLowerCase().indexOf(query) >= 0 ||
    item.text26.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered7 = baslik7.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name6.toLowerCase().indexOf(query) >= 0 ||
    item.text27.toLowerCase().indexOf(query) >= 0 ||
    item.text28.toLowerCase().indexOf(query) >= 0
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
            <h1>Trendyol Greyder</h1>

            <hr />
            {
              filtered.map(don => {
                return (
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name}</h1>
                            <div class="notices red">
                                <p>{don.text1}</p>
                            </div>
                            <div className="img2">
                              <img src={TrendyolGreyderStatus} />
                            </div>
                            <div class="notices yellow">
                              <p>{don.text2}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text3}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text4}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text5}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text6}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text7}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text8}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text9}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text10}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text11}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text12}</p>
                            </div>
                          </div>
                        </div>
                  </section>
                )
              })
            }
            {
              filtered2.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name1}</h1>
                              <div class="notices red">
                                <p>{don.text13}</p>
                              </div>
                              <div className="img2">
                                <img src={TrendyolGreyderElTerminali}/>
                              </div>
                              <div class="notices yellow">
                                <p>{don.text14}</p>
                              </div>
                          </div>
                        </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolGreyderElTerminaliOK} />
                  </div>
                  </div>
                )
              })
            }
            {
              filtered3.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name2}</h1>
                              <div class="notices red">
                                <p>{don.text15}</p>
                              </div>
                              <div class="notices red">
                                <p>{don.text16}</p>
                              </div>
                              <div class="notices red">
                                <p>{don.text17}</p>
                              </div>
                          </div>
                        </div>
                  </section>
                  <div className="img3">
                    <img src={TrendyolGreyderKargoTakip} />
                  </div>
                  </div>
                )
              })
            }
            {
              filtered4.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name3}</h1>
                            <div class="notices red">
                              <p>{don.text18}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text19}</p>
                            </div>
                          </div>
                        </div>
                  </section>
                  <div className="img4">
                    <img src={TrendyolSatisListesi} />
                  </div>
                  </div>
                )
              })
            }

            {
              filtered5.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name4}</h1>
                            <div class="notices red">
                              <p>{don.text20}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text21}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text22}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text23}</p>
                            </div>
                          </div>
                        </div>
                  </section>
                  <div className="img4">
                    <img src={TrednyolGreyderIslemler} />
                  </div>
                  </div>
                )
              })
            }
            {
              filtered6.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name5}</h1>
                            <div class="notices red">
                              <p>{don.text24}</p>
                            </div>
                            <div class="notices red">
                              <p>{don.text25}</p>
                            </div>
                            <div class="notices red">
                              <p>{don.text26}</p>
                            </div>
                          </div>
                        </div>
                  </section>
                  <div class="img4">
                    <img src={TrendyolGreyderTopluSiparisler} />
                  </div>
                  </div>
                )
              })
            }

            {
              filtered7.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name6}</h1>
                              <div class="notices red">
                                <p>{don.text27}</p>
                              </div>
                              <div class="notices red">
                                <p>{don.text28}</p>
                              </div>
                          </div>
                        </div>
                  </section>
                  <div className="img4">
                    <img src={TrendyolGreyderTopluSiparisMagaza} />
                  </div>
                  </div>
                )
              })
            }

        </div>
    );
  }
}


export default TrendyolGreyder;
