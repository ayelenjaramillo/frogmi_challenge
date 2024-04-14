Seismological Overview

Esta es una página web sencilla para buscar información sismológica en todo el mundo según medidas seleccionadas por el usuario.
Instalación

Para instalar y ejecutar este proyecto localmente, siga estos pasos:

Clonar el repositorio: git clone https://github.com/ayelenjaramillo/frogmi_challenge.git

Requisitos previos: Tener instalado nodejs, ruby y rails.

Navegue a la carpeta del proyecto:

cd frogmi_challenge

Aquí verá dos carpetas, una es el API desarrollado en Ruby on Rails y la otra el frontend desarrollado en reactJS.

Pasos para inicializar proyecto seismological_frontend: 
 
	- cd seismological_frontend
	- npm install
	- npm run dev
	- usar el puerto 5173 (http://localhost:5173) ya que es el puerto autorizado en sesimological_api

Pasos para inicializar proyecto sesimological_api:

	- cd sesimological_api
	- bundle install
	- rails s -p 3000
	- usar el puerto 3000 ya que seismological_frontend llamará al API en http://localhost:3000

Usabilidad:

	- En el proyecto sesimological_api deberá primero crear los registros iniciales obtenidos de una API externa. Para hacer esto debe ejecutar lo siguiente:
		- bin/rails seismological_data:get_save_data
	- Ingresar a http://localhost:5173
	- Seleccionar el tipo de medida por la cual quiere filtrar los resultados (measure).
	- Clickear en el botón "Send" para desplegar una tabla con los resultados.
	- Si desea crear un comentario debe clickear en el botón "Create comment" que se encuentra en cada fila de la tabla. Esta acción redirige a otra pantalla donde podrá escribir el comentario deseado para esa Feature y se creará al clickear en "Send comment".
	- Para verificar que el comentario fue creado correctamente puede seguir estos pasos:
		- rails console
		- Comment.last
		- Verificar que el último comentario creado coincida con la Feature seleccionado y el texto ingresado antes de crear el mismo.
