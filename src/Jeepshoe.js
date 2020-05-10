import  React from 'react';
import HomePage from './HomePage';
import JeepShoeislemler from './JeepShoePic/jeepsoe_siparis_olusturma.png';
import JeepShoeKargoTakip from './JeepShoePic/Jeepshoe.com_Kargo_takip.png';
import JeepShoeSiparisOlustur from './JeepShoePic/jeepsoe.com.png';

let baslik = [{
  id:1,
  name:'İşlemler',
  text:'NOT: Jeepshoe’daki ürünlerin stok fiyat güncellemelerini yapabilirsiniz.',
  text1:'NOT: İsterseniz Jeepsoe’da sipariş oluşturabilirsiniz.',
}]
let baslik2 = [{
  id:2,
  name1:'Kargo Takip',
  text2:'NOT: UPS kodunuzu buradan girebilirsiniz.',
  text3:'NOT: Kargonuzu anlık takip edebilirsiniz.',
  text4:'NOT: Toplu halde UPS kodlarınızı girebilirisiniz.',
}]
let baslik3 = [{
  id:3,
  name2:'Sipariş Oluştur',
  text5:'NOT: Dilerseniz buradan direk siparişi oluştur butonuyla yapabilirsiniz.',
  text6:'NOT: Artı butonuna basarak tek tek ürünlerin inceleyebilirisiniz.',
  text7:'NOT: Siparişlerin durumlarını kolaylıkla yönetebilirsiniz.',
}]
class Jeepshoe extends React.Component{
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
    item.text3.toLowerCase().indexOf(query) >= 0 ||
    item.text4.toLowerCase().indexOf(query) >= 0
    )
    });
    const filtered3 = baslik3.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name2.toLowerCase().indexOf(query) >= 0 ||
    item.text5.toLowerCase().indexOf(query) >= 0 ||
    item.text6.toLowerCase().indexOf(query) >= 0 ||
    item.text7.toLowerCase().indexOf(query) >= 0
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
            <h1>Jeep Shoe</h1>
            <hr />
            {
              filtered.map(don => {
                return (
                  <div>
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
                  <div className="img4">
                    <img src={JeepShoeislemler} />
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
                          <div class="notices red">
                            <p>{don.text3}</p>
                          </div>
                          <div class="notices red">
                            <p>{don.text4}</p>
                          </div>
                        </div>
                      </div>
                  </section>
                  <div className="img4">
                    <img src={JeepShoeKargoTakip} />
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
                            <p>{don.text5}</p>
                          </div>
                          <div class="notices yellow">
                            <p>{don.text6}</p>
                          </div>
                          <div class="notices yellow">
                            <p>{don.text7}</p>
                          </div>
                        </div>
                      </div>
                  </section>
                  <div className="img3">
                    <img src={JeepShoeSiparisOlustur} />
                  </div>
                  </div>
                )
              })
            }

        </div>
    );
  }
}


export default Jeepshoe;
