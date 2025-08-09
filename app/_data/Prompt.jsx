export default {
  DESIGN_IDEA_PROMPT:
    "Basado en un logo de tipo {logoType}, genera un prompt de texto para crear un logo para el título/nombre de la marca: {logoTitle} con la descripción: {logoDesc} y haciendo referencia al prompt: {logoPrompt}. Dame 4/5 sugerencias de ideas de logo (cada idea con un máximo de 4-5 palabras). El resultado en formato JSON.",
  LOGO_PROMPT:
    "Genera un prompt de texto para crear un logo para el título/nombre de la marca: {logoTitle}, con la descripción: {logoDesc}, con una combinación de colores de {logoColor}, también incluye la idea {logoIdea} e incluye la idea de diseño {logoDesign} y haciendo referencia a este prompt de logo: {logoPrompt}. Dame el resultado en formato JSON con solo el campo prompt.",
};
