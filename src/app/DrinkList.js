function Drink({ name }) {
  if(name=="té"){
    return(<section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>hoja</dd>
          <dt>Contenido de cafeína</dt>
          <dd>15–70 mg/taza </dd>
          <dt>Antigüedad</dt>
          <dd>4,000+ años</dd>
        </dl>
      </section>)
  }else{
    return( <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>grano</dd>
          <dt>Contenido de cafeína</dt>
          <dd>80–185 mg/taza</dd>
          <dt>Antigüedad</dt>
          <dd>1,000+ años</dd>
        </dl>
      </section>)

  }
   
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  