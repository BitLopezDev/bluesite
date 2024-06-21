/**
 *
 * @param {string} element : String HTML Selector
 * @returns {void}
 *
 *  */
function hideElement(element :string) : void{
    //Función para ocultar elementos HTML
    get(element).style.display = "none";
  }
  function showElementBlock(element :string) : void{
    //Función para mostrar elementos HTML
  
    get(element).style.display = "block";
  }

  /**
 * 
 * @param {string} id : HTML Selector
 * @returns {HTMLElement || null}
 */

function get(id :string) : HTMLElement  {
    //uso amplio de querySelector.
       return document.querySelector(id) || null;
     
   }

  