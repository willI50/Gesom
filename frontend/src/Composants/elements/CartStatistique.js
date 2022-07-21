
import '../../Styles/CartStatistique.css'

const CartStatistique =()=>{

return(

    <div class="container" >
        <br/> <br/>
    <div class="row ">
      <div class="col cart " >
      <br/> <br/>  < h1 className='h1' style={{"color":"red","fontSize":"60px"}} >12
      
        </h1> 
        <h5 >   
      Rejeter
      </h5> 
      </div>&emsp;&emsp;&emsp;&emsp;
      <div class="col cart" >
      <br/> <br/> < h1  className='text-success'style={{"fontSize":"60px"}}> 04</h1> 
      <h5 > Terminer  </h5> 
      </div><br/>&emsp;&emsp;&emsp;&emsp;
      <div class="col cart" >
      <br/> <br/>  < h1  style={{"color":"orange","fontSize":"60px"}}> 05</h1> 
      <h5>   En Validation  </h5> 
      </div>
      <br/>&emsp;&emsp;&emsp;&emsp;
      <div class="col cart" >
      <br/> <br/>  < h1  style={{"color":"blue","fontSize":"60px"}}> 45</h1> 
      <h5>    Total  </h5> 
      </div>
    </div>
  </div>


)

}
export default CartStatistique;