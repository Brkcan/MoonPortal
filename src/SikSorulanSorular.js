import React from 'react';
import HomePage from './HomePage';


class SikSorulanSorular extends React.Component{

  render(){
    return(
      <div>
        <HomePage />
        
          <section id="body">
            <div id="overlay"></div>
              <div class="padding highlightable">
                <div id="body-inner">
                  <h1>Sık Sorulan Sorular</h1>
                    <div>
                      <p>
                      1-  Moon Nedir ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Moon platformu e-ticaret satış kanallarının ortak bir yerden yönetimini sağlayan
                        ve bu bağlamda e-ticaret, depo ve mağaza koordinasyonunu sağlayan sistemdir.</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p>
                      2-  Moon'da mağazaların satışlarını görebilir miyim ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Evet, <b>greyder.com</b>, <b>trendyol-greyder</b>, <b>jeephoe.com</b>, <b>trendyol-jeep</b>
                          , <b>n11-greyder</b>, <b>n11-jeep</b> mağazalarında satılan ürünlerin adetini ve toplam ciroyu görebilirsiniz.</p>
                      </div>
                    </div>
                    <div>
                      <p>
                      3- Sipariş atayabilir miyim ? Atadığım siparişleri excel formatında alabilir miyim ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Tüm mağazalarımız için sipariş atayabilirsiniz ve excel formatında çıktısını alabilirsiniz.</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p>
                      4- Moon'da siparişleri toplu bir şekilde yönetebilir miyim ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p><b>Greyder.com</b> ve <b>Trendyol-Greyder</b> mağazaları için toplu bir şekilde siparişlerinizi yönetebilirsiniz.</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p>
                      5- Moon'da el terminalini temizleyebilir miyim ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Evet el terminalini mağazalar için ayrı ayrı temizleyebilirsiniz.</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p>
                      6- Moon'da sipariş oluşturabilir miyiz?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Moon arayüzlerinden dilerseniz sipariş oluşturabilir, siparişlerinizi oluşturmadan evvel sipariş detaylarını inceleyebilirsiniz.</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p>
                      7- Siparişlerin kargo takibini yapabilir miyiz ?
                      </p>
                    </div>
                    <div class="notices red">
                      <p>Cevap : </p>
                      <div>
                        <p>Kargo takibi yapabilir ve kargo hareket listesini görüntüleyebilirsiniz, ayrıca bu işlemleri toplu kod girişi ile
                          toplu halde yönetebilirsiniz.</p>
                      </div>
                    </div>
                    <hr />

                  </div>
                </div>
              </section>
      <hr />
      </div>
    );
  }
}

export default SikSorulanSorular;
