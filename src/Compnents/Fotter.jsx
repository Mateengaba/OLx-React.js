import React from 'react'
import './Fotter.css'

import OLXapp from '../assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp';
import Gallery from '../assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg';
import Play from '../assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg';
import Store from '../assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg';


function Fotter() {
  return (
    <>
      
      <div className="fotter">

<div className="fottimg">
<img src={OLXapp} width="435px" height="200px" />
</div>
<div className="fotttex">
<h1>TRY THE OLX APP</h1>
<p>Buy, sell and find just about anything using <br/> the app on your mobile.</p>

</div>

<div className="fottapp">
<h6>GET YOUR APP TODAY</h6>
<a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538" target="_blank" rel="noopener noreferrer"> 
<img src={Store} width="120" height="35" alt=""/></a>
<a href="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank">
 <img src={Play} width="120" height="35" alt=""/></a>
<a href="https://appgallery.huawei.com/#/app/C104375435" target="_blank">
<img src={Gallery} width="120" height="35" alt=""/></a> 
</div>


</div>

<br/>

{/* <!-- endtable --> */}

<div className="table">

    <div className="tablelist">
<ul>
 <span>POPULAR CATEGORIES</span>


<li>Cars</li>
<li>Flats for rent</li>
<li>Mobile Phones</li>
<li>Jobs</li>


</ul>
</div>

<div className="tablelist">

<ul>
     <span>TRENDING SEARCHES</span>
    
    
    
    <li>Bikes    </li>
    <li>Watches</li>
    <li>Books</li>
    <li>Dogs</li>
    
    
    </ul>
</div>


<div className="tablelist">

    <ul>
          <span>ABOUT US</span>
        
        
        <li>About EMPG    </li>
        <li>OLX Blog</li>
        <li>Contact Us</li>
        <li>OLX for Businesses</li>
        
        
        </ul>
    
    </div>

    <div className="tablelist">

        <ul>
            <span>OLX</span> 
            
            
            <li>Help   </li>
            <li>Sitemap</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            
            
            </ul>

        </div>

<div className="FOLLOWUS">
 <span>FOLLOW US</span>
 
 
 <div className="link">
    <tr>

        <td>  <a href="" target="_blank"><i class="fa-brands fa-facebook"></i> </a>
             </td>
        <td>
            <a href="" target="_blank"><i class="fa-brands fa-twitter"></i></a>
             
        </td>
        <td><a href=""><i class="fa-brands fa-youtube"></i></a></td>
        <td><a href=""><i class="fa-brands fa-instagram"></i></a> </td>
        
    </tr>
 
 
 
 <div className="apps"> 
    
    <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538" target="_blank" rel="noopener noreferrer"> 
    <img src={Store} width="100" height="25" alt=""/></a>
<a href="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank">
     <img src={Play} width="100" height="25" alt=""/></a>
<a href="https://appgallery.huawei.com/#/app/C104375435" target="_blank">
    <img src={Gallery} width="100" height="25" alt=""/></a> 

</div>



</div>


</div>

</div>

<div className="Classifieds ">
<p>Free Classifieds in Pakistan</p> <span>. © 2006-2023 OLX</span>


</div>



    </>
  )
}

export default Fotter
