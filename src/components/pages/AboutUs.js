import React from 'react';

const AboutUs = () => {
    return (
            <div className="container">
                    <div className='d-flex mb-5 flex-wrap justify-content-evenly'>
                            <div className='mx-5'>
            <h1 className=' my-5'>Trabajamos dia a dia en lo que amamos <br /> para traerles las noticias mas actuales <br /> desde todas las partes 
            <span className='text-success'> del mundo</span></h1>
            <h3>Nuestro deber es informar a todos de lo que sucede en todas <br /> partes.
            Todo comenzo gracias a la perseverancia y valentia de <br /> un grupo de chavales que se propusieron una meta y hoy por <br />
             fin pueden lograrla, por supuesto, gracias a ustedes. Nuestro <br /> deber ahora es continuar esforzandonos por mejorar nuestra <br /> pagina y mejorar como personas. Estos somos nosotros:</h3></div>
            <img src={process.env.PUBLIC_URL + "/images/AboutUs.png"} alt="Logo" className='w-50 col-md-6'/>
</div>

            <article className='d-flex flex-wrap justify-content-evenly mx-4'>
                    <div className='d-flex my-3'><img src={process.env.PUBLIC_URL + "/images/Alphonse.jpg"} alt="Alejo" className='w-25 rounded mr-2'/>
                    <h4 className='lead'><span className='text-success'>Alejo Martinez:</span> <br /> Programador profesional. Un tipazo</h4></div>
                    <div className='d-flex my-3'><img src={process.env.PUBLIC_URL + "/images/Edward.jpg"} alt="Lourdes"  className='w-25 rounded mr-2'/>
                    <h4 className='lead'><span className='text-success'>David Droube:</span> <br />Desaparecido profesional. Un tipazo</h4></div>
                    <div className='d-flex my-3'> <img src={process.env.PUBLIC_URL + "/images/Hawkeye.jpg"} alt="David"  className='w-25 rounded mr-2'/>
                    <h4 className='lead'><span className='text-success'>Carla:</span> <br /> Diseñadora profesional. Una tipaza</h4></div>
                    <div className='d-flex my-3'><img src={process.env.PUBLIC_URL + "/images/Roy Mustang.jpg"} alt="Agustin"  className='w-25 rounded mr-2'/>
                    <h4 className='lead'><span className='text-success'>Agustin Agudo:</span> <br />Hizo su parte a ultimo momento. Un tarado</h4></div>
                    <div className='d-flex my-3'> <img src={process.env.PUBLIC_URL + "/images/Winry.jpg"} alt="Carla"  className='w-25 rounded mr-2'/>
                    <h4 className='lead'><span className='text-success'>Lourdes:</span> <br /> Le quedo fachero el Navbar. Una tipaza</h4></div>
</article>
            </div>
            
    );
};

export default AboutUs;