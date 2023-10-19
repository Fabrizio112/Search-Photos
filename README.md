# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>

## <i align="center" style="font-size:2rem">📷 BUSCADOR DE FOTOS</i>

En este proyecto se usaron hooks como **useState,useEffect** , tenologias como  **HTML,CSS,JavaScript,React, Styled Components** , para el manejo de estados **Redux** y otras herramientas como **FontAwesome**

 _Este proyecto fue construido con el proposito de practicar Redux_

**Nota: Es responsivo**
<p align="center">
<img width="600px" heigth="600px" src="./src/assets/spiderman.gif" alt="spiderman foto">
</p>

## 💡 Como se penso este proyecto y como funciona

**_<span style="text-decoration:underline">Idea Principal</span>: Una app de fotos_**

La api que se utilizo fue :
- [Pixabay](https://pixabay.com/api/)

El estado de esta aplicacion es manejado gracias a Redux, el reducer encargado de manejar este estado es el llamado **_"SearchReducer"_**. Este mismo tiene dos principales acciones : traer los resultados de un busqueda (mas fotos de un mismo query) y realizar una nueva busqueda.

El componente principal de esta aplicacion es la barra de busqueda , es en ella donde se realiza la magia . Cuando el usuario realiza una busqueda , la aplicacion realiza una peticion a la API de PIXABAY enviando parametros como **query** y el  **"numero de pagina"**(Este es otro estado que permite saber en que numero de pagina de los resultados se encuentra el usuario. Ej: Si esta en la pagina 4 significa que el pantalla ya se renderizaron previamente 120 fotos , por que por pagina se renderizan 30 )

Ademas coloque algunas de las categorias más normales y visitadas por los usuarios.

Aunque parezca una aplicacion sencilla es muy buena para practicar la logica de Redux 

Nota: En un primer momento utilice la API de PEXELS pero debido a algunos problemas al compilar el codigo de produccion decidi cambiarla

Para los estilos utilice Styled Components por que considere que en esta aplicacion seria de gran ayuda y no me equivoque , agilizo bastante el desarrollo de la misma.



----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>

## <i align="center" style="font-size:2rem">📹 SEARCH PHOTOS</i>
 
In this project was used hooks like  **useState,useEffect** , technologies like  **HTML,CSS,JavaScript,React, Styled Components** , for  handle states **Redux** and other tools like **FontAwesome**

_This project was built to practising Redux_

**Note: It´s responsive**
<p align="center">
<img width="600px" heigth="600px" src="./src/assets/muppet.gif" alt="muppet">
</p>

## 🤔 How this project was thinked and how it works

**_<span style="text-decoration:underline">Main Idea </span>: A photos app_**

The api used was : 
- [Pixabay](https://pixabay.com/api/)

The state of the aplication is handle thanks to Redux, the reducer in charge of hanle this state is **_"SearchReducer"_**. It has two main actions : give the results of a search (more photos of one same query) and  do a new search

The main component is the search bar , magic happens in it. When the user do a search , the app do a fetch to the API of PIXABAY sending parameters like : **query** and **number of page** (This is another state that allow to the api know the results number of page .Ex: If the page is four this means that in the screen had rendered 120 pictures because per page it renders 30 pictures)

I have also put some more normal categories and visited  for the users.

Seems like an simple app but is very good to practise the logic with redux

Note: In a first moment  I used the API of PEXELS but it has some bugs in the moment to compile the code for production so I decided change it .

For the styles I used Styled Components because I thought  It would be a great help in this app and I was right , It made the development much faster .
