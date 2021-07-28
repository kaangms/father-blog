import React from "react";
import { Container } from "reactstrap";
import Navi from "../../components/HeaderBottom/Navi";
import BlogPost from "../../components/BlogPost/BlogPosts";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/index";

/////-
import SoluationPage from "../Pages/SoluationPage/index";
//////-

import BlogLeftPage from "../Pages/BlogLeftPage/index";
import AcedemicPapers from "../Pages/AcedemicPapers/index";
import AboutPage from "../Pages/AboutPage/index";
import ContactPage from "../Pages/ContactPage/index";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={BlogPost} />
        <Route path="/anasayfa" exact component={HomePage} />
        {/* SoluationPage kısmı düzenlenecek */}
        <Route path="/1" exact component={SoluationPage} />
        {/* SoluationPage kısmı düzenlenecek */}

        <Route path="/blog" exact component={BlogLeftPage} />
        <Route path="/akademik-yazilar" exact component={AcedemicPapers} />
        <Route path="/hakkinda" exact component={AboutPage} />
        <Route path="/ileisim" exact component={ContactPage} />
      </Switch>
    </Container>
  );
}

export default App;
