import '../../Styles/Table.css'

const Table=()=>{

    return(
        <div>
        <table class="table" >
        <thead class="thead-dark" >
          <tr>
            <th scope="col">#</th>
            <th scope="col">N</th>
            <th scope="col">Motif</th>
            <th scope="col">Ville</th>
            <th scope="col">Date</th>
            <th scope="col">Statut</th>
            <th scope="col">Montant</th>
            {/* <th scope="col">test</th> */}
          </tr>
        </thead>
        <tbody >
          <tr className="tb">
            <th scope="row" >1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            
          </tr>
          <tr className="tb">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
           
          </tr>
          
          <tr className="tb"  data-toggle="modal" data-target="#exampleModalLong">
            {/* // <!-- Button trigger modal --> */}

  
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            
          </tr>
         
          <tr className="tb" >
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr  className="tb" >
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>






{/* // <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" style={{"width":"700px"}} align='left'>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Ordre de Mission N* 3566 </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body " >
        Nom :
William Omgba <br/><br/><br/>
  poste :
Cadre <br/><br/><br/>
Entite :
ODC <br/><br/><br/>
Motif :
formation du personnel <br/><br/><br/>
Type :
Locale <br/><br/><br/>
Description :
un sejour a Ebolowa dans le cadre d’une formation du personnel avec pour theme  Optimisation des Competences Technologiques et Relationnelles
<br/><br/><br/> Ville :
Ebolowa <br/><br/><br/>
Transport :
Bus <br/><br/><br/>
Prix Transport :
5000 FCFA <br/><br/><br/>
Hebergement :
Django-Palace <br/><br/><br/>
Nuite :
50.000 FCFA<br/><br/><br/>
Date de Depart:
12/04/2022 <br/><br/><br/>
Date de Retour :
23/04/2022 <br/><br/><br/>
55.000 FCFA<br/><br/><br/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      
</div>
        
    )

}
export default Table;