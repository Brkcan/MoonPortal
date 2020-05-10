import  React from 'react';
import HomePage from './HomePage';
import GreydercomIslemler from './resource/Greyder.comIslemler.png';
import GreydercomElTerminali from './resource/Greydercom-elterminaliOK.png';
import GreydercomElTerminaliGösterge from './resource/Greyder.com-El-terminali.png';
import GreyderTopluSiparis from './resource/greyder.com-topluSiparis.png';
import GreyderSiparisOlustur from  './resource/Greyder.com-Siprarisolustur.png';
import GreyderKargoTakip from './resource/Greyder.com-kargo_takip.png';

let baslik = [{
  id:1,
  name:'İşlemler',
  text:'NOT: Stok ve Fiyatlarınızı güncelleyebilirsiniz.',
  text1:'NOT: Toplu siparişleriniz buradan yönetebilirsiniz.'
}]

let baslik2 = [{
  id:1,
  name1:'El Terminali',
  text2:'NOT: El Terminalinin içindeki ürünleri silebilmek için «El Terminali Boşalt» butonuna tıklayarak yapabilirsiniz.',
  text3:'NOT: Greyder.com Mağazası için el terminalindeki ürünleri silebilirsiniz.',
}]

let baslik3 = [{
  id: 1,
  name2:'Toplu Sipariş',
  text4:'NOT:Çıktılarınızı excel ya da PDF formatında alabilirsiniz.',
  text5:'NOT: Toplu siparişlerinizi buradan yönetebilirsiniz.',
  text6:'NOT: Sipariş detaylarınızı inceleyebilirsiniz.',
}]
let baslik4 = [{
  id:1,
  name3:'Siparis Oluşturma',
  text7:'NOT: Dilerseniz siparişlerinizi «SiparişOluştur» butonu ile oluşturabilirsiniz.',
  text8:'NOT: Sipariş detaylarını görebilirsiniz.',
}]
let baslik5 = [{
  id:1,
  name4:'Kargo Takip',
  text9:'NOT: UPS kodunuzu buradan girebilirsiniz.',
  text10:'NOT: Kargonuzu anlık takip edebilirsiniz.',
  text11:'NOT: Toplu halde UPS kodlarınızı girebilirsiniz.',
}]

class Greydercom extends React.Component{
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
    item.text.toLowerCase().indexOf(query) >= 0 ||
    item.text1.toLowerCase().indexOf(query) >= 0
  )
});
    const filtered2 = baslik2.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name1.toLowerCase().indexOf(query) >= 0 ||
    item.text2.toLowerCase().indexOf(query) >= 0 ||
    item.text3.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered3 = baslik3.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name2.toLowerCase().indexOf(query) >= 0 ||
    item.text4.toLowerCase().indexOf(query) >= 0 ||
    item.text5.toLowerCase().indexOf(query) >= 0 ||
    item.text6.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered4 = baslik4.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name3.toLowerCase().indexOf(query) >= 0 ||
    item.text7.toLowerCase().indexOf(query) >= 0 ||
    item.text8.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered5 = baslik5.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name4.toLowerCase().indexOf(query) >= 0 ||
    item.text9.toLowerCase().indexOf(query) >= 0 ||
    item.text10.toLowerCase().indexOf(query) >= 0 ||
    item.text11.toLowerCase().indexOf(query) >= 0
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
            <h1>Greyder.com</h1>
            {
              filtered.map(don => {
                return (
                  <div>
                  <hr />
                <section id="body">
                    <div id="overlay"></div>
                      <div class="padding highlightable">
                        <div id="body-inner">
                          <h1>{don.name}</h1>
                          <div class="notices red">
                            <p>{don.text}</p>
                          </div>
                          <div class="notices yellow">
                            <p>{don.text1}</p>
                          </div>
                        </div>
                      </div>
                </section>
                <div className="img">
                  <img src={GreydercomIslemler} />
                </div>
                  </div>
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
                              <p>{don.text2}</p>
                            </div>
                            <div className="img2">
                              <img src={GreydercomElTerminaliGösterge}/>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text3}</p>
                            </div>
                          </div>
                        </div>
                  </section>
                  <div className="img">
                    <img src={GreydercomElTerminali} />
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
                                  <p>{don.text4}</p>
                                </div>
                                <div class="notices yellow">
                                  <p>{don.text5}</p>
                                </div>
                                <div class="notices yellow">
                                  <p>{don.text6}</p>
                                </div>
                              </div>
                            </div>
                  </section>
                  <div className="img">
                    <img src={GreyderTopluSiparis}/>
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
                                <p>{don.text7}</p>
                              </div>
                              <div class="notices yellow">
                                <p>{don.text8}</p>
                              </div>
                        </div>
                      </div>
                  </section>
                  <div className="img">
                    <img src={GreyderSiparisOlustur} />
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
                              <p>{don.text9}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text10}</p>
                            </div>
                            <div class="notices yellow">
                              <p>{don.text11}</p>
                            </div>
                        </div>
                          </div>
                  </section>
                  <div className="img3">
                    <img src={GreyderKargoTakip}/>
                  </div>
                  </div>
                )
              })
            }

            <hr /><hr />
        </div>
    );
  }
}


export default Greydercom;
