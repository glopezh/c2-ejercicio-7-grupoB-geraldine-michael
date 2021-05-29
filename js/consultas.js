const equiposMayoresEdad = (equipos, edad) => {
  const equiposAsignadosMayoresEdad = equipos.filter(
    ({
      asignado: {
        empleado: { edad: edadEmpleado },
      },
    }) => edadEmpleado > edad
  );
  return equiposAsignadosMayoresEdad;
};
const equiposProvincia = (equipos, provincia) => {
  const equiposProvinciaQueBuscamos = equipos.filter(
    ({ asignado: { provincia: provinciaAsignado } }) =>
      provinciaAsignado.toLowerCase() === provincia.toLowerCase()
  );
  return equiposProvinciaQueBuscamos;
};
