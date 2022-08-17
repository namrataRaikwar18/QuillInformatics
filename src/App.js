import { Route, Routes } from 'react-router'
import { useState } from 'react'
import './App.css'
import { Footer, Navbar, Drawer } from './Components'
import { AboutUs, AndroidDev, AspNetDev, AwsDev, BigCommerceDev, CloudDev, CmsDev, ContactUs, ContentDev, CrmDev, CustomEcomDev, DigitalMark, DrupalDev, EcomDev, Error404, GoogleDev, HtmlDev, HybridDev, IpadDev, IphoneDev, JavaDev, JoomlaDev, Landing, MagentoDev, MobileDev, MoodleDev, NodeJsDev, OpenCartDev, PhpDev, PrestaShopDev, ProductDev, PythonDev, RorDev, SaasDev, SearchEngineDev, ShopifyDev, SocialMedia, SugarDev, UXdesign, VtigerDev, WebDevelopment, WordPressDev, ZohoDev } from './pages'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="App">
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {openDrawer ? (
        <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/mobile-app-development' element={<MobileDev />} />
        <Route path='/cms-development' element={<CmsDev/>} />
        <Route path='/e-commerce-development' element={<EcomDev />} />
        <Route path='/cloud-saas-development' element={<CloudDev />} />
        <Route path='/digital-marketing' element={<DigitalMark/>} />
        <Route path='/crm-development' element={<CrmDev/>} />
        <Route path='/product-development' element={<ProductDev/>} />
        <Route path='/user-experience-ux-design' element={<UXdesign/>} />
        <Route path='/php-development' element={<PhpDev />} />
        <Route path='/asp-net-development' element={<AspNetDev />} />
        <Route path='/java-web-development' element={<JavaDev />} />
        <Route path='/python-web-development' element={<PythonDev/>} />
        <Route path='/ruby-on-rails-development' element={<RorDev/>} />
        <Route path='/node-js-development' element={<NodeJsDev/>} />
        <Route path='/html5-canvas-development' element={<HtmlDev />} />
        <Route path='/iphone-app-development' element={<IphoneDev />} />
        <Route path='/ipad-app-development' element={<IpadDev />} />
        <Route path='/android-app-development' element={<AndroidDev />} />
        <Route path='/hybrid-app-development' element={<HybridDev />} />
        <Route path='/wordpress-development' element={<WordPressDev />} />
        <Route path='/drupal-development' element={<DrupalDev />} />
        <Route path='/moodle-development' element={<MoodleDev />} />
        <Route path='/joomla-development' element={<JoomlaDev />} />
        <Route path='/magento-development' element={<MagentoDev />} />
        <Route path='/custom-e-commerce-development' element={<CustomEcomDev />} />
        <Route path='/prestashop-development' element={<PrestaShopDev />} />
        <Route path='/shopify-development' element={<ShopifyDev />} />
        <Route path='/bigcommerce-development' element={<BigCommerceDev />} />
        <Route path='/opencart-development' element={<OpenCartDev />} />
        <Route path='/saas-application-development' element={<SaasDev />} />
        <Route path='/google-cloud-development' element={<GoogleDev />} />
        <Route path='/aws-development' element={<AwsDev />} />
        <Route path='/search-engine-optimization' element={<SearchEngineDev />} />
        <Route path='/content-development' element={<ContentDev />} />
        <Route path='/social-media-marketing' element={<SocialMedia />} />
        <Route path='/sugarcrm-development' element={<SugarDev />} />
        <Route path='/zoho-crm-development' element={<ZohoDev />} />
        <Route path='/vtigercrm-development' element={<VtigerDev />} />
        <Route path='*' element={<Error404 />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
