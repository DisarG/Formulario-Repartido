import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import Footer from './componentes/footer/footer'
import Header from './componentes/header/header';
import { Departamentos, Profesiones} from './componentes/datos';

const App = () => {

	//Capturando el valor del select profesion, y agregando los arays en el useState
	const [profesion, setProfesion] = useState(Profesiones)

	

	const capturaProfesion = (e) => {
		setProfesion(e.target.value);
	}


	const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
	const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
	const [barrio, cambiarBarrio] = useState({ campo: '', valido: null });
	const [trabajo, cambiarTrabajo] = useState({ campo: '', valido: null });
	const [edad, cambiarEdad] = useState({ campo: '', valido: null });
	const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
	const [cedula, cambiarCedula] = useState({ campo: '', valido: null });
	const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Solo puede contener letras y espacios 
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
		barrio: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
		trabajo: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
		edad: /^\d{1,3}$/, //1 a 3 numeros de edad
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^[0-9]{9}$/, // solo 9 numeros	
		cedula: /^[0-9]{8}$/ // solo 9 numeros	
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();


		if (
			apellido.valido === 'true' &&
			edad.valido === 'true' &&
			barrio.valido === 'true' &&
			trabajo.valido === 'true' &&
			nombre.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			cedula.valido === 'true' &&	
			terminos
		) {
			cambiarFormularioValido(true);


		} else {
			cambiarFormularioValido(false);
		}
	}
	return (
		<>
			<Header />
			<main>
			<h1 className='title-form'>Completar Datos</h1>
						
				<Formulario action="" onSubmit={onSubmit}>
	
					<Input
						estado={nombre}
						cambiarEstado={cambiarNombre}
						tipo="text"
						label="Nombre"
						placeholder="Tu nombre"
						name="nombre"
						leyendaError="El nombre solo puede contener letras y espacios."
						expresionRegular={expresiones.nombre}
					/>
					<Input
						estado={apellido}
						cambiarEstado={cambiarApellido}
						tipo="text"
						label="Apellido"
						placeholder="Tu apellido"
						name="apellido"
						leyendaError="El apellido solo puede contener letras y espacios."
						expresionRegular={expresiones.apellido}
					/>
					<Input
						estado={cedula}
						cambiarEstado={cambiarCedula}
						tipo="text"
						label="C.I"
						placeholder="092999000"
						name="cedula"
						leyendaError="La C.I debe ser uruguaya y debe cotener 8 digitos"
						expresionRegular={expresiones.cedula}
					/>

					<Input
						estado={edad}
						cambiarEstado={cambiarEdad}
						tipo="text"
						label="Edad"
						placeholder="Tu Edad"
						name="edad"
						leyendaError="La edad solo puede contener numeros"
						expresionRegular={expresiones.edad}
					/>
					<Input
						estado={correo}
						cambiarEstado={cambiarCorreo}
						tipo="email"
						label="Correo Electrónico"
						placeholder="john@correo.com"
						name="correo"
						leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
						expresionRegular={expresiones.correo}
					/>
					<Input
						estado={telefono}
						cambiarEstado={cambiarTelefono}
						tipo="text"
						label="Celular"
						placeholder="092999000"
						name="telefono"
						leyendaError="El numero debe ser de 9 digitos."
						expresionRegular={expresiones.telefono}
					/>
					<Input
						estado={barrio}
						cambiarEstado={cambiarBarrio}
						tipo="text"
						label="Barrio"
						placeholder="Tu barrio"
						name="barrio"
						leyendaError="El barrio solo puede contener letras y espacios."
						expresionRegular={expresiones.barrio}
					/>
					<Input
						estado={trabajo}
						cambiarEstado={cambiarTrabajo}
						tipo="text"
						label="Lugar de trabajo"
						placeholder="Donde trabajas"
						name="trabajo"
						leyendaError="El lugar de trabajo solo puede contener letras y espacios"
						expresionRegular={expresiones.trabajo}
					/>
					

					< select
					id='profesion'
						onChange={capturaProfesion}
						leyendaError="Debes selecionar almenos uno"
						className="browser-default custom-select" >
						{
							Profesiones.map((datos) => <option  value={datos.value}>{datos.nombre}</option>)
						}
					</select  >
					< select
					id='ciudad'
					onChange={""}
					leyendaError="Debes selecionar almenos uno"
						className="browser-default custom-select" >
						{
							Departamentos.map((datos) => <option  value={datos.value}>{datos.nombre}</option>)
						}
					</select >

					<ContenedorTerminos>
						<Label>
							<input 
								type="checkbox"
								name="terminos"
								id="terminos"
								checked={terminos}
								onChange={onChangeTerminos}
							/>
							Acepto los Terminos y Condiciones
						</Label>
					</ContenedorTerminos>

					{formularioValido === false && <MensajeError>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle} />
							<b>Error:</b> Por favor rellena el formulario correctamente.
						</p>
					</MensajeError>}

					<ContenedorBotonCentrado>
						<Boton type="submit">Enviar</Boton>
					</ContenedorBotonCentrado>
					

				</Formulario>
					<div className='content-exito'>
					{formularioValido === true && <MensajeExito>
							<div className='tarjeta'>
								<img className='imagen-div' src='https://avatars.githubusercontent.com/u/59933886?s=200&v=4'></img>
								<h1 className='campos-div'>Nombre: {nombre.campo}</h1>
								<h1 className='campos-div'>Apellido: {apellido.campo}</h1>
								<h1 className='campos-div'>Profesion: {profesion}</h1>
								<h1 className='campos-div'>Lugar De Trabajo: {trabajo.campo}</h1>
							</div>
						</MensajeExito>}
						</div>
			</main>
			<Footer />
		</>
	);
}

export default App;