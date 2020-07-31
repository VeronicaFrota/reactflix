import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: '',
	}

	const [categorias, setNomeDaCategorias] = useState([]);
	const [ values, setValues] = useState(valoresIniciais);

	function setValue(chave, valor) {
		setValues({
			...values,
			[chave]: valor,		// nome: 'valor'
		})
	}

	function handleChange(infosDoEvento) {
		//const { getAttribute, value } = infosDoEvento.target
		const infos = infosDoEvento.target;
		setValue(
			infos.getAttribute('name'), 
			infos.value
		);
	}

	return (
		<PageDefault>
			<h1>Cadastro de Categoria: {values.nome}</h1>

			<form onSubmit={function handleSubimit(infosDoEvento) {
					infosDoEvento.preventDefault();
					setNomeDaCategorias([
						...categorias,
						values
					]);

					setValues(valoresIniciais)
				}}> 
				
				<FormField
					label="Nome da Categoria: "
					type="text"
					name="nome"
					value={values.nome}
					onChange={handleChange}
				/>

				<FormField
					label="descrição: "
					type="text"
					name="descricao"
					value={values.descricao}
					onChange={handleChange} 
				/>

				<FormField
					label="Cor: "
					type="color"
					name="cor" 
					value={values.cor}
					onChange={handleChange}
				/>

				<button>
					Cadastrar
				</button>
			</form>

			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>
							{categoria.nome}
						</li>
					)
				})}
			</ul>

			<Link to="/">
				Ir para Home
			</Link>
		</PageDefault>
	)
}

export default CadastroCategoria;
