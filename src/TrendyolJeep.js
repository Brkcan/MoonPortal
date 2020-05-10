import  React from 'react';
import HomePage from './HomePage';
import TrendyolJeepStatus from './resource/trendyolJeep-status.png';
//import TrendyolJeepSiparisListesi from './resource/trandyol-jeepSiparisListesi.png';
import TrendyolJeepIslemler from './TrendyolJeepPic/trendyol-Jeep_islemler.png';
import TrendyolJeepOnayBekleyen from './TrendyolJeepPic/Trendyol-jeep_OnayBekleyen_Siparis.png';
import TrendyolJeeepOnaylanmısSiparis from './TrendyolJeepPic/Trendyol-Jeep_Onaylanmıs_Siparisler.png';
import TrendyolJeepFaturalastirilmis from './TrendyolJeepPic/Trendyol_jeep_Faturalastirilmıs.png';
import TrendyolJeepTamamlanmis from './TrendyolJeepPic/Trandyol_Jeep_Tamamlanmis.png';
import TrendyolJeepIptalEdilenSiparisler from './TrendyolJeepPic/Trendyol_jeep_iptal_edilen.png';
import TrendyolJeepSiparisDetayi from './TrendyolJeepPic/Trendyol-jeep_butonilesiparisdetayi.png';
import TrendyolJeepKargoTakip from './TrendyolJeepPic/Trandyol-jeep -kargo-takip.png';

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
  name1:'Sipariş Listesi',
  text13:'NOT:Satış listesindeki ürünlerinizi kontrol edebilirsiniz.',
  text14:'NOT:Sipariş durumunu anlık kontrol edebilirsiniz.',
}]

let baslik3 = [{
  id:1,
  name2:'İşlemler',
  text15:'NOT:Stok Fiyat güncellemenizi buradan yapabilirsiniz.',
  text16:'NOT:Kolaylıkla siparişlerinizi oluşturabilirsiniz.',
}]

let baslik4 = [{
  id:1,
  name3:'Onay Bekleyen Siparişler',
  text17:'NOT:Onay bekleyen siparişlerinizi dilerseniz «sipariş oluştur» butonu ile oluşturabilirsiniz.',
}]

let baslik5 = [{
  id:1,
  name4:'Onaylamış Siparişler',
  text18:'NOT:Onaylanan siparişlerinizi inceleyebilirsiniz.',
}]

let baslik6 = [{
  id:1,
  name5:'Faturalaştırılmış Siparişler',
  text19:'NOT:Faturalaştırılmış siparişlerinizi inceleyebilirsiniz.',
}]

let baslik7 = [{
  id:1,
  name6:'Tamamlanmıs Faturalar',
  text20:'NOT: Tamamlanmıs işlemlerinizi görebilirsiniz.',
}]

let baslik8 = [{
  id:1,
  name7:'İptal Edilen Siparişler',
  text21:'NOT: İptal edilen siparişlerinizi bu sekmede inceleyebilirsiniz.',
}]

let baslik9 = [{
  id:1,
  name8:'Sipariş Detayi',
  text22:'NOT: «Artı» butonuna basarak siparişlerin detaylarını inceleyebilirsiniz.',
  text23:'NOT: Detaylardan sipariş ile ilgili ayrıntıları bulabilirsiniz.',
}]

let baslik10 = [{
  id:1,
  name9:'Kargo Takip',
  text24:'NOT: UPS kodunuzu buradan girebilirsiniz.',
  text25:'NOT: Kargonuzu anlık takip edebilirsiniz.',
  text26:'NOT: Toplu halde UPS kodlarınızı girebilirisiniz.',
}]



class TrendyolJeep extends React.Component{
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
    item.text16.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered4 = baslik4.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name3.toLowerCase().indexOf(query) >= 0 ||
    item.text17.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered5 = baslik5.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name4.toLowerCase().indexOf(query) >= 0 ||
    item.text18.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered6 = baslik6.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name5.toLowerCase().indexOf(query) >= 0 ||
    item.text19.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered7 = baslik7.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name6.toLowerCase().indexOf(query) >= 0 ||
    item.text20.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered8 = baslik8.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name7.toLowerCase().indexOf(query) >= 0 ||
    item.text21.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered9 = baslik9.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name8.toLowerCase().indexOf(query) >= 0 ||
    item.text22.toLowerCase().indexOf(query) >= 0 ||
    item.text23.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered10 = baslik10.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name9.toLowerCase().indexOf(query) >= 0 ||
    item.text24.toLowerCase().indexOf(query) >= 0 ||
    item.text25.toLowerCase().indexOf(query) >= 0 ||
    item.text26.toLowerCase().indexOf(query) >= 0
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
            <h1>TrendyolJeep</h1>
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
                              <img src={TrendyolJeepStatus} />
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
                            <div class="notices yellow">
                              <p>{don.text14}</p>
                            </div>
                      </div>
                    </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolJeepIslemler} />
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
                      </div>
                    </div>
                </section>
                <div className="img">
                  <img src={TrendyolJeepIslemler} />
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
                              <p>{don.text17}</p>
                            </div>
                        </div>
                      </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolJeepOnayBekleyen} />
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
                              <p>{don.text18}</p>
                            </div>
                        </div>
                      </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolJeeepOnaylanmısSiparis} />
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
                                <p>{don.text19}</p>
                              </div>
                          </div>
                        </div>
                  </section>
                  <div className="img">
                     <img src={TrendyolJeepFaturalastirilmis} />
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
                            <p>{don.text20}</p>
                          </div>
                        </div>
                      </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolJeepTamamlanmis} />
                  </div>
                  </div>
                )
              })
            }

            {
              filtered8.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name7}</h1>
                              <div class="notices red">
                                <p>{don.text21}</p>
                              </div>
                        </div>
                      </div>
                  </section>
                  <div className="img2">
                    <img src={TrendyolJeepIptalEdilenSiparisler} />
                  </div>
                  </div>
                )
              })
            }

            {
              filtered9.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name8}</h1>
                              <div class="notices red">
                                <p>{don.text22}</p>
                              </div>
                            <div class="notices yellow">
                              <p>{don.text23}</p>
                            </div>
                        </div>
                      </div>
                  </section>
                  <div className="img">
                    <img src={TrendyolJeepSiparisDetayi} />
                  </div>
                  </div>
                )
              })
            }

            {
              filtered10.map(don => {
                return (
                  <div>
                  <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name9}</h1>
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
                  <div className="img">
                    <img src={TrendyolJeepKargoTakip} />
                  </div>
                  </div>
                )
              })
            }

            <hr /> <hr />
        </div>
    );
  }
}


export default TrendyolJeep;
