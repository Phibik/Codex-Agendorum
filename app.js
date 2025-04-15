function guardarArchivo() {
  const contenido = "Este archivo fue guardado por mi gran amo.";
  const blob = new Blob([contenido], { type: 'text/plain' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "datos.txt";
  enlace.click();
}
