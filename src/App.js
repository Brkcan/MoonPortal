import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Giris from './Giris';
import Greydercom from './Greydercom';
import TrendyolJeep from './TrendyolJeep';
import TrendyolGreyder from './TrendyolGreyder';
import Jeepshoe from './Jeepshoe';
import UPS from './UPS';
import Eticareturuncikissenaryosu from './Eticareturuncikissenaryosu';
import SikSorulanSorular from './SikSorulanSorular';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Giris}></Route>
        <Route exact path="/giris" component={Giris}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/greydercom" component={Greydercom}></Route>
        <Route exact path="/trendyoljeep" component={TrendyolJeep}></Route>
        <Route exact path="/Jeepshoe" component={Jeepshoe}></Route>
        <Route exact path="/trendyolgreyder" component={TrendyolGreyder}></Route>
        <Route exact path="/ups" component={UPS}></Route>
        <Route exact path="/eticareturuncikissenaryosu" component={Eticareturuncikissenaryosu}></Route>
        <Route exact path="/siksorulansorular" component={SikSorulanSorular}></Route>
        <Route exact path="/greydercom/onetest/elterminali" component={Greydercom}></Route>
      </Router>
    );
  }
}

export default App;
