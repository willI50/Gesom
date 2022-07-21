
import '../Styles/CreateOM.css'
import {useRef,useState} from 'react' 

const CreateOM=()=>{

  const [Data,setData]=useState([]);

  const handleChange=(event)=>{
    var data =  Data;
       data[event.target.name]=event.target.value

    setData(data)

     console.log(Data)
   };


   
const handleSubmit=(e)=>{
  e.preventDefault();
  // const navigate=useNavigate()
     
  
     
      
         console.log( ' bonjour william ' , Data )
  
         
  
          // axios.post('http://localhost:4002/api/inscription', this.state.info).then( (res)=>  {  
          //     const infos=res.data
          //     console.log(infos)
  
             
              
          
          // //    navigate("/Dashbord" )
      
          // })
       }  


    return(
        <div align='center'>
            <div className="col navOM" >

           <h1 className='mt-1'> Creation d’un ordre de Mission</h1>
            </div>
            <br/><br/><br/>
            <div className='container'  >
                <div className='col-7'>
            <form onSubmit={handleSubmit} >
  <div class="form-group" align='left'>
    <label for="exampleFormControlInput1">Motif De la Mission :</label>
    <input type="text" name='Motif De la Mission' onChange={handleChange} className="form-control" id="exampleFormControlInput1"  required/>
  </div>
  <br/>
 
  
 
  <div class="form-group"  align='left'>
    <label for="exampleFormControlTextarea1">Description De la Mission :</label>
    <textarea className="form-control" name='DescriptionMission' onChange={handleChange} id="exampleFormControlTextarea1" rows="3"/>
  </div>

  <br/>
  <div class="form-group"  align='left'>
    <label for="exampleFormControlSelect1">Type Mission :</label>
    <select class="form-control" name='TypeMission' onChange={handleChange} id="exampleFormControlSelect1" align='center' >
    <option selected>Choisissez Le Type de Mission -----</option>
      <option>Local</option>
      <option>Externe</option>
      
    </select>
  </div>
  <br/>
  <div class="form-group"  align='left'>
    <label for="exampleFormControlSelect1">Destination :</label>
    <select class="form-control" name='DestinationMission' onChange={handleChange} id="exampleFormControlSelect1" align='center' >
    <option selected>Choisissez votre Destination-----</option>
      <option>Douala</option>
      <option>Yaounde</option>
      <option>Buea</option>
      <option>Limbe</option>
      <option>sangmelima</option>
    </select>
  </div>
  <br/>
  <div class="form-row">
    <div class="form-group col-md-6" align='left'>
      <label for="inputEmail4">Date de Depart :</label>
      <input type="date" name='DateDepart' onChange={handleChange} class="form-control" id="inputEmail4" />
    </div>
    <div class="form-group col-md-6" align='left'>
      <label for="inputPassword4"> Heure de Depart : </label>
      <input type="time" name='HeureDepart' onChange={handleChange} class="form-control" id="inputPassword4" />
    </div>
  </div>
  <br/>
  <div class="form-row">
    <div class="form-group col-md-6" align='left'>
      <label for="inputEmail4">Date de Retour :</label>
      <input type="date" name='DateRetour' onChange={handleChange} class="form-control" id="inputEmail4" />
    </div>
    <div class="form-group col-md-6" align='left'>
      <label for="inputPassword4">Heure de Retour :</label>
      <input type="time" name='HeureRetour' onChange={handleChange} class="form-control" id="inputPassword4" />
    </div>
  </div>
  <br/>
  <div class="form-group"  align='left'>
    <label for="exampleFormControlSelect1">Transport :</label>
    <select class="form-control" name='TransportMission' onChange={handleChange} id="exampleFormControlSelect1" align='center' >
    <option selected>Choisissez votre Moyen de Transport-----</option>
      <option>Bus</option>
      <option>Train</option>
      <option>Avion</option>
      <option>Voiture OCM</option>
      {/* <option></option> */}
    </select>
  </div>
  <br/>
  
  <div class="form-group"  align='left'>
    <label for="exampleFormControlSelect1">Hebergement :</label>
    <select class="form-control" name='HebergementMission' onChange={handleChange} id="exampleFormControlSelect1" align='center' >
    <option selected>Choisissez votre Hebergement-----</option>
      <option>Aucun</option>
      <option>Bano Palace</option>
      <option>Hilton Palace</option>
      <option>SAWA-Hotel</option>
      <option>Django Palace</option>
    </select>
  </div>
  <br/><br/>

  <div className="row " style={{"marginLeft":"100px"}} > 
<div  className="col-5" ><button type="submit" class="btn btn-secondary btn-lg ">  Soumettre</button></div>
    <div className="col-5"><button type="button" class="btn btn-primary btn-lg " style={{"color":"white"}}>Enregistrer</button></div>
 </div>
 <br/> <br/>

</form>
</div>
</div>




        </div>
    )
}

export default CreateOM;