import  React from 'react';
import HomePage from './HomePage';
import dashboardhome from './resource/Dashboard_Anasayfa.png';
import dashboardSiparisAtama from './resource/Dashboard-SiparisAtama.png';

let baslik = [{
  id: 1,
  name: 'Dashboard',
  text1:'NOT: Seçeceğiniz iki tarih arası listeleme yapabilirsiniz.',
  text2:'NOT: En çok satanlar bölümünde seçtiğiniz tarih aralığında en çok satan ürünü ve mağazalar arasındaki kıyaslamayla görebilirsiniz.',
  text3:'Anasayfa’da mağazalar arası sıralamaları görebilir ayrıca <strong>en çok satan ürünleri</strong> inceleyebilirsiniz.'
}]

  let baslik2 = [{
    id: 1,
    name: 'Siparis Atama',
    text4:'NOT: Excel formatında listenin çıktısını alabilirsiniz.',
    text5:'NOT: Oluşan şiparişlerin detaylarını görebilirsiniz.',
  }]

class Dashboard extends React.Component{

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
    item.text3.toLowerCase().indexOf(query) >= 0
  )
});
    const filtered2 = baslik2.filter(item => {
    const query = this.state.filterText.toLowerCase();

    return (
    item.name.toLowerCase().indexOf(query) >= 0 ||
    item.text4.toLowerCase().indexOf(query) >= 0 ||
    item.text5.toLowerCase().indexOf(query) >= 0
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
                    <div class="notices red">
                      <p>
                        {don.text1}
                      </p>
                    </div>
                    <div class="notices yellow">
                      <p>
                        {don.text2}
                      </p>
                    </div>
                      <h4>Anasayfa</h4>
                        <p>{don.text3}</p>
                    </div>
                </div>
                </section>
              <div className="img">
                <img src={dashboardhome} style={{paddinLeft : '200px'}}/>
              </div>
              </div>
              )
            }
              )
            }
            {
              filtered2.map(don => {
                return (
                  <div>
                    <section id="body">
                      <div id="overlay"></div>
                        <div class="padding highlightable">
                          <div id="body-inner">
                            <h1>{don.name}</h1>
                            <div class="notices red">
                              <p>
                                {don.text4}
                              </p>
                            </div>
                            <div class="notices yellow">
                              <p>
                                {don.text5}
                              </p>
                            </div>
                          </div>
                        </div>
                        </section>
                    <div className="img">
                      <img src={dashboardSiparisAtama}/>
                    </div>
                    </div>
                )
              }
            )
              }
        </div>
    );
  }
}


export default Dashboard;
