import React from 'react';
import HomePage from './HomePage';
import UPS_1 from './resource/UPS_1.png';
import UPS_2 from './resource/UPS_2.png';


class UPS extends React.Component{
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
    return (
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
                <h1>UPS Mutabakat Raporu</h1>
                  <div>
                    <p>İnternet mağaza için el terminali ile çıkmış olduğunuz siparişlere istinaden
                     UPS mutabakat raporuna ulaşmak için aşağıdaki adımları izlemelisiniz:</p>
                  </div>
                  <div class="notices red">
                    <p>
                    1- <b><a href="https://moon.greyder.com">https://moon.greyder.com</a></b> adresine mağaza mail isminiz <b>(sonunda @greyder.com olmadan)</b> ve
                    bilgisayar açılış şifreniz veya mail şifreniz ile giriş yapınız.
                    </p>
                    <div><p>Ekranda görmüş olduğunuz siparişler sizlere bugün çıkış işlemi yaptırılan siparişlerin listesidir.</p></div>
                    </div>
                    <div class="notices red">
                      <p>2- UPS döküm butonuna basın</p>
                    </div>
                    <div class="notices red">
                      <p>3- Yazıcıdan çıktısını alın</p>
                    </div>
                    <div>
                      <p>Aynı şekilde Excel butonuna basarak siparişlerinizin dökümünü excel veya Pdf e de aktarabilirsiniz.</p>
                    </div>
              </div>
            </div>
          </section>
          <div className="img4">
            <img src={UPS_1}/>
          </div>
          <div className="img">
            <img src={UPS_2}/>
          </div>
      </div>
    );
  }
}

export default UPS;
