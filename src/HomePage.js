import React from 'react';
import logo from './resource/portalGreyder.png';


class HomePage extends React.Component{
  render(){
    return(

      <body class="searchbox-hidden title-center title-h1h2" data-url="/">

      <nav id="sidebar">
      <div id="header-wrapper">
          <div id="header">
          <img src={logo} />
              <div class="searchbox">
  <label for="search-by"><i class="fa fa-search"></i></label>
  <input id="search-by" type="text" placeholder="Dökümantasyonda Ara" data-search-input="/tr/search.json/query" />
  <span data-search-clear=""><i class="fa fa-close"></i></span>
  </div>
          </div>
      </div>

      <div class="scroll-wrapper scrollbar-inner" syle={{position: 'relative'}}>
        <div class="scrollbar-inner scroll-content" style={{height: 'auto'}}>
          <div class="highlightable" style={{height: '625px'}}>
            <ul class="topics">
              <li class="dd-item active visited" data-nav-id="/">
                  <a href="./giris">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>1. </b>Giriş</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/api">
                  <a href="/dashboard">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>2. </b>Dashboard</span>
                  </a>
                          </li>

                                  <li class="dd-item" data-nav-id="/onetest">
                  <a href="/greydercom">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>3. </b>Greyder.com</span>
                  </a>
                              <ul>
                              <li class="dd-item" data-nav-id="/onetest/elterminali">
                  <a href="/greydercom/onetest/elterminali">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>El Terminali 🔆</span>
                  </a>
                              <ul>
              <li class="dd-item" data-nav-id="/onetest/toplusiparis">
                  <a href="https://developers.trendyol.com/tr/urun-entegrasyonu/v2/urun-aktarma-2">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Toplu Sipariş</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/onetest/siparis">
                  <a href="https://developers.trendyol.com/tr/urun-entegrasyonu/v2/product-update-v2">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Sipariş</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/onetest/kargotakip">
                  <a href="https://developers.trendyol.com/tr/urun-entegrasyonu/v2/trendyol-marka-bilgileri">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Kargo Takip</span>
                  </a>
                          </li>
                  </ul>
                          </li>

                  </ul>
                          </li>
                                  <li class="dd-item" data-nav-id="/siparis-entegrasyonu">
                  <a href="trendyoljeep">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>4. </b>Trendyol-Jeep</span>
                  </a>
                              <ul>
                              <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-cekme">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-cekme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Status</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/siparis-entegrasyonu/odeme-onayi-bekleyen-siparis-paketlerini-cekme">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/odeme-onayi-bekleyen-siparis-paketlerini-cekme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Sipariş Listesi</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/siparis-entegrasyonu/takip-kodu-bildirme">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/takip-kodu-bildirme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>İşlemler</span>
                  </a>
                          </li>
                                  <li class="dd-item" data-nav-id="/siparis-entegrasyonu/fatura-kesme-bildirimi">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/fatura-kesme-bildirimi">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Onay Bekleyen Siparişler</span>
                  </a>
                          </li>
          <li class="dd-item" data-nav-id="/siparis-entegrasyonu/tedarik-edememe-bildirimi">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/tedarik-edememe-bildirimi">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Onaylanmış Siparişler</span>
                  </a>
                          </li>
        <li class="dd-item" data-nav-id="/siparis-entegrasyonu/fatura-linki-gonderme">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/fatura-linki-gonderme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Faturalaştırılmış Siparişler</span>
                  </a>
                          </li>
            <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-bolme">
                  <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-bolme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Tamamlanmış Faturalar</span>
                  </a>
                          </li>
                          <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-bolme">
                                <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-bolme">
                              <i class="fa fa-check read-icon"></i>
                            <span><b></b>İptal Edilen Siparişler</span>
                    </a>
                  </li>
                <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-bolme">
                      <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-bolme">
                    <i class="fa fa-check read-icon"></i>
                      <span><b></b>Sipariş Detayı</span>
                          </a>
                        </li>
                <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-bolme">
                    <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-bolme">
                        <i class="fa fa-check read-icon"></i>
                              <span><b></b>Sipariş Detayı</span>
                                  </a>
                  </li>
                  <li class="dd-item" data-nav-id="/siparis-entegrasyonu/siparis-paketlerini-bolme">
                      <a href="https://developers.trendyol.com/tr/siparis-entegrasyonu/siparis-paketlerini-bolme">
                          <i class="fa fa-check read-icon"></i>
                                <span><b></b>Kargo Takip</span>
                                    </a>
                    </li>

                  </ul>
                          </li>
        <li class="dd-item" data-nav-id="/iade-entegrasyonu">
                  <a href="trendyolgreyder">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>5. </b>Trendyol-Greyder</span>
                  </a>
                              <ul>
          <li class="dd-item" data-nav-id="/iade-entegrasyonu/iadesi-olusturulan-siparisleri-cekme-getclaims">
                  <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iadesi-olusturulan-siparisleri-cekme-getclaims">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Status</span>
                  </a>
                          </li>
      <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-siparisleri-onaylama">
                  <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-siparisleri-onaylama">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>El Terminali</span>
                  </a>
                          </li>
      <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-siparislerinde-ret-talebi-olusturma">
                  <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-siparislerinde-ret-talebi-olusturma">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Kargo Takip</span>
                  </a>
                          </li>
      <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                  <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Satış Listesi</span>
                  </a>
                          </li>
    <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                    <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                      <i class="fa fa-check read-icon"></i>
                              <span><b></b>İşlemler</span>
                        </a>
            </li>
            <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                            <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                              <i class="fa fa-check read-icon"></i>
                                      <span><b></b>Toplu Sipariş</span>
                                </a>
                    </li>
                    <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                                    <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                      <i class="fa fa-check read-icon"></i>
                          <span><b></b>Toplu Sipariş Mağaza</span>
              </a>
                            </li>
                            <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                                            <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                              <i class="fa fa-check read-icon"></i>
                                  <span><b></b>Toplu Fatura Depo</span>
                        </a>
                                    </li>
                                    <li class="dd-item" data-nav-id="/iade-entegrasyonu/iade-sebeplerini-cekme">
                                                    <a href="https://developers.trendyol.com/tr/iade-entegrasyonu/iade-sebeplerini-cekme">
                                      <i class="fa fa-check read-icon"></i>
                                          <span><b></b>Toplu Fatura Mağaza</span>
                              </a>
                                            </li>
                  </ul>
                          </li>
          <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu">
                  <a href="Jeepshoe">
                      <i class="fa fa-check read-icon"></i>
                      <span><b>6. </b>JeepShoe.com</span>
                  </a>
                              <ul>
                        <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                  <a href="https://developers.trendyol.com/tr/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                      <i class="fa fa-check read-icon"></i>
                      <span><b></b>Sipariş Oluşturma</span>
                  </a>
                          </li>
                          <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                    <a href="https://developers.trendyol.com/tr/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                        <i class="fa fa-check read-icon"></i>
                        <span><b></b>Kargo Takip</span>
                    </a>
                            </li>
                            <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                      <a href="https://developers.trendyol.com/tr/muhasebe-ve-finans-entegrasyonu/muhasebe-entegrasyonu">
                          <i class="fa fa-check read-icon"></i>
                          <span><b></b>İşlemler</span>
                      </a>
                              </li>
                  </ul>
                          </li>

                          <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu">
                                  <a href="/ups">
                                      <i class="fa fa-check read-icon"></i>
                                      <span><b>7. </b>UPS</span>
                                  </a>
                                          </li>

                                          <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu">
                                                  <a href="/eticareturuncikissenaryosu">
                                                      <i class="fa fa-check read-icon"></i>
                                                      <span><b>8. </b>E-ticaret Ürün Çıkış Senaryosu</span>
                                                  </a>
                                          </li>

                                          <li class="dd-item" data-nav-id="/muhasebe-ve-finans-entegrasyonu">
                                                  <a href="/siksorulansorular">
                                                      <i class="fa fa-check read-icon"></i>
                                                      <span><b>9. </b>Sık Sorulan Sorular</span>
                                                  </a>
                                          </li>
                              </ul>
                      <hr></hr>

          </div>
      </div>
    </div>
      </nav>
      </body>

    );
  }
}

export default HomePage;
