import CartStatistique from "./elements/CartStatistique";
import Table from "./elements/Table";



const Homepage=()=>{

    return(
        <div> 

     
     <br/>
     <CartStatistique/>
     <br/> <br/> <br/><br/>
     <div className="ml-5">
 <div className="row mr-2">  
    <div  className="col"><h4>Mes Ordres de Mission : 45  </h4></div>
    <div  className="col dropdown " align='right' >
    <button class="btn btn-secondary dropdown-toggle mr-5"   style={{"width":"400px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Recherche.....
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
    </div>
 
 </div>
 <hr style={{"width":"1230px","backgroundColor":"black"}}  />
 <br/>
 <div className="mr-5" >

<Table/>

 </div>
 <br/>
 
     


     
 <div className="row " style={{"marginLeft":"400px"}} align='center' > 
    <div  className="col-3" ><button type="button" class="btn btn-secondary btn-lg ">  Precedent</button></div>
    <div className="col-3"><button type="button" class="btn btn-primary btn-lg " style={{"color":"white"}}>Suivant</button></div>
 </div>
 <br/> <br/>
 
 </div>
     </div>
    )


}
export default Homepage;