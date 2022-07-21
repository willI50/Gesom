import Table from "./elements/Table";


export default  function Notification(){
    return(  


        
    <div align='center'>
    <div className="col navOM" >

<h1 className='mt-1'> Notifications</h1>
</div>
<br/><br/><br/>

<div className="container">

    
<Table/>

<br/>
 
     


     
 <div className="row " style={{"marginLeft":"400px"}} align='center' > 
    <div  className="col-3" ><button type="button" class="btn btn-secondary btn-lg ">  Precedent</button></div>
    <div className="col-3"><button type="button" class="btn btn-primary btn-lg " style={{"color":"white"}}>Suivant</button></div>
    
 </div>
 <br/><br/>
</div>





</div>



    )

}