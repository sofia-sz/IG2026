let resultado = document.querySelector('.resultado');
let preguntas = ['1) ¿Cuántos años dura la carrera de Multimediales?',
    '2) ¿Cómo se llama el título intermedio?',
    '3) ¿Es proyecto visual una materia de primer año anual?',
    '4) ¿Es Laboratorio de Sonido una materia de primer año cuatrimestral?',
    '5) ¿Es informática aplicada una materia de primer año anual?',
    '6) ¿Es Audiovisión 1 una materia de segundo año cuatrimestral?',
    '7) ¿Requiere la carrera examen de ingreso?',
    '8) ¿Qué oferta horaria tienen las materias de primer año?',
    '9) ¿Qué modalidad tiene la cursada?',
    '10) ¿Qué dirección tiene la sede de multimediales?'];
let respuestas = ['4 y medio', 'Tecnicatura en Artes Multimediales', 'Sí', 'No', 'Sí', 'Sí', 'No', 'Mañana, tarde y noche', 'Presencial', 'Viamonte 1832']
let correctas = 0;

alert('Evaluación de 10 preguntas sobre la carrera de Artes Multimediales:');
for (let i = 0; i < 10; i++) {
    let respuesta = prompt(preguntas[i],'responder acá');
    if (respuesta == respuestas[i]) {
        alert('Respuesta correcta');
        correctas++;
    } else {
        alert('Respuesta incorrecta');
    }
}

resultado.innerText = 'Tuviste ' + correctas + ' repsuestas correctas.';